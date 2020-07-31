## API Report File for "@statechannels/client-api-schema"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public
export type Address = string;

// @public
export interface Allocation {
    allocationItems: AllocationItem[];
    token: Address;
}

// @public
export interface AllocationItem {
    amount: Uint256;
    destination: Address;
}

// @public
export type Allocations = Allocation[];

// @public (undocumented)
export interface ApproveBudgetAndFundParams {
    // (undocumented)
    hub: Participant;
    // (undocumented)
    playerParticipantId: string;
    // (undocumented)
    requestedReceiveCapacity: Uint256;
    // (undocumented)
    requestedSendCapacity: Uint256;
    // (undocumented)
    token: Address;
}

// @public (undocumented)
export type ApproveBudgetAndFundRequest = JsonRpcRequest<'ApproveBudgetAndFund', ApproveBudgetAndFundParams>;

// @public (undocumented)
export type ApproveBudgetAndFundResponse = JsonRpcResponse<DomainBudget>;

// @public (undocumented)
export type BudgetUpdatedNotification = JsonRpcNotification<'BudgetUpdated', DomainBudget>;

// @public
export type Bytes32 = string;

// @public (undocumented)
export interface ChallengeChannelParams {
    // (undocumented)
    channelId: ChannelId;
}

// @public (undocumented)
export type ChallengeChannelRequest = JsonRpcRequest<'ChallengeChannel', ChallengeChannelParams>;

// @public (undocumented)
export type ChallengeChannelResponse = JsonRpcResponse<ChannelResult>;

// @public (undocumented)
export interface ChannelBudget {
    // (undocumented)
    amount: Uint256;
    // (undocumented)
    channelId: Bytes32;
}

// Warning: (ae-forgotten-export) The symbol "ErrorCodes" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type ChannelClosed = JsonRpcError<ErrorCodes_3['ChannelClosed'], 'Channel closed'>;

// @public (undocumented)
export type ChannelClosingNotification = JsonRpcNotification<'ChannelClosed', ChannelResult>;

// @public
export type ChannelId = string;

// @public (undocumented)
export type ChannelNotFound = JsonRpcError<ErrorCodes_3['ChannelNotFound'], 'Channel not found'>;

// @public (undocumented)
export type ChannelProposedNotification = JsonRpcNotification<'ChannelProposed', ChannelResult>;

// @public (undocumented)
export interface ChannelResult {
    // (undocumented)
    allocations: Allocation[];
    // (undocumented)
    appData: string;
    // (undocumented)
    appDefinition: Address;
    // (undocumented)
    challengeExpirationTime?: number;
    // (undocumented)
    channelId: ChannelId;
    // (undocumented)
    participants: Participant[];
    // (undocumented)
    status: ChannelStatus;
    // (undocumented)
    turnNum: Uint48;
}

// @public (undocumented)
export type ChannelStatus = 'proposed' | 'opening' | 'funding' | 'running' | 'challenging' | 'responding' | 'closing' | 'closed';

// @public (undocumented)
export type ChannelUpdatedNotification = JsonRpcNotification<'ChannelUpdated', ChannelResult>;

// @public (undocumented)
export type CloseAndWithdrawError = JsonRpcError<ErrorCodes['CloseAndWithdraw']['UserDeclined'], 'User declined'>;

// @public (undocumented)
export interface CloseAndWithdrawParams {
    // (undocumented)
    hubParticipantId: string;
}

// @public (undocumented)
export type CloseAndWithdrawRequest = JsonRpcRequest<'CloseAndWithdraw', CloseAndWithdrawParams>;

// @public (undocumented)
export type CloseAndWithdrawResponse = JsonRpcResponse<{
    success: boolean;
}>;

// Warning: (ae-forgotten-export) The symbol "NotYourTurn" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "ChannelNotFound" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type CloseChannelError = NotYourTurn_2 | ChannelNotFound_2;

// @public (undocumented)
export interface CloseChannelParams {
    // (undocumented)
    channelId: ChannelId;
}

// @public (undocumented)
export type CloseChannelRequest = JsonRpcRequest<'CloseChannel', CloseChannelParams>;

// @public (undocumented)
export type CloseChannelResponse = JsonRpcResponse<ChannelResult>;

// @public (undocumented)
export interface CreateChannelParams {
    // (undocumented)
    allocations: Allocation[];
    // (undocumented)
    appData: string;
    // (undocumented)
    appDefinition: Address;
    // (undocumented)
    fundingStrategy: FundingStrategy;
    // (undocumented)
    participants: Participant[];
}

// @public (undocumented)
export type CreateChannelRequest = JsonRpcRequest<'CreateChannel', CreateChannelParams>;

