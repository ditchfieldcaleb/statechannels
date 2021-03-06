---
id: channel-client.channelclient.closechannel
title: ChannelClient.closeChannel() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@statechannels/channel-client](./channel-client.md) &gt; [ChannelClient](./channel-client.channelclient.md) &gt; [closeChannel](./channel-client.channelclient.closechannel.md)

## ChannelClient.closeChannel() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Requests a close for a channel

<b>Signature:</b>

```typescript
closeChannel(channelId: string): Promise<ChannelResult>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  channelId | string | id for the state channel |

<b>Returns:</b>

Promise&lt;[ChannelResult](./client-api-schema.channelresult.md)<!-- -->&gt;

A promise that resolves to a ChannelResult.

## Remarks

The wallet will respond to this request with an error if it is not your turn. If it is your turn, the wallet will respond as soon as it has signed an `isFinal` state, and the channel is updated to `closing` status. The channel may later update to `closed` status only when other channel participants have responded in kind: this can be detected by listening to [Channel Updated](./channel-client.channelclient.onchannelupdated.md) events and filtering on the channel status.
