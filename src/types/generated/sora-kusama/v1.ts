import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface PageIndexData {
    beginUsed: number
    endUsed: number
    overweightCount: bigint
}

export const PageIndexData: sts.Type<PageIndexData> = sts.struct(() => {
    return  {
        beginUsed: sts.number(),
        endUsed: sts.number(),
        overweightCount: sts.bigint(),
    }
})

export interface ConfigData {
    maxIndividual: bigint
}

export const ConfigData: sts.Type<ConfigData> = sts.struct(() => {
    return  {
        maxIndividual: sts.bigint(),
    }
})

export interface QueueConfigData {
    suspendThreshold: number
    dropThreshold: number
    resumeThreshold: number
    thresholdWeight: bigint
    weightRestrictDecay: bigint
}

export const QueueConfigData: sts.Type<QueueConfigData> = sts.struct(() => {
    return  {
        suspendThreshold: sts.number(),
        dropThreshold: sts.number(),
        resumeThreshold: sts.number(),
        thresholdWeight: sts.bigint(),
        weightRestrictDecay: sts.bigint(),
    }
})

export type OutboundStatus = OutboundStatus_Ok | OutboundStatus_Suspended

export interface OutboundStatus_Ok {
    __kind: 'Ok'
}

export interface OutboundStatus_Suspended {
    __kind: 'Suspended'
}

export const OutboundStatus: sts.Type<OutboundStatus> = sts.closedEnum(() => {
    return  {
        Ok: sts.unit(),
        Suspended: sts.unit(),
    }
})

export type XcmpMessageFormat = XcmpMessageFormat_ConcatenatedEncodedBlob | XcmpMessageFormat_ConcatenatedVersionedXcm | XcmpMessageFormat_Signals

export interface XcmpMessageFormat_ConcatenatedEncodedBlob {
    __kind: 'ConcatenatedEncodedBlob'
}

export interface XcmpMessageFormat_ConcatenatedVersionedXcm {
    __kind: 'ConcatenatedVersionedXcm'
}

export interface XcmpMessageFormat_Signals {
    __kind: 'Signals'
}

export type InboundStatus = InboundStatus_Ok | InboundStatus_Suspended

export interface InboundStatus_Ok {
    __kind: 'Ok'
}

export interface InboundStatus_Suspended {
    __kind: 'Suspended'
}

export const XcmpMessageFormat: sts.Type<XcmpMessageFormat> = sts.closedEnum(() => {
    return  {
        ConcatenatedEncodedBlob: sts.unit(),
        ConcatenatedVersionedXcm: sts.unit(),
        Signals: sts.unit(),
    }
})

export const InboundStatus: sts.Type<InboundStatus> = sts.closedEnum(() => {
    return  {
        Ok: sts.unit(),
        Suspended: sts.unit(),
    }
})

export type Slot = bigint

export const Slot = sts.bigint()

export type Public = Bytes

export const Public = sts.bytes()

export type KeyTypeId = Bytes

export const KeyTypeId = sts.bytes()

export interface SessionKeys {
    aura: Public
}

export interface CandidateInfo {
    who: AccountId32
    deposit: bigint
}

export const CandidateInfo: sts.Type<CandidateInfo> = sts.struct(() => {
    return  {
        who: AccountId32,
        deposit: sts.bigint(),
    }
})

export type UncleEntryItem = UncleEntryItem_InclusionHeight | UncleEntryItem_Uncle

export interface UncleEntryItem_InclusionHeight {
    __kind: 'InclusionHeight'
    value: number
}

export interface UncleEntryItem_Uncle {
    __kind: 'Uncle'
    value: [H256, (AccountId32 | undefined)]
}

export const UncleEntryItem: sts.Type<UncleEntryItem> = sts.closedEnum(() => {
    return  {
        InclusionHeight: sts.number(),
        Uncle: sts.tuple(() => [H256, sts.option(() => AccountId32)]),
    }
})

export type Type_144 = Type_144_V1Ancient | Type_144_V2

export interface Type_144_V1Ancient {
    __kind: 'V1Ancient'
}

export interface Type_144_V2 {
    __kind: 'V2'
}

export const Type_144: sts.Type<Type_144> = sts.closedEnum(() => {
    return  {
        V1Ancient: sts.unit(),
        V2: sts.unit(),
    }
})

export type FixedU128 = bigint

export const FixedU128 = sts.bigint()

export type Releases = Releases_V1_0_0 | Releases_V2_0_0

export interface Releases_V1_0_0 {
    __kind: 'V1_0_0'
}

export interface Releases_V2_0_0 {
    __kind: 'V2_0_0'
}

export const Releases: sts.Type<Releases> = sts.closedEnum(() => {
    return  {
        V1_0_0: sts.unit(),
        V2_0_0: sts.unit(),
    }
})

export interface ReserveData {
    id: Bytes
    amount: bigint
}

export const ReserveData: sts.Type<ReserveData> = sts.struct(() => {
    return  {
        id: sts.bytes(),
        amount: sts.bigint(),
    }
})

export interface BalanceLock {
    id: Bytes
    amount: bigint
    reasons: Reasons
}

export type Reasons = Reasons_All | Reasons_Fee | Reasons_Misc

export interface Reasons_All {
    __kind: 'All'
}

export interface Reasons_Fee {
    __kind: 'Fee'
}

export interface Reasons_Misc {
    __kind: 'Misc'
}

export const BalanceLock: sts.Type<BalanceLock> = sts.struct(() => {
    return  {
        id: sts.bytes(),
        amount: sts.bigint(),
        reasons: Reasons,
    }
})

export const Reasons: sts.Type<Reasons> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        Fee: sts.unit(),
        Misc: sts.unit(),
    }
})

export interface AccountData {
    free: bigint
    reserved: bigint
    miscFrozen: bigint
    feeFrozen: bigint
}

export const AccountData: sts.Type<AccountData> = sts.struct(() => {
    return  {
        free: sts.bigint(),
        reserved: sts.bigint(),
        miscFrozen: sts.bigint(),
        feeFrozen: sts.bigint(),
    }
})

export interface OutboundHrmpMessage {
    recipient: Id
    data: Bytes
}

export const OutboundHrmpMessage: sts.Type<OutboundHrmpMessage> = sts.struct(() => {
    return  {
        recipient: Id,
        data: sts.bytes(),
    }
})

export type Id = number

export const Id = sts.number()

export type MessageQueueChain = Bytes

export const MessageQueueChain = sts.bytes()

export interface V1AbridgedHostConfiguration {
    maxCodeSize: number
    maxHeadDataSize: number
    maxUpwardQueueCount: number
    maxUpwardQueueSize: number
    maxUpwardMessageSize: number
    maxUpwardMessageNumPerCandidate: number
    hrmpMaxMessageNumPerCandidate: number
    validationUpgradeFrequency: number
    validationUpgradeDelay: number
}

export const V1AbridgedHostConfiguration: sts.Type<V1AbridgedHostConfiguration> = sts.struct(() => {
    return  {
        maxCodeSize: sts.number(),
        maxHeadDataSize: sts.number(),
        maxUpwardQueueCount: sts.number(),
        maxUpwardQueueSize: sts.number(),
        maxUpwardMessageSize: sts.number(),
        maxUpwardMessageNumPerCandidate: sts.number(),
        hrmpMaxMessageNumPerCandidate: sts.number(),
        validationUpgradeFrequency: sts.number(),
        validationUpgradeDelay: sts.number(),
    }
})

export interface MessagingStateSnapshot {
    dmqMqcHead: H256
    relayDispatchQueueSize: [number, number]
    ingressChannels: [Id, V1AbridgedHrmpChannel][]
    egressChannels: [Id, V1AbridgedHrmpChannel][]
}

export interface V1AbridgedHrmpChannel {
    maxCapacity: number
    maxTotalSize: number
    maxMessageSize: number
    msgCount: number
    totalSize: number
    mqcHead?: (H256 | undefined)
}

export const MessagingStateSnapshot: sts.Type<MessagingStateSnapshot> = sts.struct(() => {
    return  {
        dmqMqcHead: H256,
        relayDispatchQueueSize: sts.tuple(() => [sts.number(), sts.number()]),
        ingressChannels: sts.array(() => sts.tuple(() => [Id, V1AbridgedHrmpChannel])),
        egressChannels: sts.array(() => sts.tuple(() => [Id, V1AbridgedHrmpChannel])),
    }
})

export const V1AbridgedHrmpChannel: sts.Type<V1AbridgedHrmpChannel> = sts.struct(() => {
    return  {
        maxCapacity: sts.number(),
        maxTotalSize: sts.number(),
        maxMessageSize: sts.number(),
        msgCount: sts.number(),
        totalSize: sts.number(),
        mqcHead: sts.option(() => H256),
    }
})

export type V1UpgradeRestriction = V1UpgradeRestriction_Present

export interface V1UpgradeRestriction_Present {
    __kind: 'Present'
}

export const V1UpgradeRestriction: sts.Type<V1UpgradeRestriction> = sts.closedEnum(() => {
    return  {
        Present: sts.unit(),
    }
})

export interface V1PersistedValidationData {
    parentHead: HeadData
    relayParentNumber: number
    relayParentStorageRoot: H256
    maxPovSize: number
}

export type HeadData = Bytes

export const V1PersistedValidationData: sts.Type<V1PersistedValidationData> = sts.struct(() => {
    return  {
        parentHead: HeadData,
        relayParentNumber: sts.number(),
        relayParentStorageRoot: H256,
        maxPovSize: sts.number(),
    }
})

export const HeadData = sts.bytes()

export type Phase = Phase_ApplyExtrinsic | Phase_Finalization | Phase_Initialization

export interface Phase_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Phase_Finalization {
    __kind: 'Finalization'
}

export interface Phase_Initialization {
    __kind: 'Initialization'
}

export const Phase: sts.Type<Phase> = sts.closedEnum(() => {
    return  {
        ApplyExtrinsic: sts.number(),
        Finalization: sts.unit(),
        Initialization: sts.unit(),
    }
})

export interface LastRuntimeUpgradeInfo {
    specVersion: number
    specName: string
}

export const LastRuntimeUpgradeInfo: sts.Type<LastRuntimeUpgradeInfo> = sts.struct(() => {
    return  {
        specVersion: sts.number(),
        specName: sts.string(),
    }
})

export interface EventRecord {
    phase: Phase
    event: Event
    topics: H256[]
}

export type Event = Event_Balances | Event_CollatorSelection | Event_CumulusXcm | Event_DmpQueue | Event_ParachainSystem | Event_PolkadotXcm | Event_Session | Event_Sudo | Event_System | Event_XcmpQueue

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_CollatorSelection {
    __kind: 'CollatorSelection'
    value: CollatorSelectionEvent
}

export interface Event_CumulusXcm {
    __kind: 'CumulusXcm'
    value: CumulusXcmEvent
}

export interface Event_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueEvent
}

export interface Event_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemEvent
}

export interface Event_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmEvent
}

export interface Event_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Event_Sudo {
    __kind: 'Sudo'
    value: SudoEvent
}

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueEvent
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type XcmpQueueEvent = XcmpQueueEvent_BadFormat | XcmpQueueEvent_BadVersion | XcmpQueueEvent_Fail | XcmpQueueEvent_Success | XcmpQueueEvent_UpwardMessageSent | XcmpQueueEvent_XcmpMessageSent

/**
 * Bad XCM format used.
 */
export interface XcmpQueueEvent_BadFormat {
    __kind: 'BadFormat'
    value?: (H256 | undefined)
}

/**
 * Bad XCM version used.
 */
export interface XcmpQueueEvent_BadVersion {
    __kind: 'BadVersion'
    value?: (H256 | undefined)
}

