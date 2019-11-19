import { take, fork } from 'redux-saga/effects';
import { buffers, eventChannel } from 'redux-saga';
import { reduxSagaFirebase } from '../../gateways/firebase';
import {
  ChannelClient,
  JsonRPCNotification,
  Message,
  NotificationName,
} from '../../utils/channelClient';

function createSubscribeFunction(channelClient: ChannelClient, notificationName: NotificationName) {
  const subscribe = emit => {
    channelClient.onMessageReceived(notificationName, event => {
      emit(event);
    });

    return () => {
      channelClient.unSubscribe(notificationName); // TODO
    };
  };
  return subscribe;
}

export function* messageQueuedListener() {
  const channelClient = new ChannelClient();
  const subscribe = createSubscribeFunction(channelClient, 'MessageQueued');
  const channel = eventChannel(subscribe, buffers.fixed(10));

  while (true) {
    const message: JsonRPCNotification<Message> = yield take(channel);
    const to = message.params.recipient;
    yield fork(
      reduxSagaFirebase.database.create,
      `/messages/${to.toLowerCase()}`,
      sanitizeMessageForFirebase(message)
    );
  }
}

function sanitizeMessageForFirebase(message) {
  return JSON.parse(JSON.stringify(message));
}