// @public (undocumented)
export type CreateChannelResponse = JsonRpcResponse<ChannelResult>;

// @public (undocumented)
export interface DomainBudget {
    // (undocumented)
    budgets: TokenBudget[];
    // (undocumented)
    domain: string;
    // (undocumented)
    hubAddress: string;
}

// @public (undocumented)
export type EnableEthereumError = JsonRpcError<ErrorCodes['EnableEthereum']['EthereumNotEnabled'], 'Ethereum Not Enabled'>;

// @public (undocumented)
export type EnableEthereumRequest = JsonRpcRequest<'EnableEthereum', {}>;

// @public (undocumented)
export type EnableEthereumResponse = JsonRpcResponse<{
    signingAddress: Address;
    destinationAddress: Address;
    walletVersion: string;
}>;

// @public
export type ErrorCodes = {
    EnableEthereum: {
        EthereumNotEnabled: 100;
    };
    CloseAndWithdraw: {
        UserDeclined: 200;
    };
    CloseChannel: {
        NotYourTurn: 300;
        ChannelNotFound: 301;
    };
    UpdateChannel: {
        ChannelNotFound: 400;
        InvalidTransition: 401;
        InvalidAppData: 402;
        NotYourTurn: 403;
        ChannelClosed: 404;
    };
    PushMessage: {
        WrongParticipant: 900;
    };
    CreateChannel: {
        SigningAddressNotFound: 1000;
        InvalidAppDefinition: 1001;
        UnsupportedToken: 1002;
    };
    JoinChannel: {
        ChannelNotFound: 1100;
        InvalidTransition: 1101;
    };
    GetState: {
        ChannelNotFound: 1200;
    };
    ChallengeChannel: {
        ChannelNotFound: 1300;
    };
};

// Warning: (ae-forgotten-export) The symbol "GenericError" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type ErrorResponse = EnableEthereumError | CloseAndWithdrawError | CloseChannelError | UpdateChannelError | GenericError;

// @public
export type ExternalDestination = string;

// @public (undocumented)
export type FundingStrategy = 'Direct' | 'Ledger' | 'Virtual';

// @public (undocumented)
export interface Funds {
    // (undocumented)
    amount: Uint256;
    // (undocumented)
    token: Address;
}

// @public (undocumented)
export interface GetBudgetParams {
    // (undocumented)
    hubParticipantId: string;
}

// @public (undocumented)
export type GetBudgetRequest = JsonRpcRequest<'GetBudget', GetBudgetParams>;

// @public (undocumented)
export type GetBudgetResponse = JsonRpcResponse<DomainBudget | {}>;

// @public (undocumented)
export interface GetChannelsParams {
    // (undocumented)
    includeClosed?: boolean;
}

// @public (undocumented)
export type GetChannelsRequest = JsonRpcRequest<'GetChannels', {
    includeClosed?: boolean;
}>;

// @public (undocumented)
export type GetChannelsResponse = JsonRpcResponse<ChannelResult[]>;

// @public (undocumented)
export interface GetStateParams {
    // (undocumented)
    channelId: ChannelId;
}

// @public (undocumented)
export type GetStateRequest = JsonRpcRequest<'GetState', GetStateParams>;

// @public (undocumented)
export type GetStateResponse = JsonRpcResponse<ChannelResult>;

// @public (undocumented)
export type GetWalletInformationRequest = JsonRpcRequest<'GetWalletInformation', {}>;

// @public (undocumented)
export type GetWalletInformationResponse = JsonRpcResponse<{
    signingAddress: Address;
    destinationAddress: Address | undefined;
    walletVersion: string;
}>;

// @public (undocumented)
export type InvalidAppData = JsonRpcError<ErrorCodes_3['InvalidAppData'], 'Invalid app data', {
    appData: string;
}>;

// @public (undocumented)
export type InvalidTransition = JsonRpcError<ErrorCodes_3['InvalidTransition'], 'Invalid transition', {
    channelStatus: ChannelStatus;
    proposedUpdate: UpdateChannelParams;
}>;

// @public (undocumented)
export function isError(message: JsonRpcMessage): message is ErrorResponse;

// @public (undocumented)
export function isNotification(message: JsonRpcMessage): message is Notification;

// @public (undocumented)
export function isRequest(message: JsonRpcMessage): message is Request;

// @public (undocumented)
export function isResponse(message: JsonRpcMessage): message is Response;

// @public (undocumented)
export interface JoinChannelParams {
    // (undocumented)
    channelId: ChannelId;
}

// @public (undocumented)
export type JoinChannelRequest = JsonRpcRequest<'JoinChannel', JoinChannelParams>;

