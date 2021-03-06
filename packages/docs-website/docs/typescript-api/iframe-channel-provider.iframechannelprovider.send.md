---
id: iframe-channel-provider.iframechannelprovider.send
title: IFrameChannelProvider.send() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@statechannels/iframe-channel-provider](./iframe-channel-provider.md) &gt; [IFrameChannelProvider](./iframe-channel-provider.iframechannelprovider.md) &gt; [send](./iframe-channel-provider.iframechannelprovider.send.md)

## IFrameChannelProvider.send() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

<b>Signature:</b>

```typescript
send<M extends keyof WalletJsonRpcAPI>(method: M, params: WalletJsonRpcAPI[M]['request']['params']): Promise<WalletJsonRpcAPI[M]['response']['result']>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  method | M |  |
|  params | [WalletJsonRpcAPI](./iframe-channel-provider.walletjsonrpcapi.md)<!-- -->\[M\]\['request'\]\['params'\] |  |

<b>Returns:</b>

Promise&lt;[WalletJsonRpcAPI](./iframe-channel-provider.walletjsonrpcapi.md)<!-- -->\[M\]\['response'\]\['result'\]&gt;