/**
 * Some XCM failed.
 */
export interface XcmpQueueEvent_Fail {
    __kind: 'Fail'
    value: [(H256 | undefined), V2Error]
}

/**
 * Some XCM was executed ok.
 */
export interface XcmpQueueEvent_Success {
    __kind: 'Success'
    value?: (H256 | undefined)
}

/**
 * An upward message was sent to the relay chain.
 */
export interface XcmpQueueEvent_UpwardMessageSent {
    __kind: 'UpwardMessageSent'
    value?: (H256 | undefined)
}

/**
 * An HRMP message was sent to a sibling parachain.
 */
export interface XcmpQueueEvent_XcmpMessageSent {
    __kind: 'XcmpMessageSent'
    value?: (H256 | undefined)
}

export type V2Error = V2Error_AssetNotFound | V2Error_BadOrigin | V2Error_Barrier | V2Error_DestinationUnsupported | V2Error_ExceedsMaxMessageSize | V2Error_FailedToDecode | V2Error_FailedToTransactAsset | V2Error_InvalidLocation | V2Error_LocationCannotHold | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_NotHoldingFees | V2Error_NotWithdrawable | V2Error_Overflow | V2Error_TooExpensive | V2Error_TooMuchWeightRequired | V2Error_Transport | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_Unimplemented | V2Error_UnknownClaim | V2Error_Unroutable | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_WeightLimitReached | V2Error_WeightNotComputable

export interface V2Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V2Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V2Error_Barrier {
    __kind: 'Barrier'
}

export interface V2Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V2Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V2Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V2Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V2Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V2Error_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
    __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V2Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V2Error_Overflow {
    __kind: 'Overflow'
}

export interface V2Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V2Error_TooMuchWeightRequired {
    __kind: 'TooMuchWeightRequired'
}

export interface V2Error_Transport {
    __kind: 'Transport'
}

export interface V2Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V2Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V2Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V2Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V2Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface V2Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

/**
 * Event for the System pallet.
 */
export type SystemEvent = SystemEvent_CodeUpdated | SystemEvent_ExtrinsicFailed | SystemEvent_ExtrinsicSuccess | SystemEvent_KilledAccount | SystemEvent_NewAccount | SystemEvent_Remarked

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 * An extrinsic failed. \[error, info\]
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    value: [DispatchError, DispatchInfo]
}

/**
 * An extrinsic completed successfully. \[info\]
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    value: DispatchInfo
}

/**
 * An \[account\] was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    value: AccountId32
}

/**
 * A new \[account\] was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    value: AccountId32
}

/**
 * On on-chain remark happened. \[origin, remark_hash\]
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    value: [AccountId32, H256]
}

export interface DispatchInfo {
    weight: bigint
    class: DispatchClass
    paysFee: Pays
}

export type Pays = Pays_No | Pays_Yes

export interface Pays_No {
    __kind: 'No'
}

export interface Pays_Yes {
    __kind: 'Yes'
}

export type DispatchClass = DispatchClass_Mandatory | DispatchClass_Normal | DispatchClass_Operational

export interface DispatchClass_Mandatory {
    __kind: 'Mandatory'
}

export interface DispatchClass_Normal {
    __kind: 'Normal'
}

export interface DispatchClass_Operational {
    __kind: 'Operational'
}

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_Token

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_Module {
    __kind: 'Module'
    index: number
    error: number
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export type TokenError = TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_Frozen | TokenError_NoFunds | TokenError_UnknownAsset | TokenError_Unsupported | TokenError_WouldDie

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_NoFunds {
    __kind: 'NoFunds'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export type ArithmeticError = ArithmeticError_DivisionByZero | ArithmeticError_Overflow | ArithmeticError_Underflow

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SudoEvent = SudoEvent_KeyChanged | SudoEvent_Sudid | SudoEvent_SudoAsDone

/**
 * The \[sudoer\] just switched identity; the old key is supplied.
 */
export interface SudoEvent_KeyChanged {
    __kind: 'KeyChanged'
    newSudoer: AccountId32
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    sudoResult: Result<null, DispatchError>
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
    __kind: 'SudoAsDone'
    sudoResult: Result<null, DispatchError>
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SessionEvent = SessionEvent_NewSession

/**
 * New session has happened. Note that the argument is the session index, not the
 * block number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    sessionIndex: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PolkadotXcmEvent = PolkadotXcmEvent_AssetsTrapped | PolkadotXcmEvent_Attempted | PolkadotXcmEvent_InvalidResponder | PolkadotXcmEvent_InvalidResponderVersion | PolkadotXcmEvent_Notified | PolkadotXcmEvent_NotifyDecodeFailed | PolkadotXcmEvent_NotifyDispatchError | PolkadotXcmEvent_NotifyOverweight | PolkadotXcmEvent_NotifyTargetMigrationFail | PolkadotXcmEvent_NotifyTargetSendFail | PolkadotXcmEvent_ResponseReady | PolkadotXcmEvent_ResponseTaken | PolkadotXcmEvent_Sent | PolkadotXcmEvent_SupportedVersionChanged | PolkadotXcmEvent_UnexpectedResponse | PolkadotXcmEvent_VersionChangeNotified

/**
 * Some assets have been placed in an asset trap.
 * 
 * \[ hash, origin, assets \]
 */
export interface PolkadotXcmEvent_AssetsTrapped {
    __kind: 'AssetsTrapped'
    value: [H256, V1MultiLocation, VersionedMultiAssets]
}

/**
 * Execution of an XCM message was attempted.
 * 
 * \[ outcome \]
 */
export interface PolkadotXcmEvent_Attempted {
    __kind: 'Attempted'
    value: V2Outcome
}

/**
 * Expected query response has been received but the origin location of the response does
 * not match that expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 * 
 * \[ origin location, id, expected location \]
 */
export interface PolkadotXcmEvent_InvalidResponder {
    __kind: 'InvalidResponder'
    value: [V1MultiLocation, bigint, (V1MultiLocation | undefined)]
}

/**
 * Expected query response has been received but the expected origin location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 * 
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 * 
 * \[ origin location, id \]
 */
export interface PolkadotXcmEvent_InvalidResponderVersion {
    __kind: 'InvalidResponderVersion'
    value: [V1MultiLocation, bigint]
}

/**
 * Query response has been received and query is removed. The registered notification has
 * been dispatched and executed successfully.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_Notified {
    __kind: 'Notified'
    value: [bigint, number, number]
}

/**
 * Query response has been received and query is removed. The dispatch was unable to be
 * decoded into a `Call`; this might be due to dispatch function having a signature which
 * is not `(origin, QueryId, Response)`.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_NotifyDecodeFailed {
    __kind: 'NotifyDecodeFailed'
    value: [bigint, number, number]
}

/**
 * Query response has been received and query is removed. There was a general error with
 * dispatching the notification call.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_NotifyDispatchError {
    __kind: 'NotifyDispatchError'
    value: [bigint, number, number]
}

/**
 * Query response has been received and query is removed. The registered notification could
 * not be dispatched because the dispatch weight is greater than the maximum weight
 * originally budgeted by this runtime for the query result.
 * 
 * \[ id, pallet index, call index, actual weight, max budgeted weight \]
 */
export interface PolkadotXcmEvent_NotifyOverweight {
    __kind: 'NotifyOverweight'
    value: [bigint, number, number, bigint, bigint]
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * migrating the location to our new XCM format.
 * 
 * \[ location, query ID \]
 */
export interface PolkadotXcmEvent_NotifyTargetMigrationFail {
    __kind: 'NotifyTargetMigrationFail'
    value: [VersionedMultiLocation, bigint]
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * sending the notification to it.
 * 
 * \[ location, query ID, error \]
 */
export interface PolkadotXcmEvent_NotifyTargetSendFail {
    __kind: 'NotifyTargetSendFail'
    value: [V1MultiLocation, bigint, V2Error]
}

/**
 * Query response has been received and is ready for taking with `take_response`. There is
 * no registered notification call.
 * 
 * \[ id, response \]
 */
export interface PolkadotXcmEvent_ResponseReady {
    __kind: 'ResponseReady'
    value: [bigint, V2Response]
}

/**
 * Received query response has been read and removed.
 * 
 * \[ id \]
 */
export interface PolkadotXcmEvent_ResponseTaken {
    __kind: 'ResponseTaken'
    value: bigint
}

/**
 * A XCM message was sent.
 * 
 * \[ origin, destination, message \]
 */
export interface PolkadotXcmEvent_Sent {
    __kind: 'Sent'
    value: [V1MultiLocation, V1MultiLocation, V2Instruction[]]
}

/**
 * The supported version of a location has been changed. This might be through an
 * automatic notification or a manual intervention.
 * 
 * \[ location, XCM version \]
 */
export interface PolkadotXcmEvent_SupportedVersionChanged {
    __kind: 'SupportedVersionChanged'
    value: [V1MultiLocation, number]
}

/**
 * Query response received which does not match a registered query. This may be because a
 * matching query was never registered, it may be because it is a duplicate response, or
 * because the query timed out.
 * 
 * \[ origin location, id \]
 */
export interface PolkadotXcmEvent_UnexpectedResponse {
    __kind: 'UnexpectedResponse'
    value: [V1MultiLocation, bigint]
}

/**
 * An XCM version change notification message has been attempted to be sent.
 * 
 * \[ destination, result \]
 */
export interface PolkadotXcmEvent_VersionChangeNotified {
    __kind: 'VersionChangeNotified'
    value: [V1MultiLocation, number]
}

export type V2Instruction = V2Instruction_BuyExecution | V2Instruction_ClaimAsset | V2Instruction_ClearError | V2Instruction_ClearOrigin | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_DescendOrigin | V2Instruction_ExchangeAsset | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_QueryResponse | V2Instruction_ReceiveTeleportedAsset | V2Instruction_RefundSurplus | V2Instruction_ReportError | V2Instruction_ReserveAssetDeposited | V2Instruction_SetAppendix | V2Instruction_SetErrorHandler | V2Instruction_SubscribeVersion | V2Instruction_Transact | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Trap | V2Instruction_UnsubscribeVersion | V2Instruction_WithdrawAsset

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weightLimit: V2WeightLimit
}

export interface V2Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V1MultiAsset[]
    ticket: V1MultiLocation
}

export interface V2Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V2Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V2Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface V2Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V1Junctions
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface V2Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V2Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V2Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V2Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
    maxResponseWeight: bigint
}

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V1MultiAsset[]
}

export interface V2Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V1MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V1MultiAsset[]
}

export interface V2Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V2Instruction[]
}

export interface V2Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V2Instruction[]
}

export interface V2Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V2Instruction_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V2Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface V2Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V1MultiAsset[]
}

export interface DoubleEncoded {
    encoded: Bytes
}

export type V0OriginKind = V0OriginKind_Native | V0OriginKind_SovereignAccount | V0OriginKind_Superuser | V0OriginKind_Xcm

export interface V0OriginKind_Native {
    __kind: 'Native'
}

export interface V0OriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface V0OriginKind_Superuser {
    __kind: 'Superuser'
}

export interface V0OriginKind_Xcm {
    __kind: 'Xcm'
}

export type V1Junctions = V1Junctions_Here | V1Junctions_X1 | V1Junctions_X2 | V1Junctions_X3 | V1Junctions_X4 | V1Junctions_X5 | V1Junctions_X6 | V1Junctions_X7 | V1Junctions_X8

export interface V1Junctions_Here {
    __kind: 'Here'
}

export interface V1Junctions_X1 {
    __kind: 'X1'
    value: V1Junction
}

export interface V1Junctions_X2 {
    __kind: 'X2'
    value: [V1Junction, V1Junction]
}

