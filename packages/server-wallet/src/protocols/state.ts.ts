import {SignedStateWithHash} from '@statechannels/wallet-core';

import {Either, Option} from '../fp';

import {ProtocolAction} from './actions';

/*
The ChannelData type is the data that protocols need about the channel to decide what to do next.
*/
export type ChannelData = {
  channelId: string;
  myIndex: 0 | 1;
  supported?: SignedStateWithHash;
  latest?: SignedStateWithHash;
  latestSignedByMe?: SignedStateWithHash;
};

export type Stage = 'Missing' | 'PrefundSetup' | 'PostfundSetup' | 'Running' | 'Final';
/**
 *
 * @param state: SignedStateWithHash | undefined
 * Returns stage of state.
 *
 * Useful for partitioning the protocol state to decide what action to next take.
 */
export const stage = (state: SignedStateWithHash | undefined): Stage =>
  !state
    ? 'Missing'
    : state.isFinal
    ? 'Final'
    : state.turnNum === 0
    ? 'PrefundSetup'
    : state.turnNum === 3
    ? 'PostfundSetup'
    : 'Running';

// FIXME: This should be a union of the errors that the client-api-schema specifies.
type ProtocolError = Error;

/*
A protocol should accept a "protocol state", and resolve to
- either zero or one protocol actions;
- or a protocol error
A protocol should never reject.
*/
export type Protocol<PS> = (ps: PS) => Promise<Either<Option<ProtocolAction>, ProtocolError>>;