// @public (undocumented)
export type JoinChannelResponse = JsonRpcResponse<ChannelResult>;

// @public (undocumented)
export interface JsonRpcError<Code, Message, Data = undefined> {
    // (undocumented)
    error: Data extends undefined ? {
        code: Code;
        message: Message;
    } : {
        code: Code;
        message: Message;
        data: Data;
    };
    // (undocumented)
    id: number;
    // (undocumented)
    jsonrpc: '2.0';
}

// @public (undocumented)
export type JsonRpcMessage = Request | Response | Notification | ErrorResponse;

// @public (undocumented)
export interface JsonRpcNotification<NotificationName, NotificationParams> {
    // (undocumented)
    jsonrpc: '2.0';
    // (undocumented)
    method: NotificationName;
    // (undocumented)
    params: NotificationParams;
}

// @public (undocumented)
export interface JsonRpcRequest<MethodName, RequestParams> {
    // (undocumented)
    id: number;
    // (undocumented)
    jsonrpc: '2.0';
    // (undocumented)
    method: MethodName;
    // (undocumented)
    params: RequestParams;
}

// @public (undocumented)
export interface JsonRpcResponse<ResultType> {
    // (undocumented)
    id: number;
    // (undocumented)
    jsonrpc: '2.0';
    // (undocumented)
    result: ResultType;
}

// @public
export interface Message {
    data: unknown;
    recipient: string;
    sender: string;
}

// @public (undocumented)
export type MessageQueuedNotification = JsonRpcNotification<'MessageQueued', Message>;

// @public (undocumented)
export type Notification = ChannelProposedNotification | ChannelUpdatedNotification | ChannelClosingNotification | BudgetUpdatedNotification | MessageQueuedNotification | UiNotification;

// Warning: (ae-forgotten-export) The symbol "FilterByMethod" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type NotificationType = {
    [T in Notification['method']]: [FilterByMethod<Notification, T>['params']];
};

// @public (undocumented)
export type NotYourTurn = JsonRpcError<ErrorCodes_3['NotYourTurn'], 'Not your turn'>;

// @public
export function parseRequest(jsonBlob: object): Request;

// @public
export function parseResponse(jsonBlob: object): Response;

// @public
export interface Participant {
    destination: Address;
    participantId: string;
    signingAddress: Address;
}

// @public (undocumented)
export type PushMessageParams = PushMessageRequest['params'];

// @public (undocumented)
export type PushMessageRequest = JsonRpcRequest<'PushMessage', Message>;

// @public (undocumented)
export type PushMessageResponse = JsonRpcResponse<PushMessageResult>;

// @public (undocumented)
export type PushMessageResult = {
    success: boolean;
};

// @public (undocumented)
export type Request = CreateChannelRequest | JoinChannelRequest | UpdateChannelRequest | GetWalletInformationRequest | EnableEthereumRequest | GetStateRequest | PushMessageRequest | ChallengeChannelRequest | GetBudgetRequest | ApproveBudgetAndFundRequest | CloseChannelRequest | CloseAndWithdrawRequest | GetChannelsRequest;

// @public (undocumented)
export type Response = CreateChannelResponse | JoinChannelResponse | UpdateChannelResponse | GetWalletInformationResponse | EnableEthereumResponse | GetStateResponse | PushMessageResponse | ChallengeChannelResponse | GetBudgetResponse | CloseChannelResponse | ApproveBudgetAndFundResponse | CloseAndWithdrawResponse | GetChannelsResponse;

// @public (undocumented)
export interface TokenBudget {
    // (undocumented)
    availableReceiveCapacity: Uint256;
    // (undocumented)
    availableSendCapacity: Uint256;
    // (undocumented)
    channels: ChannelBudget[];
    // (undocumented)
    token: Address;
}

// @public (undocumented)
export type UiNotification = JsonRpcNotification<'UIUpdate', {
    showWallet: boolean;
}>;

// @public
export type Uint256 = string;

// @public (undocumented)
export type Uint48 = number;

// @public (undocumented)
export type UpdateChannelError = ChannelNotFound | InvalidTransition | InvalidAppData | NotYourTurn | ChannelClosed;

// @public (undocumented)
export interface UpdateChannelParams {
    // (undocumented)
    allocations: Allocation[];
    // (undocumented)
    appData: string;
    // (undocumented)
    channelId: ChannelId;
}

// @public (undocumented)
export type UpdateChannelRequest = JsonRpcRequest<'UpdateChannel', UpdateChannelParams>;

// @public (undocumented)
export type UpdateChannelResponse = JsonRpcResponse<ChannelResult>;


```