export interface V1Junctions_X3 {
    __kind: 'X3'
    value: [V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X4 {
    __kind: 'X4'
    value: [V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X5 {
    __kind: 'X5'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X6 {
    __kind: 'X6'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X7 {
    __kind: 'X7'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X8 {
    __kind: 'X8'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export type V1Junction = V1Junction_AccountId32 | V1Junction_AccountIndex64 | V1Junction_AccountKey20 | V1Junction_GeneralIndex | V1Junction_GeneralKey | V1Junction_OnlyChild | V1Junction_PalletInstance | V1Junction_Parachain | V1Junction_Plurality

export interface V1Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V0NetworkId
    id: Bytes
}

export interface V1Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V0NetworkId
    index: bigint
}

export interface V1Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V0NetworkId
    key: Bytes
}

export interface V1Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V1Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: Bytes
}

export interface V1Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V1Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V1Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V1Junction_Plurality {
    __kind: 'Plurality'
    id: V0BodyId
    part: V0BodyPart
}

export type V0BodyPart = V0BodyPart_AtLeastProportion | V0BodyPart_Fraction | V0BodyPart_Members | V0BodyPart_MoreThanProportion | V0BodyPart_Voice

export interface V0BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V0BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V0BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V0BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V0BodyPart_Voice {
    __kind: 'Voice'
}

export type V0BodyId = V0BodyId_Executive | V0BodyId_Index | V0BodyId_Judicial | V0BodyId_Legislative | V0BodyId_Named | V0BodyId_Technical | V0BodyId_Unit

export interface V0BodyId_Executive {
    __kind: 'Executive'
}

export interface V0BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V0BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V0BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V0BodyId_Named {
    __kind: 'Named'
    value: Bytes
}

export interface V0BodyId_Technical {
    __kind: 'Technical'
}

export interface V0BodyId_Unit {
    __kind: 'Unit'
}

export type V0NetworkId = V0NetworkId_Any | V0NetworkId_Kusama | V0NetworkId_Named | V0NetworkId_Polkadot

export interface V0NetworkId_Any {
    __kind: 'Any'
}

export interface V0NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V0NetworkId_Named {
    __kind: 'Named'
    value: Bytes
}

export interface V0NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export type V1MultiAssetFilter = V1MultiAssetFilter_Definite | V1MultiAssetFilter_Wild

export interface V1MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V1MultiAsset[]
}

export interface V1MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V1WildMultiAsset
}

export type V1WildMultiAsset = V1WildMultiAsset_All | V1WildMultiAsset_AllOf

export interface V1WildMultiAsset_All {
    __kind: 'All'
}

export interface V1WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V1AssetId
    fun: V1WildFungibility
}

export type V1WildFungibility = V1WildFungibility_Fungible | V1WildFungibility_NonFungible

export interface V1WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V1WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export type V1AssetId = V1AssetId_Abstract | V1AssetId_Concrete

export interface V1AssetId_Abstract {
    __kind: 'Abstract'
    value: Bytes
}

export interface V1AssetId_Concrete {
    __kind: 'Concrete'
    value: V1MultiLocation
}

export type V2WeightLimit = V2WeightLimit_Limited | V2WeightLimit_Unlimited

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V1MultiAsset {
    id: V1AssetId
    fun: V1Fungibility
}

export type V1Fungibility = V1Fungibility_Fungible | V1Fungibility_NonFungible

export interface V1Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V1Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V1AssetInstance
}

export type V1AssetInstance = V1AssetInstance_Array16 | V1AssetInstance_Array32 | V1AssetInstance_Array4 | V1AssetInstance_Array8 | V1AssetInstance_Blob | V1AssetInstance_Index | V1AssetInstance_Undefined

export interface V1AssetInstance_Array16 {
    __kind: 'Array16'
    value: Bytes
}

export interface V1AssetInstance_Array32 {
    __kind: 'Array32'
    value: Bytes
}

export interface V1AssetInstance_Array4 {
    __kind: 'Array4'
    value: Bytes
}

export interface V1AssetInstance_Array8 {
    __kind: 'Array8'
    value: Bytes
}

export interface V1AssetInstance_Blob {
    __kind: 'Blob'
    value: Bytes
}

export interface V1AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V1AssetInstance_Undefined {
    __kind: 'Undefined'
}

export type V2Response = V2Response_Assets | V2Response_ExecutionResult | V2Response_Null | V2Response_Version

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V1MultiAsset[]
}

export interface V2Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value?: ([number, V2Error] | undefined)
}

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export type VersionedMultiLocation = VersionedMultiLocation_V0 | VersionedMultiLocation_V1

export interface VersionedMultiLocation_V0 {
    __kind: 'V0'
    value: V0MultiLocation
}

export interface VersionedMultiLocation_V1 {
    __kind: 'V1'
    value: V1MultiLocation
}

export type V0MultiLocation = V0MultiLocation_Null | V0MultiLocation_X1 | V0MultiLocation_X2 | V0MultiLocation_X3 | V0MultiLocation_X4 | V0MultiLocation_X5 | V0MultiLocation_X6 | V0MultiLocation_X7 | V0MultiLocation_X8

export interface V0MultiLocation_Null {
    __kind: 'Null'
}

export interface V0MultiLocation_X1 {
    __kind: 'X1'
    value: V0Junction
}

export interface V0MultiLocation_X2 {
    __kind: 'X2'
    value: [V0Junction, V0Junction]
}

