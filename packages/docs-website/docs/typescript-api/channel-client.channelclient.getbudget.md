---
id: channel-client.channelclient.getbudget
title: ChannelClient.getBudget() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@statechannels/channel-client](./channel-client.md) &gt; [ChannelClient](./channel-client.channelclient.md) &gt; [getBudget](./channel-client.channelclient.getbudget.md)

## ChannelClient.getBudget() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Requests the latest budget for this domain

<b>Signature:</b>

```typescript
getBudget(hubParticipantId: string): Promise<DomainBudget | {}>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  hubParticipantId | string | The id of a state channel hub |

<b>Returns:</b>

Promise&lt;[DomainBudget](./client-api-schema.domainbudget.md) \| {}&gt;

A promise that resolves to a ChannelResult.
