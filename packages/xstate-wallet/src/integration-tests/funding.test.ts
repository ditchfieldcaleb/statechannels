import {CreateChannelResponse} from '@statechannels/client-api-schema';
import {filter, first} from 'rxjs/operators';

import {FakeChain} from '../chain';
import {isChannelUpdated, isChannelProposed} from '../messaging';

import {
  Player,
  generateCreateChannelRequest,
  hookUpMessaging,
  generateJoinChannelRequest
} from './helpers';

jest.setTimeout(20000);

it('allows for two wallets to fund an app', async () => {
  const fakeChain = new FakeChain();

  const playerA = await Player.createPlayer(
    '0x275a2e2cd9314f53b42246694034a80119963097e3adf495fbf6d821dc8b6c8e',
    'PlayerA',
    fakeChain
  );
  const playerB = await Player.createPlayer(
    '0x3341c348ea8ade1ba7c3b6f071bfe9635c544b7fb5501797eaa2f673169a7d0d',
    'PlayerB',
    fakeChain
  );

  hookUpMessaging(playerA, playerB);

  const createEvent = generateCreateChannelRequest(playerA.participant, playerB.participant);
  const isCreateChannelResponse = (m): m is CreateChannelResponse =>
    'id' in m && m.id === createEvent.id;
  const createPromise = playerA.messagingService.outboxFeed
    .pipe(filter(isCreateChannelResponse), first())
    .toPromise();

  await playerA.messagingService.receiveRequest(createEvent, 'localhost');

  const confirm = state => {
    if (state.value === 'confirmingWithUser') {
      state.children.invokeCreateChannelConfirmation.send({type: 'USER_APPROVES'});
    }
  };
  playerA.channelWallet.workflows[0].service.onTransition(confirm);

  const {
    result: {channelId}
  } = await createPromise;

  const channelProposedNotification = await playerB.messagingService.outboxFeed
    .pipe(filter(isChannelProposed), first())
    .toPromise();
  expect(channelProposedNotification.params.channelId).toEqual(channelId);

  playerB.channelWallet.workflows[0].service.onTransition(confirm);
  const expectedId = `JOIN_CHANNEL-${channelId}`;
  expect(playerB.channelWallet.getWorkflow(expectedId).id).toEqual(expectedId);

  playerB.channelWallet.pushMessage(generateJoinChannelRequest(channelId), 'localhost');
  playerB.channelWallet.workflows[0].service.send({type: 'USER_APPROVES'});

  await Promise.all(
    [playerA, playerB].map(player =>
      player.messagingService.outboxFeed
        .pipe(
          filter(isChannelUpdated),
          filter(notification => notification.params.status === 'running'),
          first()
        )
        .toPromise()
    )
  );

  [playerA, playerB].map(async player => {
    const entry = await player.store.getEntry(channelId);
    expect(entry.applicationDomain).toEqual('localhost');
  });
});
