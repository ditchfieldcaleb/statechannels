---
id: channel-client.channelclient.closeandwithdraw
title: ChannelClient.closeAndWithdraw() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@statechannels/channel-client](./channel-client.md) &gt; [ChannelClient](./channel-client.channelclient.md) &gt; [closeAndWithdraw](./channel-client.channelclient.closeandwithdraw.md)

## ChannelClient.closeAndWithdraw() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Requests the funds to be withdrawn from this domain's ledger channel

<b>Signature:</b>

```typescript
closeAndWithdraw(hubParticipantId: string): Promise<DomainBudget | {}>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  hubParticipantId | string |  |

<b>Returns:</b>

Promise&lt;[DomainBudget](./client-api-schema.domainbudget.md) \| {}&gt;

A promise that resolves to a DomainBudget.
