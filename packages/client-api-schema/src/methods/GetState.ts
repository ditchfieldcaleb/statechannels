import {ChannelId, ChannelResult} from '../data-types';
import {JsonRpcRequest, JsonRpcResponse} from '../utils';

export interface GetStateParams {
  channelId: ChannelId;
}
export type GetStateRequest = JsonRpcRequest<'GetState', GetStateParams>;
export type GetStateResponse = JsonRpcResponse<ChannelResult>;