export interface V0MultiLocation_X3 {
    __kind: 'X3'
    value: [V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X4 {
    __kind: 'X4'
    value: [V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X5 {
    __kind: 'X5'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X6 {
    __kind: 'X6'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X7 {
    __kind: 'X7'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X8 {
    __kind: 'X8'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export type V0Junction = V0Junction_AccountId32 | V0Junction_AccountIndex64 | V0Junction_AccountKey20 | V0Junction_GeneralIndex | V0Junction_GeneralKey | V0Junction_OnlyChild | V0Junction_PalletInstance | V0Junction_Parachain | V0Junction_Parent | V0Junction_Plurality

export interface V0Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V0NetworkId
    id: Bytes
}

export interface V0Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V0NetworkId
    index: bigint
}

export interface V0Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V0NetworkId
    key: Bytes
}

export interface V0Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V0Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: Bytes
}

export interface V0Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V0Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V0Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V0Junction_Parent {
    __kind: 'Parent'
}

export interface V0Junction_Plurality {
    __kind: 'Plurality'
    id: V0BodyId
    part: V0BodyPart
}

export type V2Outcome = V2Outcome_Complete | V2Outcome_Error | V2Outcome_Incomplete

export interface V2Outcome_Complete {
    __kind: 'Complete'
    value: bigint
}

export interface V2Outcome_Error {
    __kind: 'Error'
    value: V2Error
}

export interface V2Outcome_Incomplete {
    __kind: 'Incomplete'
    value: [bigint, V2Error]
}

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1

export interface VersionedMultiAssets_V0 {
    __kind: 'V0'
    value: V0MultiAsset[]
}

export interface VersionedMultiAssets_V1 {
    __kind: 'V1'
    value: V1MultiAsset[]
}

export type V0MultiAsset = V0MultiAsset_AbstractFungible | V0MultiAsset_AbstractNonFungible | V0MultiAsset_All | V0MultiAsset_AllAbstractFungible | V0MultiAsset_AllAbstractNonFungible | V0MultiAsset_AllConcreteFungible | V0MultiAsset_AllConcreteNonFungible | V0MultiAsset_AllFungible | V0MultiAsset_AllNonFungible | V0MultiAsset_ConcreteFungible | V0MultiAsset_ConcreteNonFungible | V0MultiAsset_None

export interface V0MultiAsset_AbstractFungible {
    __kind: 'AbstractFungible'
    id: Bytes
    amount: bigint
}

export interface V0MultiAsset_AbstractNonFungible {
    __kind: 'AbstractNonFungible'
    class: Bytes
    instance: V1AssetInstance
}

export interface V0MultiAsset_All {
    __kind: 'All'
}

export interface V0MultiAsset_AllAbstractFungible {
    __kind: 'AllAbstractFungible'
    id: Bytes
}

export interface V0MultiAsset_AllAbstractNonFungible {
    __kind: 'AllAbstractNonFungible'
    class: Bytes
}

export interface V0MultiAsset_AllConcreteFungible {
    __kind: 'AllConcreteFungible'
    id: V0MultiLocation
}

export interface V0MultiAsset_AllConcreteNonFungible {
    __kind: 'AllConcreteNonFungible'
    class: V0MultiLocation
}

export interface V0MultiAsset_AllFungible {
    __kind: 'AllFungible'
}

export interface V0MultiAsset_AllNonFungible {
    __kind: 'AllNonFungible'
}

export interface V0MultiAsset_ConcreteFungible {
    __kind: 'ConcreteFungible'
    id: V0MultiLocation
    amount: bigint
}

export interface V0MultiAsset_ConcreteNonFungible {
    __kind: 'ConcreteNonFungible'
    class: V0MultiLocation
    instance: V1AssetInstance
}

export interface V0MultiAsset_None {
    __kind: 'None'
}

export interface V1MultiLocation {
    parents: number
    interior: V1Junctions
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ParachainSystemEvent = ParachainSystemEvent_DownwardMessagesProcessed | ParachainSystemEvent_DownwardMessagesReceived | ParachainSystemEvent_UpgradeAuthorized | ParachainSystemEvent_ValidationFunctionApplied | ParachainSystemEvent_ValidationFunctionDiscarded | ParachainSystemEvent_ValidationFunctionStored

/**
 * Downward messages were processed using the given weight.
 * \[ weight_used, result_mqc_head \]
 */
export interface ParachainSystemEvent_DownwardMessagesProcessed {
    __kind: 'DownwardMessagesProcessed'
    value: [bigint, H256]
}

/**
 * Some downward messages have been received and will be processed.
 * \[ count \]
 */
export interface ParachainSystemEvent_DownwardMessagesReceived {
    __kind: 'DownwardMessagesReceived'
    value: number
}

/**
 * An upgrade has been authorized.
 */
export interface ParachainSystemEvent_UpgradeAuthorized {
    __kind: 'UpgradeAuthorized'
    value: H256
}

/**
 * The validation function was applied as of the contained relay chain block number.
 */
export interface ParachainSystemEvent_ValidationFunctionApplied {
    __kind: 'ValidationFunctionApplied'
    value: number
}

/**
 * The relay-chain aborted the upgrade process.
 */
export interface ParachainSystemEvent_ValidationFunctionDiscarded {
    __kind: 'ValidationFunctionDiscarded'
}

/**
 * The validation function has been scheduled to apply.
 */
export interface ParachainSystemEvent_ValidationFunctionStored {
    __kind: 'ValidationFunctionStored'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type DmpQueueEvent = DmpQueueEvent_ExecutedDownward | DmpQueueEvent_InvalidFormat | DmpQueueEvent_OverweightEnqueued | DmpQueueEvent_OverweightServiced | DmpQueueEvent_UnsupportedVersion | DmpQueueEvent_WeightExhausted

/**
 * Downward message executed with the given outcome.
 * \[ id, outcome \]
 */
export interface DmpQueueEvent_ExecutedDownward {
    __kind: 'ExecutedDownward'
    value: [Bytes, V2Outcome]
}

/**
 * Downward message is invalid XCM.
 * \[ id \]
 */
export interface DmpQueueEvent_InvalidFormat {
    __kind: 'InvalidFormat'
    value: Bytes
}

/**
 * Downward message is overweight and was placed in the overweight queue.
 * \[ id, index, required \]
 */
export interface DmpQueueEvent_OverweightEnqueued {
    __kind: 'OverweightEnqueued'
    value: [Bytes, bigint, bigint]
}

/**
 * Downward message from the overweight queue was executed.
 * \[ index, used \]
 */
export interface DmpQueueEvent_OverweightServiced {
    __kind: 'OverweightServiced'
    value: [bigint, bigint]
}

/**
 * Downward message is unsupported version of XCM.
 * \[ id \]
 */
export interface DmpQueueEvent_UnsupportedVersion {
    __kind: 'UnsupportedVersion'
    value: Bytes
}

/**
 * The weight limit for handling downward messages was reached.
 * \[ id, remaining, required \]
 */
export interface DmpQueueEvent_WeightExhausted {
    __kind: 'WeightExhausted'
    value: [Bytes, bigint, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CumulusXcmEvent = CumulusXcmEvent_ExecutedDownward | CumulusXcmEvent_InvalidFormat | CumulusXcmEvent_UnsupportedVersion

/**
 * Downward message executed with the given outcome.
 * \[ id, outcome \]
 */
export interface CumulusXcmEvent_ExecutedDownward {
    __kind: 'ExecutedDownward'
    value: [Bytes, V2Outcome]
}

/**
 * Downward message is invalid XCM.
 * \[ id \]
 */
export interface CumulusXcmEvent_InvalidFormat {
    __kind: 'InvalidFormat'
    value: Bytes
}

/**
 * Downward message is unsupported version of XCM.
 * \[ id \]
 */
export interface CumulusXcmEvent_UnsupportedVersion {
    __kind: 'UnsupportedVersion'
    value: Bytes
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CollatorSelectionEvent = CollatorSelectionEvent_CandidateAdded | CollatorSelectionEvent_CandidateRemoved | CollatorSelectionEvent_NewCandidacyBond | CollatorSelectionEvent_NewDesiredCandidates | CollatorSelectionEvent_NewInvulnerables

export interface CollatorSelectionEvent_CandidateAdded {
    __kind: 'CandidateAdded'
    value: [AccountId32, bigint]
}

export interface CollatorSelectionEvent_CandidateRemoved {
    __kind: 'CandidateRemoved'
    value: AccountId32
}

export interface CollatorSelectionEvent_NewCandidacyBond {
    __kind: 'NewCandidacyBond'
    value: bigint
}

export interface CollatorSelectionEvent_NewDesiredCandidates {
    __kind: 'NewDesiredCandidates'
    value: number
}

export interface CollatorSelectionEvent_NewInvulnerables {
    __kind: 'NewInvulnerables'
    value: AccountId32[]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type BalancesEvent = BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_DustLost | BalancesEvent_Endowed | BalancesEvent_ReserveRepatriated | BalancesEvent_Reserved | BalancesEvent_Slashed | BalancesEvent_Transfer | BalancesEvent_Unreserved | BalancesEvent_Withdraw

/**
 * A balance was set by root.
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    who: AccountId32
    free: bigint
    reserved: bigint
}

/**
 * Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    who: AccountId32
    amount: bigint
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss.
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    account: AccountId32
    amount: bigint
}

/**
 * An account was created with some free balance.
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    account: AccountId32
    freeBalance: bigint
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    from: AccountId32
    to: AccountId32
    amount: bigint
    destinationStatus: BalanceStatus
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was removed from the account (e.g. for misbehavior).
 */
export interface BalancesEvent_Slashed {
    __kind: 'Slashed'
    who: AccountId32
    amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    from: AccountId32
    to: AccountId32
    amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees).
 */
export interface BalancesEvent_Withdraw {
    __kind: 'Withdraw'
    who: AccountId32
    amount: bigint
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export const EventRecord: sts.Type<EventRecord> = sts.struct(() => {
    return  {
        phase: Phase,
        event: Event,
        topics: sts.array(() => H256),
    }
})

export const Event: sts.Type<Event> = sts.closedEnum(() => {
    return  {
        Balances: BalancesEvent,
        CollatorSelection: CollatorSelectionEvent,
        CumulusXcm: CumulusXcmEvent,
        DmpQueue: DmpQueueEvent,
        ParachainSystem: ParachainSystemEvent,
        PolkadotXcm: PolkadotXcmEvent,
        Session: SessionEvent,
        Sudo: SudoEvent,
        System: SystemEvent,
        XcmpQueue: XcmpQueueEvent,
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const XcmpQueueEvent: sts.Type<XcmpQueueEvent> = sts.closedEnum(() => {
    return  {
        BadFormat: sts.option(() => H256),
        BadVersion: sts.option(() => H256),
        Fail: sts.tuple(() => [sts.option(() => H256), V2Error]),
        Success: sts.option(() => H256),
        UpwardMessageSent: sts.option(() => H256),
        XcmpMessageSent: sts.option(() => H256),
    }
})

/**
 * Event for the System pallet.
 */
export const SystemEvent: sts.Type<SystemEvent> = sts.closedEnum(() => {
    return  {
        CodeUpdated: sts.unit(),
        ExtrinsicFailed: sts.tuple(() => [DispatchError, DispatchInfo]),
        ExtrinsicSuccess: DispatchInfo,
        KilledAccount: AccountId32,
        NewAccount: AccountId32,
        Remarked: sts.tuple(() => [AccountId32, H256]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const SudoEvent: sts.Type<SudoEvent> = sts.closedEnum(() => {
    return  {
        KeyChanged: sts.enumStruct({
            newSudoer: AccountId32,
        }),
        Sudid: sts.enumStruct({
            sudoResult: sts.result(() => sts.unit(), () => DispatchError),
        }),
        SudoAsDone: sts.enumStruct({
            sudoResult: sts.result(() => sts.unit(), () => DispatchError),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const SessionEvent: sts.Type<SessionEvent> = sts.closedEnum(() => {
    return  {
        NewSession: sts.enumStruct({
            sessionIndex: sts.number(),
        }),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const PolkadotXcmEvent: sts.Type<PolkadotXcmEvent> = sts.closedEnum(() => {
    return  {
        AssetsTrapped: sts.tuple(() => [H256, V1MultiLocation, VersionedMultiAssets]),
        Attempted: V2Outcome,
        InvalidResponder: sts.tuple(() => [V1MultiLocation, sts.bigint(), sts.option(() => V1MultiLocation)]),
        InvalidResponderVersion: sts.tuple(() => [V1MultiLocation, sts.bigint()]),
        Notified: sts.tuple(() => [sts.bigint(), sts.number(), sts.number()]),
        NotifyDecodeFailed: sts.tuple(() => [sts.bigint(), sts.number(), sts.number()]),
        NotifyDispatchError: sts.tuple(() => [sts.bigint(), sts.number(), sts.number()]),
        NotifyOverweight: sts.tuple(() => [sts.bigint(), sts.number(), sts.number(), sts.bigint(), sts.bigint()]),
        NotifyTargetMigrationFail: sts.tuple(() => [VersionedMultiLocation, sts.bigint()]),
        NotifyTargetSendFail: sts.tuple(() => [V1MultiLocation, sts.bigint(), V2Error]),
        ResponseReady: sts.tuple(() => [sts.bigint(), V2Response]),
        ResponseTaken: sts.bigint(),
        Sent: sts.tuple(() => [V1MultiLocation, V1MultiLocation, sts.array(() => V2Instruction)]),
        SupportedVersionChanged: sts.tuple(() => [V1MultiLocation, sts.number()]),
        UnexpectedResponse: sts.tuple(() => [V1MultiLocation, sts.bigint()]),
        VersionChangeNotified: sts.tuple(() => [V1MultiLocation, sts.number()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const ParachainSystemEvent: sts.Type<ParachainSystemEvent> = sts.closedEnum(() => {
    return  {
        DownwardMessagesProcessed: sts.tuple(() => [sts.bigint(), H256]),
        DownwardMessagesReceived: sts.number(),
        UpgradeAuthorized: H256,
        ValidationFunctionApplied: sts.number(),
        ValidationFunctionDiscarded: sts.unit(),
        ValidationFunctionStored: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const DmpQueueEvent: sts.Type<DmpQueueEvent> = sts.closedEnum(() => {
    return  {
        ExecutedDownward: sts.tuple(() => [sts.bytes(), V2Outcome]),
        InvalidFormat: sts.bytes(),
        OverweightEnqueued: sts.tuple(() => [sts.bytes(), sts.bigint(), sts.bigint()]),
        OverweightServiced: sts.tuple(() => [sts.bigint(), sts.bigint()]),
        UnsupportedVersion: sts.bytes(),
        WeightExhausted: sts.tuple(() => [sts.bytes(), sts.bigint(), sts.bigint()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const CumulusXcmEvent: sts.Type<CumulusXcmEvent> = sts.closedEnum(() => {
    return  {
        ExecutedDownward: sts.tuple(() => [sts.bytes(), V2Outcome]),
        InvalidFormat: sts.bytes(),
        UnsupportedVersion: sts.bytes(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const CollatorSelectionEvent: sts.Type<CollatorSelectionEvent> = sts.closedEnum(() => {
    return  {
        CandidateAdded: sts.tuple(() => [AccountId32, sts.bigint()]),
        CandidateRemoved: AccountId32,
        NewCandidacyBond: sts.bigint(),
        NewDesiredCandidates: sts.number(),
        NewInvulnerables: sts.array(() => AccountId32),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const BalancesEvent: sts.Type<BalancesEvent> = sts.closedEnum(() => {
    return  {
        BalanceSet: sts.enumStruct({
            who: AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        }),
        Deposit: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DustLost: sts.enumStruct({
            account: AccountId32,
            amount: sts.bigint(),
        }),
        Endowed: sts.enumStruct({
            account: AccountId32,
            freeBalance: sts.bigint(),
        }),
        ReserveRepatriated: sts.enumStruct({
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
            destinationStatus: BalanceStatus,
        }),
        Reserved: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Slashed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Transfer: sts.enumStruct({
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
        }),
        Unreserved: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Withdraw: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

export interface Digest {
    logs: DigestItem[]
}

export type DigestItem = DigestItem_Consensus | DigestItem_Other | DigestItem_PreRuntime | DigestItem_RuntimeEnvironmentUpdated | DigestItem_Seal

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Bytes, Bytes]
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Bytes
}

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Bytes, Bytes]
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Bytes, Bytes]
}

export const Digest: sts.Type<Digest> = sts.struct(() => {
    return  {
        logs: sts.array(() => DigestItem),
    }
})

export const DigestItem: sts.Type<DigestItem> = sts.closedEnum(() => {
    return  {
        Consensus: sts.tuple(() => [sts.bytes(), sts.bytes()]),
        Other: sts.bytes(),
        PreRuntime: sts.tuple(() => [sts.bytes(), sts.bytes()]),
        RuntimeEnvironmentUpdated: sts.unit(),
        Seal: sts.tuple(() => [sts.bytes(), sts.bytes()]),
    }
})

export type H256 = Bytes

export interface PerDispatchClass {
    normal: bigint
    operational: bigint
    mandatory: bigint
}

export const PerDispatchClass: sts.Type<PerDispatchClass> = sts.struct(() => {
    return  {
        normal: sts.bigint(),
        operational: sts.bigint(),
        mandatory: sts.bigint(),
    }
})

export type AccountId32 = Bytes

export interface AccountInfo {
    nonce: number
    consumers: number
    providers: number
    sufficients: number
    data: AccountData
}

export const AccountInfo: sts.Type<AccountInfo> = sts.struct(() => {
    return  {
        nonce: sts.number(),
        consumers: sts.number(),
        providers: sts.number(),
        sufficients: sts.number(),
        data: AccountData,
    }
})

export const Call: sts.Type<Call> = sts.closedEnum(() => {
    return  {
        Authorship: AuthorshipCall,
        Balances: BalancesCall,
        CollatorSelection: CollatorSelectionCall,
        DmpQueue: DmpQueueCall,
        ParachainSystem: ParachainSystemCall,
        PolkadotXcm: PolkadotXcmCall,
        Session: SessionCall,
        Sudo: SudoCall,
        System: SystemCall,
        Timestamp: TimestampCall,
        XcmpQueue: XcmpQueueCall,
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const XcmpQueueCall: sts.Type<XcmpQueueCall> = sts.closedEnum(() => {
    return  {
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcmpQueueCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const TimestampCall: sts.Type<TimestampCall> = sts.closedEnum(() => {
    return  {
        set: sts.enumStruct({
            now: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TimestampCall = TimestampCall_set

/**
 * Set the current time.
 * 
 * This call should be invoked exactly once per block. It will panic at the finalization
 * phase, if this call hasn't been invoked by that time.
 * 
 * The timestamp should be greater than the previous one by the amount specified by
 * `MinimumPeriod`.
 * 
 * The dispatch origin for this call must be `Inherent`.
 * 
 * # <weight>
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 * # </weight>
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SystemCall: sts.Type<SystemCall> = sts.closedEnum(() => {
    return  {
        fill_block: sts.enumStruct({
            ratio: Perbill,
        }),
        kill_prefix: sts.enumStruct({
            prefix: sts.bytes(),
            subkeys: sts.number(),
        }),
        kill_storage: sts.enumStruct({
            keys: sts.array(() => sts.bytes()),
        }),
        remark: sts.enumStruct({
            remark: sts.bytes(),
        }),
        remark_with_event: sts.enumStruct({
            remark: sts.bytes(),
        }),
        set_code: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_code_without_checks: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_heap_pages: sts.enumStruct({
            pages: sts.bigint(),
        }),
        set_storage: sts.enumStruct({
            items: sts.array(() => sts.tuple(() => [sts.bytes(), sts.bytes()])),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_fill_block | SystemCall_kill_prefix | SystemCall_kill_storage | SystemCall_remark | SystemCall_remark_with_event | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_heap_pages | SystemCall_set_storage

/**
 * A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: Perbill
}

/**
 * Kill all storage items with a key that starts with the given prefix.
 * 
 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 * the prefix we are removing to accurately calculate the weight of this function.
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Bytes
    subkeys: number
}

/**
 * Kill some items from storage.
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Bytes[]
}

/**
 * Make some on-chain remark.
 * 
 * # <weight>
 * - `O(1)`
 * # </weight>
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Bytes
}

/**
 * Make some on-chain remark and emit event.
 * 
 * # <weight>
 * - `O(b)` where b is the length of the remark.
 * - 1 event.
 * # </weight>
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Bytes
}

/**
 * Set the new runtime code.
 * 
 * # <weight>
 * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
 *   expensive).
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime, but generally this is very
 * expensive. We will treat this as a full block.
 * # </weight>
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Bytes
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * # <weight>
 * - `O(C)` where `C` length of `code`
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime. We will treat this as a full
 * block. # </weight>
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Bytes
}

/**
 * Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * Set some items of storage.
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Bytes, Bytes][]
}

export type Perbill = number

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SudoCall: sts.Type<SudoCall> = sts.closedEnum(() => {
    return  {
        set_key: sts.enumStruct({
            new: MultiAddress,
        }),
        sudo: sts.enumStruct({
            call: Call,
        }),
        sudo_as: sts.enumStruct({
            who: MultiAddress,
            call: Call,
        }),
        sudo_unchecked_weight: sts.enumStruct({
            call: Call,
            weight: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SudoCall = SudoCall_set_key | SudoCall_sudo | SudoCall_sudo_as | SudoCall_sudo_unchecked_weight

/**
 * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
 * key.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB change.
 * # </weight>
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: MultiAddress
}

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + 10,000.
 * # </weight>
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Call
}

/**
 * Authenticates the sudo key and dispatches a function call with `Signed` origin from
 * a given account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + 10,000.
 * # </weight>
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: MultiAddress
    call: Call
}

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * This function does not check the weight of the call, and instead allows the
 * Sudo user to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - The weight of this call is defined by the caller.
 * # </weight>
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: bigint
}

export type MultiAddress = MultiAddress_Address20 | MultiAddress_Address32 | MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw

export interface MultiAddress_Address20 {
    __kind: 'Address20'
    value: Bytes
}

export interface MultiAddress_Address32 {
    __kind: 'Address32'
    value: Bytes
}

export interface MultiAddress_Id {
    __kind: 'Id'
    value: AccountId32
}

export interface MultiAddress_Index {
    __kind: 'Index'
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Bytes
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const SessionCall: sts.Type<SessionCall> = sts.closedEnum(() => {
    return  {
        purge_keys: sts.unit(),
        set_keys: sts.enumStruct({
            keys: SessionKeys,
            proof: sts.bytes(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SessionCall = SessionCall_purge_keys | SessionCall_set_keys

/**
 * Removes any session key(s) of the function caller.
 * 
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be Signed and the account must be either be
 * convertible to a validator ID using the chain's typical addressing system (this usually
 * means being a controller account) or directly convertible into a validator ID (which
 * usually means being a stash account).
 * 
 * # <weight>
 * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
 *   of `T::Keys::key_ids()` which is fixed.
 * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
 * - DbWrites: `NextKeys`, `origin account`
 * - DbWrites per key id: `KeyOwner`
 * # </weight>
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * Sets the session key(s) of the function caller to `keys`.
 * Allows an account to set its session key prior to becoming a validator.
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be signed.
 * 
 * # <weight>
 * - Complexity: `O(1)`. Actual cost depends on the number of length of
 *   `T::Keys::key_ids()` which is fixed.
 * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
 * - DbWrites: `origin account`, `NextKeys`
 * - DbReads per key id: `KeyOwner`
 * - DbWrites per key id: `KeyOwner`
 * # </weight>
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Bytes
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const PolkadotXcmCall: sts.Type<PolkadotXcmCall> = sts.closedEnum(() => {
    return  {
        execute: sts.enumStruct({
            message: Type_198,
            maxWeight: sts.bigint(),
        }),
        force_default_xcm_version: sts.enumStruct({
            maybeXcmVersion: sts.option(() => sts.number()),
        }),
        force_subscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_unsubscribe_version_notify: sts.enumStruct({
            location: VersionedMultiLocation,
        }),
        force_xcm_version: sts.enumStruct({
            location: V1MultiLocation,
            xcmVersion: sts.number(),
        }),
        limited_reserve_transfer_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V2WeightLimit,
        }),
        limited_teleport_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: V2WeightLimit,
        }),
        reserve_transfer_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
        }),
        send: sts.enumStruct({
            dest: VersionedMultiLocation,
            message: VersionedXcm,
        }),
        teleport_assets: sts.enumStruct({
            dest: VersionedMultiLocation,
            beneficiary: VersionedMultiLocation,
            assets: VersionedMultiAssets,
            feeAssetItem: sts.number(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PolkadotXcmCall = PolkadotXcmCall_execute | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets

/**
 * Execute an XCM message from a local, signed, origin.
 * 
 * An event is deposited indicating whether `msg` could be executed completely or only
 * partially.
 * 
 * No more than `max_weight` will be used in its attempted execution. If this is less than the
 * maximum amount of weight that the message could take to be executed, then no execution
 * attempt will be made.
 * 
 * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
 * to completion; only that *some* of it was executed.
 */
export interface PolkadotXcmCall_execute {
    __kind: 'execute'
    message: Type_198
    maxWeight: bigint
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 * 
 * - `origin`: Must be Root.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface PolkadotXcmCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion?: (number | undefined)
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we should subscribe for XCM version notifications.
 */
export interface PolkadotXcmCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * Require that a particular destination should no longer notify us regarding any XCM
 * version changes.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we are currently subscribed for XCM version
 *   notifications which we no longer desire.
 */
export interface PolkadotXcmCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * Extoll that a particular destination can be communicated with through a particular
 * version of XCM.
 * 
 * - `origin`: Must be Root.
 * - `location`: The destination that is being described.
 * - `xcm_version`: The latest version of XCM that `location` supports.
 */
export interface PolkadotXcmCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V1MultiLocation
    xcmVersion: number
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 * a notification XCM.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_reserve_transfer_assets {
    __kind: 'limited_reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V2WeightLimit
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_teleport_assets {
    __kind: 'limited_teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V2WeightLimit
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 * a notification XCM.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
 * fee-weight is calculated locally and thus remote weights are assumed to be equal to
 * local weights.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

export interface PolkadotXcmCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
 * fee-weight is calculated locally and thus remote weights are assumed to be equal to
 * local weights.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 */
export interface PolkadotXcmCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

export type VersionedXcm = VersionedXcm_V0 | VersionedXcm_V1 | VersionedXcm_V2

export interface VersionedXcm_V0 {
    __kind: 'V0'
    value: V0Xcm
}

export interface VersionedXcm_V1 {
    __kind: 'V1'
    value: V1Xcm
}

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export type V1Xcm = V1Xcm_HrmpChannelAccepted | V1Xcm_HrmpChannelClosing | V1Xcm_HrmpNewChannelOpenRequest | V1Xcm_QueryResponse | V1Xcm_ReceiveTeleportedAsset | V1Xcm_RelayedFrom | V1Xcm_ReserveAssetDeposited | V1Xcm_SubscribeVersion | V1Xcm_Transact | V1Xcm_TransferAsset | V1Xcm_TransferReserveAsset | V1Xcm_UnsubscribeVersion | V1Xcm_WithdrawAsset

export interface V1Xcm_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V1Xcm_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V1Xcm_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V1Xcm_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V1Response
}

export interface V1Xcm_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: V1MultiAsset[]
    effects: V1Order[]
}

export interface V1Xcm_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V1Junctions
    message: V1Xcm
}

export interface V1Xcm_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    assets: V1MultiAsset[]
    effects: V1Order[]
}

export interface V1Xcm_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V1Xcm_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V1Xcm_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface V1Xcm_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface V1Xcm_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V1Xcm_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V1MultiAsset[]
    effects: V1Order[]
}

export type V1Order = V1Order_BuyExecution | V1Order_DepositAsset | V1Order_DepositReserveAsset | V1Order_ExchangeAsset | V1Order_InitiateReserveWithdraw | V1Order_InitiateTeleport | V1Order_Noop | V1Order_QueryHolding

export interface V1Order_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    instructions: V1Xcm[]
}

export interface V1Order_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface V1Order_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface V1Order_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface V1Order_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    effects: V1Order[]
}

export interface V1Order_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface V1Order_Noop {
    __kind: 'Noop'
}

export interface V1Order_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
}

export type V1Response = V1Response_Assets | V1Response_Version

export interface V1Response_Assets {
    __kind: 'Assets'
    value: V1MultiAsset[]
}

export interface V1Response_Version {
    __kind: 'Version'
    value: number
}

export type V0Xcm = V0Xcm_HrmpChannelAccepted | V0Xcm_HrmpChannelClosing | V0Xcm_HrmpNewChannelOpenRequest | V0Xcm_QueryResponse | V0Xcm_RelayedFrom | V0Xcm_ReserveAssetDeposit | V0Xcm_TeleportAsset | V0Xcm_Transact | V0Xcm_TransferAsset | V0Xcm_TransferReserveAsset | V0Xcm_WithdrawAsset

export interface V0Xcm_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V0Xcm_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V0Xcm_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V0Xcm_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V0Response
}

export interface V0Xcm_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V0MultiLocation
    message: V0Xcm
}

export interface V0Xcm_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: V0MultiAsset[]
    effects: V0Order[]
}

export interface V0Xcm_TeleportAsset {
    __kind: 'TeleportAsset'
    assets: V0MultiAsset[]
    effects: V0Order[]
}

export interface V0Xcm_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V0Xcm_TransferAsset {
    __kind: 'TransferAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface V0Xcm_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface V0Xcm_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V0MultiAsset[]
    effects: V0Order[]
}

export type V0Order = V0Order_BuyExecution | V0Order_DepositAsset | V0Order_DepositReserveAsset | V0Order_ExchangeAsset | V0Order_InitiateReserveWithdraw | V0Order_InitiateTeleport | V0Order_Null | V0Order_QueryHolding

export interface V0Order_BuyExecution {
    __kind: 'BuyExecution'
    fees: V0MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    xcm: V0Xcm[]
}

export interface V0Order_DepositAsset {
    __kind: 'DepositAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface V0Order_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface V0Order_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V0MultiAsset[]
    receive: V0MultiAsset[]
}

export interface V0Order_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V0MultiAsset[]
    reserve: V0MultiLocation
    effects: V0Order[]
}

export interface V0Order_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface V0Order_Null {
    __kind: 'Null'
}

export interface V0Order_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V0MultiLocation
    assets: V0MultiAsset[]
}

export type V0Response = V0Response_Assets

export interface V0Response_Assets {
    __kind: 'Assets'
    value: V0MultiAsset[]
}

export type Type_198 = Type_198_V0 | Type_198_V1 | Type_198_V2

export interface Type_198_V0 {
    __kind: 'V0'
    value: Type_199
}

export interface Type_198_V1 {
    __kind: 'V1'
    value: Type_204
}

export interface Type_198_V2 {
    __kind: 'V2'
    value: Type_210[]
}

export type Type_210 = Type_210_BuyExecution | Type_210_ClaimAsset | Type_210_ClearError | Type_210_ClearOrigin | Type_210_DepositAsset | Type_210_DepositReserveAsset | Type_210_DescendOrigin | Type_210_ExchangeAsset | Type_210_HrmpChannelAccepted | Type_210_HrmpChannelClosing | Type_210_HrmpNewChannelOpenRequest | Type_210_InitiateReserveWithdraw | Type_210_InitiateTeleport | Type_210_QueryHolding | Type_210_QueryResponse | Type_210_ReceiveTeleportedAsset | Type_210_RefundSurplus | Type_210_ReportError | Type_210_ReserveAssetDeposited | Type_210_SetAppendix | Type_210_SetErrorHandler | Type_210_SubscribeVersion | Type_210_Transact | Type_210_TransferAsset | Type_210_TransferReserveAsset | Type_210_Trap | Type_210_UnsubscribeVersion | Type_210_WithdrawAsset

export interface Type_210_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_210_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V1MultiAsset[]
    ticket: V1MultiLocation
}

export interface Type_210_ClearError {
    __kind: 'ClearError'
}

export interface Type_210_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_210_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface Type_210_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_210_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V1Junctions
}

export interface Type_210_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface Type_210_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_210_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_210_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_210_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_210_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_210_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_210_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_210_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V1MultiAsset[]
}

export interface Type_210_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_210_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V1MultiLocation
    maxResponseWeight: bigint
}

export interface Type_210_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V1MultiAsset[]
}

export interface Type_210_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_210[]
}

export interface Type_210_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_210[]
}

export interface Type_210_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_210_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: Type_203
}

export interface Type_210_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface Type_210_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_210_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_210_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_210_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V1MultiAsset[]
}

export interface Type_203 {
    encoded: Bytes
}

export type Type_204 = Type_204_HrmpChannelAccepted | Type_204_HrmpChannelClosing | Type_204_HrmpNewChannelOpenRequest | Type_204_QueryResponse | Type_204_ReceiveTeleportedAsset | Type_204_RelayedFrom | Type_204_ReserveAssetDeposited | Type_204_SubscribeVersion | Type_204_Transact | Type_204_TransferAsset | Type_204_TransferReserveAsset | Type_204_UnsubscribeVersion | Type_204_WithdrawAsset

export interface Type_204_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_204_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_204_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_204_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V1Response
}

export interface Type_204_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: V1MultiAsset[]
    effects: Type_206[]
}

export interface Type_204_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V1Junctions
    message: Type_204
}

export interface Type_204_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    assets: V1MultiAsset[]
    effects: Type_206[]
}

export interface Type_204_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_204_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: Type_203
}

export interface Type_204_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface Type_204_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_204_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_204_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V1MultiAsset[]
    effects: Type_206[]
}

export type Type_206 = Type_206_BuyExecution | Type_206_DepositAsset | Type_206_DepositReserveAsset | Type_206_ExchangeAsset | Type_206_InitiateReserveWithdraw | Type_206_InitiateTeleport | Type_206_Noop | Type_206_QueryHolding

export interface Type_206_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    instructions: Type_204[]
}

export interface Type_206_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface Type_206_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_206_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface Type_206_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    effects: V1Order[]
}

export interface Type_206_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_206_Noop {
    __kind: 'Noop'
}

export interface Type_206_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
}

export type Type_199 = Type_199_HrmpChannelAccepted | Type_199_HrmpChannelClosing | Type_199_HrmpNewChannelOpenRequest | Type_199_QueryResponse | Type_199_RelayedFrom | Type_199_ReserveAssetDeposit | Type_199_TeleportAsset | Type_199_Transact | Type_199_TransferAsset | Type_199_TransferReserveAsset | Type_199_WithdrawAsset

export interface Type_199_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_199_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_199_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_199_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V0Response
}

export interface Type_199_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V0MultiLocation
    message: Type_199
}

export interface Type_199_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: V0MultiAsset[]
    effects: Type_201[]
}

export interface Type_199_TeleportAsset {
    __kind: 'TeleportAsset'
    assets: V0MultiAsset[]
    effects: Type_201[]
}

export interface Type_199_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: Type_203
}

export interface Type_199_TransferAsset {
    __kind: 'TransferAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface Type_199_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_199_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V0MultiAsset[]
    effects: Type_201[]
}

export type Type_201 = Type_201_BuyExecution | Type_201_DepositAsset | Type_201_DepositReserveAsset | Type_201_ExchangeAsset | Type_201_InitiateReserveWithdraw | Type_201_InitiateTeleport | Type_201_Null | Type_201_QueryHolding

export interface Type_201_BuyExecution {
    __kind: 'BuyExecution'
    fees: V0MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    xcm: Type_199[]
}

export interface Type_201_DepositAsset {
    __kind: 'DepositAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface Type_201_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_201_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V0MultiAsset[]
    receive: V0MultiAsset[]
}

export interface Type_201_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V0MultiAsset[]
    reserve: V0MultiLocation
    effects: V0Order[]
}

export interface Type_201_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_201_Null {
    __kind: 'Null'
}

export interface Type_201_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V0MultiLocation
    assets: V0MultiAsset[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const ParachainSystemCall: sts.Type<ParachainSystemCall> = sts.closedEnum(() => {
    return  {
        authorize_upgrade: sts.enumStruct({
            codeHash: H256,
        }),
        enact_authorized_upgrade: sts.enumStruct({
            code: sts.bytes(),
        }),
        set_validation_data: sts.enumStruct({
            data: ParachainInherentData,
        }),
        sudo_send_upward_message: sts.enumStruct({
            message: sts.bytes(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainSystemCall = ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade | ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message

export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: H256
}

export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Bytes
}

/**
 * Set the current validation data.
 * 
 * This should be invoked exactly once per block. It will panic at the finalization
 * phase if the call was not invoked.
 * 
 * The dispatch origin for this call must be `Inherent`
 * 
 * As a side effect, this function upgrades the current validation function
 * if the appropriate time has come.
 */
export interface ParachainSystemCall_set_validation_data {
    __kind: 'set_validation_data'
    data: ParachainInherentData
}

export interface ParachainSystemCall_sudo_send_upward_message {
    __kind: 'sudo_send_upward_message'
    message: Bytes
}

export interface ParachainInherentData {
    validationData: V1PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [Id, InboundHrmpMessage[]][]
}

export interface InboundHrmpMessage {
    sentAt: number
    data: Bytes
}

export interface InboundDownwardMessage {
    sentAt: number
    msg: Bytes
}

export interface StorageProof {
    trieNodes: Bytes[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const DmpQueueCall: sts.Type<DmpQueueCall> = sts.closedEnum(() => {
    return  {
        service_overweight: sts.enumStruct({
            index: sts.bigint(),
            weightLimit: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 * Service a single overweight message.
 * 
 * - `origin`: Must pass `ExecuteOverweightOrigin`.
 * - `index`: The index of the overweight message to service.
 * - `weight_limit`: The amount of weight that message execution may take.
 * 
 * Errors:
 * - `Unknown`: Message of `index` is unknown.
 * - `OverLimit`: Message execution may use greater than `weight_limit`.
 * 
 * Events:
 * - `OverweightServiced`: On success.
 */
export interface DmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const CollatorSelectionCall: sts.Type<CollatorSelectionCall> = sts.closedEnum(() => {
    return  {
        leave_intent: sts.unit(),
        register_as_candidate: sts.unit(),
        set_candidacy_bond: sts.enumStruct({
            bond: sts.bigint(),
        }),
        set_desired_candidates: sts.enumStruct({
            max: sts.number(),
        }),
        set_invulnerables: sts.enumStruct({
            new: sts.array(() => AccountId32),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CollatorSelectionCall = CollatorSelectionCall_leave_intent | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_invulnerables

export interface CollatorSelectionCall_leave_intent {
    __kind: 'leave_intent'
}

export interface CollatorSelectionCall_register_as_candidate {
    __kind: 'register_as_candidate'
}

export interface CollatorSelectionCall_set_candidacy_bond {
    __kind: 'set_candidacy_bond'
    bond: bigint
}

export interface CollatorSelectionCall_set_desired_candidates {
    __kind: 'set_desired_candidates'
    max: number
}

export interface CollatorSelectionCall_set_invulnerables {
    __kind: 'set_invulnerables'
    new: AccountId32[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const BalancesCall: sts.Type<BalancesCall> = sts.closedEnum(() => {
    return  {
        force_transfer: sts.enumStruct({
            source: MultiAddress,
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        force_unreserve: sts.enumStruct({
            who: MultiAddress,
            amount: sts.bigint(),
        }),
        set_balance: sts.enumStruct({
            who: MultiAddress,
            newFree: sts.bigint(),
            newReserved: sts.bigint(),
        }),
        transfer: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
        transfer_all: sts.enumStruct({
            dest: MultiAddress,
            keepAlive: sts.boolean(),
        }),
        transfer_keep_alive: sts.enumStruct({
            dest: MultiAddress,
            value: sts.bigint(),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall = BalancesCall_force_transfer | BalancesCall_force_unreserve | BalancesCall_set_balance | BalancesCall_transfer | BalancesCall_transfer_all | BalancesCall_transfer_keep_alive

/**
 * Exactly as `transfer`, except the origin must be root and the source account may be
 * specified.
 * # <weight>
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
 * # </weight>
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * Unreserve some balance from a user by force.
 * 
 * Can only be called by ROOT.
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 * also decrease the total issuance of the system (`TotalIssuance`).
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: MultiAddress
    newFree: bigint
    newReserved: bigint
}

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * It will decrease the total issuance of the system by the `TransferFee`.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 * 
 * # <weight>
 * - Dependent on arguments but not critical, given proper implementations for input config
 *   types. See related functions below.
 * - It contains a limited number of reads and writes internally and no complex
 *   computation.
 * 
 * Related functions:
 * 
 *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *   - Transferring balances to accounts that did not exist before will cause
 *     `T::OnNewAccount::on_new_account` to be called.
 *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
 *     that the transfer will not kill the origin account.
 * ---------------------------------
 * - Origin account is already in memory, so no DB operations for them.
 * # </weight>
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

/**
 * Transfer the entire transferable balance from the caller account.
 * 
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 * 
 * The dispatch origin of this call must be Signed.
 * 
 * - `dest`: The recipient of the transfer.
 * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *   of the funds the account has, causing the sender account to be killed (false), or
 *   transfer everything except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true). # <weight>
 * - O(1). Just like transfer, but reading the user's transferable balance first.
 *   #</weight>
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer will not kill the
 * origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * [`transfer`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export const AuthorshipCall: sts.Type<AuthorshipCall> = sts.closedEnum(() => {
    return  {
        set_uncles: sts.enumStruct({
            newUncles: sts.array(() => Header),
        }),
    }
})

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 * Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
    __kind: 'set_uncles'
    newUncles: Header[]
}

export interface Header {
    parentHash: H256
    number: number
    stateRoot: H256
    extrinsicsRoot: H256
    digest: Digest
}

export type Call = Call_Authorship | Call_Balances | Call_CollatorSelection | Call_DmpQueue | Call_ParachainSystem | Call_PolkadotXcm | Call_Session | Call_Sudo | Call_System | Call_Timestamp | Call_XcmpQueue

export interface Call_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_CollatorSelection {
    __kind: 'CollatorSelection'
    value: CollatorSelectionCall
}

export interface Call_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
}

export const V2WeightLimit: sts.Type<V2WeightLimit> = sts.closedEnum(() => {
    return  {
        Limited: sts.bigint(),
        Unlimited: sts.unit(),
    }
})

export const Type_198: sts.Type<Type_198> = sts.closedEnum(() => {
    return  {
        V0: Type_199,
        V1: Type_204,
        V2: sts.array(() => Type_210),
    }
})

export const Type_210: sts.Type<Type_210> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V1MultiAsset,
            weightLimit: V2WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            ticket: V1MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V1MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V1MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V1MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V1MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        DescendOrigin: V1Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V1MultiAssetFilter,
            receive: sts.array(() => V1MultiAsset),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V1MultiAssetFilter,
            reserve: V1MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V1MultiAssetFilter,
            dest: V1MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V1MultiLocation,
            assets: V1MultiAssetFilter,
            maxResponseWeight: sts.bigint(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V2Response,
            maxWeight: sts.bigint(),
        }),
        ReceiveTeleportedAsset: sts.array(() => V1MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V1MultiLocation,
            maxResponseWeight: sts.bigint(),
        }),
        ReserveAssetDeposited: sts.array(() => V1MultiAsset),
        SetAppendix: sts.array(() => Type_210),
        SetErrorHandler: sts.array(() => Type_210),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V0OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_203,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            beneficiary: V1MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            dest: V1MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        Trap: sts.bigint(),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V1MultiAsset),
    }
})

export const Type_203: sts.Type<Type_203> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const V0OriginKind: sts.Type<V0OriginKind> = sts.closedEnum(() => {
    return  {
        Native: sts.unit(),
        SovereignAccount: sts.unit(),
        Superuser: sts.unit(),
        Xcm: sts.unit(),
    }
})

export const V1Junctions: sts.Type<V1Junctions> = sts.closedEnum(() => {
    return  {
        Here: sts.unit(),
        X1: V1Junction,
        X2: sts.tuple(() => [V1Junction, V1Junction]),
        X3: sts.tuple(() => [V1Junction, V1Junction, V1Junction]),
        X4: sts.tuple(() => [V1Junction, V1Junction, V1Junction, V1Junction]),
        X5: sts.tuple(() => [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]),
        X6: sts.tuple(() => [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]),
        X7: sts.tuple(() => [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]),
        X8: sts.tuple(() => [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]),
    }
})

export const V1Junction: sts.Type<V1Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: V0NetworkId,
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: V0NetworkId,
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: V0NetworkId,
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: sts.bytes(),
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Plurality: sts.enumStruct({
            id: V0BodyId,
            part: V0BodyPart,
        }),
    }
})

export const V0BodyPart: sts.Type<V0BodyPart> = sts.closedEnum(() => {
    return  {
        AtLeastProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Fraction: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Members: sts.enumStruct({
            count: sts.number(),
        }),
        MoreThanProportion: sts.enumStruct({
            nom: sts.number(),
            denom: sts.number(),
        }),
        Voice: sts.unit(),
    }
})

export const V0BodyId: sts.Type<V0BodyId> = sts.closedEnum(() => {
    return  {
        Executive: sts.unit(),
        Index: sts.number(),
        Judicial: sts.unit(),
        Legislative: sts.unit(),
        Named: sts.bytes(),
        Technical: sts.unit(),
        Unit: sts.unit(),
    }
})

export const V0NetworkId: sts.Type<V0NetworkId> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Kusama: sts.unit(),
        Named: sts.bytes(),
        Polkadot: sts.unit(),
    }
})

export const V1MultiAssetFilter: sts.Type<V1MultiAssetFilter> = sts.closedEnum(() => {
    return  {
        Definite: sts.array(() => V1MultiAsset),
        Wild: V1WildMultiAsset,
    }
})

export const V1WildMultiAsset: sts.Type<V1WildMultiAsset> = sts.closedEnum(() => {
    return  {
        All: sts.unit(),
        AllOf: sts.enumStruct({
            id: V1AssetId,
            fun: V1WildFungibility,
        }),
    }
})

export const V1WildFungibility: sts.Type<V1WildFungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.unit(),
        NonFungible: sts.unit(),
    }
})

export const V1AssetId: sts.Type<V1AssetId> = sts.closedEnum(() => {
    return  {
        Abstract: sts.bytes(),
        Concrete: V1MultiLocation,
    }
})

export const V1MultiAsset: sts.Type<V1MultiAsset> = sts.struct(() => {
    return  {
        id: V1AssetId,
        fun: V1Fungibility,
    }
})

export const V1Fungibility: sts.Type<V1Fungibility> = sts.closedEnum(() => {
    return  {
        Fungible: sts.bigint(),
        NonFungible: V1AssetInstance,
    }
})

export const V1AssetInstance: sts.Type<V1AssetInstance> = sts.closedEnum(() => {
    return  {
        Array16: sts.bytes(),
        Array32: sts.bytes(),
        Array4: sts.bytes(),
        Array8: sts.bytes(),
        Blob: sts.bytes(),
        Index: sts.bigint(),
        Undefined: sts.unit(),
    }
})

export const Type_204: sts.Type<Type_204> = sts.closedEnum(() => {
    return  {
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V1Response,
        }),
        ReceiveTeleportedAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            effects: sts.array(() => Type_206),
        }),
        RelayedFrom: sts.enumStruct({
            who: V1Junctions,
            message: Type_204,
        }),
        ReserveAssetDeposited: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            effects: sts.array(() => Type_206),
        }),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V0OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_203,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            beneficiary: V1MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            dest: V1MultiLocation,
            effects: sts.array(() => V1Order),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            effects: sts.array(() => Type_206),
        }),
    }
})

export const V1Order: sts.Type<V1Order> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V1MultiAsset,
            weight: sts.bigint(),
            debt: sts.bigint(),
            haltOnError: sts.boolean(),
            instructions: sts.array(() => V1Xcm),
        }),
        DepositAsset: sts.enumStruct({
            assets: V1MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V1MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V1MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V1MultiLocation,
            effects: sts.array(() => V1Order),
        }),
        ExchangeAsset: sts.enumStruct({
            give: V1MultiAssetFilter,
            receive: sts.array(() => V1MultiAsset),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V1MultiAssetFilter,
            reserve: V1MultiLocation,
            effects: sts.array(() => V1Order),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V1MultiAssetFilter,
            dest: V1MultiLocation,
            effects: sts.array(() => V1Order),
        }),
        Noop: sts.unit(),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V1MultiLocation,
            assets: V1MultiAssetFilter,
        }),
    }
})

export const V1Xcm: sts.Type<V1Xcm> = sts.closedEnum(() => {
    return  {
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V1Response,
        }),
        ReceiveTeleportedAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            effects: sts.array(() => V1Order),
        }),
        RelayedFrom: sts.enumStruct({
            who: V1Junctions,
            message: V1Xcm,
        }),
        ReserveAssetDeposited: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            effects: sts.array(() => V1Order),
        }),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V0OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            beneficiary: V1MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            dest: V1MultiLocation,
            effects: sts.array(() => V1Order),
        }),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            effects: sts.array(() => V1Order),
        }),
    }
})

export const DoubleEncoded: sts.Type<DoubleEncoded> = sts.struct(() => {
    return  {
        encoded: sts.bytes(),
    }
})

export const Type_206: sts.Type<Type_206> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V1MultiAsset,
            weight: sts.bigint(),
            debt: sts.bigint(),
            haltOnError: sts.boolean(),
            instructions: sts.array(() => Type_204),
        }),
        DepositAsset: sts.enumStruct({
            assets: V1MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V1MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V1MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V1MultiLocation,
            effects: sts.array(() => V1Order),
        }),
        ExchangeAsset: sts.enumStruct({
            give: V1MultiAssetFilter,
            receive: sts.array(() => V1MultiAsset),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V1MultiAssetFilter,
            reserve: V1MultiLocation,
            effects: sts.array(() => V1Order),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V1MultiAssetFilter,
            dest: V1MultiLocation,
            effects: sts.array(() => V1Order),
        }),
        Noop: sts.unit(),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V1MultiLocation,
            assets: V1MultiAssetFilter,
        }),
    }
})

export const V1Response: sts.Type<V1Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V1MultiAsset),
        Version: sts.number(),
    }
})

export const Type_199: sts.Type<Type_199> = sts.closedEnum(() => {
    return  {
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V0Response,
        }),
        RelayedFrom: sts.enumStruct({
            who: V0MultiLocation,
            message: Type_199,
        }),
        ReserveAssetDeposit: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            effects: sts.array(() => Type_201),
        }),
        TeleportAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            effects: sts.array(() => Type_201),
        }),
        Transact: sts.enumStruct({
            originType: V0OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: Type_203,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
            effects: sts.array(() => V0Order),
        }),
        WithdrawAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            effects: sts.array(() => Type_201),
        }),
    }
})

export const V0Order: sts.Type<V0Order> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V0MultiAsset,
            weight: sts.bigint(),
            debt: sts.bigint(),
            haltOnError: sts.boolean(),
            xcm: sts.array(() => V0Xcm),
        }),
        DepositAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
            effects: sts.array(() => V0Order),
        }),
        ExchangeAsset: sts.enumStruct({
            give: sts.array(() => V0MultiAsset),
            receive: sts.array(() => V0MultiAsset),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            reserve: V0MultiLocation,
            effects: sts.array(() => V0Order),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
            effects: sts.array(() => V0Order),
        }),
        Null: sts.unit(),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V0MultiLocation,
            assets: sts.array(() => V0MultiAsset),
        }),
    }
})

export const V0Xcm: sts.Type<V0Xcm> = sts.closedEnum(() => {
    return  {
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V0Response,
        }),
        RelayedFrom: sts.enumStruct({
            who: V0MultiLocation,
            message: V0Xcm,
        }),
        ReserveAssetDeposit: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            effects: sts.array(() => V0Order),
        }),
        TeleportAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            effects: sts.array(() => V0Order),
        }),
        Transact: sts.enumStruct({
            originType: V0OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
            effects: sts.array(() => V0Order),
        }),
        WithdrawAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            effects: sts.array(() => V0Order),
        }),
    }
})

export const Type_201: sts.Type<Type_201> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V0MultiAsset,
            weight: sts.bigint(),
            debt: sts.bigint(),
            haltOnError: sts.boolean(),
            xcm: sts.array(() => Type_199),
        }),
        DepositAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
            effects: sts.array(() => V0Order),
        }),
        ExchangeAsset: sts.enumStruct({
            give: sts.array(() => V0MultiAsset),
            receive: sts.array(() => V0MultiAsset),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            reserve: V0MultiLocation,
            effects: sts.array(() => V0Order),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: sts.array(() => V0MultiAsset),
            dest: V0MultiLocation,
            effects: sts.array(() => V0Order),
        }),
        Null: sts.unit(),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V0MultiLocation,
            assets: sts.array(() => V0MultiAsset),
        }),
    }
})

export const V0MultiAsset: sts.Type<V0MultiAsset> = sts.closedEnum(() => {
    return  {
        AbstractFungible: sts.enumStruct({
            id: sts.bytes(),
            amount: sts.bigint(),
        }),
        AbstractNonFungible: sts.enumStruct({
            class: sts.bytes(),
            instance: V1AssetInstance,
        }),
        All: sts.unit(),
        AllAbstractFungible: sts.enumStruct({
            id: sts.bytes(),
        }),
        AllAbstractNonFungible: sts.enumStruct({
            class: sts.bytes(),
        }),
        AllConcreteFungible: sts.enumStruct({
            id: V0MultiLocation,
        }),
        AllConcreteNonFungible: sts.enumStruct({
            class: V0MultiLocation,
        }),
        AllFungible: sts.unit(),
        AllNonFungible: sts.unit(),
        ConcreteFungible: sts.enumStruct({
            id: V0MultiLocation,
            amount: sts.bigint(),
        }),
        ConcreteNonFungible: sts.enumStruct({
            class: V0MultiLocation,
            instance: V1AssetInstance,
        }),
        None: sts.unit(),
    }
})

export const V0MultiLocation: sts.Type<V0MultiLocation> = sts.closedEnum(() => {
    return  {
        Null: sts.unit(),
        X1: V0Junction,
        X2: sts.tuple(() => [V0Junction, V0Junction]),
        X3: sts.tuple(() => [V0Junction, V0Junction, V0Junction]),
        X4: sts.tuple(() => [V0Junction, V0Junction, V0Junction, V0Junction]),
        X5: sts.tuple(() => [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]),
        X6: sts.tuple(() => [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]),
        X7: sts.tuple(() => [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]),
        X8: sts.tuple(() => [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]),
    }
})

export const V0Junction: sts.Type<V0Junction> = sts.closedEnum(() => {
    return  {
        AccountId32: sts.enumStruct({
            network: V0NetworkId,
            id: sts.bytes(),
        }),
        AccountIndex64: sts.enumStruct({
            network: V0NetworkId,
            index: sts.bigint(),
        }),
        AccountKey20: sts.enumStruct({
            network: V0NetworkId,
            key: sts.bytes(),
        }),
        GeneralIndex: sts.bigint(),
        GeneralKey: sts.bytes(),
        OnlyChild: sts.unit(),
        PalletInstance: sts.number(),
        Parachain: sts.number(),
        Parent: sts.unit(),
        Plurality: sts.enumStruct({
            id: V0BodyId,
            part: V0BodyPart,
        }),
    }
})

export const V0Response: sts.Type<V0Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V0MultiAsset),
    }
})

export const VersionedXcm: sts.Type<VersionedXcm> = sts.closedEnum(() => {
    return  {
        V0: V0Xcm,
        V1: V1Xcm,
        V2: sts.array(() => V2Instruction),
    }
})

export const SessionKeys: sts.Type<SessionKeys> = sts.struct(() => {
    return  {
        aura: Public,
    }
})

export const Header: sts.Type<Header> = sts.struct(() => {
    return  {
        parentHash: H256,
        number: sts.number(),
        stateRoot: H256,
        extrinsicsRoot: H256,
        digest: Digest,
    }
})

export const MultiAddress: sts.Type<MultiAddress> = sts.closedEnum(() => {
    return  {
        Address20: sts.bytes(),
        Address32: sts.bytes(),
        Id: AccountId32,
        Index: sts.unit(),
        Raw: sts.bytes(),
    }
})

export const ParachainInherentData: sts.Type<ParachainInherentData> = sts.struct(() => {
    return  {
        validationData: V1PersistedValidationData,
        relayChainState: StorageProof,
        downwardMessages: sts.array(() => InboundDownwardMessage),
        horizontalMessages: sts.array(() => sts.tuple(() => [Id, sts.array(() => InboundHrmpMessage)])),
    }
})

export const InboundHrmpMessage: sts.Type<InboundHrmpMessage> = sts.struct(() => {
    return  {
        sentAt: sts.number(),
        data: sts.bytes(),
    }
})

export const InboundDownwardMessage: sts.Type<InboundDownwardMessage> = sts.struct(() => {
    return  {
        sentAt: sts.number(),
        msg: sts.bytes(),
    }
})

export const StorageProof: sts.Type<StorageProof> = sts.struct(() => {
    return  {
        trieNodes: sts.array(() => sts.bytes()),
    }
})

export const Perbill = sts.number()

export const VersionedMultiLocation: sts.Type<VersionedMultiLocation> = sts.closedEnum(() => {
    return  {
        V0: V0MultiLocation,
        V1: V1MultiLocation,
    }
})

export const VersionedMultiAssets: sts.Type<VersionedMultiAssets> = sts.closedEnum(() => {
    return  {
        V0: sts.array(() => V0MultiAsset),
        V1: sts.array(() => V1MultiAsset),
    }
})

export const V2Response: sts.Type<V2Response> = sts.closedEnum(() => {
    return  {
        Assets: sts.array(() => V1MultiAsset),
        ExecutionResult: sts.option(() => sts.tuple(() => [sts.number(), V2Error])),
        Null: sts.unit(),
        Version: sts.number(),
    }
})

export const V2Instruction: sts.Type<V2Instruction> = sts.closedEnum(() => {
    return  {
        BuyExecution: sts.enumStruct({
            fees: V1MultiAsset,
            weightLimit: V2WeightLimit,
        }),
        ClaimAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            ticket: V1MultiLocation,
        }),
        ClearError: sts.unit(),
        ClearOrigin: sts.unit(),
        DepositAsset: sts.enumStruct({
            assets: V1MultiAssetFilter,
            maxAssets: sts.number(),
            beneficiary: V1MultiLocation,
        }),
        DepositReserveAsset: sts.enumStruct({
            assets: V1MultiAssetFilter,
            maxAssets: sts.number(),
            dest: V1MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        DescendOrigin: V1Junctions,
        ExchangeAsset: sts.enumStruct({
            give: V1MultiAssetFilter,
            receive: sts.array(() => V1MultiAsset),
        }),
        HrmpChannelAccepted: sts.enumStruct({
            recipient: sts.number(),
        }),
        HrmpChannelClosing: sts.enumStruct({
            initiator: sts.number(),
            sender: sts.number(),
            recipient: sts.number(),
        }),
        HrmpNewChannelOpenRequest: sts.enumStruct({
            sender: sts.number(),
            maxMessageSize: sts.number(),
            maxCapacity: sts.number(),
        }),
        InitiateReserveWithdraw: sts.enumStruct({
            assets: V1MultiAssetFilter,
            reserve: V1MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        InitiateTeleport: sts.enumStruct({
            assets: V1MultiAssetFilter,
            dest: V1MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        QueryHolding: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V1MultiLocation,
            assets: V1MultiAssetFilter,
            maxResponseWeight: sts.bigint(),
        }),
        QueryResponse: sts.enumStruct({
            queryId: sts.bigint(),
            response: V2Response,
            maxWeight: sts.bigint(),
        }),
        ReceiveTeleportedAsset: sts.array(() => V1MultiAsset),
        RefundSurplus: sts.unit(),
        ReportError: sts.enumStruct({
            queryId: sts.bigint(),
            dest: V1MultiLocation,
            maxResponseWeight: sts.bigint(),
        }),
        ReserveAssetDeposited: sts.array(() => V1MultiAsset),
        SetAppendix: sts.array(() => V2Instruction),
        SetErrorHandler: sts.array(() => V2Instruction),
        SubscribeVersion: sts.enumStruct({
            queryId: sts.bigint(),
            maxResponseWeight: sts.bigint(),
        }),
        Transact: sts.enumStruct({
            originType: V0OriginKind,
            requireWeightAtMost: sts.bigint(),
            call: DoubleEncoded,
        }),
        TransferAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            beneficiary: V1MultiLocation,
        }),
        TransferReserveAsset: sts.enumStruct({
            assets: sts.array(() => V1MultiAsset),
            dest: V1MultiLocation,
            xcm: sts.array(() => V2Instruction),
        }),
        Trap: sts.bigint(),
        UnsubscribeVersion: sts.unit(),
        WithdrawAsset: sts.array(() => V1MultiAsset),
    }
})

export const V1MultiLocation: sts.Type<V1MultiLocation> = sts.struct(() => {
    return  {
        parents: sts.number(),
        interior: V1Junctions,
    }
})

export const V2Outcome: sts.Type<V2Outcome> = sts.closedEnum(() => {
    return  {
        Complete: sts.bigint(),
        Error: V2Error,
        Incomplete: sts.tuple(() => [sts.bigint(), V2Error]),
    }
})

export const V2Error: sts.Type<V2Error> = sts.closedEnum(() => {
    return  {
        AssetNotFound: sts.unit(),
        BadOrigin: sts.unit(),
        Barrier: sts.unit(),
        DestinationUnsupported: sts.unit(),
        ExceedsMaxMessageSize: sts.unit(),
        FailedToDecode: sts.unit(),
        FailedToTransactAsset: sts.unit(),
        InvalidLocation: sts.unit(),
        LocationCannotHold: sts.unit(),
        MultiLocationFull: sts.unit(),
        MultiLocationNotInvertible: sts.unit(),
        NotHoldingFees: sts.unit(),
        NotWithdrawable: sts.unit(),
        Overflow: sts.unit(),
        TooExpensive: sts.unit(),
        TooMuchWeightRequired: sts.unit(),
        Transport: sts.unit(),
        Trap: sts.bigint(),
        UnhandledXcmVersion: sts.unit(),
        Unimplemented: sts.unit(),
        UnknownClaim: sts.unit(),
        Unroutable: sts.unit(),
        UntrustedReserveLocation: sts.unit(),
        UntrustedTeleportLocation: sts.unit(),
        WeightLimitReached: sts.bigint(),
        WeightNotComputable: sts.unit(),
    }
})

export const BalanceStatus: sts.Type<BalanceStatus> = sts.closedEnum(() => {
    return  {
        Free: sts.unit(),
        Reserved: sts.unit(),
    }
})

export const H256 = sts.bytes()

export const AccountId32 = sts.bytes()

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Module: sts.enumStruct({
            index: sts.number(),
            error: sts.number(),
        }),
        NoProviders: sts.unit(),
        Other: sts.unit(),
        Token: TokenError,
    }
})

export const TokenError: sts.Type<TokenError> = sts.closedEnum(() => {
    return  {
        BelowMinimum: sts.unit(),
        CannotCreate: sts.unit(),
        Frozen: sts.unit(),
        NoFunds: sts.unit(),
        UnknownAsset: sts.unit(),
        Unsupported: sts.unit(),
        WouldDie: sts.unit(),
    }
})

export const ArithmeticError: sts.Type<ArithmeticError> = sts.closedEnum(() => {
    return  {
        DivisionByZero: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
    }
})

export const DispatchInfo: sts.Type<DispatchInfo> = sts.struct(() => {
    return  {
        weight: sts.bigint(),
        class: DispatchClass,
        paysFee: Pays,
    }
})

export const Pays: sts.Type<Pays> = sts.closedEnum(() => {
    return  {
        No: sts.unit(),
        Yes: sts.unit(),
    }
})

export const DispatchClass: sts.Type<DispatchClass> = sts.closedEnum(() => {
    return  {
        Mandatory: sts.unit(),
        Normal: sts.unit(),
        Operational: sts.unit(),
    }
})
