---
id: client-api-schema.participant
title: Participant interface
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@statechannels/client-api-schema](./client-api-schema.md) &gt; [Participant](./client-api-schema.participant.md)

## Participant interface

Container for data specific to a single state channel participant

<b>Signature:</b>

```typescript
export interface Participant 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [destination](./client-api-schema.participant.destination.md) | [Address](./client-api-schema.address.md) | Address of EOA to receive channel proceeds (the account that'll get the funds). |
|  [participantId](./client-api-schema.participant.participantid.md) | string | App allocated id, used for relaying messages to the participant |
|  [signingAddress](./client-api-schema.participant.signingaddress.md) | [Address](./client-api-schema.address.md) | Address used to sign channel updates |
