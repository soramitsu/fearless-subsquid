import type {Result, Option} from './support'

export interface GroupParams {
    maxMembers: number
    maxIntake: number
    maxStrikes: number
    candidateDeposit: bigint
}

/**
 * The `Error` enum of this pallet.
 */
export type Error = Error_MaxSignedLimits | Error_KeyTooLong | Error_NotEnoughFunds | Error_BadWitness | Error_SignedMigrationNotAllowed | Error_BadChildRoot

/**
 * Max signed limits not respected.
 */
export interface Error_MaxSignedLimits {
    __kind: 'MaxSignedLimits'
}

/**
 * A key was longer than the configured maximum.
 * 
 * This means that the migration halted at the current [`Progress`] and
 * can be resumed with a larger [`crate::Config::MaxKeyLen`] value.
 * Retrying with the same [`crate::Config::MaxKeyLen`] value will not work.
 * The value should only be increased to avoid a storage migration for the currently
 * stored [`crate::Progress::LastKey`].
 */
export interface Error_KeyTooLong {
    __kind: 'KeyTooLong'
}

/**
 * submitter does not have enough funds.
 */
export interface Error_NotEnoughFunds {
    __kind: 'NotEnoughFunds'
}

/**
 * Bad witness data provided.
 */
export interface Error_BadWitness {
    __kind: 'BadWitness'
}

/**
 * Signed migration is not allowed because the maximum limit is not set yet.
 */
export interface Error_SignedMigrationNotAllowed {
    __kind: 'SignedMigrationNotAllowed'
}

/**
 * Bad child root provided.
 */
export interface Error_BadChildRoot {
    __kind: 'BadChildRoot'
}

export type MigrationCompute = MigrationCompute_Signed | MigrationCompute_Auto

export interface MigrationCompute_Signed {
    __kind: 'Signed'
}

export interface MigrationCompute_Auto {
    __kind: 'Auto'
}

export interface V3MultiLocation {
    parents: number
    interior: V3Junctions
}

export type VersionedMultiAssets = VersionedMultiAssets_V2 | VersionedMultiAssets_V3

export interface VersionedMultiAssets_V2 {
    __kind: 'V2'
    value: V2MultiAsset[]
}

export interface VersionedMultiAssets_V3 {
    __kind: 'V3'
    value: V3MultiAsset[]
}

export type V3Outcome = V3Outcome_Complete | V3Outcome_Incomplete | V3Outcome_Error

export interface V3Outcome_Complete {
    __kind: 'Complete'
    value: Weight
}

export interface V3Outcome_Incomplete {
    __kind: 'Incomplete'
    value: [Weight, V3Error]
}

export interface V3Outcome_Error {
    __kind: 'Error'
    value: V3Error
}

export interface V3MultiAsset {
    id: V3AssetId
    fun: V3Fungibility
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export type VersionedMultiLocation = VersionedMultiLocation_V2 | VersionedMultiLocation_V3

export interface VersionedMultiLocation_V2 {
    __kind: 'V2'
    value: V2MultiLocation
}

export interface VersionedMultiLocation_V3 {
    __kind: 'V3'
    value: V3MultiLocation
}

export type V3Error = V3Error_Overflow | V3Error_Unimplemented | V3Error_UntrustedReserveLocation | V3Error_UntrustedTeleportLocation | V3Error_LocationFull | V3Error_LocationNotInvertible | V3Error_BadOrigin | V3Error_InvalidLocation | V3Error_AssetNotFound | V3Error_FailedToTransactAsset | V3Error_NotWithdrawable | V3Error_LocationCannotHold | V3Error_ExceedsMaxMessageSize | V3Error_DestinationUnsupported | V3Error_Transport | V3Error_Unroutable | V3Error_UnknownClaim | V3Error_FailedToDecode | V3Error_MaxWeightInvalid | V3Error_NotHoldingFees | V3Error_TooExpensive | V3Error_Trap | V3Error_ExpectationFalse | V3Error_PalletNotFound | V3Error_NameMismatch | V3Error_VersionIncompatible | V3Error_HoldingWouldOverflow | V3Error_ExportError | V3Error_ReanchorFailed | V3Error_NoDeal | V3Error_FeesNotMet | V3Error_LockError | V3Error_NoPermission | V3Error_Unanchored | V3Error_NotDepositable | V3Error_UnhandledXcmVersion | V3Error_WeightLimitReached | V3Error_Barrier | V3Error_WeightNotComputable | V3Error_ExceedsStackLimit

export interface V3Error_Overflow {
    __kind: 'Overflow'
}

export interface V3Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V3Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V3Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V3Error_LocationFull {
    __kind: 'LocationFull'
}

export interface V3Error_LocationNotInvertible {
    __kind: 'LocationNotInvertible'
}

export interface V3Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V3Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V3Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V3Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V3Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V3Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V3Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V3Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V3Error_Transport {
    __kind: 'Transport'
}

export interface V3Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V3Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V3Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V3Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V3Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V3Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V3Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Error_ExpectationFalse {
    __kind: 'ExpectationFalse'
}

export interface V3Error_PalletNotFound {
    __kind: 'PalletNotFound'
}

export interface V3Error_NameMismatch {
    __kind: 'NameMismatch'
}

export interface V3Error_VersionIncompatible {
    __kind: 'VersionIncompatible'
}

export interface V3Error_HoldingWouldOverflow {
    __kind: 'HoldingWouldOverflow'
}

export interface V3Error_ExportError {
    __kind: 'ExportError'
}

export interface V3Error_ReanchorFailed {
    __kind: 'ReanchorFailed'
}

export interface V3Error_NoDeal {
    __kind: 'NoDeal'
}

export interface V3Error_FeesNotMet {
    __kind: 'FeesNotMet'
}

export interface V3Error_LockError {
    __kind: 'LockError'
}

export interface V3Error_NoPermission {
    __kind: 'NoPermission'
}

export interface V3Error_Unanchored {
    __kind: 'Unanchored'
}

export interface V3Error_NotDepositable {
    __kind: 'NotDepositable'
}

export interface V3Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V3Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: Weight
}

export interface V3Error_Barrier {
    __kind: 'Barrier'
}

export interface V3Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export interface V3Error_ExceedsStackLimit {
    __kind: 'ExceedsStackLimit'
}

export type V3Response = V3Response_Null | V3Response_Assets | V3Response_ExecutionResult | V3Response_Version | V3Response_PalletsInfo | V3Response_DispatchResult

export interface V3Response_Null {
    __kind: 'Null'
}

export interface V3Response_Assets {
    __kind: 'Assets'
    value: V3MultiAsset[]
}

export interface V3Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ([number, V3Error] | undefined)
}

export interface V3Response_Version {
    __kind: 'Version'
    value: number
}

export interface V3Response_PalletsInfo {
    __kind: 'PalletsInfo'
    value: V3PalletInfo[]
}

export interface V3Response_DispatchResult {
    __kind: 'DispatchResult'
    value: V3MaybeErrorCode
}

export type V3Instruction = V3Instruction_WithdrawAsset | V3Instruction_ReserveAssetDeposited | V3Instruction_ReceiveTeleportedAsset | V3Instruction_QueryResponse | V3Instruction_TransferAsset | V3Instruction_TransferReserveAsset | V3Instruction_Transact | V3Instruction_HrmpNewChannelOpenRequest | V3Instruction_HrmpChannelAccepted | V3Instruction_HrmpChannelClosing | V3Instruction_ClearOrigin | V3Instruction_DescendOrigin | V3Instruction_ReportError | V3Instruction_DepositAsset | V3Instruction_DepositReserveAsset | V3Instruction_ExchangeAsset | V3Instruction_InitiateReserveWithdraw | V3Instruction_InitiateTeleport | V3Instruction_ReportHolding | V3Instruction_BuyExecution | V3Instruction_RefundSurplus | V3Instruction_SetErrorHandler | V3Instruction_SetAppendix | V3Instruction_ClearError | V3Instruction_ClaimAsset | V3Instruction_Trap | V3Instruction_SubscribeVersion | V3Instruction_UnsubscribeVersion | V3Instruction_BurnAsset | V3Instruction_ExpectAsset | V3Instruction_ExpectOrigin | V3Instruction_ExpectError | V3Instruction_ExpectTransactStatus | V3Instruction_QueryPallet | V3Instruction_ExpectPallet | V3Instruction_ReportTransactStatus | V3Instruction_ClearTransactStatus | V3Instruction_UniversalOrigin | V3Instruction_ExportMessage | V3Instruction_LockAsset | V3Instruction_UnlockAsset | V3Instruction_NoteUnlockable | V3Instruction_RequestUnlock | V3Instruction_SetFeesMode | V3Instruction_SetTopic | V3Instruction_ClearTopic | V3Instruction_AliasOrigin | V3Instruction_UnpaidExecution

export interface V3Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface V3Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier: (V3MultiLocation | undefined)
}

export interface V3Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface V3Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface V3Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V3Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V3Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V3Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V3Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface V3Instruction_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface V3Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface V3Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface V3Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface V3Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface V3Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V3Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V3Instruction[]
}

export interface V3Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V3Instruction[]
}

export interface V3Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V3Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface V3Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface V3Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V3Instruction_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value: (V3MultiLocation | undefined)
}

export interface V3Instruction_ExpectError {
    __kind: 'ExpectError'
    value: ([number, V3Error] | undefined)
}

export interface V3Instruction_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface V3Instruction_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Uint8Array
    responseInfo: V3QueryResponseInfo
}

export interface V3Instruction_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    crateMajor: number
    minCrateMinor: number
}

export interface V3Instruction_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface V3Instruction_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface V3Instruction_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface V3Instruction_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface V3Instruction_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface V3Instruction_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface V3Instruction_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface V3Instruction_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface V3Instruction_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface V3Instruction_SetTopic {
    __kind: 'SetTopic'
    value: Uint8Array
}

export interface V3Instruction_ClearTopic {
    __kind: 'ClearTopic'
}

export interface V3Instruction_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface V3Instruction_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin: (V3MultiLocation | undefined)
}

export interface Type_95 {
    first: VoteMessage
    second: VoteMessage
}

export interface MembershipProof {
    session: number
    trieNodes: Uint8Array[]
    validatorCount: number
}

export interface Heartbeat {
    blockNumber: number
    sessionIndex: number
    authorityIndex: number
    validatorsLen: number
}

export interface Timepoint {
    height: number
    index: number
}

export type Call = Call_System | Call_Babe | Call_Timestamp | Call_Indices | Call_Balances | Call_Staking | Call_Beefy | Call_Session | Call_Grandpa | Call_ImOnline | Call_Treasury | Call_ConvictionVoting | Call_Referenda | Call_FellowshipCollective | Call_FellowshipReferenda | Call_Whitelist | Call_Claims | Call_Utility | Call_Identity | Call_Society | Call_Recovery | Call_Vesting | Call_Scheduler | Call_Proxy | Call_Multisig | Call_Preimage | Call_Bounties | Call_ChildBounties | Call_ElectionProviderMultiPhase | Call_Nis | Call_NisCounterpartBalances | Call_VoterList | Call_NominationPools | Call_FastUnstake | Call_Configuration | Call_ParasShared | Call_ParaInclusion | Call_ParaInherent | Call_Paras | Call_Initializer | Call_Hrmp | Call_ParasDisputes | Call_ParasSlashing | Call_Registrar | Call_Slots | Call_Auctions | Call_Crowdloan | Call_StateTrieMigration | Call_XcmPallet | Call_MessageQueue

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Indices {
    __kind: 'Indices'
    value: IndicesCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Call_Beefy {
    __kind: 'Beefy'
    value: BeefyCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Call_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_ConvictionVoting {
    __kind: 'ConvictionVoting'
    value: ConvictionVotingCall
}

export interface Call_Referenda {
    __kind: 'Referenda'
    value: ReferendaCall
}

export interface Call_FellowshipCollective {
    __kind: 'FellowshipCollective'
    value: FellowshipCollectiveCall
}

export interface Call_FellowshipReferenda {
    __kind: 'FellowshipReferenda'
    value: FellowshipReferendaCall
}

export interface Call_Whitelist {
    __kind: 'Whitelist'
    value: WhitelistCall
}

export interface Call_Claims {
    __kind: 'Claims'
    value: ClaimsCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_Society {
    __kind: 'Society'
    value: SocietyCall
}

export interface Call_Recovery {
    __kind: 'Recovery'
    value: RecoveryCall
}

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Proxy {
    __kind: 'Proxy'
    value: ProxyCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Bounties {
    __kind: 'Bounties'
    value: BountiesCall
}

export interface Call_ChildBounties {
    __kind: 'ChildBounties'
    value: ChildBountiesCall
}

export interface Call_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseCall
}

export interface Call_Nis {
    __kind: 'Nis'
    value: NisCall
}

export interface Call_NisCounterpartBalances {
    __kind: 'NisCounterpartBalances'
    value: NisCounterpartBalancesCall
}

export interface Call_VoterList {
    __kind: 'VoterList'
    value: VoterListCall
}

export interface Call_NominationPools {
    __kind: 'NominationPools'
    value: NominationPoolsCall
}

export interface Call_FastUnstake {
    __kind: 'FastUnstake'
    value: FastUnstakeCall
}

export interface Call_Configuration {
    __kind: 'Configuration'
    value: ConfigurationCall
}

export interface Call_ParasShared {
    __kind: 'ParasShared'
    value: ParasSharedCall
}

export interface Call_ParaInclusion {
    __kind: 'ParaInclusion'
    value: ParaInclusionCall
}

export interface Call_ParaInherent {
    __kind: 'ParaInherent'
    value: ParaInherentCall
}

export interface Call_Paras {
    __kind: 'Paras'
    value: ParasCall
}

export interface Call_Initializer {
    __kind: 'Initializer'
    value: InitializerCall
}

export interface Call_Hrmp {
    __kind: 'Hrmp'
    value: HrmpCall
}

export interface Call_ParasDisputes {
    __kind: 'ParasDisputes'
    value: ParasDisputesCall
}

export interface Call_ParasSlashing {
    __kind: 'ParasSlashing'
    value: ParasSlashingCall
}

export interface Call_Registrar {
    __kind: 'Registrar'
    value: RegistrarCall
}

export interface Call_Slots {
    __kind: 'Slots'
    value: SlotsCall
}

export interface Call_Auctions {
    __kind: 'Auctions'
    value: AuctionsCall
}

export interface Call_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanCall
}

export interface Call_StateTrieMigration {
    __kind: 'StateTrieMigration'
    value: StateTrieMigrationCall
}

export interface Call_XcmPallet {
    __kind: 'XcmPallet'
    value: XcmPalletCall
}

export interface Call_MessageQueue {
    __kind: 'MessageQueue'
    value: MessageQueueCall
}

export type MultiAddress = MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw | MultiAddress_Address32 | MultiAddress_Address20

export interface MultiAddress_Id {
    __kind: 'Id'
    value: Uint8Array
}

export interface MultiAddress_Index {
    __kind: 'Index'
    value: null
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Uint8Array
}

export interface MultiAddress_Address32 {
    __kind: 'Address32'
    value: Uint8Array
}

export interface MultiAddress_Address20 {
    __kind: 'Address20'
    value: Uint8Array
}

export type ProxyType = ProxyType_Any | ProxyType_NonTransfer | ProxyType_Governance | ProxyType_Staking | ProxyType_IdentityJudgement | ProxyType_CancelProxy | ProxyType_Auction | ProxyType_Society | ProxyType_NominationPools

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_Staking {
    __kind: 'Staking'
}

export interface ProxyType_IdentityJudgement {
    __kind: 'IdentityJudgement'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_Auction {
    __kind: 'Auction'
}

export interface ProxyType_Society {
    __kind: 'Society'
}

export interface ProxyType_NominationPools {
    __kind: 'NominationPools'
}

export interface SessionKeys {
    grandpa: Uint8Array
    babe: Uint8Array
    imOnline: Uint8Array
    paraValidator: Uint8Array
    paraAssignment: Uint8Array
    authorityDiscovery: Uint8Array
    beefy: Uint8Array
}

export interface MigrationLimits {
    size: number
    item: number
}

export interface MigrationTask {
    progressTop: Progress
    progressChild: Progress
    size: number
    topItems: number
    childItems: number
}

export type Progress = Progress_ToStart | Progress_LastKey | Progress_Complete

export interface Progress_ToStart {
    __kind: 'ToStart'
}

export interface Progress_LastKey {
    __kind: 'LastKey'
    value: Uint8Array
}

export interface Progress_Complete {
    __kind: 'Complete'
}

export type OriginCaller = OriginCaller_system | OriginCaller_Origins | OriginCaller_ParachainsOrigin | OriginCaller_XcmPallet | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Origin
}

export interface OriginCaller_ParachainsOrigin {
    __kind: 'ParachainsOrigin'
    value: Type_139
}

export interface OriginCaller_XcmPallet {
    __kind: 'XcmPallet'
    value: Type_141
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface BeefyAuthoritySet {
    id: bigint
    len: number
    keysetCommitment: Uint8Array
}

export interface HostConfiguration {
    maxCodeSize: number
    maxHeadDataSize: number
    maxUpwardQueueCount: number
    maxUpwardQueueSize: number
    maxUpwardMessageSize: number
    maxUpwardMessageNumPerCandidate: number
    hrmpMaxMessageNumPerCandidate: number
    validationUpgradeCooldown: number
    validationUpgradeDelay: number
    asyncBackingParams: AsyncBackingParams
    maxPovSize: number
    maxDownwardMessageSize: number
    hrmpMaxParachainOutboundChannels: number
    hrmpSenderDeposit: bigint
    hrmpRecipientDeposit: bigint
    hrmpChannelMaxCapacity: number
    hrmpChannelMaxTotalSize: number
    hrmpMaxParachainInboundChannels: number
    hrmpChannelMaxMessageSize: number
    executorParams: V5ExecutorParam[]
    codeRetentionPeriod: number
    onDemandCores: number
    onDemandRetries: number
    onDemandQueueMaxSize: number
    onDemandTargetQueueUtilization: number
    onDemandFeeVariability: number
    onDemandBaseFee: bigint
    onDemandTtl: number
    groupRotationFrequency: number
    parasAvailabilityPeriod: number
    schedulingLookahead: number
    maxValidatorsPerCore: (number | undefined)
    maxValidators: (number | undefined)
    disputePeriod: number
    disputePostConclusionAcceptancePeriod: number
    noShowSlots: number
    nDelayTranches: number
    zerothDelayTrancheWidth: number
    neededApprovals: number
    relayVrfModuloSamples: number
    pvfVotingTtl: number
    minimumValidationUpgradeDelay: number
    minimumBackingVotes: number
}

export interface IdAmount {
    id: RuntimeHoldReason
    amount: bigint
}

export type V5CoreOccupied = V5CoreOccupied_Free | V5CoreOccupied_Paras

export interface V5CoreOccupied_Free {
    __kind: 'Free'
}

export interface V5CoreOccupied_Paras {
    __kind: 'Paras'
    value: V5ParasEntry
}

export interface V5ParasEntry {
    assignment: V5Assignment
    availabilityTimeouts: number
    ttl: number
}

export interface PvfCheckActiveVoteState {
    votesAccept: Uint8Array
    votesReject: Uint8Array
    age: number
    createdAt: number
    causes: PvfCheckCause[]
}

export interface AllowedRelayParentsTracker {
    buffer: [Uint8Array, Uint8Array][]
    latestNumber: number
}

export interface ParaInfo {
    manager: Uint8Array
    deposit: bigint
    locked: (boolean | undefined)
}

export interface Candidacy {
    round: number
    kind: BidKind
    bid: bigint
    tally: Type_675
    skepticStruck: boolean
}

export interface Vote {
    approve: boolean
    weight: number
}

export interface Type_675 {
    approvals: number
    rejections: number
}

export interface Type_665 {
    rank: number
    strikes: number
    vouching: (VouchingStatus | undefined)
    index: number
}

export interface IntakeRecord {
    who: Uint8Array
    bid: bigint
    round: number
}

export interface PayoutRecord {
    paid: bigint
    payouts: [number, bigint][]
}

export interface EventRecord {
    phase: Type_513
    event: Event
    topics: Uint8Array[]
}

export type V3Junctions = V3Junctions_Here | V3Junctions_X1 | V3Junctions_X2 | V3Junctions_X3 | V3Junctions_X4 | V3Junctions_X5 | V3Junctions_X6 | V3Junctions_X7 | V3Junctions_X8

export interface V3Junctions_Here {
    __kind: 'Here'
}

export interface V3Junctions_X1 {
    __kind: 'X1'
    value: V3Junction
}

export interface V3Junctions_X2 {
    __kind: 'X2'
    value: [V3Junction, V3Junction]
}

export interface V3Junctions_X3 {
    __kind: 'X3'
    value: [V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X4 {
    __kind: 'X4'
    value: [V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X5 {
    __kind: 'X5'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X6 {
    __kind: 'X6'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X7 {
    __kind: 'X7'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X8 {
    __kind: 'X8'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V2MultiAsset {
    id: V2AssetId
    fun: V2Fungibility
}

export type V3AssetId = V3AssetId_Concrete | V3AssetId_Abstract

export interface V3AssetId_Concrete {
    __kind: 'Concrete'
    value: V3MultiLocation
}

export interface V3AssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type V3Fungibility = V3Fungibility_Fungible | V3Fungibility_NonFungible

export interface V3Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V3Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V3AssetInstance
}

export interface V2MultiLocation {
    parents: number
    interior: V2Junctions
}

export interface V3PalletInfo {
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    major: number
    minor: number
    patch: number
}

export type V3MaybeErrorCode = V3MaybeErrorCode_Success | V3MaybeErrorCode_Error | V3MaybeErrorCode_TruncatedError

export interface V3MaybeErrorCode_Success {
    __kind: 'Success'
}

export interface V3MaybeErrorCode_Error {
    __kind: 'Error'
    value: Uint8Array
}

export interface V3MaybeErrorCode_TruncatedError {
    __kind: 'TruncatedError'
    value: Uint8Array
}

export type V2OriginKind = V2OriginKind_Native | V2OriginKind_SovereignAccount | V2OriginKind_Superuser | V2OriginKind_Xcm

export interface V2OriginKind_Native {
    __kind: 'Native'
}

export interface V2OriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface V2OriginKind_Superuser {
    __kind: 'Superuser'
}

export interface V2OriginKind_Xcm {
    __kind: 'Xcm'
}

export interface DoubleEncoded {
    encoded: Uint8Array
}

export interface V3QueryResponseInfo {
    destination: V3MultiLocation
    queryId: bigint
    maxWeight: Weight
}

export type V3MultiAssetFilter = V3MultiAssetFilter_Definite | V3MultiAssetFilter_Wild

export interface V3MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V3MultiAsset[]
}

export interface V3MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V3WildMultiAsset
}

export type V3WeightLimit = V3WeightLimit_Unlimited | V3WeightLimit_Limited

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export type V3Junction = V3Junction_Parachain | V3Junction_AccountId32 | V3Junction_AccountIndex64 | V3Junction_AccountKey20 | V3Junction_PalletInstance | V3Junction_GeneralIndex | V3Junction_GeneralKey | V3Junction_OnlyChild | V3Junction_Plurality | V3Junction_GlobalConsensus

export interface V3Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V3Junction_AccountId32 {
    __kind: 'AccountId32'
    network: (V3NetworkId | undefined)
    id: Uint8Array
}

export interface V3Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: (V3NetworkId | undefined)
    index: bigint
}

export interface V3Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: (V3NetworkId | undefined)
    key: Uint8Array
}

export interface V3Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V3Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V3Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Uint8Array
}

export interface V3Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V3Junction_Plurality {
    __kind: 'Plurality'
    id: V3BodyId
    part: V3BodyPart
}

export interface V3Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V3NetworkId
}

export type V3NetworkId = V3NetworkId_ByGenesis | V3NetworkId_ByFork | V3NetworkId_Polkadot | V3NetworkId_Kusama | V3NetworkId_Westend | V3NetworkId_Rococo | V3NetworkId_Wococo | V3NetworkId_Ethereum | V3NetworkId_BitcoinCore | V3NetworkId_BitcoinCash

export interface V3NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Uint8Array
}

export interface V3NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Uint8Array
}

export interface V3NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V3NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V3NetworkId_Westend {
    __kind: 'Westend'
}

export interface V3NetworkId_Rococo {
    __kind: 'Rococo'
}

export interface V3NetworkId_Wococo {
    __kind: 'Wococo'
}

export interface V3NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V3NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V3NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export interface VoteMessage {
    commitment: Commitment
    id: Uint8Array
    signature: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SystemCall = SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * See [`Pallet::remark`].
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Uint8Array
}

/**
 * See [`Pallet::set_heap_pages`].
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * See [`Pallet::set_code`].
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
}

/**
 * See [`Pallet::set_code_without_checks`].
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Uint8Array
}

/**
 * See [`Pallet::set_storage`].
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Uint8Array, Uint8Array][]
}

/**
 * See [`Pallet::kill_storage`].
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Uint8Array[]
}

/**
 * See [`Pallet::kill_prefix`].
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Uint8Array
    subkeys: number
}

/**
 * See [`Pallet::remark_with_event`].
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BabeCall = BabeCall_report_equivocation | BabeCall_report_equivocation_unsigned | BabeCall_plan_config_change

/**
 * See [`Pallet::report_equivocation`].
 */
export interface BabeCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::report_equivocation_unsigned`].
 */
export interface BabeCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::plan_config_change`].
 */
export interface BabeCall_plan_config_change {
    __kind: 'plan_config_change'
    config: NextConfigDescriptor
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TimestampCall = TimestampCall_set

/**
 * See [`Pallet::set`].
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type IndicesCall = IndicesCall_claim | IndicesCall_transfer | IndicesCall_free | IndicesCall_force_transfer | IndicesCall_freeze

/**
 * See [`Pallet::claim`].
 */
export interface IndicesCall_claim {
    __kind: 'claim'
    index: number
}

/**
 * See [`Pallet::transfer`].
 */
export interface IndicesCall_transfer {
    __kind: 'transfer'
    new: MultiAddress
    index: number
}

/**
 * See [`Pallet::free`].
 */
export interface IndicesCall_free {
    __kind: 'free'
    index: number
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface IndicesCall_force_transfer {
    __kind: 'force_transfer'
    new: MultiAddress
    index: number
    freeze: boolean
}

/**
 * See [`Pallet::freeze`].
 */
export interface IndicesCall_freeze {
    __kind: 'freeze'
    index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BalancesCall = BalancesCall_transfer_allow_death | BalancesCall_set_balance_deprecated | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve | BalancesCall_upgrade_accounts | BalancesCall_transfer | BalancesCall_force_set_balance

/**
 * See [`Pallet::transfer_allow_death`].
 */
export interface BalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::set_balance_deprecated`].
 */
export interface BalancesCall_set_balance_deprecated {
    __kind: 'set_balance_deprecated'
    who: MultiAddress
    newFree: bigint
    oldReserved: bigint
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_keep_alive`].
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_all`].
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * See [`Pallet::force_unreserve`].
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::upgrade_accounts`].
 */
export interface BalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: Uint8Array[]
}

/**
 * See [`Pallet::transfer`].
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::force_set_balance`].
 */
export interface BalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_unbond | StakingCall_withdraw_unbonded | StakingCall_validate | StakingCall_nominate | StakingCall_chill | StakingCall_set_payee | StakingCall_set_controller | StakingCall_set_validator_count | StakingCall_increase_validator_count | StakingCall_scale_validator_count | StakingCall_force_no_eras | StakingCall_force_new_era | StakingCall_set_invulnerables | StakingCall_force_unstake | StakingCall_force_new_era_always | StakingCall_cancel_deferred_slash | StakingCall_payout_stakers | StakingCall_rebond | StakingCall_reap_stash | StakingCall_kick | StakingCall_set_staking_configs | StakingCall_chill_other | StakingCall_force_apply_min_commission | StakingCall_set_min_commission

/**
 * See [`Pallet::bond`].
 */
export interface StakingCall_bond {
    __kind: 'bond'
    value: bigint
    payee: RewardDestination
}

/**
 * See [`Pallet::bond_extra`].
 */
export interface StakingCall_bond_extra {
    __kind: 'bond_extra'
    maxAdditional: bigint
}

/**
 * See [`Pallet::unbond`].
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
}

/**
 * See [`Pallet::withdraw_unbonded`].
 */
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

/**
 * See [`Pallet::validate`].
 */
export interface StakingCall_validate {
    __kind: 'validate'
    prefs: ValidatorPrefs
}

/**
 * See [`Pallet::nominate`].
 */
export interface StakingCall_nominate {
    __kind: 'nominate'
    targets: MultiAddress[]
}

/**
 * See [`Pallet::chill`].
 */
export interface StakingCall_chill {
    __kind: 'chill'
}

/**
 * See [`Pallet::set_payee`].
 */
export interface StakingCall_set_payee {
    __kind: 'set_payee'
    payee: RewardDestination
}

/**
 * See [`Pallet::set_controller`].
 */
export interface StakingCall_set_controller {
    __kind: 'set_controller'
}

/**
 * See [`Pallet::set_validator_count`].
 */
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 * See [`Pallet::increase_validator_count`].
 */
export interface StakingCall_increase_validator_count {
    __kind: 'increase_validator_count'
    additional: number
}

/**
 * See [`Pallet::scale_validator_count`].
 */
export interface StakingCall_scale_validator_count {
    __kind: 'scale_validator_count'
    factor: number
}

/**
 * See [`Pallet::force_no_eras`].
 */
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
}

/**
 * See [`Pallet::force_new_era`].
 */
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 * See [`Pallet::set_invulnerables`].
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: Uint8Array[]
}

/**
 * See [`Pallet::force_unstake`].
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: Uint8Array
    numSlashingSpans: number
}

/**
 * See [`Pallet::force_new_era_always`].
 */
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 * See [`Pallet::cancel_deferred_slash`].
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: number
    slashIndices: number[]
}

/**
 * See [`Pallet::payout_stakers`].
 */
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: Uint8Array
    era: number
}

/**
 * See [`Pallet::rebond`].
 */
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 * See [`Pallet::reap_stash`].
 */
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: Uint8Array
    numSlashingSpans: number
}

/**
 * See [`Pallet::kick`].
 */
export interface StakingCall_kick {
    __kind: 'kick'
    who: MultiAddress[]
}

/**
 * See [`Pallet::set_staking_configs`].
 */
export interface StakingCall_set_staking_configs {
    __kind: 'set_staking_configs'
    minNominatorBond: ConfigOp
    minValidatorBond: ConfigOp
    maxNominatorCount: Type_91
    maxValidatorCount: Type_91
    chillThreshold: Type_92
    minCommission: Type_93
}

/**
 * See [`Pallet::chill_other`].
 */
export interface StakingCall_chill_other {
    __kind: 'chill_other'
    controller: Uint8Array
}

/**
 * See [`Pallet::force_apply_min_commission`].
 */
export interface StakingCall_force_apply_min_commission {
    __kind: 'force_apply_min_commission'
    validatorStash: Uint8Array
}

/**
 * See [`Pallet::set_min_commission`].
 */
export interface StakingCall_set_min_commission {
    __kind: 'set_min_commission'
    new: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BeefyCall = BeefyCall_report_equivocation | BeefyCall_report_equivocation_unsigned

/**
 * See [`Pallet::report_equivocation`].
 */
export interface BeefyCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: Type_95
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::report_equivocation_unsigned`].
 */
export interface BeefyCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: Type_95
    keyOwnerProof: MembershipProof
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

/**
 * See [`Pallet::set_keys`].
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Uint8Array
}

/**
 * See [`Pallet::purge_keys`].
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type GrandpaCall = GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned | GrandpaCall_note_stalled

/**
 * See [`Pallet::report_equivocation`].
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: Type_114
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::report_equivocation_unsigned`].
 */
export interface GrandpaCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: Type_114
    keyOwnerProof: MembershipProof
}

/**
 * See [`Pallet::note_stalled`].
 */
export interface GrandpaCall_note_stalled {
    __kind: 'note_stalled'
    delay: number
    bestFinalizedBlockNumber: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ImOnlineCall = ImOnlineCall_heartbeat

/**
 * See [`Pallet::heartbeat`].
 */
export interface ImOnlineCall_heartbeat {
    __kind: 'heartbeat'
    heartbeat: Heartbeat
    signature: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal | TreasuryCall_spend | TreasuryCall_remove_approval

/**
 * See [`Pallet::propose_spend`].
 */
export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::reject_proposal`].
 */
export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 * See [`Pallet::approve_proposal`].
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 * See [`Pallet::spend`].
 */
export interface TreasuryCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::remove_approval`].
 */
export interface TreasuryCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ConvictionVotingCall = ConvictionVotingCall_vote | ConvictionVotingCall_delegate | ConvictionVotingCall_undelegate | ConvictionVotingCall_unlock | ConvictionVotingCall_remove_vote | ConvictionVotingCall_remove_other_vote

/**
 * See [`Pallet::vote`].
 */
export interface ConvictionVotingCall_vote {
    __kind: 'vote'
    pollIndex: number
    vote: AccountVote
}

/**
 * See [`Pallet::delegate`].
 */
export interface ConvictionVotingCall_delegate {
    __kind: 'delegate'
    class: number
    to: MultiAddress
    conviction: Conviction
    balance: bigint
}

/**
 * See [`Pallet::undelegate`].
 */
export interface ConvictionVotingCall_undelegate {
    __kind: 'undelegate'
    class: number
}

/**
 * See [`Pallet::unlock`].
 */
export interface ConvictionVotingCall_unlock {
    __kind: 'unlock'
    class: number
    target: MultiAddress
}

/**
 * See [`Pallet::remove_vote`].
 */
export interface ConvictionVotingCall_remove_vote {
    __kind: 'remove_vote'
    class: (number | undefined)
    index: number
}

/**
 * See [`Pallet::remove_other_vote`].
 */
export interface ConvictionVotingCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    class: number
    index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ReferendaCall = ReferendaCall_submit | ReferendaCall_place_decision_deposit | ReferendaCall_refund_decision_deposit | ReferendaCall_cancel | ReferendaCall_kill | ReferendaCall_nudge_referendum | ReferendaCall_one_fewer_deciding | ReferendaCall_refund_submission_deposit | ReferendaCall_set_metadata

/**
 * See [`Pallet::submit`].
 */
export interface ReferendaCall_submit {
    __kind: 'submit'
    proposalOrigin: OriginCaller
    proposal: Bounded
    enactmentMoment: DispatchTime
}

/**
 * See [`Pallet::place_decision_deposit`].
 */
export interface ReferendaCall_place_decision_deposit {
    __kind: 'place_decision_deposit'
    index: number
}

/**
 * See [`Pallet::refund_decision_deposit`].
 */
export interface ReferendaCall_refund_decision_deposit {
    __kind: 'refund_decision_deposit'
    index: number
}

/**
 * See [`Pallet::cancel`].
 */
export interface ReferendaCall_cancel {
    __kind: 'cancel'
    index: number
}

/**
 * See [`Pallet::kill`].
 */
export interface ReferendaCall_kill {
    __kind: 'kill'
    index: number
}

/**
 * See [`Pallet::nudge_referendum`].
 */
export interface ReferendaCall_nudge_referendum {
    __kind: 'nudge_referendum'
    index: number
}

/**
 * See [`Pallet::one_fewer_deciding`].
 */
export interface ReferendaCall_one_fewer_deciding {
    __kind: 'one_fewer_deciding'
    track: number
}

/**
 * See [`Pallet::refund_submission_deposit`].
 */
export interface ReferendaCall_refund_submission_deposit {
    __kind: 'refund_submission_deposit'
    index: number
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface ReferendaCall_set_metadata {
    __kind: 'set_metadata'
    index: number
    maybeHash: (Uint8Array | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FellowshipCollectiveCall = FellowshipCollectiveCall_add_member | FellowshipCollectiveCall_promote_member | FellowshipCollectiveCall_demote_member | FellowshipCollectiveCall_remove_member | FellowshipCollectiveCall_vote | FellowshipCollectiveCall_cleanup_poll

/**
 * See [`Pallet::add_member`].
 */
export interface FellowshipCollectiveCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * See [`Pallet::promote_member`].
 */
export interface FellowshipCollectiveCall_promote_member {
    __kind: 'promote_member'
    who: MultiAddress
}

/**
 * See [`Pallet::demote_member`].
 */
export interface FellowshipCollectiveCall_demote_member {
    __kind: 'demote_member'
    who: MultiAddress
}

/**
 * See [`Pallet::remove_member`].
 */
export interface FellowshipCollectiveCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
    minRank: number
}

/**
 * See [`Pallet::vote`].
 */
export interface FellowshipCollectiveCall_vote {
    __kind: 'vote'
    poll: number
    aye: boolean
}

/**
 * See [`Pallet::cleanup_poll`].
 */
export interface FellowshipCollectiveCall_cleanup_poll {
    __kind: 'cleanup_poll'
    pollIndex: number
    max: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FellowshipReferendaCall = FellowshipReferendaCall_submit | FellowshipReferendaCall_place_decision_deposit | FellowshipReferendaCall_refund_decision_deposit | FellowshipReferendaCall_cancel | FellowshipReferendaCall_kill | FellowshipReferendaCall_nudge_referendum | FellowshipReferendaCall_one_fewer_deciding | FellowshipReferendaCall_refund_submission_deposit | FellowshipReferendaCall_set_metadata

/**
 * See [`Pallet::submit`].
 */
export interface FellowshipReferendaCall_submit {
    __kind: 'submit'
    proposalOrigin: OriginCaller
    proposal: Bounded
    enactmentMoment: DispatchTime
}

/**
 * See [`Pallet::place_decision_deposit`].
 */
export interface FellowshipReferendaCall_place_decision_deposit {
    __kind: 'place_decision_deposit'
    index: number
}

/**
 * See [`Pallet::refund_decision_deposit`].
 */
export interface FellowshipReferendaCall_refund_decision_deposit {
    __kind: 'refund_decision_deposit'
    index: number
}

/**
 * See [`Pallet::cancel`].
 */
export interface FellowshipReferendaCall_cancel {
    __kind: 'cancel'
    index: number
}

/**
 * See [`Pallet::kill`].
 */
export interface FellowshipReferendaCall_kill {
    __kind: 'kill'
    index: number
}

/**
 * See [`Pallet::nudge_referendum`].
 */
export interface FellowshipReferendaCall_nudge_referendum {
    __kind: 'nudge_referendum'
    index: number
}

/**
 * See [`Pallet::one_fewer_deciding`].
 */
export interface FellowshipReferendaCall_one_fewer_deciding {
    __kind: 'one_fewer_deciding'
    track: number
}

/**
 * See [`Pallet::refund_submission_deposit`].
 */
export interface FellowshipReferendaCall_refund_submission_deposit {
    __kind: 'refund_submission_deposit'
    index: number
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface FellowshipReferendaCall_set_metadata {
    __kind: 'set_metadata'
    index: number
    maybeHash: (Uint8Array | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type WhitelistCall = WhitelistCall_whitelist_call | WhitelistCall_remove_whitelisted_call | WhitelistCall_dispatch_whitelisted_call | WhitelistCall_dispatch_whitelisted_call_with_preimage

/**
 * See [`Pallet::whitelist_call`].
 */
export interface WhitelistCall_whitelist_call {
    __kind: 'whitelist_call'
    callHash: Uint8Array
}

/**
 * See [`Pallet::remove_whitelisted_call`].
 */
export interface WhitelistCall_remove_whitelisted_call {
    __kind: 'remove_whitelisted_call'
    callHash: Uint8Array
}

/**
 * See [`Pallet::dispatch_whitelisted_call`].
 */
export interface WhitelistCall_dispatch_whitelisted_call {
    __kind: 'dispatch_whitelisted_call'
    callHash: Uint8Array
    callEncodedLen: number
    callWeightWitness: Weight
}

/**
 * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
 */
export interface WhitelistCall_dispatch_whitelisted_call_with_preimage {
    __kind: 'dispatch_whitelisted_call_with_preimage'
    call: Call
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ClaimsCall = ClaimsCall_claim | ClaimsCall_mint_claim | ClaimsCall_claim_attest | ClaimsCall_attest | ClaimsCall_move_claim

/**
 * See [`Pallet::claim`].
 */
export interface ClaimsCall_claim {
    __kind: 'claim'
    dest: Uint8Array
    ethereumSignature: Uint8Array
}

/**
 * See [`Pallet::mint_claim`].
 */
export interface ClaimsCall_mint_claim {
    __kind: 'mint_claim'
    who: Uint8Array
    value: bigint
    vestingSchedule: ([bigint, bigint, number] | undefined)
    statement: (StatementKind | undefined)
}

/**
 * See [`Pallet::claim_attest`].
 */
export interface ClaimsCall_claim_attest {
    __kind: 'claim_attest'
    dest: Uint8Array
    ethereumSignature: Uint8Array
    statement: Uint8Array
}

/**
 * See [`Pallet::attest`].
 */
export interface ClaimsCall_attest {
    __kind: 'attest'
    statement: Uint8Array
}

/**
 * See [`Pallet::move_claim`].
 */
export interface ClaimsCall_move_claim {
    __kind: 'move_claim'
    old: Uint8Array
    new: Uint8Array
    maybePreclaim: (Uint8Array | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch | UtilityCall_with_weight

/**
 * See [`Pallet::batch`].
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

/**
 * See [`Pallet::as_derivative`].
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * See [`Pallet::batch_all`].
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

/**
 * See [`Pallet::dispatch_as`].
 */
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

/**
 * See [`Pallet::force_batch`].
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * See [`Pallet::with_weight`].
 */
export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
}

/**
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_set_identity | IdentityCall_set_subs | IdentityCall_clear_identity | IdentityCall_request_judgement | IdentityCall_cancel_request | IdentityCall_set_fee | IdentityCall_set_account_id | IdentityCall_set_fields | IdentityCall_provide_judgement | IdentityCall_kill_identity | IdentityCall_add_sub | IdentityCall_rename_sub | IdentityCall_remove_sub | IdentityCall_quit_sub

/**
 * See [`Pallet::add_registrar`].
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: MultiAddress
}

/**
 * See [`Pallet::set_identity`].
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 * See [`Pallet::set_subs`].
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [Uint8Array, Data][]
}

/**
 * See [`Pallet::clear_identity`].
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 * See [`Pallet::request_judgement`].
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 * See [`Pallet::cancel_request`].
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 * See [`Pallet::set_fee`].
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 * See [`Pallet::set_account_id`].
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: MultiAddress
}

/**
 * See [`Pallet::set_fields`].
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: bigint
}

/**
 * See [`Pallet::provide_judgement`].
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: MultiAddress
    judgement: Judgement
    identity: Uint8Array
}

/**
 * See [`Pallet::kill_identity`].
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: MultiAddress
}

/**
 * See [`Pallet::add_sub`].
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: MultiAddress
    data: Data
}

/**
 * See [`Pallet::rename_sub`].
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: MultiAddress
    data: Data
}

/**
 * See [`Pallet::remove_sub`].
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: MultiAddress
}

/**
 * See [`Pallet::quit_sub`].
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SocietyCall = SocietyCall_bid | SocietyCall_unbid | SocietyCall_vouch | SocietyCall_unvouch | SocietyCall_vote | SocietyCall_defender_vote | SocietyCall_payout | SocietyCall_waive_repay | SocietyCall_found_society | SocietyCall_dissolve | SocietyCall_judge_suspended_member | SocietyCall_set_parameters | SocietyCall_punish_skeptic | SocietyCall_claim_membership | SocietyCall_bestow_membership | SocietyCall_kick_candidate | SocietyCall_resign_candidacy | SocietyCall_drop_candidate | SocietyCall_cleanup_candidacy | SocietyCall_cleanup_challenge

/**
 * See [`Pallet::bid`].
 */
export interface SocietyCall_bid {
    __kind: 'bid'
    value: bigint
}

/**
 * See [`Pallet::unbid`].
 */
export interface SocietyCall_unbid {
    __kind: 'unbid'
}

/**
 * See [`Pallet::vouch`].
 */
export interface SocietyCall_vouch {
    __kind: 'vouch'
    who: MultiAddress
    value: bigint
    tip: bigint
}

/**
 * See [`Pallet::unvouch`].
 */
export interface SocietyCall_unvouch {
    __kind: 'unvouch'
}

/**
 * See [`Pallet::vote`].
 */
export interface SocietyCall_vote {
    __kind: 'vote'
    candidate: MultiAddress
    approve: boolean
}

/**
 * See [`Pallet::defender_vote`].
 */
export interface SocietyCall_defender_vote {
    __kind: 'defender_vote'
    approve: boolean
}

/**
 * See [`Pallet::payout`].
 */
export interface SocietyCall_payout {
    __kind: 'payout'
}

/**
 * See [`Pallet::waive_repay`].
 */
export interface SocietyCall_waive_repay {
    __kind: 'waive_repay'
    amount: bigint
}

/**
 * See [`Pallet::found_society`].
 */
export interface SocietyCall_found_society {
    __kind: 'found_society'
    founder: MultiAddress
    maxMembers: number
    maxIntake: number
    maxStrikes: number
    candidateDeposit: bigint
    rules: Uint8Array
}

/**
 * See [`Pallet::dissolve`].
 */
export interface SocietyCall_dissolve {
    __kind: 'dissolve'
}

/**
 * See [`Pallet::judge_suspended_member`].
 */
export interface SocietyCall_judge_suspended_member {
    __kind: 'judge_suspended_member'
    who: MultiAddress
    forgive: boolean
}

/**
 * See [`Pallet::set_parameters`].
 */
export interface SocietyCall_set_parameters {
    __kind: 'set_parameters'
    maxMembers: number
    maxIntake: number
    maxStrikes: number
    candidateDeposit: bigint
}

/**
 * See [`Pallet::punish_skeptic`].
 */
export interface SocietyCall_punish_skeptic {
    __kind: 'punish_skeptic'
}

/**
 * See [`Pallet::claim_membership`].
 */
export interface SocietyCall_claim_membership {
    __kind: 'claim_membership'
}

/**
 * See [`Pallet::bestow_membership`].
 */
export interface SocietyCall_bestow_membership {
    __kind: 'bestow_membership'
    candidate: Uint8Array
}

/**
 * See [`Pallet::kick_candidate`].
 */
export interface SocietyCall_kick_candidate {
    __kind: 'kick_candidate'
    candidate: Uint8Array
}

/**
 * See [`Pallet::resign_candidacy`].
 */
export interface SocietyCall_resign_candidacy {
    __kind: 'resign_candidacy'
}

/**
 * See [`Pallet::drop_candidate`].
 */
export interface SocietyCall_drop_candidate {
    __kind: 'drop_candidate'
    candidate: Uint8Array
}

/**
 * See [`Pallet::cleanup_candidacy`].
 */
export interface SocietyCall_cleanup_candidacy {
    __kind: 'cleanup_candidacy'
    candidate: Uint8Array
    max: number
}

/**
 * See [`Pallet::cleanup_challenge`].
 */
export interface SocietyCall_cleanup_challenge {
    __kind: 'cleanup_challenge'
    challengeRound: number
    max: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type RecoveryCall = RecoveryCall_as_recovered | RecoveryCall_set_recovered | RecoveryCall_create_recovery | RecoveryCall_initiate_recovery | RecoveryCall_vouch_recovery | RecoveryCall_claim_recovery | RecoveryCall_close_recovery | RecoveryCall_remove_recovery | RecoveryCall_cancel_recovered

/**
 * See [`Pallet::as_recovered`].
 */
export interface RecoveryCall_as_recovered {
    __kind: 'as_recovered'
    account: MultiAddress
    call: Call
}

/**
 * See [`Pallet::set_recovered`].
 */
export interface RecoveryCall_set_recovered {
    __kind: 'set_recovered'
    lost: MultiAddress
    rescuer: MultiAddress
}

/**
 * See [`Pallet::create_recovery`].
 */
export interface RecoveryCall_create_recovery {
    __kind: 'create_recovery'
    friends: Uint8Array[]
    threshold: number
    delayPeriod: number
}

/**
 * See [`Pallet::initiate_recovery`].
 */
export interface RecoveryCall_initiate_recovery {
    __kind: 'initiate_recovery'
    account: MultiAddress
}

/**
 * See [`Pallet::vouch_recovery`].
 */
export interface RecoveryCall_vouch_recovery {
    __kind: 'vouch_recovery'
    lost: MultiAddress
    rescuer: MultiAddress
}

/**
 * See [`Pallet::claim_recovery`].
 */
export interface RecoveryCall_claim_recovery {
    __kind: 'claim_recovery'
    account: MultiAddress
}

/**
 * See [`Pallet::close_recovery`].
 */
export interface RecoveryCall_close_recovery {
    __kind: 'close_recovery'
    rescuer: MultiAddress
}

/**
 * See [`Pallet::remove_recovery`].
 */
export interface RecoveryCall_remove_recovery {
    __kind: 'remove_recovery'
}

/**
 * See [`Pallet::cancel_recovered`].
 */
export interface RecoveryCall_cancel_recovered {
    __kind: 'cancel_recovered'
    account: MultiAddress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VestingCall = VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer | VestingCall_force_vested_transfer | VestingCall_merge_schedules

/**
 * See [`Pallet::vest`].
 */
export interface VestingCall_vest {
    __kind: 'vest'
}

/**
 * See [`Pallet::vest_other`].
 */
export interface VestingCall_vest_other {
    __kind: 'vest_other'
    target: MultiAddress
}

/**
 * See [`Pallet::vested_transfer`].
 */
export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    target: MultiAddress
    schedule: VestingInfo
}

/**
 * See [`Pallet::force_vested_transfer`].
 */
export interface VestingCall_force_vested_transfer {
    __kind: 'force_vested_transfer'
    source: MultiAddress
    target: MultiAddress
    schedule: VestingInfo
}

/**
 * See [`Pallet::merge_schedules`].
 */
export interface VestingCall_merge_schedules {
    __kind: 'merge_schedules'
    schedule1Index: number
    schedule2Index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 * See [`Pallet::schedule`].
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::cancel`].
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * See [`Pallet::schedule_named`].
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Uint8Array
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::cancel_named`].
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Uint8Array
}

/**
 * See [`Pallet::schedule_after`].
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_named_after`].
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Uint8Array
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ProxyCall = ProxyCall_proxy | ProxyCall_add_proxy | ProxyCall_remove_proxy | ProxyCall_remove_proxies | ProxyCall_create_pure | ProxyCall_kill_pure | ProxyCall_announce | ProxyCall_remove_announcement | ProxyCall_reject_announcement | ProxyCall_proxy_announced

/**
 * See [`Pallet::proxy`].
 */
export interface ProxyCall_proxy {
    __kind: 'proxy'
    real: MultiAddress
    forceProxyType: (ProxyType | undefined)
    call: Call
}

/**
 * See [`Pallet::add_proxy`].
 */
export interface ProxyCall_add_proxy {
    __kind: 'add_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

/**
 * See [`Pallet::remove_proxy`].
 */
export interface ProxyCall_remove_proxy {
    __kind: 'remove_proxy'
    delegate: MultiAddress
    proxyType: ProxyType
    delay: number
}

/**
 * See [`Pallet::remove_proxies`].
 */
export interface ProxyCall_remove_proxies {
    __kind: 'remove_proxies'
}

/**
 * See [`Pallet::create_pure`].
 */
export interface ProxyCall_create_pure {
    __kind: 'create_pure'
    proxyType: ProxyType
    delay: number
    index: number
}

/**
 * See [`Pallet::kill_pure`].
 */
export interface ProxyCall_kill_pure {
    __kind: 'kill_pure'
    spawner: MultiAddress
    proxyType: ProxyType
    index: number
    height: number
    extIndex: number
}

/**
 * See [`Pallet::announce`].
 */
export interface ProxyCall_announce {
    __kind: 'announce'
    real: MultiAddress
    callHash: Uint8Array
}

/**
 * See [`Pallet::remove_announcement`].
 */
export interface ProxyCall_remove_announcement {
    __kind: 'remove_announcement'
    real: MultiAddress
    callHash: Uint8Array
}

/**
 * See [`Pallet::reject_announcement`].
 */
export interface ProxyCall_reject_announcement {
    __kind: 'reject_announcement'
    delegate: MultiAddress
    callHash: Uint8Array
}

/**
 * See [`Pallet::proxy_announced`].
 */
export interface ProxyCall_proxy_announced {
    __kind: 'proxy_announced'
    delegate: MultiAddress
    real: MultiAddress
    forceProxyType: (ProxyType | undefined)
    call: Call
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

/**
 * See [`Pallet::as_multi_threshold_1`].
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: Uint8Array[]
    call: Call
}

/**
 * See [`Pallet::as_multi`].
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    call: Call
    maxWeight: Weight
}

/**
 * See [`Pallet::approve_as_multi`].
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    callHash: Uint8Array
    maxWeight: Weight
}

/**
 * See [`Pallet::cancel_as_multi`].
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    timepoint: Timepoint
    callHash: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PreimageCall = PreimageCall_note_preimage | PreimageCall_unnote_preimage | PreimageCall_request_preimage | PreimageCall_unrequest_preimage

/**
 * See [`Pallet::note_preimage`].
 */
export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Uint8Array
}

/**
 * See [`Pallet::unnote_preimage`].
 */
export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: Uint8Array
}

/**
 * See [`Pallet::request_preimage`].
 */
export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: Uint8Array
}

/**
 * See [`Pallet::unrequest_preimage`].
 */
export interface PreimageCall_unrequest_preimage {
    __kind: 'unrequest_preimage'
    hash: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BountiesCall = BountiesCall_propose_bounty | BountiesCall_approve_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator | BountiesCall_accept_curator | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry

/**
 * See [`Pallet::propose_bounty`].
 */
export interface BountiesCall_propose_bounty {
    __kind: 'propose_bounty'
    value: bigint
    description: Uint8Array
}

/**
 * See [`Pallet::approve_bounty`].
 */
export interface BountiesCall_approve_bounty {
    __kind: 'approve_bounty'
    bountyId: number
}

/**
 * See [`Pallet::propose_curator`].
 */
export interface BountiesCall_propose_curator {
    __kind: 'propose_curator'
    bountyId: number
    curator: MultiAddress
    fee: bigint
}

/**
 * See [`Pallet::unassign_curator`].
 */
export interface BountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    bountyId: number
}

/**
 * See [`Pallet::accept_curator`].
 */
export interface BountiesCall_accept_curator {
    __kind: 'accept_curator'
    bountyId: number
}

/**
 * See [`Pallet::award_bounty`].
 */
export interface BountiesCall_award_bounty {
    __kind: 'award_bounty'
    bountyId: number
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::claim_bounty`].
 */
export interface BountiesCall_claim_bounty {
    __kind: 'claim_bounty'
    bountyId: number
}

/**
 * See [`Pallet::close_bounty`].
 */
export interface BountiesCall_close_bounty {
    __kind: 'close_bounty'
    bountyId: number
}

/**
 * See [`Pallet::extend_bounty_expiry`].
 */
export interface BountiesCall_extend_bounty_expiry {
    __kind: 'extend_bounty_expiry'
    bountyId: number
    remark: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ChildBountiesCall = ChildBountiesCall_add_child_bounty | ChildBountiesCall_propose_curator | ChildBountiesCall_accept_curator | ChildBountiesCall_unassign_curator | ChildBountiesCall_award_child_bounty | ChildBountiesCall_claim_child_bounty | ChildBountiesCall_close_child_bounty

/**
 * See [`Pallet::add_child_bounty`].
 */
export interface ChildBountiesCall_add_child_bounty {
    __kind: 'add_child_bounty'
    parentBountyId: number
    value: bigint
    description: Uint8Array
}

/**
 * See [`Pallet::propose_curator`].
 */
export interface ChildBountiesCall_propose_curator {
    __kind: 'propose_curator'
    parentBountyId: number
    childBountyId: number
    curator: MultiAddress
    fee: bigint
}

/**
 * See [`Pallet::accept_curator`].
 */
export interface ChildBountiesCall_accept_curator {
    __kind: 'accept_curator'
    parentBountyId: number
    childBountyId: number
}

/**
 * See [`Pallet::unassign_curator`].
 */
export interface ChildBountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    parentBountyId: number
    childBountyId: number
}

/**
 * See [`Pallet::award_child_bounty`].
 */
export interface ChildBountiesCall_award_child_bounty {
    __kind: 'award_child_bounty'
    parentBountyId: number
    childBountyId: number
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::claim_child_bounty`].
 */
export interface ChildBountiesCall_claim_child_bounty {
    __kind: 'claim_child_bounty'
    parentBountyId: number
    childBountyId: number
}

/**
 * See [`Pallet::close_child_bounty`].
 */
export interface ChildBountiesCall_close_child_bounty {
    __kind: 'close_child_bounty'
    parentBountyId: number
    childBountyId: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ElectionProviderMultiPhaseCall = ElectionProviderMultiPhaseCall_submit_unsigned | ElectionProviderMultiPhaseCall_set_minimum_untrusted_score | ElectionProviderMultiPhaseCall_set_emergency_election_result | ElectionProviderMultiPhaseCall_submit | ElectionProviderMultiPhaseCall_governance_fallback

/**
 * See [`Pallet::submit_unsigned`].
 */
export interface ElectionProviderMultiPhaseCall_submit_unsigned {
    __kind: 'submit_unsigned'
    rawSolution: RawSolution
    witness: SolutionOrSnapshotSize
}

/**
 * See [`Pallet::set_minimum_untrusted_score`].
 */
export interface ElectionProviderMultiPhaseCall_set_minimum_untrusted_score {
    __kind: 'set_minimum_untrusted_score'
    maybeNextScore: (ElectionScore | undefined)
}

/**
 * See [`Pallet::set_emergency_election_result`].
 */
export interface ElectionProviderMultiPhaseCall_set_emergency_election_result {
    __kind: 'set_emergency_election_result'
    supports: [Uint8Array, Support][]
}

/**
 * See [`Pallet::submit`].
 */
export interface ElectionProviderMultiPhaseCall_submit {
    __kind: 'submit'
    rawSolution: RawSolution
}

/**
 * See [`Pallet::governance_fallback`].
 */
export interface ElectionProviderMultiPhaseCall_governance_fallback {
    __kind: 'governance_fallback'
    maybeMaxVoters: (number | undefined)
    maybeMaxTargets: (number | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type NisCall = NisCall_place_bid | NisCall_retract_bid | NisCall_fund_deficit | NisCall_thaw_private | NisCall_thaw_communal | NisCall_communify | NisCall_privatize

/**
 * See [`Pallet::place_bid`].
 */
export interface NisCall_place_bid {
    __kind: 'place_bid'
    amount: bigint
    duration: number
}

/**
 * See [`Pallet::retract_bid`].
 */
export interface NisCall_retract_bid {
    __kind: 'retract_bid'
    amount: bigint
    duration: number
}

/**
 * See [`Pallet::fund_deficit`].
 */
export interface NisCall_fund_deficit {
    __kind: 'fund_deficit'
}

/**
 * See [`Pallet::thaw_private`].
 */
export interface NisCall_thaw_private {
    __kind: 'thaw_private'
    index: number
    maybeProportion: (bigint | undefined)
}

/**
 * See [`Pallet::thaw_communal`].
 */
export interface NisCall_thaw_communal {
    __kind: 'thaw_communal'
    index: number
}

/**
 * See [`Pallet::communify`].
 */
export interface NisCall_communify {
    __kind: 'communify'
    index: number
}

/**
 * See [`Pallet::privatize`].
 */
export interface NisCall_privatize {
    __kind: 'privatize'
    index: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type NisCounterpartBalancesCall = NisCounterpartBalancesCall_transfer_allow_death | NisCounterpartBalancesCall_set_balance_deprecated | NisCounterpartBalancesCall_force_transfer | NisCounterpartBalancesCall_transfer_keep_alive | NisCounterpartBalancesCall_transfer_all | NisCounterpartBalancesCall_force_unreserve | NisCounterpartBalancesCall_upgrade_accounts | NisCounterpartBalancesCall_transfer | NisCounterpartBalancesCall_force_set_balance

/**
 * See [`Pallet::transfer_allow_death`].
 */
export interface NisCounterpartBalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::set_balance_deprecated`].
 */
export interface NisCounterpartBalancesCall_set_balance_deprecated {
    __kind: 'set_balance_deprecated'
    who: MultiAddress
    newFree: bigint
    oldReserved: bigint
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface NisCounterpartBalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_keep_alive`].
 */
export interface NisCounterpartBalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_all`].
 */
export interface NisCounterpartBalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * See [`Pallet::force_unreserve`].
 */
export interface NisCounterpartBalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::upgrade_accounts`].
 */
export interface NisCounterpartBalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: Uint8Array[]
}

/**
 * See [`Pallet::transfer`].
 */
export interface NisCounterpartBalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::force_set_balance`].
 */
export interface NisCounterpartBalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type VoterListCall = VoterListCall_rebag | VoterListCall_put_in_front_of | VoterListCall_put_in_front_of_other

/**
 * See [`Pallet::rebag`].
 */
export interface VoterListCall_rebag {
    __kind: 'rebag'
    dislocated: MultiAddress
}

/**
 * See [`Pallet::put_in_front_of`].
 */
export interface VoterListCall_put_in_front_of {
    __kind: 'put_in_front_of'
    lighter: MultiAddress
}

/**
 * See [`Pallet::put_in_front_of_other`].
 */
export interface VoterListCall_put_in_front_of_other {
    __kind: 'put_in_front_of_other'
    heavier: MultiAddress
    lighter: MultiAddress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type NominationPoolsCall = NominationPoolsCall_join | NominationPoolsCall_bond_extra | NominationPoolsCall_claim_payout | NominationPoolsCall_unbond | NominationPoolsCall_pool_withdraw_unbonded | NominationPoolsCall_withdraw_unbonded | NominationPoolsCall_create | NominationPoolsCall_create_with_pool_id | NominationPoolsCall_nominate | NominationPoolsCall_set_state | NominationPoolsCall_set_metadata | NominationPoolsCall_set_configs | NominationPoolsCall_update_roles | NominationPoolsCall_chill | NominationPoolsCall_bond_extra_other | NominationPoolsCall_set_claim_permission | NominationPoolsCall_claim_payout_other | NominationPoolsCall_set_commission | NominationPoolsCall_set_commission_max | NominationPoolsCall_set_commission_change_rate | NominationPoolsCall_claim_commission

/**
 * See [`Pallet::join`].
 */
export interface NominationPoolsCall_join {
    __kind: 'join'
    amount: bigint
    poolId: number
}

/**
 * See [`Pallet::bond_extra`].
 */
export interface NominationPoolsCall_bond_extra {
    __kind: 'bond_extra'
    extra: BondExtra
}

/**
 * See [`Pallet::claim_payout`].
 */
export interface NominationPoolsCall_claim_payout {
    __kind: 'claim_payout'
}

/**
 * See [`Pallet::unbond`].
 */
export interface NominationPoolsCall_unbond {
    __kind: 'unbond'
    memberAccount: MultiAddress
    unbondingPoints: bigint
}

/**
 * See [`Pallet::pool_withdraw_unbonded`].
 */
export interface NominationPoolsCall_pool_withdraw_unbonded {
    __kind: 'pool_withdraw_unbonded'
    poolId: number
    numSlashingSpans: number
}

/**
 * See [`Pallet::withdraw_unbonded`].
 */
export interface NominationPoolsCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    memberAccount: MultiAddress
    numSlashingSpans: number
}

/**
 * See [`Pallet::create`].
 */
export interface NominationPoolsCall_create {
    __kind: 'create'
    amount: bigint
    root: MultiAddress
    nominator: MultiAddress
    bouncer: MultiAddress
}

/**
 * See [`Pallet::create_with_pool_id`].
 */
export interface NominationPoolsCall_create_with_pool_id {
    __kind: 'create_with_pool_id'
    amount: bigint
    root: MultiAddress
    nominator: MultiAddress
    bouncer: MultiAddress
    poolId: number
}

/**
 * See [`Pallet::nominate`].
 */
export interface NominationPoolsCall_nominate {
    __kind: 'nominate'
    poolId: number
    validators: Uint8Array[]
}

/**
 * See [`Pallet::set_state`].
 */
export interface NominationPoolsCall_set_state {
    __kind: 'set_state'
    poolId: number
    state: PoolState
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface NominationPoolsCall_set_metadata {
    __kind: 'set_metadata'
    poolId: number
    metadata: Uint8Array
}

/**
 * See [`Pallet::set_configs`].
 */
export interface NominationPoolsCall_set_configs {
    __kind: 'set_configs'
    minJoinBond: ConfigOp
    minCreateBond: ConfigOp
    maxPools: Type_316
    maxMembers: Type_316
    maxMembersPerPool: Type_316
    globalMaxCommission: Type_317
}

/**
 * See [`Pallet::update_roles`].
 */
export interface NominationPoolsCall_update_roles {
    __kind: 'update_roles'
    poolId: number
    newRoot: Type_318
    newNominator: Type_318
    newBouncer: Type_318
}

/**
 * See [`Pallet::chill`].
 */
export interface NominationPoolsCall_chill {
    __kind: 'chill'
    poolId: number
}

/**
 * See [`Pallet::bond_extra_other`].
 */
export interface NominationPoolsCall_bond_extra_other {
    __kind: 'bond_extra_other'
    member: MultiAddress
    extra: BondExtra
}

/**
 * See [`Pallet::set_claim_permission`].
 */
export interface NominationPoolsCall_set_claim_permission {
    __kind: 'set_claim_permission'
    permission: ClaimPermission
}

/**
 * See [`Pallet::claim_payout_other`].
 */
export interface NominationPoolsCall_claim_payout_other {
    __kind: 'claim_payout_other'
    other: Uint8Array
}

/**
 * See [`Pallet::set_commission`].
 */
export interface NominationPoolsCall_set_commission {
    __kind: 'set_commission'
    poolId: number
    newCommission: ([number, Uint8Array] | undefined)
}

/**
 * See [`Pallet::set_commission_max`].
 */
export interface NominationPoolsCall_set_commission_max {
    __kind: 'set_commission_max'
    poolId: number
    maxCommission: number
}

/**
 * See [`Pallet::set_commission_change_rate`].
 */
export interface NominationPoolsCall_set_commission_change_rate {
    __kind: 'set_commission_change_rate'
    poolId: number
    changeRate: CommissionChangeRate
}

/**
 * See [`Pallet::claim_commission`].
 */
export interface NominationPoolsCall_claim_commission {
    __kind: 'claim_commission'
    poolId: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FastUnstakeCall = FastUnstakeCall_register_fast_unstake | FastUnstakeCall_deregister | FastUnstakeCall_control

/**
 * See [`Pallet::register_fast_unstake`].
 */
export interface FastUnstakeCall_register_fast_unstake {
    __kind: 'register_fast_unstake'
}

/**
 * See [`Pallet::deregister`].
 */
export interface FastUnstakeCall_deregister {
    __kind: 'deregister'
}

/**
 * See [`Pallet::control`].
 */
export interface FastUnstakeCall_control {
    __kind: 'control'
    erasToCheck: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ConfigurationCall = ConfigurationCall_set_validation_upgrade_cooldown | ConfigurationCall_set_validation_upgrade_delay | ConfigurationCall_set_code_retention_period | ConfigurationCall_set_max_code_size | ConfigurationCall_set_max_pov_size | ConfigurationCall_set_max_head_data_size | ConfigurationCall_set_on_demand_cores | ConfigurationCall_set_on_demand_retries | ConfigurationCall_set_group_rotation_frequency | ConfigurationCall_set_paras_availability_period | ConfigurationCall_set_scheduling_lookahead | ConfigurationCall_set_max_validators_per_core | ConfigurationCall_set_max_validators | ConfigurationCall_set_dispute_period | ConfigurationCall_set_dispute_post_conclusion_acceptance_period | ConfigurationCall_set_no_show_slots | ConfigurationCall_set_n_delay_tranches | ConfigurationCall_set_zeroth_delay_tranche_width | ConfigurationCall_set_needed_approvals | ConfigurationCall_set_relay_vrf_modulo_samples | ConfigurationCall_set_max_upward_queue_count | ConfigurationCall_set_max_upward_queue_size | ConfigurationCall_set_max_downward_message_size | ConfigurationCall_set_max_upward_message_size | ConfigurationCall_set_max_upward_message_num_per_candidate | ConfigurationCall_set_hrmp_open_request_ttl | ConfigurationCall_set_hrmp_sender_deposit | ConfigurationCall_set_hrmp_recipient_deposit | ConfigurationCall_set_hrmp_channel_max_capacity | ConfigurationCall_set_hrmp_channel_max_total_size | ConfigurationCall_set_hrmp_max_parachain_inbound_channels | ConfigurationCall_set_hrmp_channel_max_message_size | ConfigurationCall_set_hrmp_max_parachain_outbound_channels | ConfigurationCall_set_hrmp_max_message_num_per_candidate | ConfigurationCall_set_pvf_voting_ttl | ConfigurationCall_set_minimum_validation_upgrade_delay | ConfigurationCall_set_bypass_consistency_check | ConfigurationCall_set_async_backing_params | ConfigurationCall_set_executor_params | ConfigurationCall_set_on_demand_base_fee | ConfigurationCall_set_on_demand_fee_variability | ConfigurationCall_set_on_demand_queue_max_size | ConfigurationCall_set_on_demand_target_queue_utilization | ConfigurationCall_set_on_demand_ttl | ConfigurationCall_set_minimum_backing_votes

/**
 * See [`Pallet::set_validation_upgrade_cooldown`].
 */
export interface ConfigurationCall_set_validation_upgrade_cooldown {
    __kind: 'set_validation_upgrade_cooldown'
    new: number
}

/**
 * See [`Pallet::set_validation_upgrade_delay`].
 */
export interface ConfigurationCall_set_validation_upgrade_delay {
    __kind: 'set_validation_upgrade_delay'
    new: number
}

/**
 * See [`Pallet::set_code_retention_period`].
 */
export interface ConfigurationCall_set_code_retention_period {
    __kind: 'set_code_retention_period'
    new: number
}

/**
 * See [`Pallet::set_max_code_size`].
 */
export interface ConfigurationCall_set_max_code_size {
    __kind: 'set_max_code_size'
    new: number
}

/**
 * See [`Pallet::set_max_pov_size`].
 */
export interface ConfigurationCall_set_max_pov_size {
    __kind: 'set_max_pov_size'
    new: number
}

/**
 * See [`Pallet::set_max_head_data_size`].
 */
export interface ConfigurationCall_set_max_head_data_size {
    __kind: 'set_max_head_data_size'
    new: number
}

/**
 * See [`Pallet::set_on_demand_cores`].
 */
export interface ConfigurationCall_set_on_demand_cores {
    __kind: 'set_on_demand_cores'
    new: number
}

/**
 * See [`Pallet::set_on_demand_retries`].
 */
export interface ConfigurationCall_set_on_demand_retries {
    __kind: 'set_on_demand_retries'
    new: number
}

/**
 * See [`Pallet::set_group_rotation_frequency`].
 */
export interface ConfigurationCall_set_group_rotation_frequency {
    __kind: 'set_group_rotation_frequency'
    new: number
}

/**
 * See [`Pallet::set_paras_availability_period`].
 */
export interface ConfigurationCall_set_paras_availability_period {
    __kind: 'set_paras_availability_period'
    new: number
}

/**
 * See [`Pallet::set_scheduling_lookahead`].
 */
export interface ConfigurationCall_set_scheduling_lookahead {
    __kind: 'set_scheduling_lookahead'
    new: number
}

/**
 * See [`Pallet::set_max_validators_per_core`].
 */
export interface ConfigurationCall_set_max_validators_per_core {
    __kind: 'set_max_validators_per_core'
    new: (number | undefined)
}

/**
 * See [`Pallet::set_max_validators`].
 */
export interface ConfigurationCall_set_max_validators {
    __kind: 'set_max_validators'
    new: (number | undefined)
}

/**
 * See [`Pallet::set_dispute_period`].
 */
export interface ConfigurationCall_set_dispute_period {
    __kind: 'set_dispute_period'
    new: number
}

/**
 * See [`Pallet::set_dispute_post_conclusion_acceptance_period`].
 */
export interface ConfigurationCall_set_dispute_post_conclusion_acceptance_period {
    __kind: 'set_dispute_post_conclusion_acceptance_period'
    new: number
}

/**
 * See [`Pallet::set_no_show_slots`].
 */
export interface ConfigurationCall_set_no_show_slots {
    __kind: 'set_no_show_slots'
    new: number
}

/**
 * See [`Pallet::set_n_delay_tranches`].
 */
export interface ConfigurationCall_set_n_delay_tranches {
    __kind: 'set_n_delay_tranches'
    new: number
}

/**
 * See [`Pallet::set_zeroth_delay_tranche_width`].
 */
export interface ConfigurationCall_set_zeroth_delay_tranche_width {
    __kind: 'set_zeroth_delay_tranche_width'
    new: number
}

/**
 * See [`Pallet::set_needed_approvals`].
 */
export interface ConfigurationCall_set_needed_approvals {
    __kind: 'set_needed_approvals'
    new: number
}

/**
 * See [`Pallet::set_relay_vrf_modulo_samples`].
 */
export interface ConfigurationCall_set_relay_vrf_modulo_samples {
    __kind: 'set_relay_vrf_modulo_samples'
    new: number
}

/**
 * See [`Pallet::set_max_upward_queue_count`].
 */
export interface ConfigurationCall_set_max_upward_queue_count {
    __kind: 'set_max_upward_queue_count'
    new: number
}

/**
 * See [`Pallet::set_max_upward_queue_size`].
 */
export interface ConfigurationCall_set_max_upward_queue_size {
    __kind: 'set_max_upward_queue_size'
    new: number
}

/**
 * See [`Pallet::set_max_downward_message_size`].
 */
export interface ConfigurationCall_set_max_downward_message_size {
    __kind: 'set_max_downward_message_size'
    new: number
}

/**
 * See [`Pallet::set_max_upward_message_size`].
 */
export interface ConfigurationCall_set_max_upward_message_size {
    __kind: 'set_max_upward_message_size'
    new: number
}

/**
 * See [`Pallet::set_max_upward_message_num_per_candidate`].
 */
export interface ConfigurationCall_set_max_upward_message_num_per_candidate {
    __kind: 'set_max_upward_message_num_per_candidate'
    new: number
}

/**
 * See [`Pallet::set_hrmp_open_request_ttl`].
 */
export interface ConfigurationCall_set_hrmp_open_request_ttl {
    __kind: 'set_hrmp_open_request_ttl'
    new: number
}

/**
 * See [`Pallet::set_hrmp_sender_deposit`].
 */
export interface ConfigurationCall_set_hrmp_sender_deposit {
    __kind: 'set_hrmp_sender_deposit'
    new: bigint
}

/**
 * See [`Pallet::set_hrmp_recipient_deposit`].
 */
export interface ConfigurationCall_set_hrmp_recipient_deposit {
    __kind: 'set_hrmp_recipient_deposit'
    new: bigint
}

/**
 * See [`Pallet::set_hrmp_channel_max_capacity`].
 */
export interface ConfigurationCall_set_hrmp_channel_max_capacity {
    __kind: 'set_hrmp_channel_max_capacity'
    new: number
}

/**
 * See [`Pallet::set_hrmp_channel_max_total_size`].
 */
export interface ConfigurationCall_set_hrmp_channel_max_total_size {
    __kind: 'set_hrmp_channel_max_total_size'
    new: number
}

/**
 * See [`Pallet::set_hrmp_max_parachain_inbound_channels`].
 */
export interface ConfigurationCall_set_hrmp_max_parachain_inbound_channels {
    __kind: 'set_hrmp_max_parachain_inbound_channels'
    new: number
}

/**
 * See [`Pallet::set_hrmp_channel_max_message_size`].
 */
export interface ConfigurationCall_set_hrmp_channel_max_message_size {
    __kind: 'set_hrmp_channel_max_message_size'
    new: number
}

/**
 * See [`Pallet::set_hrmp_max_parachain_outbound_channels`].
 */
export interface ConfigurationCall_set_hrmp_max_parachain_outbound_channels {
    __kind: 'set_hrmp_max_parachain_outbound_channels'
    new: number
}

/**
 * See [`Pallet::set_hrmp_max_message_num_per_candidate`].
 */
export interface ConfigurationCall_set_hrmp_max_message_num_per_candidate {
    __kind: 'set_hrmp_max_message_num_per_candidate'
    new: number
}

/**
 * See [`Pallet::set_pvf_voting_ttl`].
 */
export interface ConfigurationCall_set_pvf_voting_ttl {
    __kind: 'set_pvf_voting_ttl'
    new: number
}

/**
 * See [`Pallet::set_minimum_validation_upgrade_delay`].
 */
export interface ConfigurationCall_set_minimum_validation_upgrade_delay {
    __kind: 'set_minimum_validation_upgrade_delay'
    new: number
}

/**
 * See [`Pallet::set_bypass_consistency_check`].
 */
export interface ConfigurationCall_set_bypass_consistency_check {
    __kind: 'set_bypass_consistency_check'
    new: boolean
}

/**
 * See [`Pallet::set_async_backing_params`].
 */
export interface ConfigurationCall_set_async_backing_params {
    __kind: 'set_async_backing_params'
    new: AsyncBackingParams
}

/**
 * See [`Pallet::set_executor_params`].
 */
export interface ConfigurationCall_set_executor_params {
    __kind: 'set_executor_params'
    new: V5ExecutorParam[]
}

/**
 * See [`Pallet::set_on_demand_base_fee`].
 */
export interface ConfigurationCall_set_on_demand_base_fee {
    __kind: 'set_on_demand_base_fee'
    new: bigint
}

/**
 * See [`Pallet::set_on_demand_fee_variability`].
 */
export interface ConfigurationCall_set_on_demand_fee_variability {
    __kind: 'set_on_demand_fee_variability'
    new: number
}

/**
 * See [`Pallet::set_on_demand_queue_max_size`].
 */
export interface ConfigurationCall_set_on_demand_queue_max_size {
    __kind: 'set_on_demand_queue_max_size'
    new: number
}

/**
 * See [`Pallet::set_on_demand_target_queue_utilization`].
 */
export interface ConfigurationCall_set_on_demand_target_queue_utilization {
    __kind: 'set_on_demand_target_queue_utilization'
    new: number
}

/**
 * See [`Pallet::set_on_demand_ttl`].
 */
export interface ConfigurationCall_set_on_demand_ttl {
    __kind: 'set_on_demand_ttl'
    new: number
}

/**
 * See [`Pallet::set_minimum_backing_votes`].
 */
export interface ConfigurationCall_set_minimum_backing_votes {
    __kind: 'set_minimum_backing_votes'
    new: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasSharedCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParaInclusionCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParaInherentCall = ParaInherentCall_enter

/**
 * See [`Pallet::enter`].
 */
export interface ParaInherentCall_enter {
    __kind: 'enter'
    data: V5InherentData
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasCall = ParasCall_force_set_current_code | ParasCall_force_set_current_head | ParasCall_force_schedule_code_upgrade | ParasCall_force_note_new_head | ParasCall_force_queue_action | ParasCall_add_trusted_validation_code | ParasCall_poke_unused_validation_code | ParasCall_include_pvf_check_statement | ParasCall_force_set_most_recent_context

/**
 * See [`Pallet::force_set_current_code`].
 */
export interface ParasCall_force_set_current_code {
    __kind: 'force_set_current_code'
    para: number
    newCode: Uint8Array
}

/**
 * See [`Pallet::force_set_current_head`].
 */
export interface ParasCall_force_set_current_head {
    __kind: 'force_set_current_head'
    para: number
    newHead: Uint8Array
}

/**
 * See [`Pallet::force_schedule_code_upgrade`].
 */
export interface ParasCall_force_schedule_code_upgrade {
    __kind: 'force_schedule_code_upgrade'
    para: number
    newCode: Uint8Array
    relayParentNumber: number
}

/**
 * See [`Pallet::force_note_new_head`].
 */
export interface ParasCall_force_note_new_head {
    __kind: 'force_note_new_head'
    para: number
    newHead: Uint8Array
}

/**
 * See [`Pallet::force_queue_action`].
 */
export interface ParasCall_force_queue_action {
    __kind: 'force_queue_action'
    para: number
}

/**
 * See [`Pallet::add_trusted_validation_code`].
 */
export interface ParasCall_add_trusted_validation_code {
    __kind: 'add_trusted_validation_code'
    validationCode: Uint8Array
}

/**
 * See [`Pallet::poke_unused_validation_code`].
 */
export interface ParasCall_poke_unused_validation_code {
    __kind: 'poke_unused_validation_code'
    validationCodeHash: Uint8Array
}

/**
 * See [`Pallet::include_pvf_check_statement`].
 */
export interface ParasCall_include_pvf_check_statement {
    __kind: 'include_pvf_check_statement'
    stmt: V5PvfCheckStatement
    signature: Uint8Array
}

/**
 * See [`Pallet::force_set_most_recent_context`].
 */
export interface ParasCall_force_set_most_recent_context {
    __kind: 'force_set_most_recent_context'
    para: number
    context: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type InitializerCall = InitializerCall_force_approve

/**
 * See [`Pallet::force_approve`].
 */
export interface InitializerCall_force_approve {
    __kind: 'force_approve'
    upTo: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type HrmpCall = HrmpCall_hrmp_init_open_channel | HrmpCall_hrmp_accept_open_channel | HrmpCall_hrmp_close_channel | HrmpCall_force_clean_hrmp | HrmpCall_force_process_hrmp_open | HrmpCall_force_process_hrmp_close | HrmpCall_hrmp_cancel_open_request | HrmpCall_force_open_hrmp_channel

/**
 * See [`Pallet::hrmp_init_open_channel`].
 */
export interface HrmpCall_hrmp_init_open_channel {
    __kind: 'hrmp_init_open_channel'
    recipient: number
    proposedMaxCapacity: number
    proposedMaxMessageSize: number
}

/**
 * See [`Pallet::hrmp_accept_open_channel`].
 */
export interface HrmpCall_hrmp_accept_open_channel {
    __kind: 'hrmp_accept_open_channel'
    sender: number
}

/**
 * See [`Pallet::hrmp_close_channel`].
 */
export interface HrmpCall_hrmp_close_channel {
    __kind: 'hrmp_close_channel'
    channelId: HrmpChannelId
}

/**
 * See [`Pallet::force_clean_hrmp`].
 */
export interface HrmpCall_force_clean_hrmp {
    __kind: 'force_clean_hrmp'
    para: number
    inbound: number
    outbound: number
}

/**
 * See [`Pallet::force_process_hrmp_open`].
 */
export interface HrmpCall_force_process_hrmp_open {
    __kind: 'force_process_hrmp_open'
    channels: number
}

/**
 * See [`Pallet::force_process_hrmp_close`].
 */
export interface HrmpCall_force_process_hrmp_close {
    __kind: 'force_process_hrmp_close'
    channels: number
}

/**
 * See [`Pallet::hrmp_cancel_open_request`].
 */
export interface HrmpCall_hrmp_cancel_open_request {
    __kind: 'hrmp_cancel_open_request'
    channelId: HrmpChannelId
    openRequests: number
}

/**
 * See [`Pallet::force_open_hrmp_channel`].
 */
export interface HrmpCall_force_open_hrmp_channel {
    __kind: 'force_open_hrmp_channel'
    sender: number
    recipient: number
    maxCapacity: number
    maxMessageSize: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasDisputesCall = ParasDisputesCall_force_unfreeze

/**
 * See [`Pallet::force_unfreeze`].
 */
export interface ParasDisputesCall_force_unfreeze {
    __kind: 'force_unfreeze'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParasSlashingCall = ParasSlashingCall_report_dispute_lost_unsigned

/**
 * See [`Pallet::report_dispute_lost_unsigned`].
 */
export interface ParasSlashingCall_report_dispute_lost_unsigned {
    __kind: 'report_dispute_lost_unsigned'
    disputeProof: V5DisputeProof
    keyOwnerProof: MembershipProof
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type RegistrarCall = RegistrarCall_register | RegistrarCall_force_register | RegistrarCall_deregister | RegistrarCall_swap | RegistrarCall_remove_lock | RegistrarCall_reserve | RegistrarCall_add_lock | RegistrarCall_schedule_code_upgrade | RegistrarCall_set_current_head

/**
 * See [`Pallet::register`].
 */
export interface RegistrarCall_register {
    __kind: 'register'
    id: number
    genesisHead: Uint8Array
    validationCode: Uint8Array
}

/**
 * See [`Pallet::force_register`].
 */
export interface RegistrarCall_force_register {
    __kind: 'force_register'
    who: Uint8Array
    deposit: bigint
    id: number
    genesisHead: Uint8Array
    validationCode: Uint8Array
}

/**
 * See [`Pallet::deregister`].
 */
export interface RegistrarCall_deregister {
    __kind: 'deregister'
    id: number
}

/**
 * See [`Pallet::swap`].
 */
export interface RegistrarCall_swap {
    __kind: 'swap'
    id: number
    other: number
}

/**
 * See [`Pallet::remove_lock`].
 */
export interface RegistrarCall_remove_lock {
    __kind: 'remove_lock'
    para: number
}

/**
 * See [`Pallet::reserve`].
 */
export interface RegistrarCall_reserve {
    __kind: 'reserve'
}

/**
 * See [`Pallet::add_lock`].
 */
export interface RegistrarCall_add_lock {
    __kind: 'add_lock'
    para: number
}

/**
 * See [`Pallet::schedule_code_upgrade`].
 */
export interface RegistrarCall_schedule_code_upgrade {
    __kind: 'schedule_code_upgrade'
    para: number
    newCode: Uint8Array
}

/**
 * See [`Pallet::set_current_head`].
 */
export interface RegistrarCall_set_current_head {
    __kind: 'set_current_head'
    para: number
    newHead: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SlotsCall = SlotsCall_force_lease | SlotsCall_clear_all_leases | SlotsCall_trigger_onboard

/**
 * See [`Pallet::force_lease`].
 */
export interface SlotsCall_force_lease {
    __kind: 'force_lease'
    para: number
    leaser: Uint8Array
    amount: bigint
    periodBegin: number
    periodCount: number
}

/**
 * See [`Pallet::clear_all_leases`].
 */
export interface SlotsCall_clear_all_leases {
    __kind: 'clear_all_leases'
    para: number
}

/**
 * See [`Pallet::trigger_onboard`].
 */
export interface SlotsCall_trigger_onboard {
    __kind: 'trigger_onboard'
    para: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type AuctionsCall = AuctionsCall_new_auction | AuctionsCall_bid | AuctionsCall_cancel_auction

/**
 * See [`Pallet::new_auction`].
 */
export interface AuctionsCall_new_auction {
    __kind: 'new_auction'
    duration: number
    leasePeriodIndex: number
}

/**
 * See [`Pallet::bid`].
 */
export interface AuctionsCall_bid {
    __kind: 'bid'
    para: number
    auctionIndex: number
    firstSlot: number
    lastSlot: number
    amount: bigint
}

/**
 * See [`Pallet::cancel_auction`].
 */
export interface AuctionsCall_cancel_auction {
    __kind: 'cancel_auction'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CrowdloanCall = CrowdloanCall_create | CrowdloanCall_contribute | CrowdloanCall_withdraw | CrowdloanCall_refund | CrowdloanCall_dissolve | CrowdloanCall_edit | CrowdloanCall_add_memo | CrowdloanCall_poke | CrowdloanCall_contribute_all

/**
 * See [`Pallet::create`].
 */
export interface CrowdloanCall_create {
    __kind: 'create'
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
    verifier: (MultiSigner | undefined)
}

/**
 * See [`Pallet::contribute`].
 */
export interface CrowdloanCall_contribute {
    __kind: 'contribute'
    index: number
    value: bigint
    signature: (MultiSignature | undefined)
}

/**
 * See [`Pallet::withdraw`].
 */
export interface CrowdloanCall_withdraw {
    __kind: 'withdraw'
    who: Uint8Array
    index: number
}

/**
 * See [`Pallet::refund`].
 */
export interface CrowdloanCall_refund {
    __kind: 'refund'
    index: number
}

/**
 * See [`Pallet::dissolve`].
 */
export interface CrowdloanCall_dissolve {
    __kind: 'dissolve'
    index: number
}

/**
 * See [`Pallet::edit`].
 */
export interface CrowdloanCall_edit {
    __kind: 'edit'
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
    verifier: (MultiSigner | undefined)
}

/**
 * See [`Pallet::add_memo`].
 */
export interface CrowdloanCall_add_memo {
    __kind: 'add_memo'
    index: number
    memo: Uint8Array
}

/**
 * See [`Pallet::poke`].
 */
export interface CrowdloanCall_poke {
    __kind: 'poke'
    index: number
}

/**
 * See [`Pallet::contribute_all`].
 */
export interface CrowdloanCall_contribute_all {
    __kind: 'contribute_all'
    index: number
    signature: (MultiSignature | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type StateTrieMigrationCall = StateTrieMigrationCall_control_auto_migration | StateTrieMigrationCall_continue_migrate | StateTrieMigrationCall_migrate_custom_top | StateTrieMigrationCall_migrate_custom_child | StateTrieMigrationCall_set_signed_max_limits | StateTrieMigrationCall_force_set_progress

/**
 * See [`Pallet::control_auto_migration`].
 */
export interface StateTrieMigrationCall_control_auto_migration {
    __kind: 'control_auto_migration'
    maybeConfig: (MigrationLimits | undefined)
}

/**
 * See [`Pallet::continue_migrate`].
 */
export interface StateTrieMigrationCall_continue_migrate {
    __kind: 'continue_migrate'
    limits: MigrationLimits
    realSizeUpper: number
    witnessTask: MigrationTask
}

/**
 * See [`Pallet::migrate_custom_top`].
 */
export interface StateTrieMigrationCall_migrate_custom_top {
    __kind: 'migrate_custom_top'
    keys: Uint8Array[]
    witnessSize: number
}

/**
 * See [`Pallet::migrate_custom_child`].
 */
export interface StateTrieMigrationCall_migrate_custom_child {
    __kind: 'migrate_custom_child'
    root: Uint8Array
    childKeys: Uint8Array[]
    totalSize: number
}

/**
 * See [`Pallet::set_signed_max_limits`].
 */
export interface StateTrieMigrationCall_set_signed_max_limits {
    __kind: 'set_signed_max_limits'
    limits: MigrationLimits
}

/**
 * See [`Pallet::force_set_progress`].
 */
export interface StateTrieMigrationCall_force_set_progress {
    __kind: 'force_set_progress'
    progressTop: Progress
    progressChild: Progress
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XcmPalletCall = XcmPalletCall_send | XcmPalletCall_teleport_assets | XcmPalletCall_reserve_transfer_assets | XcmPalletCall_execute | XcmPalletCall_force_xcm_version | XcmPalletCall_force_default_xcm_version | XcmPalletCall_force_subscribe_version_notify | XcmPalletCall_force_unsubscribe_version_notify | XcmPalletCall_limited_reserve_transfer_assets | XcmPalletCall_limited_teleport_assets | XcmPalletCall_force_suspension

/**
 * See [`Pallet::send`].
 */
export interface XcmPalletCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * See [`Pallet::teleport_assets`].
 */
export interface XcmPalletCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * See [`Pallet::reserve_transfer_assets`].
 */
export interface XcmPalletCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * See [`Pallet::execute`].
 */
export interface XcmPalletCall_execute {
    __kind: 'execute'
    message: Type_447
    maxWeight: Weight
}

/**
 * See [`Pallet::force_xcm_version`].
 */
export interface XcmPalletCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V3MultiLocation
    version: number
}

/**
 * See [`Pallet::force_default_xcm_version`].
 */
export interface XcmPalletCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion: (number | undefined)
}

/**
 * See [`Pallet::force_subscribe_version_notify`].
 */
export interface XcmPalletCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::force_unsubscribe_version_notify`].
 */
export interface XcmPalletCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::limited_reserve_transfer_assets`].
 */
export interface XcmPalletCall_limited_reserve_transfer_assets {
    __kind: 'limited_reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * See [`Pallet::limited_teleport_assets`].
 */
export interface XcmPalletCall_limited_teleport_assets {
    __kind: 'limited_teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * See [`Pallet::force_suspension`].
 */
export interface XcmPalletCall_force_suspension {
    __kind: 'force_suspension'
    suspended: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MessageQueueCall = MessageQueueCall_reap_page | MessageQueueCall_execute_overweight

/**
 * See [`Pallet::reap_page`].
 */
export interface MessageQueueCall_reap_page {
    __kind: 'reap_page'
    messageOrigin: AggregateMessageOrigin
    pageIndex: number
}

/**
 * See [`Pallet::execute_overweight`].
 */
export interface MessageQueueCall_execute_overweight {
    __kind: 'execute_overweight'
    messageOrigin: AggregateMessageOrigin
    page: number
    index: number
    weightLimit: Weight
}

export type RawOrigin = RawOrigin_Root | RawOrigin_Signed | RawOrigin_None

export interface RawOrigin_Root {
    __kind: 'Root'
}

export interface RawOrigin_Signed {
    __kind: 'Signed'
    value: Uint8Array
}

export interface RawOrigin_None {
    __kind: 'None'
}

export type Origin = Origin_StakingAdmin | Origin_Treasurer | Origin_FellowshipAdmin | Origin_GeneralAdmin | Origin_AuctionAdmin | Origin_LeaseAdmin | Origin_ReferendumCanceller | Origin_ReferendumKiller | Origin_SmallTipper | Origin_BigTipper | Origin_SmallSpender | Origin_MediumSpender | Origin_BigSpender | Origin_WhitelistedCaller | Origin_FellowshipInitiates | Origin_Fellows | Origin_FellowshipExperts | Origin_FellowshipMasters | Origin_Fellowship1Dan | Origin_Fellowship2Dan | Origin_Fellowship3Dan | Origin_Fellowship4Dan | Origin_Fellowship5Dan | Origin_Fellowship6Dan | Origin_Fellowship7Dan | Origin_Fellowship8Dan | Origin_Fellowship9Dan

export interface Origin_StakingAdmin {
    __kind: 'StakingAdmin'
}

export interface Origin_Treasurer {
    __kind: 'Treasurer'
}

export interface Origin_FellowshipAdmin {
    __kind: 'FellowshipAdmin'
}

export interface Origin_GeneralAdmin {
    __kind: 'GeneralAdmin'
}

export interface Origin_AuctionAdmin {
    __kind: 'AuctionAdmin'
}

export interface Origin_LeaseAdmin {
    __kind: 'LeaseAdmin'
}

export interface Origin_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Origin_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export interface Origin_SmallTipper {
    __kind: 'SmallTipper'
}

export interface Origin_BigTipper {
    __kind: 'BigTipper'
}

export interface Origin_SmallSpender {
    __kind: 'SmallSpender'
}

export interface Origin_MediumSpender {
    __kind: 'MediumSpender'
}

export interface Origin_BigSpender {
    __kind: 'BigSpender'
}

export interface Origin_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
}

export interface Origin_FellowshipInitiates {
    __kind: 'FellowshipInitiates'
}

export interface Origin_Fellows {
    __kind: 'Fellows'
}

export interface Origin_FellowshipExperts {
    __kind: 'FellowshipExperts'
}

export interface Origin_FellowshipMasters {
    __kind: 'FellowshipMasters'
}

export interface Origin_Fellowship1Dan {
    __kind: 'Fellowship1Dan'
}

export interface Origin_Fellowship2Dan {
    __kind: 'Fellowship2Dan'
}

export interface Origin_Fellowship3Dan {
    __kind: 'Fellowship3Dan'
}

export interface Origin_Fellowship4Dan {
    __kind: 'Fellowship4Dan'
}

export interface Origin_Fellowship5Dan {
    __kind: 'Fellowship5Dan'
}

export interface Origin_Fellowship6Dan {
    __kind: 'Fellowship6Dan'
}

export interface Origin_Fellowship7Dan {
    __kind: 'Fellowship7Dan'
}

export interface Origin_Fellowship8Dan {
    __kind: 'Fellowship8Dan'
}

export interface Origin_Fellowship9Dan {
    __kind: 'Fellowship9Dan'
}

export type Type_139 = Type_139_Parachain

export interface Type_139_Parachain {
    __kind: 'Parachain'
    value: number
}

export type Type_141 = Type_141_Xcm | Type_141_Response

export interface Type_141_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
}

export interface Type_141_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export type Void = never

export interface AsyncBackingParams {
    maxCandidateDepth: number
    allowedAncestryLen: number
}

export type V5ExecutorParam = V5ExecutorParam_MaxMemoryPages | V5ExecutorParam_StackLogicalMax | V5ExecutorParam_StackNativeMax | V5ExecutorParam_PrecheckingMaxMemory | V5ExecutorParam_PvfPrepTimeout | V5ExecutorParam_PvfExecTimeout | V5ExecutorParam_WasmExtBulkMemory

export interface V5ExecutorParam_MaxMemoryPages {
    __kind: 'MaxMemoryPages'
    value: number
}

export interface V5ExecutorParam_StackLogicalMax {
    __kind: 'StackLogicalMax'
    value: number
}

export interface V5ExecutorParam_StackNativeMax {
    __kind: 'StackNativeMax'
    value: number
}

export interface V5ExecutorParam_PrecheckingMaxMemory {
    __kind: 'PrecheckingMaxMemory'
    value: bigint
}

export interface V5ExecutorParam_PvfPrepTimeout {
    __kind: 'PvfPrepTimeout'
    value: [V5PvfPrepTimeoutKind, bigint]
}

export interface V5ExecutorParam_PvfExecTimeout {
    __kind: 'PvfExecTimeout'
    value: [V5PvfExecTimeoutKind, bigint]
}

export interface V5ExecutorParam_WasmExtBulkMemory {
    __kind: 'WasmExtBulkMemory'
}

export type RuntimeHoldReason = RuntimeHoldReason_Nis

export interface RuntimeHoldReason_Nis {
    __kind: 'Nis'
    value: HoldReason
}

export interface V5Assignment {
    paraId: number
}

export type PvfCheckCause = PvfCheckCause_Onboarding | PvfCheckCause_Upgrade

export interface PvfCheckCause_Onboarding {
    __kind: 'Onboarding'
    value: number
}

export interface PvfCheckCause_Upgrade {
    __kind: 'Upgrade'
    id: number
    includedAt: number
}

export type BidKind = BidKind_Deposit | BidKind_Vouch

export interface BidKind_Deposit {
    __kind: 'Deposit'
    value: bigint
}

export interface BidKind_Vouch {
    __kind: 'Vouch'
    value: [Uint8Array, bigint]
}

export type VouchingStatus = VouchingStatus_Vouching | VouchingStatus_Banned

export interface VouchingStatus_Vouching {
    __kind: 'Vouching'
}

export interface VouchingStatus_Banned {
    __kind: 'Banned'
}

export type Type_513 = Type_513_ApplyExtrinsic | Type_513_Finalization | Type_513_Initialization

export interface Type_513_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Type_513_Finalization {
    __kind: 'Finalization'
}

export interface Type_513_Initialization {
    __kind: 'Initialization'
}

export type Event = Event_System | Event_Indices | Event_Balances | Event_TransactionPayment | Event_Staking | Event_Offences | Event_Session | Event_Grandpa | Event_ImOnline | Event_Treasury | Event_ConvictionVoting | Event_Referenda | Event_FellowshipCollective | Event_FellowshipReferenda | Event_Whitelist | Event_Claims | Event_Utility | Event_Identity | Event_Society | Event_Recovery | Event_Vesting | Event_Scheduler | Event_Proxy | Event_Multisig | Event_Preimage | Event_Bounties | Event_ChildBounties | Event_ElectionProviderMultiPhase | Event_Nis | Event_NisCounterpartBalances | Event_VoterList | Event_NominationPools | Event_FastUnstake | Event_ParaInclusion | Event_Paras | Event_Hrmp | Event_ParasDisputes | Event_Registrar | Event_Slots | Event_Auctions | Event_Crowdloan | Event_StateTrieMigration | Event_XcmPallet | Event_MessageQueue

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_Indices {
    __kind: 'Indices'
    value: IndicesEvent
}

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_TransactionPayment {
    __kind: 'TransactionPayment'
    value: TransactionPaymentEvent
}

export interface Event_Staking {
    __kind: 'Staking'
    value: StakingEvent
}

export interface Event_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Event_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Event_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Event_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineEvent
}

export interface Event_Treasury {
    __kind: 'Treasury'
    value: TreasuryEvent
}

export interface Event_ConvictionVoting {
    __kind: 'ConvictionVoting'
    value: ConvictionVotingEvent
}

export interface Event_Referenda {
    __kind: 'Referenda'
    value: ReferendaEvent
}

export interface Event_FellowshipCollective {
    __kind: 'FellowshipCollective'
    value: FellowshipCollectiveEvent
}

export interface Event_FellowshipReferenda {
    __kind: 'FellowshipReferenda'
    value: FellowshipReferendaEvent
}

export interface Event_Whitelist {
    __kind: 'Whitelist'
    value: WhitelistEvent
}

export interface Event_Claims {
    __kind: 'Claims'
    value: ClaimsEvent
}

export interface Event_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Event_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface Event_Society {
    __kind: 'Society'
    value: SocietyEvent
}

export interface Event_Recovery {
    __kind: 'Recovery'
    value: RecoveryEvent
}

export interface Event_Vesting {
    __kind: 'Vesting'
    value: VestingEvent
}

export interface Event_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Event_Proxy {
    __kind: 'Proxy'
    value: ProxyEvent
}

export interface Event_Multisig {
    __kind: 'Multisig'
    value: MultisigEvent
}

export interface Event_Preimage {
    __kind: 'Preimage'
    value: PreimageEvent
}

export interface Event_Bounties {
    __kind: 'Bounties'
    value: BountiesEvent
}

export interface Event_ChildBounties {
    __kind: 'ChildBounties'
    value: ChildBountiesEvent
}

export interface Event_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseEvent
}

export interface Event_Nis {
    __kind: 'Nis'
    value: NisEvent
}

export interface Event_NisCounterpartBalances {
    __kind: 'NisCounterpartBalances'
    value: NisCounterpartBalancesEvent
}

export interface Event_VoterList {
    __kind: 'VoterList'
    value: VoterListEvent
}

export interface Event_NominationPools {
    __kind: 'NominationPools'
    value: NominationPoolsEvent
}

export interface Event_FastUnstake {
    __kind: 'FastUnstake'
    value: FastUnstakeEvent
}

export interface Event_ParaInclusion {
    __kind: 'ParaInclusion'
    value: ParaInclusionEvent
}

export interface Event_Paras {
    __kind: 'Paras'
    value: ParasEvent
}

export interface Event_Hrmp {
    __kind: 'Hrmp'
    value: HrmpEvent
}

export interface Event_ParasDisputes {
    __kind: 'ParasDisputes'
    value: ParasDisputesEvent
}

export interface Event_Registrar {
    __kind: 'Registrar'
    value: RegistrarEvent
}

export interface Event_Slots {
    __kind: 'Slots'
    value: SlotsEvent
}

export interface Event_Auctions {
    __kind: 'Auctions'
    value: AuctionsEvent
}

export interface Event_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanEvent
}

export interface Event_StateTrieMigration {
    __kind: 'StateTrieMigration'
    value: StateTrieMigrationEvent
}

export interface Event_XcmPallet {
    __kind: 'XcmPallet'
    value: XcmPalletEvent
}

export interface Event_MessageQueue {
    __kind: 'MessageQueue'
    value: MessageQueueEvent
}

export type V2AssetId = V2AssetId_Concrete | V2AssetId_Abstract

export interface V2AssetId_Concrete {
    __kind: 'Concrete'
    value: V2MultiLocation
}

export interface V2AssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type V2Fungibility = V2Fungibility_Fungible | V2Fungibility_NonFungible

export interface V2Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V2Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V2AssetInstance
}

export type V3AssetInstance = V3AssetInstance_Undefined | V3AssetInstance_Index | V3AssetInstance_Array4 | V3AssetInstance_Array8 | V3AssetInstance_Array16 | V3AssetInstance_Array32

export interface V3AssetInstance_Undefined {
    __kind: 'Undefined'
}

export interface V3AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V3AssetInstance_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface V3AssetInstance_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface V3AssetInstance_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface V3AssetInstance_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export type V2Junctions = V2Junctions_Here | V2Junctions_X1 | V2Junctions_X2 | V2Junctions_X3 | V2Junctions_X4 | V2Junctions_X5 | V2Junctions_X6 | V2Junctions_X7 | V2Junctions_X8

export interface V2Junctions_Here {
    __kind: 'Here'
}

export interface V2Junctions_X1 {
    __kind: 'X1'
    value: V2Junction
}

export interface V2Junctions_X2 {
    __kind: 'X2'
    value: [V2Junction, V2Junction]
}

export interface V2Junctions_X3 {
    __kind: 'X3'
    value: [V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X4 {
    __kind: 'X4'
    value: [V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X5 {
    __kind: 'X5'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X6 {
    __kind: 'X6'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X7 {
    __kind: 'X7'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X8 {
    __kind: 'X8'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export type V3WildMultiAsset = V3WildMultiAsset_All | V3WildMultiAsset_AllOf | V3WildMultiAsset_AllCounted | V3WildMultiAsset_AllOfCounted

export interface V3WildMultiAsset_All {
    __kind: 'All'
}

export interface V3WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V3AssetId
    fun: V3WildFungibility
}

export interface V3WildMultiAsset_AllCounted {
    __kind: 'AllCounted'
    value: number
}

export interface V3WildMultiAsset_AllOfCounted {
    __kind: 'AllOfCounted'
    id: V3AssetId
    fun: V3WildFungibility
    count: number
}

export type V3BodyId = V3BodyId_Unit | V3BodyId_Moniker | V3BodyId_Index | V3BodyId_Executive | V3BodyId_Technical | V3BodyId_Legislative | V3BodyId_Judicial | V3BodyId_Defense | V3BodyId_Administration | V3BodyId_Treasury

export interface V3BodyId_Unit {
    __kind: 'Unit'
}

export interface V3BodyId_Moniker {
    __kind: 'Moniker'
    value: Uint8Array
}

export interface V3BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V3BodyId_Executive {
    __kind: 'Executive'
}

export interface V3BodyId_Technical {
    __kind: 'Technical'
}

export interface V3BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V3BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V3BodyId_Defense {
    __kind: 'Defense'
}

export interface V3BodyId_Administration {
    __kind: 'Administration'
}

export interface V3BodyId_Treasury {
    __kind: 'Treasury'
}

export type V3BodyPart = V3BodyPart_Voice | V3BodyPart_Members | V3BodyPart_Fraction | V3BodyPart_AtLeastProportion | V3BodyPart_MoreThanProportion

export interface V3BodyPart_Voice {
    __kind: 'Voice'
}

export interface V3BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V3BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V3BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface Commitment {
    payload: [Uint8Array, Uint8Array][]
    blockNumber: number
    validatorSetId: bigint
}

export interface EquivocationProof {
    offender: Uint8Array
    slot: bigint
    firstHeader: Header
    secondHeader: Header
}

export type NextConfigDescriptor = NextConfigDescriptor_V1

export interface NextConfigDescriptor_V1 {
    __kind: 'V1'
    c: [bigint, bigint]
    allowedSlots: AllowedSlots
}

export type RewardDestination = RewardDestination_Staked | RewardDestination_Stash | RewardDestination_Controller | RewardDestination_Account | RewardDestination_None

export interface RewardDestination_Staked {
    __kind: 'Staked'
}

export interface RewardDestination_Stash {
    __kind: 'Stash'
}

export interface RewardDestination_Controller {
    __kind: 'Controller'
}

export interface RewardDestination_Account {
    __kind: 'Account'
    value: Uint8Array
}

export interface RewardDestination_None {
    __kind: 'None'
}

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export type ConfigOp = ConfigOp_Noop | ConfigOp_Set | ConfigOp_Remove

export interface ConfigOp_Noop {
    __kind: 'Noop'
}

export interface ConfigOp_Set {
    __kind: 'Set'
    value: bigint
}

export interface ConfigOp_Remove {
    __kind: 'Remove'
}

export type Type_91 = Type_91_Noop | Type_91_Set | Type_91_Remove

export interface Type_91_Noop {
    __kind: 'Noop'
}

export interface Type_91_Set {
    __kind: 'Set'
    value: number
}

export interface Type_91_Remove {
    __kind: 'Remove'
}

export type Type_92 = Type_92_Noop | Type_92_Set | Type_92_Remove

export interface Type_92_Noop {
    __kind: 'Noop'
}

export interface Type_92_Set {
    __kind: 'Set'
    value: number
}

export interface Type_92_Remove {
    __kind: 'Remove'
}

export type Type_93 = Type_93_Noop | Type_93_Set | Type_93_Remove

export interface Type_93_Noop {
    __kind: 'Noop'
}

export interface Type_93_Set {
    __kind: 'Set'
    value: number
}

export interface Type_93_Remove {
    __kind: 'Remove'
}

export interface Type_114 {
    setId: bigint
    equivocation: Equivocation
}

export type AccountVote = AccountVote_Standard | AccountVote_Split | AccountVote_SplitAbstain

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface AccountVote_SplitAbstain {
    __kind: 'SplitAbstain'
    aye: bigint
    nay: bigint
    abstain: bigint
}

export type Conviction = Conviction_None | Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x

export interface Conviction_None {
    __kind: 'None'
}

export interface Conviction_Locked1x {
    __kind: 'Locked1x'
}

export interface Conviction_Locked2x {
    __kind: 'Locked2x'
}

export interface Conviction_Locked3x {
    __kind: 'Locked3x'
}

export interface Conviction_Locked4x {
    __kind: 'Locked4x'
}

export interface Conviction_Locked5x {
    __kind: 'Locked5x'
}

export interface Conviction_Locked6x {
    __kind: 'Locked6x'
}

export type Bounded = Bounded_Legacy | Bounded_Inline | Bounded_Lookup

export interface Bounded_Legacy {
    __kind: 'Legacy'
    hash: Uint8Array
}

export interface Bounded_Inline {
    __kind: 'Inline'
    value: Uint8Array
}

export interface Bounded_Lookup {
    __kind: 'Lookup'
    hash: Uint8Array
    len: number
}

export type DispatchTime = DispatchTime_At | DispatchTime_After

export interface DispatchTime_At {
    __kind: 'At'
    value: number
}

export interface DispatchTime_After {
    __kind: 'After'
    value: number
}

export type StatementKind = StatementKind_Regular | StatementKind_Saft

export interface StatementKind_Regular {
    __kind: 'Regular'
}

export interface StatementKind_Saft {
    __kind: 'Saft'
}

export interface IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint: (Uint8Array | undefined)
    image: Data
    twitter: Data
}

export type Data = Data_None | Data_Raw0 | Data_Raw1 | Data_Raw2 | Data_Raw3 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_BlakeTwo256 | Data_Sha256 | Data_Keccak256 | Data_ShaThree256

export interface Data_None {
    __kind: 'None'
}

export interface Data_Raw0 {
    __kind: 'Raw0'
    value: Uint8Array
}

export interface Data_Raw1 {
    __kind: 'Raw1'
    value: Uint8Array
}

export interface Data_Raw2 {
    __kind: 'Raw2'
    value: Uint8Array
}

export interface Data_Raw3 {
    __kind: 'Raw3'
    value: Uint8Array
}

export interface Data_Raw4 {
    __kind: 'Raw4'
    value: Uint8Array
}

export interface Data_Raw5 {
    __kind: 'Raw5'
    value: Uint8Array
}

export interface Data_Raw6 {
    __kind: 'Raw6'
    value: Uint8Array
}

export interface Data_Raw7 {
    __kind: 'Raw7'
    value: Uint8Array
}

export interface Data_Raw8 {
    __kind: 'Raw8'
    value: Uint8Array
}

export interface Data_Raw9 {
    __kind: 'Raw9'
    value: Uint8Array
}

export interface Data_Raw10 {
    __kind: 'Raw10'
    value: Uint8Array
}

export interface Data_Raw11 {
    __kind: 'Raw11'
    value: Uint8Array
}

export interface Data_Raw12 {
    __kind: 'Raw12'
    value: Uint8Array
}

export interface Data_Raw13 {
    __kind: 'Raw13'
    value: Uint8Array
}

export interface Data_Raw14 {
    __kind: 'Raw14'
    value: Uint8Array
}

export interface Data_Raw15 {
    __kind: 'Raw15'
    value: Uint8Array
}

export interface Data_Raw16 {
    __kind: 'Raw16'
    value: Uint8Array
}

export interface Data_Raw17 {
    __kind: 'Raw17'
    value: Uint8Array
}

export interface Data_Raw18 {
    __kind: 'Raw18'
    value: Uint8Array
}

export interface Data_Raw19 {
    __kind: 'Raw19'
    value: Uint8Array
}

export interface Data_Raw20 {
    __kind: 'Raw20'
    value: Uint8Array
}

export interface Data_Raw21 {
    __kind: 'Raw21'
    value: Uint8Array
}

export interface Data_Raw22 {
    __kind: 'Raw22'
    value: Uint8Array
}

export interface Data_Raw23 {
    __kind: 'Raw23'
    value: Uint8Array
}

export interface Data_Raw24 {
    __kind: 'Raw24'
    value: Uint8Array
}

export interface Data_Raw25 {
    __kind: 'Raw25'
    value: Uint8Array
}

export interface Data_Raw26 {
    __kind: 'Raw26'
    value: Uint8Array
}

export interface Data_Raw27 {
    __kind: 'Raw27'
    value: Uint8Array
}

export interface Data_Raw28 {
    __kind: 'Raw28'
    value: Uint8Array
}

export interface Data_Raw29 {
    __kind: 'Raw29'
    value: Uint8Array
}

export interface Data_Raw30 {
    __kind: 'Raw30'
    value: Uint8Array
}

export interface Data_Raw31 {
    __kind: 'Raw31'
    value: Uint8Array
}

export interface Data_Raw32 {
    __kind: 'Raw32'
    value: Uint8Array
}

export interface Data_BlakeTwo256 {
    __kind: 'BlakeTwo256'
    value: Uint8Array
}

export interface Data_Sha256 {
    __kind: 'Sha256'
    value: Uint8Array
}

export interface Data_Keccak256 {
    __kind: 'Keccak256'
    value: Uint8Array
}

export interface Data_ShaThree256 {
    __kind: 'ShaThree256'
    value: Uint8Array
}

export type Judgement = Judgement_Unknown | Judgement_FeePaid | Judgement_Reasonable | Judgement_KnownGood | Judgement_OutOfDate | Judgement_LowQuality | Judgement_Erroneous

export interface Judgement_Unknown {
    __kind: 'Unknown'
}

export interface Judgement_FeePaid {
    __kind: 'FeePaid'
    value: bigint
}

export interface Judgement_Reasonable {
    __kind: 'Reasonable'
}

export interface Judgement_KnownGood {
    __kind: 'KnownGood'
}

export interface Judgement_OutOfDate {
    __kind: 'OutOfDate'
}

export interface Judgement_LowQuality {
    __kind: 'LowQuality'
}

export interface Judgement_Erroneous {
    __kind: 'Erroneous'
}

export interface VestingInfo {
    locked: bigint
    perBlock: bigint
    startingBlock: number
}

export interface RawSolution {
    solution: NposCompactSolution24
    score: ElectionScore
    round: number
}

export interface SolutionOrSnapshotSize {
    voters: number
    targets: number
}

export interface ElectionScore {
    minimalStake: bigint
    sumStake: bigint
    sumStakeSquared: bigint
}

export interface Support {
    total: bigint
    voters: [Uint8Array, bigint][]
}

export type BondExtra = BondExtra_FreeBalance | BondExtra_Rewards

export interface BondExtra_FreeBalance {
    __kind: 'FreeBalance'
    value: bigint
}

export interface BondExtra_Rewards {
    __kind: 'Rewards'
}

export type PoolState = PoolState_Open | PoolState_Blocked | PoolState_Destroying

export interface PoolState_Open {
    __kind: 'Open'
}

export interface PoolState_Blocked {
    __kind: 'Blocked'
}

export interface PoolState_Destroying {
    __kind: 'Destroying'
}

export type Type_316 = Type_316_Noop | Type_316_Set | Type_316_Remove

export interface Type_316_Noop {
    __kind: 'Noop'
}

export interface Type_316_Set {
    __kind: 'Set'
    value: number
}

export interface Type_316_Remove {
    __kind: 'Remove'
}

export type Type_317 = Type_317_Noop | Type_317_Set | Type_317_Remove

export interface Type_317_Noop {
    __kind: 'Noop'
}

export interface Type_317_Set {
    __kind: 'Set'
    value: number
}

export interface Type_317_Remove {
    __kind: 'Remove'
}

export type Type_318 = Type_318_Noop | Type_318_Set | Type_318_Remove

export interface Type_318_Noop {
    __kind: 'Noop'
}

export interface Type_318_Set {
    __kind: 'Set'
    value: Uint8Array
}

export interface Type_318_Remove {
    __kind: 'Remove'
}

export type ClaimPermission = ClaimPermission_Permissioned | ClaimPermission_PermissionlessCompound | ClaimPermission_PermissionlessWithdraw | ClaimPermission_PermissionlessAll

export interface ClaimPermission_Permissioned {
    __kind: 'Permissioned'
}

export interface ClaimPermission_PermissionlessCompound {
    __kind: 'PermissionlessCompound'
}

export interface ClaimPermission_PermissionlessWithdraw {
    __kind: 'PermissionlessWithdraw'
}

export interface ClaimPermission_PermissionlessAll {
    __kind: 'PermissionlessAll'
}

export interface CommissionChangeRate {
    maxIncrease: number
    minDelay: number
}

export interface V5InherentData {
    bitfields: V5UncheckedSigned[]
    backedCandidates: V5BackedCandidate[]
    disputes: V5DisputeStatementSet[]
    parentHeader: Header
}

export interface V5PvfCheckStatement {
    accept: boolean
    subject: Uint8Array
    sessionIndex: number
    validatorIndex: number
}

export interface HrmpChannelId {
    sender: number
    recipient: number
}

export interface V5DisputeProof {
    timeSlot: V5DisputesTimeSlot
    kind: V5SlashingOffenceKind
    validatorIndex: number
    validatorId: Uint8Array
}

export type MultiSigner = MultiSigner_Ed25519 | MultiSigner_Sr25519 | MultiSigner_Ecdsa

export interface MultiSigner_Ed25519 {
    __kind: 'Ed25519'
    value: Uint8Array
}

export interface MultiSigner_Sr25519 {
    __kind: 'Sr25519'
    value: Uint8Array
}

export interface MultiSigner_Ecdsa {
    __kind: 'Ecdsa'
    value: Uint8Array
}

export type MultiSignature = MultiSignature_Ed25519 | MultiSignature_Sr25519 | MultiSignature_Ecdsa

export interface MultiSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Uint8Array
}

export interface MultiSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Uint8Array
}

export interface MultiSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Uint8Array
}

export type VersionedXcm = VersionedXcm_V2 | VersionedXcm_V3

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export interface VersionedXcm_V3 {
    __kind: 'V3'
    value: V3Instruction[]
}

export type Type_447 = Type_447_V2 | Type_447_V3

export interface Type_447_V2 {
    __kind: 'V2'
    value: Type_450[]
}

export interface Type_447_V3 {
    __kind: 'V3'
    value: Type_454[]
}

export type AggregateMessageOrigin = AggregateMessageOrigin_Ump

export interface AggregateMessageOrigin_Ump {
    __kind: 'Ump'
    value: UmpQueueId
}

export type V5PvfPrepTimeoutKind = V5PvfPrepTimeoutKind_Precheck | V5PvfPrepTimeoutKind_Lenient

export interface V5PvfPrepTimeoutKind_Precheck {
    __kind: 'Precheck'
}

export interface V5PvfPrepTimeoutKind_Lenient {
    __kind: 'Lenient'
}

export type V5PvfExecTimeoutKind = V5PvfExecTimeoutKind_Backing | V5PvfExecTimeoutKind_Approval

export interface V5PvfExecTimeoutKind_Backing {
    __kind: 'Backing'
}

export interface V5PvfExecTimeoutKind_Approval {
    __kind: 'Approval'
}

export type HoldReason = HoldReason_NftReceipt

export interface HoldReason_NftReceipt {
    __kind: 'NftReceipt'
}

/**
 * Event for the System pallet.
 */
export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount | SystemEvent_Remarked

/**
 * An extrinsic completed successfully.
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    dispatchInfo: DispatchInfo
}

/**
 * An extrinsic failed.
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    dispatchError: DispatchError
    dispatchInfo: DispatchInfo
}

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 * A new account was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    account: Uint8Array
}

/**
 * An account was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    account: Uint8Array
}

/**
 * On on-chain remark happened.
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    sender: Uint8Array
    hash: Uint8Array
}

/**
 * The `Event` enum of this pallet
 */
export type IndicesEvent = IndicesEvent_IndexAssigned | IndicesEvent_IndexFreed | IndicesEvent_IndexFrozen

/**
 * A account index was assigned.
 */
export interface IndicesEvent_IndexAssigned {
    __kind: 'IndexAssigned'
    who: Uint8Array
    index: number
}

/**
 * A account index has been freed up (unassigned).
 */
export interface IndicesEvent_IndexFreed {
    __kind: 'IndexFreed'
    index: number
}

/**
 * A account index has been frozen to its current account ID.
 */
export interface IndicesEvent_IndexFrozen {
    __kind: 'IndexFrozen'
    index: number
    who: Uint8Array
}

/**
 * The `Event` enum of this pallet
 */
export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated | BalancesEvent_Deposit | BalancesEvent_Withdraw | BalancesEvent_Slashed | BalancesEvent_Minted | BalancesEvent_Burned | BalancesEvent_Suspended | BalancesEvent_Restored | BalancesEvent_Upgraded | BalancesEvent_Issued | BalancesEvent_Rescinded | BalancesEvent_Locked | BalancesEvent_Unlocked | BalancesEvent_Frozen | BalancesEvent_Thawed

/**
 * An account was created with some free balance.
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    account: Uint8Array
    freeBalance: bigint
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss.
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    account: Uint8Array
    amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

/**
 * A balance was set by root.
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    who: Uint8Array
    free: bigint
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    from: Uint8Array
    to: Uint8Array
    amount: bigint
    destinationStatus: BalanceStatus
}

/**
 * Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees).
 */
export interface BalancesEvent_Withdraw {
    __kind: 'Withdraw'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was removed from the account (e.g. for misbehavior).
 */
export interface BalancesEvent_Slashed {
    __kind: 'Slashed'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was minted into an account.
 */
export interface BalancesEvent_Minted {
    __kind: 'Minted'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was burned from an account.
 */
export interface BalancesEvent_Burned {
    __kind: 'Burned'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was suspended from an account (it can be restored later).
 */
export interface BalancesEvent_Suspended {
    __kind: 'Suspended'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was restored into an account.
 */
export interface BalancesEvent_Restored {
    __kind: 'Restored'
    who: Uint8Array
    amount: bigint
}

/**
 * An account was upgraded.
 */
export interface BalancesEvent_Upgraded {
    __kind: 'Upgraded'
    who: Uint8Array
}

/**
 * Total issuance was increased by `amount`, creating a credit to be balanced.
 */
export interface BalancesEvent_Issued {
    __kind: 'Issued'
    amount: bigint
}

/**
 * Total issuance was decreased by `amount`, creating a debt to be balanced.
 */
export interface BalancesEvent_Rescinded {
    __kind: 'Rescinded'
    amount: bigint
}

/**
 * Some balance was locked.
 */
export interface BalancesEvent_Locked {
    __kind: 'Locked'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was unlocked.
 */
export interface BalancesEvent_Unlocked {
    __kind: 'Unlocked'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was frozen.
 */
export interface BalancesEvent_Frozen {
    __kind: 'Frozen'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was thawed.
 */
export interface BalancesEvent_Thawed {
    __kind: 'Thawed'
    who: Uint8Array
    amount: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type TransactionPaymentEvent = TransactionPaymentEvent_TransactionFeePaid

/**
 * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
 * has been paid by `who`.
 */
export interface TransactionPaymentEvent_TransactionFeePaid {
    __kind: 'TransactionFeePaid'
    who: Uint8Array
    actualFee: bigint
    tip: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type StakingEvent = StakingEvent_EraPaid | StakingEvent_Rewarded | StakingEvent_Slashed | StakingEvent_SlashReported | StakingEvent_OldSlashingReportDiscarded | StakingEvent_StakersElected | StakingEvent_Bonded | StakingEvent_Unbonded | StakingEvent_Withdrawn | StakingEvent_Kicked | StakingEvent_StakingElectionFailed | StakingEvent_Chilled | StakingEvent_PayoutStarted | StakingEvent_ValidatorPrefsSet | StakingEvent_SnapshotVotersSizeExceeded | StakingEvent_SnapshotTargetsSizeExceeded | StakingEvent_ForceEra

/**
 * The era payout has been set; the first balance is the validator-payout; the second is
 * the remainder from the maximum amount of reward.
 */
export interface StakingEvent_EraPaid {
    __kind: 'EraPaid'
    eraIndex: number
    validatorPayout: bigint
    remainder: bigint
}

/**
 * The nominator has been rewarded by this amount.
 */
export interface StakingEvent_Rewarded {
    __kind: 'Rewarded'
    stash: Uint8Array
    amount: bigint
}

/**
 * A staker (validator or nominator) has been slashed by the given amount.
 */
export interface StakingEvent_Slashed {
    __kind: 'Slashed'
    staker: Uint8Array
    amount: bigint
}

/**
 * A slash for the given validator, for the given percentage of their stake, at the given
 * era as been reported.
 */
export interface StakingEvent_SlashReported {
    __kind: 'SlashReported'
    validator: Uint8Array
    fraction: number
    slashEra: number
}

/**
 * An old slashing report from a prior era was discarded because it could
 * not be processed.
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    sessionIndex: number
}

/**
 * A new set of stakers was elected.
 */
export interface StakingEvent_StakersElected {
    __kind: 'StakersElected'
}

/**
 * An account has bonded this amount. \[stash, amount\]
 * 
 * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 * it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    stash: Uint8Array
    amount: bigint
}

/**
 * An account has unbonded this amount.
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    stash: Uint8Array
    amount: bigint
}

/**
 * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 * from the unlocking queue.
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    stash: Uint8Array
    amount: bigint
}

/**
 * A nominator has been kicked from a validator.
 */
export interface StakingEvent_Kicked {
    __kind: 'Kicked'
    nominator: Uint8Array
    stash: Uint8Array
}

/**
 * The election failed. No new era is planned.
 */
export interface StakingEvent_StakingElectionFailed {
    __kind: 'StakingElectionFailed'
}

/**
 * An account has stopped participating as either a validator or nominator.
 */
export interface StakingEvent_Chilled {
    __kind: 'Chilled'
    stash: Uint8Array
}

/**
 * The stakers' rewards are getting paid.
 */
export interface StakingEvent_PayoutStarted {
    __kind: 'PayoutStarted'
    eraIndex: number
    validatorStash: Uint8Array
}

/**
 * A validator has set their preferences.
 */
export interface StakingEvent_ValidatorPrefsSet {
    __kind: 'ValidatorPrefsSet'
    stash: Uint8Array
    prefs: ValidatorPrefs
}

/**
 * Voters size limit reached.
 */
export interface StakingEvent_SnapshotVotersSizeExceeded {
    __kind: 'SnapshotVotersSizeExceeded'
    size: number
}

/**
 * Targets size limit reached.
 */
export interface StakingEvent_SnapshotTargetsSizeExceeded {
    __kind: 'SnapshotTargetsSizeExceeded'
    size: number
}

/**
 * A new force era mode was set.
 */
export interface StakingEvent_ForceEra {
    __kind: 'ForceEra'
    mode: Forcing
}

/**
 * Events type.
 */
export type OffencesEvent = OffencesEvent_Offence

/**
 * There is an offence reported of the given `kind` happened at the `session_index` and
 * (kind-specific) time slot. This event is not deposited for duplicate slashes.
 * \[kind, timeslot\].
 */
export interface OffencesEvent_Offence {
    __kind: 'Offence'
    kind: Uint8Array
    timeslot: Uint8Array
}

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 * New authority set has been applied.
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    authoritySet: [Uint8Array, bigint][]
}

/**
 * Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 * Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
}

/**
 * The `Event` enum of this pallet
 */
export type ImOnlineEvent = ImOnlineEvent_HeartbeatReceived | ImOnlineEvent_AllGood | ImOnlineEvent_SomeOffline

/**
 * A new heartbeat was received from `AuthorityId`.
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    authorityId: Uint8Array
}

/**
 * At the end of the session, no offence was committed.
 */
export interface ImOnlineEvent_AllGood {
    __kind: 'AllGood'
}

/**
 * At the end of the session, at least one validator was found to be offline.
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    offline: [Uint8Array, Exposure][]
}

/**
 * The `Event` enum of this pallet
 */
export type TreasuryEvent = TreasuryEvent_Proposed | TreasuryEvent_Spending | TreasuryEvent_Awarded | TreasuryEvent_Rejected | TreasuryEvent_Burnt | TreasuryEvent_Rollover | TreasuryEvent_Deposit | TreasuryEvent_SpendApproved | TreasuryEvent_UpdatedInactive

/**
 * New proposal.
 */
export interface TreasuryEvent_Proposed {
    __kind: 'Proposed'
    proposalIndex: number
}

/**
 * We have ended a spend period and will now allocate funds.
 */
export interface TreasuryEvent_Spending {
    __kind: 'Spending'
    budgetRemaining: bigint
}

/**
 * Some funds have been allocated.
 */
export interface TreasuryEvent_Awarded {
    __kind: 'Awarded'
    proposalIndex: number
    award: bigint
    account: Uint8Array
}

/**
 * A proposal was rejected; funds were slashed.
 */
export interface TreasuryEvent_Rejected {
    __kind: 'Rejected'
    proposalIndex: number
    slashed: bigint
}

/**
 * Some of our funds have been burnt.
 */
export interface TreasuryEvent_Burnt {
    __kind: 'Burnt'
    burntFunds: bigint
}

/**
 * Spending has finished; this is the amount that rolls over until next spend.
 */
export interface TreasuryEvent_Rollover {
    __kind: 'Rollover'
    rolloverBalance: bigint
}

/**
 * Some funds have been deposited.
 */
export interface TreasuryEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

/**
 * A new spend proposal has been approved.
 */
export interface TreasuryEvent_SpendApproved {
    __kind: 'SpendApproved'
    proposalIndex: number
    amount: bigint
    beneficiary: Uint8Array
}

/**
 * The inactive funds of the pallet have been updated.
 */
export interface TreasuryEvent_UpdatedInactive {
    __kind: 'UpdatedInactive'
    reactivated: bigint
    deactivated: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type ConvictionVotingEvent = ConvictionVotingEvent_Delegated | ConvictionVotingEvent_Undelegated

/**
 * An account has delegated their vote to another account. \[who, target\]
 */
export interface ConvictionVotingEvent_Delegated {
    __kind: 'Delegated'
    value: [Uint8Array, Uint8Array]
}

/**
 * An \[account\] has cancelled a previous delegation operation.
 */
export interface ConvictionVotingEvent_Undelegated {
    __kind: 'Undelegated'
    value: Uint8Array
}

/**
 * The `Event` enum of this pallet
 */
export type ReferendaEvent = ReferendaEvent_Submitted | ReferendaEvent_DecisionDepositPlaced | ReferendaEvent_DecisionDepositRefunded | ReferendaEvent_DepositSlashed | ReferendaEvent_DecisionStarted | ReferendaEvent_ConfirmStarted | ReferendaEvent_ConfirmAborted | ReferendaEvent_Confirmed | ReferendaEvent_Approved | ReferendaEvent_Rejected | ReferendaEvent_TimedOut | ReferendaEvent_Cancelled | ReferendaEvent_Killed | ReferendaEvent_SubmissionDepositRefunded | ReferendaEvent_MetadataSet | ReferendaEvent_MetadataCleared

/**
 * A referendum has been submitted.
 */
export interface ReferendaEvent_Submitted {
    __kind: 'Submitted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
}

/**
 * The decision deposit has been placed.
 */
export interface ReferendaEvent_DecisionDepositPlaced {
    __kind: 'DecisionDepositPlaced'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: Uint8Array
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * The decision deposit has been refunded.
 */
export interface ReferendaEvent_DecisionDepositRefunded {
    __kind: 'DecisionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: Uint8Array
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A deposit has been slashaed.
 */
export interface ReferendaEvent_DepositSlashed {
    __kind: 'DepositSlashed'
    /**
     * The account who placed the deposit.
     */
    who: Uint8Array
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has moved into the deciding phase.
 */
export interface ReferendaEvent_DecisionStarted {
    __kind: 'DecisionStarted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
    /**
     * The current tally of votes in this referendum.
     */
    tally: Tally
}

export interface ReferendaEvent_ConfirmStarted {
    __kind: 'ConfirmStarted'
    /**
     * Index of the referendum.
     */
    index: number
}

export interface ReferendaEvent_ConfirmAborted {
    __kind: 'ConfirmAborted'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A referendum has ended its confirmation phase and is ready for approval.
 */
export interface ReferendaEvent_Confirmed {
    __kind: 'Confirmed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * A referendum has been approved and its proposal has been scheduled.
 */
export interface ReferendaEvent_Approved {
    __kind: 'Approved'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A proposal has been rejected by referendum.
 */
export interface ReferendaEvent_Rejected {
    __kind: 'Rejected'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * A referendum has been timed out without being decided.
 */
export interface ReferendaEvent_TimedOut {
    __kind: 'TimedOut'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * A referendum has been cancelled.
 */
export interface ReferendaEvent_Cancelled {
    __kind: 'Cancelled'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * A referendum has been killed.
 */
export interface ReferendaEvent_Killed {
    __kind: 'Killed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * The submission deposit has been refunded.
 */
export interface ReferendaEvent_SubmissionDepositRefunded {
    __kind: 'SubmissionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: Uint8Array
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * Metadata for a referendum has been set.
 */
export interface ReferendaEvent_MetadataSet {
    __kind: 'MetadataSet'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: Uint8Array
}

/**
 * Metadata for a referendum has been cleared.
 */
export interface ReferendaEvent_MetadataCleared {
    __kind: 'MetadataCleared'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: Uint8Array
}

/**
 * The `Event` enum of this pallet
 */
export type FellowshipCollectiveEvent = FellowshipCollectiveEvent_MemberAdded | FellowshipCollectiveEvent_RankChanged | FellowshipCollectiveEvent_MemberRemoved | FellowshipCollectiveEvent_Voted

/**
 * A member `who` has been added.
 */
export interface FellowshipCollectiveEvent_MemberAdded {
    __kind: 'MemberAdded'
    who: Uint8Array
}

/**
 * The member `who`se rank has been changed to the given `rank`.
 */
export interface FellowshipCollectiveEvent_RankChanged {
    __kind: 'RankChanged'
    who: Uint8Array
    rank: number
}

/**
 * The member `who` of given `rank` has been removed from the collective.
 */
export interface FellowshipCollectiveEvent_MemberRemoved {
    __kind: 'MemberRemoved'
    who: Uint8Array
    rank: number
}

/**
 * The member `who` has voted for the `poll` with the given `vote` leading to an updated
 * `tally`.
 */
export interface FellowshipCollectiveEvent_Voted {
    __kind: 'Voted'
    who: Uint8Array
    poll: number
    vote: VoteRecord
    tally: Type_462
}

/**
 * The `Event` enum of this pallet
 */
export type FellowshipReferendaEvent = FellowshipReferendaEvent_Submitted | FellowshipReferendaEvent_DecisionDepositPlaced | FellowshipReferendaEvent_DecisionDepositRefunded | FellowshipReferendaEvent_DepositSlashed | FellowshipReferendaEvent_DecisionStarted | FellowshipReferendaEvent_ConfirmStarted | FellowshipReferendaEvent_ConfirmAborted | FellowshipReferendaEvent_Confirmed | FellowshipReferendaEvent_Approved | FellowshipReferendaEvent_Rejected | FellowshipReferendaEvent_TimedOut | FellowshipReferendaEvent_Cancelled | FellowshipReferendaEvent_Killed | FellowshipReferendaEvent_SubmissionDepositRefunded | FellowshipReferendaEvent_MetadataSet | FellowshipReferendaEvent_MetadataCleared

/**
 * A referendum has been submitted.
 */
export interface FellowshipReferendaEvent_Submitted {
    __kind: 'Submitted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
}

/**
 * The decision deposit has been placed.
 */
export interface FellowshipReferendaEvent_DecisionDepositPlaced {
    __kind: 'DecisionDepositPlaced'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: Uint8Array
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * The decision deposit has been refunded.
 */
export interface FellowshipReferendaEvent_DecisionDepositRefunded {
    __kind: 'DecisionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: Uint8Array
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A deposit has been slashaed.
 */
export interface FellowshipReferendaEvent_DepositSlashed {
    __kind: 'DepositSlashed'
    /**
     * The account who placed the deposit.
     */
    who: Uint8Array
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has moved into the deciding phase.
 */
export interface FellowshipReferendaEvent_DecisionStarted {
    __kind: 'DecisionStarted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
    /**
     * The current tally of votes in this referendum.
     */
    tally: Type_462
}

export interface FellowshipReferendaEvent_ConfirmStarted {
    __kind: 'ConfirmStarted'
    /**
     * Index of the referendum.
     */
    index: number
}

export interface FellowshipReferendaEvent_ConfirmAborted {
    __kind: 'ConfirmAborted'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A referendum has ended its confirmation phase and is ready for approval.
 */
export interface FellowshipReferendaEvent_Confirmed {
    __kind: 'Confirmed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_462
}

/**
 * A referendum has been approved and its proposal has been scheduled.
 */
export interface FellowshipReferendaEvent_Approved {
    __kind: 'Approved'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A proposal has been rejected by referendum.
 */
export interface FellowshipReferendaEvent_Rejected {
    __kind: 'Rejected'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_462
}

/**
 * A referendum has been timed out without being decided.
 */
export interface FellowshipReferendaEvent_TimedOut {
    __kind: 'TimedOut'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_462
}

/**
 * A referendum has been cancelled.
 */
export interface FellowshipReferendaEvent_Cancelled {
    __kind: 'Cancelled'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_462
}

/**
 * A referendum has been killed.
 */
export interface FellowshipReferendaEvent_Killed {
    __kind: 'Killed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_462
}

/**
 * The submission deposit has been refunded.
 */
export interface FellowshipReferendaEvent_SubmissionDepositRefunded {
    __kind: 'SubmissionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: Uint8Array
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * Metadata for a referendum has been set.
 */
export interface FellowshipReferendaEvent_MetadataSet {
    __kind: 'MetadataSet'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: Uint8Array
}

/**
 * Metadata for a referendum has been cleared.
 */
export interface FellowshipReferendaEvent_MetadataCleared {
    __kind: 'MetadataCleared'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: Uint8Array
}

/**
 * The `Event` enum of this pallet
 */
export type WhitelistEvent = WhitelistEvent_CallWhitelisted | WhitelistEvent_WhitelistedCallRemoved | WhitelistEvent_WhitelistedCallDispatched

export interface WhitelistEvent_CallWhitelisted {
    __kind: 'CallWhitelisted'
    callHash: Uint8Array
}

export interface WhitelistEvent_WhitelistedCallRemoved {
    __kind: 'WhitelistedCallRemoved'
    callHash: Uint8Array
}

export interface WhitelistEvent_WhitelistedCallDispatched {
    __kind: 'WhitelistedCallDispatched'
    callHash: Uint8Array
    result: Result<PostDispatchInfo, DispatchErrorWithPostInfo>
}

/**
 * The `Event` enum of this pallet
 */
export type ClaimsEvent = ClaimsEvent_Claimed

/**
 * Someone claimed some DOTs.
 */
export interface ClaimsEvent_Claimed {
    __kind: 'Claimed'
    who: Uint8Array
    ethereumAddress: Uint8Array
    amount: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type UtilityEvent = UtilityEvent_BatchInterrupted | UtilityEvent_BatchCompleted | UtilityEvent_BatchCompletedWithErrors | UtilityEvent_ItemCompleted | UtilityEvent_ItemFailed | UtilityEvent_DispatchedAs

/**
 * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 * well as the error.
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    index: number
    error: DispatchError
}

/**
 * Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 * Batch of dispatches completed but has errors.
 */
export interface UtilityEvent_BatchCompletedWithErrors {
    __kind: 'BatchCompletedWithErrors'
}

/**
 * A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
    __kind: 'ItemCompleted'
}

/**
 * A single item within a Batch of dispatches has completed with error.
 */
export interface UtilityEvent_ItemFailed {
    __kind: 'ItemFailed'
    error: DispatchError
}

/**
 * A call was dispatched.
 */
export interface UtilityEvent_DispatchedAs {
    __kind: 'DispatchedAs'
    result: Type_471
}

/**
 * The `Event` enum of this pallet
 */
export type IdentityEvent = IdentityEvent_IdentitySet | IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_JudgementGiven | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked

/**
 * A name was set or reset (which will remove all judgements).
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    who: Uint8Array
}

/**
 * A name was cleared, and the given balance returned.
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    who: Uint8Array
    deposit: bigint
}

/**
 * A name was removed and the given balance slashed.
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    who: Uint8Array
    deposit: bigint
}

/**
 * A judgement was asked from a registrar.
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    who: Uint8Array
    registrarIndex: number
}

/**
 * A judgement request was retracted.
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    who: Uint8Array
    registrarIndex: number
}

/**
 * A judgement was given by a registrar.
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    target: Uint8Array
    registrarIndex: number
}

/**
 * A registrar was added.
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    registrarIndex: number
}

/**
 * A sub-identity was added to an identity and the deposit paid.
 */
export interface IdentityEvent_SubIdentityAdded {
    __kind: 'SubIdentityAdded'
    sub: Uint8Array
    main: Uint8Array
    deposit: bigint
}

/**
 * A sub-identity was removed from an identity and the deposit freed.
 */
export interface IdentityEvent_SubIdentityRemoved {
    __kind: 'SubIdentityRemoved'
    sub: Uint8Array
    main: Uint8Array
    deposit: bigint
}

/**
 * A sub-identity was cleared, and the given deposit repatriated from the
 * main identity account to the sub-identity account.
 */
export interface IdentityEvent_SubIdentityRevoked {
    __kind: 'SubIdentityRevoked'
    sub: Uint8Array
    main: Uint8Array
    deposit: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type SocietyEvent = SocietyEvent_Founded | SocietyEvent_Bid | SocietyEvent_Vouch | SocietyEvent_AutoUnbid | SocietyEvent_Unbid | SocietyEvent_Unvouch | SocietyEvent_Inducted | SocietyEvent_SuspendedMemberJudgement | SocietyEvent_CandidateSuspended | SocietyEvent_MemberSuspended | SocietyEvent_Challenged | SocietyEvent_Vote | SocietyEvent_DefenderVote | SocietyEvent_NewParams | SocietyEvent_Unfounded | SocietyEvent_Deposit | SocietyEvent_Elevated

/**
 * The society is founded by the given identity.
 */
export interface SocietyEvent_Founded {
    __kind: 'Founded'
    founder: Uint8Array
}

/**
 * A membership bid just happened. The given account is the candidate's ID and their offer
 * is the second.
 */
export interface SocietyEvent_Bid {
    __kind: 'Bid'
    candidateId: Uint8Array
    offer: bigint
}

/**
 * A membership bid just happened by vouching. The given account is the candidate's ID and
 * their offer is the second. The vouching party is the third.
 */
export interface SocietyEvent_Vouch {
    __kind: 'Vouch'
    candidateId: Uint8Array
    offer: bigint
    vouching: Uint8Array
}

/**
 * A candidate was dropped (due to an excess of bids in the system).
 */
export interface SocietyEvent_AutoUnbid {
    __kind: 'AutoUnbid'
    candidate: Uint8Array
}

/**
 * A candidate was dropped (by their request).
 */
export interface SocietyEvent_Unbid {
    __kind: 'Unbid'
    candidate: Uint8Array
}

/**
 * A candidate was dropped (by request of who vouched for them).
 */
export interface SocietyEvent_Unvouch {
    __kind: 'Unvouch'
    candidate: Uint8Array
}

/**
 * A group of candidates have been inducted. The batch's primary is the first value, the
 * batch in full is the second.
 */
export interface SocietyEvent_Inducted {
    __kind: 'Inducted'
    primary: Uint8Array
    candidates: Uint8Array[]
}

/**
 * A suspended member has been judged.
 */
export interface SocietyEvent_SuspendedMemberJudgement {
    __kind: 'SuspendedMemberJudgement'
    who: Uint8Array
    judged: boolean
}

/**
 * A candidate has been suspended
 */
export interface SocietyEvent_CandidateSuspended {
    __kind: 'CandidateSuspended'
    candidate: Uint8Array
}

/**
 * A member has been suspended
 */
export interface SocietyEvent_MemberSuspended {
    __kind: 'MemberSuspended'
    member: Uint8Array
}

/**
 * A member has been challenged
 */
export interface SocietyEvent_Challenged {
    __kind: 'Challenged'
    member: Uint8Array
}

/**
 * A vote has been placed
 */
export interface SocietyEvent_Vote {
    __kind: 'Vote'
    candidate: Uint8Array
    voter: Uint8Array
    vote: boolean
}

/**
 * A vote has been placed for a defending member
 */
export interface SocietyEvent_DefenderVote {
    __kind: 'DefenderVote'
    voter: Uint8Array
    vote: boolean
}

/**
 * A new set of \[params\] has been set for the group.
 */
export interface SocietyEvent_NewParams {
    __kind: 'NewParams'
    params: GroupParams
}

/**
 * Society is unfounded.
 */
export interface SocietyEvent_Unfounded {
    __kind: 'Unfounded'
    founder: Uint8Array
}

/**
 * Some funds were deposited into the society account.
 */
export interface SocietyEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

/**
 * A \[member\] got elevated to \[rank\].
 */
export interface SocietyEvent_Elevated {
    __kind: 'Elevated'
    member: Uint8Array
    rank: number
}

/**
 * Events type.
 */
export type RecoveryEvent = RecoveryEvent_RecoveryCreated | RecoveryEvent_RecoveryInitiated | RecoveryEvent_RecoveryVouched | RecoveryEvent_RecoveryClosed | RecoveryEvent_AccountRecovered | RecoveryEvent_RecoveryRemoved

/**
 * A recovery process has been set up for an account.
 */
export interface RecoveryEvent_RecoveryCreated {
    __kind: 'RecoveryCreated'
    account: Uint8Array
}

/**
 * A recovery process has been initiated for lost account by rescuer account.
 */
export interface RecoveryEvent_RecoveryInitiated {
    __kind: 'RecoveryInitiated'
    lostAccount: Uint8Array
    rescuerAccount: Uint8Array
}

/**
 * A recovery process for lost account by rescuer account has been vouched for by sender.
 */
export interface RecoveryEvent_RecoveryVouched {
    __kind: 'RecoveryVouched'
    lostAccount: Uint8Array
    rescuerAccount: Uint8Array
    sender: Uint8Array
}

/**
 * A recovery process for lost account by rescuer account has been closed.
 */
export interface RecoveryEvent_RecoveryClosed {
    __kind: 'RecoveryClosed'
    lostAccount: Uint8Array
    rescuerAccount: Uint8Array
}

/**
 * Lost account has been successfully recovered by rescuer account.
 */
export interface RecoveryEvent_AccountRecovered {
    __kind: 'AccountRecovered'
    lostAccount: Uint8Array
    rescuerAccount: Uint8Array
}

/**
 * A recovery process has been removed for an account.
 */
export interface RecoveryEvent_RecoveryRemoved {
    __kind: 'RecoveryRemoved'
    lostAccount: Uint8Array
}

/**
 * The `Event` enum of this pallet
 */
export type VestingEvent = VestingEvent_VestingUpdated | VestingEvent_VestingCompleted

/**
 * The amount vested has been updated. This could indicate a change in funds available.
 * The balance given is the amount which is left unvested (and thus locked).
 */
export interface VestingEvent_VestingUpdated {
    __kind: 'VestingUpdated'
    account: Uint8Array
    unvested: bigint
}

/**
 * An \[account\] has become fully vested.
 */
export interface VestingEvent_VestingCompleted {
    __kind: 'VestingCompleted'
    account: Uint8Array
}

/**
 * Events type.
 */
export type SchedulerEvent = SchedulerEvent_Scheduled | SchedulerEvent_Canceled | SchedulerEvent_Dispatched | SchedulerEvent_CallUnavailable | SchedulerEvent_PeriodicFailed | SchedulerEvent_PermanentlyOverweight

/**
 * Scheduled some task.
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    when: number
    index: number
}

/**
 * Canceled some task.
 */
export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    when: number
    index: number
}

/**
 * Dispatched some task.
 */
export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    task: [number, number]
    id: (Uint8Array | undefined)
    result: Type_471
}

/**
 * The call for the provided hash was not found so the task has been aborted.
 */
export interface SchedulerEvent_CallUnavailable {
    __kind: 'CallUnavailable'
    task: [number, number]
    id: (Uint8Array | undefined)
}

/**
 * The given task was unable to be renewed since the agenda is full at that block.
 */
export interface SchedulerEvent_PeriodicFailed {
    __kind: 'PeriodicFailed'
    task: [number, number]
    id: (Uint8Array | undefined)
}

/**
 * The given task can never be executed since it is overweight.
 */
export interface SchedulerEvent_PermanentlyOverweight {
    __kind: 'PermanentlyOverweight'
    task: [number, number]
    id: (Uint8Array | undefined)
}

/**
 * The `Event` enum of this pallet
 */
export type ProxyEvent = ProxyEvent_ProxyExecuted | ProxyEvent_PureCreated | ProxyEvent_Announced | ProxyEvent_ProxyAdded | ProxyEvent_ProxyRemoved

/**
 * A proxy was executed correctly, with the given.
 */
export interface ProxyEvent_ProxyExecuted {
    __kind: 'ProxyExecuted'
    result: Type_471
}

/**
 * A pure account has been created by new proxy with given
 * disambiguation index and proxy type.
 */
export interface ProxyEvent_PureCreated {
    __kind: 'PureCreated'
    pure: Uint8Array
    who: Uint8Array
    proxyType: ProxyType
    disambiguationIndex: number
}

/**
 * An announcement was placed to make a call in the future.
 */
export interface ProxyEvent_Announced {
    __kind: 'Announced'
    real: Uint8Array
    proxy: Uint8Array
    callHash: Uint8Array
}

/**
 * A proxy was added.
 */
export interface ProxyEvent_ProxyAdded {
    __kind: 'ProxyAdded'
    delegator: Uint8Array
    delegatee: Uint8Array
    proxyType: ProxyType
    delay: number
}

/**
 * A proxy was removed.
 */
export interface ProxyEvent_ProxyRemoved {
    __kind: 'ProxyRemoved'
    delegator: Uint8Array
    delegatee: Uint8Array
    proxyType: ProxyType
    delay: number
}

/**
 * The `Event` enum of this pallet
 */
export type MultisigEvent = MultisigEvent_NewMultisig | MultisigEvent_MultisigApproval | MultisigEvent_MultisigExecuted | MultisigEvent_MultisigCancelled

/**
 * A new multisig operation has begun.
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    approving: Uint8Array
    multisig: Uint8Array
    callHash: Uint8Array
}

/**
 * A multisig operation has been approved by someone.
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    approving: Uint8Array
    timepoint: Timepoint
    multisig: Uint8Array
    callHash: Uint8Array
}

/**
 * A multisig operation has been executed.
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    approving: Uint8Array
    timepoint: Timepoint
    multisig: Uint8Array
    callHash: Uint8Array
    result: Type_471
}

/**
 * A multisig operation has been cancelled.
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    cancelling: Uint8Array
    timepoint: Timepoint
    multisig: Uint8Array
    callHash: Uint8Array
}

/**
 * The `Event` enum of this pallet
 */
export type PreimageEvent = PreimageEvent_Noted | PreimageEvent_Requested | PreimageEvent_Cleared

/**
 * A preimage has been noted.
 */
export interface PreimageEvent_Noted {
    __kind: 'Noted'
    hash: Uint8Array
}

/**
 * A preimage has been requested.
 */
export interface PreimageEvent_Requested {
    __kind: 'Requested'
    hash: Uint8Array
}

/**
 * A preimage has ben cleared.
 */
export interface PreimageEvent_Cleared {
    __kind: 'Cleared'
    hash: Uint8Array
}

/**
 * The `Event` enum of this pallet
 */
export type BountiesEvent = BountiesEvent_BountyProposed | BountiesEvent_BountyRejected | BountiesEvent_BountyBecameActive | BountiesEvent_BountyAwarded | BountiesEvent_BountyClaimed | BountiesEvent_BountyCanceled | BountiesEvent_BountyExtended

/**
 * New bounty proposal.
 */
export interface BountiesEvent_BountyProposed {
    __kind: 'BountyProposed'
    index: number
}

/**
 * A bounty proposal was rejected; funds were slashed.
 */
export interface BountiesEvent_BountyRejected {
    __kind: 'BountyRejected'
    index: number
    bond: bigint
}

/**
 * A bounty proposal is funded and became active.
 */
export interface BountiesEvent_BountyBecameActive {
    __kind: 'BountyBecameActive'
    index: number
}

/**
 * A bounty is awarded to a beneficiary.
 */
export interface BountiesEvent_BountyAwarded {
    __kind: 'BountyAwarded'
    index: number
    beneficiary: Uint8Array
}

/**
 * A bounty is claimed by beneficiary.
 */
export interface BountiesEvent_BountyClaimed {
    __kind: 'BountyClaimed'
    index: number
    payout: bigint
    beneficiary: Uint8Array
}

/**
 * A bounty is cancelled.
 */
export interface BountiesEvent_BountyCanceled {
    __kind: 'BountyCanceled'
    index: number
}

/**
 * A bounty expiry is extended.
 */
export interface BountiesEvent_BountyExtended {
    __kind: 'BountyExtended'
    index: number
}

/**
 * The `Event` enum of this pallet
 */
export type ChildBountiesEvent = ChildBountiesEvent_Added | ChildBountiesEvent_Awarded | ChildBountiesEvent_Claimed | ChildBountiesEvent_Canceled

/**
 * A child-bounty is added.
 */
export interface ChildBountiesEvent_Added {
    __kind: 'Added'
    index: number
    childIndex: number
}

/**
 * A child-bounty is awarded to a beneficiary.
 */
export interface ChildBountiesEvent_Awarded {
    __kind: 'Awarded'
    index: number
    childIndex: number
    beneficiary: Uint8Array
}

/**
 * A child-bounty is claimed by beneficiary.
 */
export interface ChildBountiesEvent_Claimed {
    __kind: 'Claimed'
    index: number
    childIndex: number
    payout: bigint
    beneficiary: Uint8Array
}

/**
 * A child-bounty is cancelled.
 */
export interface ChildBountiesEvent_Canceled {
    __kind: 'Canceled'
    index: number
    childIndex: number
}

/**
 * The `Event` enum of this pallet
 */
export type ElectionProviderMultiPhaseEvent = ElectionProviderMultiPhaseEvent_SolutionStored | ElectionProviderMultiPhaseEvent_ElectionFinalized | ElectionProviderMultiPhaseEvent_ElectionFailed | ElectionProviderMultiPhaseEvent_Rewarded | ElectionProviderMultiPhaseEvent_Slashed | ElectionProviderMultiPhaseEvent_PhaseTransitioned

/**
 * A solution was stored with the given compute.
 * 
 * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
 * the stored solution was submited in the signed phase by a miner with the `AccountId`.
 * Otherwise, the solution was stored either during the unsigned phase or by
 * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
 * room for this one.
 */
export interface ElectionProviderMultiPhaseEvent_SolutionStored {
    __kind: 'SolutionStored'
    compute: ElectionCompute
    origin: (Uint8Array | undefined)
    prevEjected: boolean
}

/**
 * The election has been finalized, with the given computation and score.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFinalized {
    __kind: 'ElectionFinalized'
    compute: ElectionCompute
    score: ElectionScore
}

/**
 * An election failed.
 * 
 * Not much can be said about which computes failed in the process.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFailed {
    __kind: 'ElectionFailed'
}

/**
 * An account has been rewarded for their signed submission being finalized.
 */
export interface ElectionProviderMultiPhaseEvent_Rewarded {
    __kind: 'Rewarded'
    account: Uint8Array
    value: bigint
}

/**
 * An account has been slashed for submitting an invalid signed submission.
 */
export interface ElectionProviderMultiPhaseEvent_Slashed {
    __kind: 'Slashed'
    account: Uint8Array
    value: bigint
}

/**
 * There was a phase transition in a given round.
 */
export interface ElectionProviderMultiPhaseEvent_PhaseTransitioned {
    __kind: 'PhaseTransitioned'
    from: Phase
    to: Phase
    round: number
}

/**
 * The `Event` enum of this pallet
 */
export type NisEvent = NisEvent_BidPlaced | NisEvent_BidRetracted | NisEvent_BidDropped | NisEvent_Issued | NisEvent_Thawed | NisEvent_Funded | NisEvent_Transferred

/**
 * A bid was successfully placed.
 */
export interface NisEvent_BidPlaced {
    __kind: 'BidPlaced'
    who: Uint8Array
    amount: bigint
    duration: number
}

/**
 * A bid was successfully removed (before being accepted).
 */
export interface NisEvent_BidRetracted {
    __kind: 'BidRetracted'
    who: Uint8Array
    amount: bigint
    duration: number
}

/**
 * A bid was dropped from a queue because of another, more substantial, bid was present.
 */
export interface NisEvent_BidDropped {
    __kind: 'BidDropped'
    who: Uint8Array
    amount: bigint
    duration: number
}

/**
 * A bid was accepted. The balance may not be released until expiry.
 */
export interface NisEvent_Issued {
    __kind: 'Issued'
    /**
     * The identity of the receipt.
     */
    index: number
    /**
     * The block number at which the receipt may be thawed.
     */
    expiry: number
    /**
     * The owner of the receipt.
     */
    who: Uint8Array
    /**
     * The proportion of the effective total issuance which the receipt represents.
     */
    proportion: bigint
    /**
     * The amount of funds which were debited from the owner.
     */
    amount: bigint
}

/**
 * An receipt has been (at least partially) thawed.
 */
export interface NisEvent_Thawed {
    __kind: 'Thawed'
    /**
     * The identity of the receipt.
     */
    index: number
    /**
     * The owner.
     */
    who: Uint8Array
    /**
     * The proportion of the effective total issuance by which the owner was debited.
     */
    proportion: bigint
    /**
     * The amount by which the owner was credited.
     */
    amount: bigint
    /**
     * If `true` then the receipt is done.
     */
    dropped: boolean
}

/**
 * An automatic funding of the deficit was made.
 */
export interface NisEvent_Funded {
    __kind: 'Funded'
    deficit: bigint
}

/**
 * A receipt was transfered.
 */
export interface NisEvent_Transferred {
    __kind: 'Transferred'
    from: Uint8Array
    to: Uint8Array
    index: number
}

/**
 * The `Event` enum of this pallet
 */
export type NisCounterpartBalancesEvent = NisCounterpartBalancesEvent_Endowed | NisCounterpartBalancesEvent_DustLost | NisCounterpartBalancesEvent_Transfer | NisCounterpartBalancesEvent_BalanceSet | NisCounterpartBalancesEvent_Reserved | NisCounterpartBalancesEvent_Unreserved | NisCounterpartBalancesEvent_ReserveRepatriated | NisCounterpartBalancesEvent_Deposit | NisCounterpartBalancesEvent_Withdraw | NisCounterpartBalancesEvent_Slashed | NisCounterpartBalancesEvent_Minted | NisCounterpartBalancesEvent_Burned | NisCounterpartBalancesEvent_Suspended | NisCounterpartBalancesEvent_Restored | NisCounterpartBalancesEvent_Upgraded | NisCounterpartBalancesEvent_Issued | NisCounterpartBalancesEvent_Rescinded | NisCounterpartBalancesEvent_Locked | NisCounterpartBalancesEvent_Unlocked | NisCounterpartBalancesEvent_Frozen | NisCounterpartBalancesEvent_Thawed

/**
 * An account was created with some free balance.
 */
export interface NisCounterpartBalancesEvent_Endowed {
    __kind: 'Endowed'
    account: Uint8Array
    freeBalance: bigint
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss.
 */
export interface NisCounterpartBalancesEvent_DustLost {
    __kind: 'DustLost'
    account: Uint8Array
    amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface NisCounterpartBalancesEvent_Transfer {
    __kind: 'Transfer'
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

/**
 * A balance was set by root.
 */
export interface NisCounterpartBalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    who: Uint8Array
    free: bigint
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface NisCounterpartBalancesEvent_Reserved {
    __kind: 'Reserved'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface NisCounterpartBalancesEvent_Unreserved {
    __kind: 'Unreserved'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 */
export interface NisCounterpartBalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    from: Uint8Array
    to: Uint8Array
    amount: bigint
    destinationStatus: BalanceStatus
}

/**
 * Some amount was deposited (e.g. for transaction fees).
 */
export interface NisCounterpartBalancesEvent_Deposit {
    __kind: 'Deposit'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees).
 */
export interface NisCounterpartBalancesEvent_Withdraw {
    __kind: 'Withdraw'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was removed from the account (e.g. for misbehavior).
 */
export interface NisCounterpartBalancesEvent_Slashed {
    __kind: 'Slashed'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was minted into an account.
 */
export interface NisCounterpartBalancesEvent_Minted {
    __kind: 'Minted'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was burned from an account.
 */
export interface NisCounterpartBalancesEvent_Burned {
    __kind: 'Burned'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was suspended from an account (it can be restored later).
 */
export interface NisCounterpartBalancesEvent_Suspended {
    __kind: 'Suspended'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was restored into an account.
 */
export interface NisCounterpartBalancesEvent_Restored {
    __kind: 'Restored'
    who: Uint8Array
    amount: bigint
}

/**
 * An account was upgraded.
 */
export interface NisCounterpartBalancesEvent_Upgraded {
    __kind: 'Upgraded'
    who: Uint8Array
}

/**
 * Total issuance was increased by `amount`, creating a credit to be balanced.
 */
export interface NisCounterpartBalancesEvent_Issued {
    __kind: 'Issued'
    amount: bigint
}

/**
 * Total issuance was decreased by `amount`, creating a debt to be balanced.
 */
export interface NisCounterpartBalancesEvent_Rescinded {
    __kind: 'Rescinded'
    amount: bigint
}

/**
 * Some balance was locked.
 */
export interface NisCounterpartBalancesEvent_Locked {
    __kind: 'Locked'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was unlocked.
 */
export interface NisCounterpartBalancesEvent_Unlocked {
    __kind: 'Unlocked'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was frozen.
 */
export interface NisCounterpartBalancesEvent_Frozen {
    __kind: 'Frozen'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was thawed.
 */
export interface NisCounterpartBalancesEvent_Thawed {
    __kind: 'Thawed'
    who: Uint8Array
    amount: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type VoterListEvent = VoterListEvent_Rebagged | VoterListEvent_ScoreUpdated

/**
 * Moved an account from one bag to another.
 */
export interface VoterListEvent_Rebagged {
    __kind: 'Rebagged'
    who: Uint8Array
    from: bigint
    to: bigint
}

/**
 * Updated the score of some account to the given amount.
 */
export interface VoterListEvent_ScoreUpdated {
    __kind: 'ScoreUpdated'
    who: Uint8Array
    newScore: bigint
}

/**
 * Events of this pallet.
 */
export type NominationPoolsEvent = NominationPoolsEvent_Created | NominationPoolsEvent_Bonded | NominationPoolsEvent_PaidOut | NominationPoolsEvent_Unbonded | NominationPoolsEvent_Withdrawn | NominationPoolsEvent_Destroyed | NominationPoolsEvent_StateChanged | NominationPoolsEvent_MemberRemoved | NominationPoolsEvent_RolesUpdated | NominationPoolsEvent_PoolSlashed | NominationPoolsEvent_UnbondingPoolSlashed | NominationPoolsEvent_PoolCommissionUpdated | NominationPoolsEvent_PoolMaxCommissionUpdated | NominationPoolsEvent_PoolCommissionChangeRateUpdated | NominationPoolsEvent_PoolCommissionClaimed

/**
 * A pool has been created.
 */
export interface NominationPoolsEvent_Created {
    __kind: 'Created'
    depositor: Uint8Array
    poolId: number
}

/**
 * A member has became bonded in a pool.
 */
export interface NominationPoolsEvent_Bonded {
    __kind: 'Bonded'
    member: Uint8Array
    poolId: number
    bonded: bigint
    joined: boolean
}

/**
 * A payout has been made to a member.
 */
export interface NominationPoolsEvent_PaidOut {
    __kind: 'PaidOut'
    member: Uint8Array
    poolId: number
    payout: bigint
}

/**
 * A member has unbonded from their pool.
 * 
 * - `balance` is the corresponding balance of the number of points that has been
 *   requested to be unbonded (the argument of the `unbond` transaction) from the bonded
 *   pool.
 * - `points` is the number of points that are issued as a result of `balance` being
 * dissolved into the corresponding unbonding pool.
 * - `era` is the era in which the balance will be unbonded.
 * In the absence of slashing, these values will match. In the presence of slashing, the
 * number of points that are issued in the unbonding pool will be less than the amount
 * requested to be unbonded.
 */
export interface NominationPoolsEvent_Unbonded {
    __kind: 'Unbonded'
    member: Uint8Array
    poolId: number
    balance: bigint
    points: bigint
    era: number
}

/**
 * A member has withdrawn from their pool.
 * 
 * The given number of `points` have been dissolved in return of `balance`.
 * 
 * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
 * will be 1.
 */
export interface NominationPoolsEvent_Withdrawn {
    __kind: 'Withdrawn'
    member: Uint8Array
    poolId: number
    balance: bigint
    points: bigint
}

/**
 * A pool has been destroyed.
 */
export interface NominationPoolsEvent_Destroyed {
    __kind: 'Destroyed'
    poolId: number
}

/**
 * The state of a pool has changed
 */
export interface NominationPoolsEvent_StateChanged {
    __kind: 'StateChanged'
    poolId: number
    newState: PoolState
}

/**
 * A member has been removed from a pool.
 * 
 * The removal can be voluntary (withdrawn all unbonded funds) or involuntary (kicked).
 */
export interface NominationPoolsEvent_MemberRemoved {
    __kind: 'MemberRemoved'
    poolId: number
    member: Uint8Array
}

/**
 * The roles of a pool have been updated to the given new roles. Note that the depositor
 * can never change.
 */
export interface NominationPoolsEvent_RolesUpdated {
    __kind: 'RolesUpdated'
    root: (Uint8Array | undefined)
    bouncer: (Uint8Array | undefined)
    nominator: (Uint8Array | undefined)
}

/**
 * The active balance of pool `pool_id` has been slashed to `balance`.
 */
export interface NominationPoolsEvent_PoolSlashed {
    __kind: 'PoolSlashed'
    poolId: number
    balance: bigint
}

/**
 * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
 */
export interface NominationPoolsEvent_UnbondingPoolSlashed {
    __kind: 'UnbondingPoolSlashed'
    poolId: number
    era: number
    balance: bigint
}

/**
 * A pool's commission setting has been changed.
 */
export interface NominationPoolsEvent_PoolCommissionUpdated {
    __kind: 'PoolCommissionUpdated'
    poolId: number
    current: ([number, Uint8Array] | undefined)
}

/**
 * A pool's maximum commission setting has been changed.
 */
export interface NominationPoolsEvent_PoolMaxCommissionUpdated {
    __kind: 'PoolMaxCommissionUpdated'
    poolId: number
    maxCommission: number
}

/**
 * A pool's commission `change_rate` has been changed.
 */
export interface NominationPoolsEvent_PoolCommissionChangeRateUpdated {
    __kind: 'PoolCommissionChangeRateUpdated'
    poolId: number
    changeRate: CommissionChangeRate
}

/**
 * Pool commission has been claimed.
 */
export interface NominationPoolsEvent_PoolCommissionClaimed {
    __kind: 'PoolCommissionClaimed'
    poolId: number
    commission: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type FastUnstakeEvent = FastUnstakeEvent_Unstaked | FastUnstakeEvent_Slashed | FastUnstakeEvent_BatchChecked | FastUnstakeEvent_BatchFinished | FastUnstakeEvent_InternalError

/**
 * A staker was unstaked.
 */
export interface FastUnstakeEvent_Unstaked {
    __kind: 'Unstaked'
    stash: Uint8Array
    result: Type_471
}

/**
 * A staker was slashed for requesting fast-unstake whilst being exposed.
 */
export interface FastUnstakeEvent_Slashed {
    __kind: 'Slashed'
    stash: Uint8Array
    amount: bigint
}

/**
 * A batch was partially checked for the given eras, but the process did not finish.
 */
export interface FastUnstakeEvent_BatchChecked {
    __kind: 'BatchChecked'
    eras: number[]
}

/**
 * A batch of a given size was terminated.
 * 
 * This is always follows by a number of `Unstaked` or `Slashed` events, marking the end
 * of the batch. A new batch will be created upon next block.
 */
export interface FastUnstakeEvent_BatchFinished {
    __kind: 'BatchFinished'
    size: number
}

/**
 * An internal error happened. Operations will be paused now.
 */
export interface FastUnstakeEvent_InternalError {
    __kind: 'InternalError'
}

/**
 * The `Event` enum of this pallet
 */
export type ParaInclusionEvent = ParaInclusionEvent_CandidateBacked | ParaInclusionEvent_CandidateIncluded | ParaInclusionEvent_CandidateTimedOut | ParaInclusionEvent_UpwardMessagesReceived

/**
 * A candidate was backed. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateBacked {
    __kind: 'CandidateBacked'
    value: [V5CandidateReceipt, Uint8Array, number, number]
}

/**
 * A candidate was included. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateIncluded {
    __kind: 'CandidateIncluded'
    value: [V5CandidateReceipt, Uint8Array, number, number]
}

/**
 * A candidate timed out. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateTimedOut {
    __kind: 'CandidateTimedOut'
    value: [V5CandidateReceipt, Uint8Array, number]
}

/**
 * Some upward messages have been received and will be processed.
 */
export interface ParaInclusionEvent_UpwardMessagesReceived {
    __kind: 'UpwardMessagesReceived'
    from: number
    count: number
}

/**
 * The `Event` enum of this pallet
 */
export type ParasEvent = ParasEvent_CurrentCodeUpdated | ParasEvent_CurrentHeadUpdated | ParasEvent_CodeUpgradeScheduled | ParasEvent_NewHeadNoted | ParasEvent_ActionQueued | ParasEvent_PvfCheckStarted | ParasEvent_PvfCheckAccepted | ParasEvent_PvfCheckRejected

/**
 * Current code has been updated for a Para. `para_id`
 */
export interface ParasEvent_CurrentCodeUpdated {
    __kind: 'CurrentCodeUpdated'
    value: number
}

/**
 * Current head has been updated for a Para. `para_id`
 */
export interface ParasEvent_CurrentHeadUpdated {
    __kind: 'CurrentHeadUpdated'
    value: number
}

/**
 * A code upgrade has been scheduled for a Para. `para_id`
 */
export interface ParasEvent_CodeUpgradeScheduled {
    __kind: 'CodeUpgradeScheduled'
    value: number
}

/**
 * A new head has been noted for a Para. `para_id`
 */
export interface ParasEvent_NewHeadNoted {
    __kind: 'NewHeadNoted'
    value: number
}

/**
 * A para has been queued to execute pending actions. `para_id`
 */
export interface ParasEvent_ActionQueued {
    __kind: 'ActionQueued'
    value: [number, number]
}

/**
 * The given para either initiated or subscribed to a PVF check for the given validation
 * code. `code_hash` `para_id`
 */
export interface ParasEvent_PvfCheckStarted {
    __kind: 'PvfCheckStarted'
    value: [Uint8Array, number]
}

/**
 * The given validation code was accepted by the PVF pre-checking vote.
 * `code_hash` `para_id`
 */
export interface ParasEvent_PvfCheckAccepted {
    __kind: 'PvfCheckAccepted'
    value: [Uint8Array, number]
}

/**
 * The given validation code was rejected by the PVF pre-checking vote.
 * `code_hash` `para_id`
 */
export interface ParasEvent_PvfCheckRejected {
    __kind: 'PvfCheckRejected'
    value: [Uint8Array, number]
}

/**
 * The `Event` enum of this pallet
 */
export type HrmpEvent = HrmpEvent_OpenChannelRequested | HrmpEvent_OpenChannelCanceled | HrmpEvent_OpenChannelAccepted | HrmpEvent_ChannelClosed | HrmpEvent_HrmpChannelForceOpened

/**
 * Open HRMP channel requested.
 * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
 */
export interface HrmpEvent_OpenChannelRequested {
    __kind: 'OpenChannelRequested'
    value: [number, number, number, number]
}

/**
 * An HRMP channel request sent by the receiver was canceled by either party.
 * `[by_parachain, channel_id]`
 */
export interface HrmpEvent_OpenChannelCanceled {
    __kind: 'OpenChannelCanceled'
    value: [number, HrmpChannelId]
}

/**
 * Open HRMP channel accepted. `[sender, recipient]`
 */
export interface HrmpEvent_OpenChannelAccepted {
    __kind: 'OpenChannelAccepted'
    value: [number, number]
}

/**
 * HRMP channel closed. `[by_parachain, channel_id]`
 */
export interface HrmpEvent_ChannelClosed {
    __kind: 'ChannelClosed'
    value: [number, HrmpChannelId]
}

/**
 * An HRMP channel was opened via Root origin.
 * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
 */
export interface HrmpEvent_HrmpChannelForceOpened {
    __kind: 'HrmpChannelForceOpened'
    value: [number, number, number, number]
}

/**
 * The `Event` enum of this pallet
 */
export type ParasDisputesEvent = ParasDisputesEvent_DisputeInitiated | ParasDisputesEvent_DisputeConcluded | ParasDisputesEvent_Revert

/**
 * A dispute has been initiated. \[candidate hash, dispute location\]
 */
export interface ParasDisputesEvent_DisputeInitiated {
    __kind: 'DisputeInitiated'
    value: [Uint8Array, DisputeLocation]
}

/**
 * A dispute has concluded for or against a candidate.
 * `\[para id, candidate hash, dispute result\]`
 */
export interface ParasDisputesEvent_DisputeConcluded {
    __kind: 'DisputeConcluded'
    value: [Uint8Array, DisputeResult]
}

/**
 * A dispute has concluded with supermajority against a candidate.
 * Block authors should no longer build on top of this head and should
 * instead revert the block at the given height. This should be the
 * number of the child of the last known valid block in the chain.
 */
export interface ParasDisputesEvent_Revert {
    __kind: 'Revert'
    value: number
}

/**
 * The `Event` enum of this pallet
 */
export type RegistrarEvent = RegistrarEvent_Registered | RegistrarEvent_Deregistered | RegistrarEvent_Reserved | RegistrarEvent_Swapped

export interface RegistrarEvent_Registered {
    __kind: 'Registered'
    paraId: number
    manager: Uint8Array
}

export interface RegistrarEvent_Deregistered {
    __kind: 'Deregistered'
    paraId: number
}

export interface RegistrarEvent_Reserved {
    __kind: 'Reserved'
    paraId: number
    who: Uint8Array
}

export interface RegistrarEvent_Swapped {
    __kind: 'Swapped'
    paraId: number
    otherId: number
}

/**
 * The `Event` enum of this pallet
 */
export type SlotsEvent = SlotsEvent_NewLeasePeriod | SlotsEvent_Leased

/**
 * A new `[lease_period]` is beginning.
 */
export interface SlotsEvent_NewLeasePeriod {
    __kind: 'NewLeasePeriod'
    leasePeriod: number
}

/**
 * A para has won the right to a continuous set of lease periods as a parachain.
 * First balance is any extra amount reserved on top of the para's existing deposit.
 * Second balance is the total amount reserved.
 */
export interface SlotsEvent_Leased {
    __kind: 'Leased'
    paraId: number
    leaser: Uint8Array
    periodBegin: number
    periodCount: number
    extraReserved: bigint
    totalAmount: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type AuctionsEvent = AuctionsEvent_AuctionStarted | AuctionsEvent_AuctionClosed | AuctionsEvent_Reserved | AuctionsEvent_Unreserved | AuctionsEvent_ReserveConfiscated | AuctionsEvent_BidAccepted | AuctionsEvent_WinningOffset

/**
 * An auction started. Provides its index and the block number where it will begin to
 * close and the first lease period of the quadruplet that is auctioned.
 */
export interface AuctionsEvent_AuctionStarted {
    __kind: 'AuctionStarted'
    auctionIndex: number
    leasePeriod: number
    ending: number
}

/**
 * An auction ended. All funds become unreserved.
 */
export interface AuctionsEvent_AuctionClosed {
    __kind: 'AuctionClosed'
    auctionIndex: number
}

/**
 * Funds were reserved for a winning bid. First balance is the extra amount reserved.
 * Second is the total.
 */
export interface AuctionsEvent_Reserved {
    __kind: 'Reserved'
    bidder: Uint8Array
    extraReserved: bigint
    totalAmount: bigint
}

/**
 * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
 */
export interface AuctionsEvent_Unreserved {
    __kind: 'Unreserved'
    bidder: Uint8Array
    amount: bigint
}

/**
 * Someone attempted to lease the same slot twice for a parachain. The amount is held in
 * reserve but no parachain slot has been leased.
 */
export interface AuctionsEvent_ReserveConfiscated {
    __kind: 'ReserveConfiscated'
    paraId: number
    leaser: Uint8Array
    amount: bigint
}

/**
 * A new bid has been accepted as the current winner.
 */
export interface AuctionsEvent_BidAccepted {
    __kind: 'BidAccepted'
    bidder: Uint8Array
    paraId: number
    amount: bigint
    firstSlot: number
    lastSlot: number
}

/**
 * The winning offset was chosen for an auction. This will map into the `Winning` storage
 * map.
 */
export interface AuctionsEvent_WinningOffset {
    __kind: 'WinningOffset'
    auctionIndex: number
    blockNumber: number
}

/**
 * The `Event` enum of this pallet
 */
export type CrowdloanEvent = CrowdloanEvent_Created | CrowdloanEvent_Contributed | CrowdloanEvent_Withdrew | CrowdloanEvent_PartiallyRefunded | CrowdloanEvent_AllRefunded | CrowdloanEvent_Dissolved | CrowdloanEvent_HandleBidResult | CrowdloanEvent_Edited | CrowdloanEvent_MemoUpdated | CrowdloanEvent_AddedToNewRaise

/**
 * Create a new crowdloaning campaign.
 */
export interface CrowdloanEvent_Created {
    __kind: 'Created'
    paraId: number
}

/**
 * Contributed to a crowd sale.
 */
export interface CrowdloanEvent_Contributed {
    __kind: 'Contributed'
    who: Uint8Array
    fundIndex: number
    amount: bigint
}

/**
 * Withdrew full balance of a contributor.
 */
export interface CrowdloanEvent_Withdrew {
    __kind: 'Withdrew'
    who: Uint8Array
    fundIndex: number
    amount: bigint
}

/**
 * The loans in a fund have been partially dissolved, i.e. there are some left
 * over child keys that still need to be killed.
 */
export interface CrowdloanEvent_PartiallyRefunded {
    __kind: 'PartiallyRefunded'
    paraId: number
}

/**
 * All loans in a fund have been refunded.
 */
export interface CrowdloanEvent_AllRefunded {
    __kind: 'AllRefunded'
    paraId: number
}

/**
 * Fund is dissolved.
 */
export interface CrowdloanEvent_Dissolved {
    __kind: 'Dissolved'
    paraId: number
}

/**
 * The result of trying to submit a new bid to the Slots pallet.
 */
export interface CrowdloanEvent_HandleBidResult {
    __kind: 'HandleBidResult'
    paraId: number
    result: Type_471
}

/**
 * The configuration to a crowdloan has been edited.
 */
export interface CrowdloanEvent_Edited {
    __kind: 'Edited'
    paraId: number
}

/**
 * A memo has been updated.
 */
export interface CrowdloanEvent_MemoUpdated {
    __kind: 'MemoUpdated'
    who: Uint8Array
    paraId: number
    memo: Uint8Array
}

/**
 * A parachain has been moved to `NewRaise`
 */
export interface CrowdloanEvent_AddedToNewRaise {
    __kind: 'AddedToNewRaise'
    paraId: number
}

/**
 * Inner events of this pallet.
 */
export type StateTrieMigrationEvent = StateTrieMigrationEvent_Migrated | StateTrieMigrationEvent_Slashed | StateTrieMigrationEvent_AutoMigrationFinished | StateTrieMigrationEvent_Halted

/**
 * Given number of `(top, child)` keys were migrated respectively, with the given
 * `compute`.
 */
export interface StateTrieMigrationEvent_Migrated {
    __kind: 'Migrated'
    top: number
    child: number
    compute: MigrationCompute
}

/**
 * Some account got slashed by the given amount.
 */
export interface StateTrieMigrationEvent_Slashed {
    __kind: 'Slashed'
    who: Uint8Array
    amount: bigint
}

/**
 * The auto migration task finished.
 */
export interface StateTrieMigrationEvent_AutoMigrationFinished {
    __kind: 'AutoMigrationFinished'
}

/**
 * Migration got halted due to an error or miss-configuration.
 */
export interface StateTrieMigrationEvent_Halted {
    __kind: 'Halted'
    error: Error
}

/**
 * The `Event` enum of this pallet
 */
export type XcmPalletEvent = XcmPalletEvent_Attempted | XcmPalletEvent_Sent | XcmPalletEvent_UnexpectedResponse | XcmPalletEvent_ResponseReady | XcmPalletEvent_Notified | XcmPalletEvent_NotifyOverweight | XcmPalletEvent_NotifyDispatchError | XcmPalletEvent_NotifyDecodeFailed | XcmPalletEvent_InvalidResponder | XcmPalletEvent_InvalidResponderVersion | XcmPalletEvent_ResponseTaken | XcmPalletEvent_AssetsTrapped | XcmPalletEvent_VersionChangeNotified | XcmPalletEvent_SupportedVersionChanged | XcmPalletEvent_NotifyTargetSendFail | XcmPalletEvent_NotifyTargetMigrationFail | XcmPalletEvent_InvalidQuerierVersion | XcmPalletEvent_InvalidQuerier | XcmPalletEvent_VersionNotifyStarted | XcmPalletEvent_VersionNotifyRequested | XcmPalletEvent_VersionNotifyUnrequested | XcmPalletEvent_FeesPaid | XcmPalletEvent_AssetsClaimed

/**
 * Execution of an XCM message was attempted.
 */
export interface XcmPalletEvent_Attempted {
    __kind: 'Attempted'
    outcome: V3Outcome
}

/**
 * A XCM message was sent.
 */
export interface XcmPalletEvent_Sent {
    __kind: 'Sent'
    origin: V3MultiLocation
    destination: V3MultiLocation
    message: V3Instruction[]
    messageId: Uint8Array
}

/**
 * Query response received which does not match a registered query. This may be because a
 * matching query was never registered, it may be because it is a duplicate response, or
 * because the query timed out.
 */
export interface XcmPalletEvent_UnexpectedResponse {
    __kind: 'UnexpectedResponse'
    origin: V3MultiLocation
    queryId: bigint
}

/**
 * Query response has been received and is ready for taking with `take_response`. There is
 * no registered notification call.
 */
export interface XcmPalletEvent_ResponseReady {
    __kind: 'ResponseReady'
    queryId: bigint
    response: V3Response
}

/**
 * Query response has been received and query is removed. The registered notification has
 * been dispatched and executed successfully.
 */
export interface XcmPalletEvent_Notified {
    __kind: 'Notified'
    queryId: bigint
    palletIndex: number
    callIndex: number
}

/**
 * Query response has been received and query is removed. The registered notification
 * could not be dispatched because the dispatch weight is greater than the maximum weight
 * originally budgeted by this runtime for the query result.
 */
export interface XcmPalletEvent_NotifyOverweight {
    __kind: 'NotifyOverweight'
    queryId: bigint
    palletIndex: number
    callIndex: number
    actualWeight: Weight
    maxBudgetedWeight: Weight
}

/**
 * Query response has been received and query is removed. There was a general error with
 * dispatching the notification call.
 */
export interface XcmPalletEvent_NotifyDispatchError {
    __kind: 'NotifyDispatchError'
    queryId: bigint
    palletIndex: number
    callIndex: number
}

/**
 * Query response has been received and query is removed. The dispatch was unable to be
 * decoded into a `Call`; this might be due to dispatch function having a signature which
 * is not `(origin, QueryId, Response)`.
 */
export interface XcmPalletEvent_NotifyDecodeFailed {
    __kind: 'NotifyDecodeFailed'
    queryId: bigint
    palletIndex: number
    callIndex: number
}

/**
 * Expected query response has been received but the origin location of the response does
 * not match that expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 */
export interface XcmPalletEvent_InvalidResponder {
    __kind: 'InvalidResponder'
    origin: V3MultiLocation
    queryId: bigint
    expectedLocation: (V3MultiLocation | undefined)
}

/**
 * Expected query response has been received but the expected origin location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 * 
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 */
export interface XcmPalletEvent_InvalidResponderVersion {
    __kind: 'InvalidResponderVersion'
    origin: V3MultiLocation
    queryId: bigint
}

/**
 * Received query response has been read and removed.
 */
export interface XcmPalletEvent_ResponseTaken {
    __kind: 'ResponseTaken'
    queryId: bigint
}

/**
 * Some assets have been placed in an asset trap.
 */
export interface XcmPalletEvent_AssetsTrapped {
    __kind: 'AssetsTrapped'
    hash: Uint8Array
    origin: V3MultiLocation
    assets: VersionedMultiAssets
}

/**
 * An XCM version change notification message has been attempted to be sent.
 * 
 * The cost of sending it (borne by the chain) is included.
 */
export interface XcmPalletEvent_VersionChangeNotified {
    __kind: 'VersionChangeNotified'
    destination: V3MultiLocation
    result: number
    cost: V3MultiAsset[]
    messageId: Uint8Array
}

/**
 * The supported version of a location has been changed. This might be through an
 * automatic notification or a manual intervention.
 */
export interface XcmPalletEvent_SupportedVersionChanged {
    __kind: 'SupportedVersionChanged'
    location: V3MultiLocation
    version: number
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * sending the notification to it.
 */
export interface XcmPalletEvent_NotifyTargetSendFail {
    __kind: 'NotifyTargetSendFail'
    location: V3MultiLocation
    queryId: bigint
    error: V3Error
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * migrating the location to our new XCM format.
 */
export interface XcmPalletEvent_NotifyTargetMigrationFail {
    __kind: 'NotifyTargetMigrationFail'
    location: VersionedMultiLocation
    queryId: bigint
}

/**
 * Expected query response has been received but the expected querier location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 * 
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 */
export interface XcmPalletEvent_InvalidQuerierVersion {
    __kind: 'InvalidQuerierVersion'
    origin: V3MultiLocation
    queryId: bigint
}

/**
 * Expected query response has been received but the querier location of the response does
 * not match the expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 */
export interface XcmPalletEvent_InvalidQuerier {
    __kind: 'InvalidQuerier'
    origin: V3MultiLocation
    queryId: bigint
    expectedQuerier: V3MultiLocation
    maybeActualQuerier: (V3MultiLocation | undefined)
}

/**
 * A remote has requested XCM version change notification from us and we have honored it.
 * A version information message is sent to them and its cost is included.
 */
export interface XcmPalletEvent_VersionNotifyStarted {
    __kind: 'VersionNotifyStarted'
    destination: V3MultiLocation
    cost: V3MultiAsset[]
    messageId: Uint8Array
}

/**
 * We have requested that a remote chain send us XCM version change notifications.
 */
export interface XcmPalletEvent_VersionNotifyRequested {
    __kind: 'VersionNotifyRequested'
    destination: V3MultiLocation
    cost: V3MultiAsset[]
    messageId: Uint8Array
}

/**
 * We have requested that a remote chain stops sending us XCM version change
 * notifications.
 */
export interface XcmPalletEvent_VersionNotifyUnrequested {
    __kind: 'VersionNotifyUnrequested'
    destination: V3MultiLocation
    cost: V3MultiAsset[]
    messageId: Uint8Array
}

/**
 * Fees were paid from a location for an operation (often for using `SendXcm`).
 */
export interface XcmPalletEvent_FeesPaid {
    __kind: 'FeesPaid'
    paying: V3MultiLocation
    fees: V3MultiAsset[]
}

/**
 * Some assets have been claimed from an asset trap
 */
export interface XcmPalletEvent_AssetsClaimed {
    __kind: 'AssetsClaimed'
    hash: Uint8Array
    origin: V3MultiLocation
    assets: VersionedMultiAssets
}

/**
 * The `Event` enum of this pallet
 */
export type MessageQueueEvent = MessageQueueEvent_ProcessingFailed | MessageQueueEvent_Processed | MessageQueueEvent_OverweightEnqueued | MessageQueueEvent_PageReaped

/**
 * Message discarded due to an error in the `MessageProcessor` (usually a format error).
 */
export interface MessageQueueEvent_ProcessingFailed {
    __kind: 'ProcessingFailed'
    id: Uint8Array
    origin: AggregateMessageOrigin
    error: ProcessMessageError
}

/**
 * Message is processed.
 */
export interface MessageQueueEvent_Processed {
    __kind: 'Processed'
    id: Uint8Array
    origin: AggregateMessageOrigin
    weightUsed: Weight
    success: boolean
}

/**
 * Message placed in overweight queue.
 */
export interface MessageQueueEvent_OverweightEnqueued {
    __kind: 'OverweightEnqueued'
    id: Uint8Array
    origin: AggregateMessageOrigin
    pageIndex: number
    messageIndex: number
}

/**
 * This page was reaped.
 */
export interface MessageQueueEvent_PageReaped {
    __kind: 'PageReaped'
    origin: AggregateMessageOrigin
    index: number
}

export type V2AssetInstance = V2AssetInstance_Undefined | V2AssetInstance_Index | V2AssetInstance_Array4 | V2AssetInstance_Array8 | V2AssetInstance_Array16 | V2AssetInstance_Array32 | V2AssetInstance_Blob

export interface V2AssetInstance_Undefined {
    __kind: 'Undefined'
}

export interface V2AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V2AssetInstance_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface V2AssetInstance_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface V2AssetInstance_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface V2AssetInstance_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface V2AssetInstance_Blob {
    __kind: 'Blob'
    value: Uint8Array
}

export type V2Junction = V2Junction_Parachain | V2Junction_AccountId32 | V2Junction_AccountIndex64 | V2Junction_AccountKey20 | V2Junction_PalletInstance | V2Junction_GeneralIndex | V2Junction_GeneralKey | V2Junction_OnlyChild | V2Junction_Plurality

export interface V2Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V2Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V2NetworkId
    id: Uint8Array
}

export interface V2Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V2NetworkId
    index: bigint
}

export interface V2Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V2NetworkId
    key: Uint8Array
}

export interface V2Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V2Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V2Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface V2Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V2Junction_Plurality {
    __kind: 'Plurality'
    id: V2BodyId
    part: V2BodyPart
}

export type V3WildFungibility = V3WildFungibility_Fungible | V3WildFungibility_NonFungible

export interface V3WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V3WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export interface Header {
    parentHash: Uint8Array
    number: number
    stateRoot: Uint8Array
    extrinsicsRoot: Uint8Array
    digest: Digest
}

export type AllowedSlots = AllowedSlots_PrimarySlots | AllowedSlots_PrimaryAndSecondaryPlainSlots | AllowedSlots_PrimaryAndSecondaryVRFSlots

export interface AllowedSlots_PrimarySlots {
    __kind: 'PrimarySlots'
}

export interface AllowedSlots_PrimaryAndSecondaryPlainSlots {
    __kind: 'PrimaryAndSecondaryPlainSlots'
}

export interface AllowedSlots_PrimaryAndSecondaryVRFSlots {
    __kind: 'PrimaryAndSecondaryVRFSlots'
}

export type Equivocation = Equivocation_Prevote | Equivocation_Precommit

export interface Equivocation_Prevote {
    __kind: 'Prevote'
    value: Type_116
}

export interface Equivocation_Precommit {
    __kind: 'Precommit'
    value: Type_122
}

export interface NposCompactSolution24 {
    votes1: [number, number][]
    votes2: [number, [number, number], number][]
    votes3: [number, [number, number][], number][]
    votes4: [number, [number, number][], number][]
    votes5: [number, [number, number][], number][]
    votes6: [number, [number, number][], number][]
    votes7: [number, [number, number][], number][]
    votes8: [number, [number, number][], number][]
    votes9: [number, [number, number][], number][]
    votes10: [number, [number, number][], number][]
    votes11: [number, [number, number][], number][]
    votes12: [number, [number, number][], number][]
    votes13: [number, [number, number][], number][]
    votes14: [number, [number, number][], number][]
    votes15: [number, [number, number][], number][]
    votes16: [number, [number, number][], number][]
    votes17: [number, [number, number][], number][]
    votes18: [number, [number, number][], number][]
    votes19: [number, [number, number][], number][]
    votes20: [number, [number, number][], number][]
    votes21: [number, [number, number][], number][]
    votes22: [number, [number, number][], number][]
    votes23: [number, [number, number][], number][]
    votes24: [number, [number, number][], number][]
}

export interface V5UncheckedSigned {
    payload: Uint8Array
    validatorIndex: number
    signature: Uint8Array
}

export interface V5BackedCandidate {
    candidate: V5CommittedCandidateReceipt
    validityVotes: V5ValidityAttestation[]
    validatorIndices: Uint8Array
}

export interface V5DisputeStatementSet {
    candidateHash: Uint8Array
    session: number
    statements: [V5DisputeStatement, number, Uint8Array][]
}

export interface V5DisputesTimeSlot {
    sessionIndex: number
    candidateHash: Uint8Array
}

export type V5SlashingOffenceKind = V5SlashingOffenceKind_ForInvalid | V5SlashingOffenceKind_AgainstValid

export interface V5SlashingOffenceKind_ForInvalid {
    __kind: 'ForInvalid'
}

export interface V5SlashingOffenceKind_AgainstValid {
    __kind: 'AgainstValid'
}

export type V2Instruction = V2Instruction_WithdrawAsset | V2Instruction_ReserveAssetDeposited | V2Instruction_ReceiveTeleportedAsset | V2Instruction_QueryResponse | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Transact | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_ClearOrigin | V2Instruction_DescendOrigin | V2Instruction_ReportError | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_ExchangeAsset | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_BuyExecution | V2Instruction_RefundSurplus | V2Instruction_SetErrorHandler | V2Instruction_SetAppendix | V2Instruction_ClearError | V2Instruction_ClaimAsset | V2Instruction_Trap | V2Instruction_SubscribeVersion | V2Instruction_UnsubscribeVersion

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface V2Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V2Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
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

export interface V2Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V2Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface V2Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface V2Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface V2Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V2Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V2Instruction[]
}

export interface V2Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V2Instruction[]
}

export interface V2Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V2Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface V2Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V2Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type Type_450 = Type_450_WithdrawAsset | Type_450_ReserveAssetDeposited | Type_450_ReceiveTeleportedAsset | Type_450_QueryResponse | Type_450_TransferAsset | Type_450_TransferReserveAsset | Type_450_Transact | Type_450_HrmpNewChannelOpenRequest | Type_450_HrmpChannelAccepted | Type_450_HrmpChannelClosing | Type_450_ClearOrigin | Type_450_DescendOrigin | Type_450_ReportError | Type_450_DepositAsset | Type_450_DepositReserveAsset | Type_450_ExchangeAsset | Type_450_InitiateReserveWithdraw | Type_450_InitiateTeleport | Type_450_QueryHolding | Type_450_BuyExecution | Type_450_RefundSurplus | Type_450_SetErrorHandler | Type_450_SetAppendix | Type_450_ClearError | Type_450_ClaimAsset | Type_450_Trap | Type_450_SubscribeVersion | Type_450_UnsubscribeVersion

export interface Type_450_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export interface Type_450_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_450_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_450_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_450_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_450_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_450_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_450_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_450_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_450_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_450_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_450_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_450_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_450_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_450_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_450_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_450_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_450_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_450_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_450_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_450_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_450_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_450[]
}

export interface Type_450_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_450[]
}

export interface Type_450_ClearError {
    __kind: 'ClearError'
}

export interface Type_450_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_450_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_450_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_450_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type Type_454 = Type_454_WithdrawAsset | Type_454_ReserveAssetDeposited | Type_454_ReceiveTeleportedAsset | Type_454_QueryResponse | Type_454_TransferAsset | Type_454_TransferReserveAsset | Type_454_Transact | Type_454_HrmpNewChannelOpenRequest | Type_454_HrmpChannelAccepted | Type_454_HrmpChannelClosing | Type_454_ClearOrigin | Type_454_DescendOrigin | Type_454_ReportError | Type_454_DepositAsset | Type_454_DepositReserveAsset | Type_454_ExchangeAsset | Type_454_InitiateReserveWithdraw | Type_454_InitiateTeleport | Type_454_ReportHolding | Type_454_BuyExecution | Type_454_RefundSurplus | Type_454_SetErrorHandler | Type_454_SetAppendix | Type_454_ClearError | Type_454_ClaimAsset | Type_454_Trap | Type_454_SubscribeVersion | Type_454_UnsubscribeVersion | Type_454_BurnAsset | Type_454_ExpectAsset | Type_454_ExpectOrigin | Type_454_ExpectError | Type_454_ExpectTransactStatus | Type_454_QueryPallet | Type_454_ExpectPallet | Type_454_ReportTransactStatus | Type_454_ClearTransactStatus | Type_454_UniversalOrigin | Type_454_ExportMessage | Type_454_LockAsset | Type_454_UnlockAsset | Type_454_NoteUnlockable | Type_454_RequestUnlock | Type_454_SetFeesMode | Type_454_SetTopic | Type_454_ClearTopic | Type_454_AliasOrigin | Type_454_UnpaidExecution

export interface Type_454_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface Type_454_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_454_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_454_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier: (V3MultiLocation | undefined)
}

export interface Type_454_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_454_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_454_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface Type_454_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_454_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_454_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_454_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_454_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_454_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_454_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_454_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_454_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_454_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_454_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_454_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_454_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_454_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_454_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_454[]
}

export interface Type_454_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_454[]
}

export interface Type_454_ClearError {
    __kind: 'ClearError'
}

export interface Type_454_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_454_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_454_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_454_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_454_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_454_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_454_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value: (V3MultiLocation | undefined)
}

export interface Type_454_ExpectError {
    __kind: 'ExpectError'
    value: ([number, V3Error] | undefined)
}

export interface Type_454_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_454_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Uint8Array
    responseInfo: V3QueryResponseInfo
}

export interface Type_454_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    crateMajor: number
    minCrateMinor: number
}

export interface Type_454_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_454_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_454_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_454_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_454_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_454_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_454_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_454_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_454_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_454_SetTopic {
    __kind: 'SetTopic'
    value: Uint8Array
}

export interface Type_454_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_454_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_454_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin: (V3MultiLocation | undefined)
}

export type UmpQueueId = UmpQueueId_Para

export interface UmpQueueId_Para {
    __kind: 'Para'
    value: number
}

export interface DispatchInfo {
    weight: Weight
    class: DispatchClass
    paysFee: Pays
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_TooManyConsumers | DispatchError_Token | DispatchError_Arithmetic | DispatchError_Transactional | DispatchError_Exhausted | DispatchError_Corruption | DispatchError_Unavailable | DispatchError_RootNotAllowed

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: ModuleError
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_TooManyConsumers {
    __kind: 'TooManyConsumers'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_Transactional {
    __kind: 'Transactional'
    value: TransactionalError
}

export interface DispatchError_Exhausted {
    __kind: 'Exhausted'
}

export interface DispatchError_Corruption {
    __kind: 'Corruption'
}

export interface DispatchError_Unavailable {
    __kind: 'Unavailable'
}

export interface DispatchError_RootNotAllowed {
    __kind: 'RootNotAllowed'
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export type Forcing = Forcing_NotForcing | Forcing_ForceNew | Forcing_ForceNone | Forcing_ForceAlways

export interface Forcing_NotForcing {
    __kind: 'NotForcing'
}

export interface Forcing_ForceNew {
    __kind: 'ForceNew'
}

export interface Forcing_ForceNone {
    __kind: 'ForceNone'
}

export interface Forcing_ForceAlways {
    __kind: 'ForceAlways'
}

export interface Exposure {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

export interface Tally {
    ayes: bigint
    nays: bigint
    support: bigint
}

export type VoteRecord = VoteRecord_Aye | VoteRecord_Nay

export interface VoteRecord_Aye {
    __kind: 'Aye'
    value: number
}

export interface VoteRecord_Nay {
    __kind: 'Nay'
    value: number
}

export interface Type_462 {
    bareAyes: number
    ayes: number
    nays: number
}

export interface PostDispatchInfo {
    actualWeight: (Weight | undefined)
    paysFee: Pays
}

export interface DispatchErrorWithPostInfo {
    postInfo: PostDispatchInfo
    error: DispatchError
}

export type Type_471 = Type_471_Ok | Type_471_Err

export interface Type_471_Ok {
    __kind: 'Ok'
}

export interface Type_471_Err {
    __kind: 'Err'
    value: DispatchError
}

export type ElectionCompute = ElectionCompute_OnChain | ElectionCompute_Signed | ElectionCompute_Unsigned | ElectionCompute_Fallback | ElectionCompute_Emergency

export interface ElectionCompute_OnChain {
    __kind: 'OnChain'
}

export interface ElectionCompute_Signed {
    __kind: 'Signed'
}

export interface ElectionCompute_Unsigned {
    __kind: 'Unsigned'
}

export interface ElectionCompute_Fallback {
    __kind: 'Fallback'
}

export interface ElectionCompute_Emergency {
    __kind: 'Emergency'
}

export type Phase = Phase_Off | Phase_Signed | Phase_Unsigned | Phase_Emergency

export interface Phase_Off {
    __kind: 'Off'
}

export interface Phase_Signed {
    __kind: 'Signed'
}

export interface Phase_Unsigned {
    __kind: 'Unsigned'
    value: [boolean, number]
}

export interface Phase_Emergency {
    __kind: 'Emergency'
}

export interface V5CandidateReceipt {
    descriptor: V5CandidateDescriptor
    commitmentsHash: Uint8Array
}

export type DisputeLocation = DisputeLocation_Local | DisputeLocation_Remote

export interface DisputeLocation_Local {
    __kind: 'Local'
}

export interface DisputeLocation_Remote {
    __kind: 'Remote'
}

export type DisputeResult = DisputeResult_Valid | DisputeResult_Invalid

export interface DisputeResult_Valid {
    __kind: 'Valid'
}

export interface DisputeResult_Invalid {
    __kind: 'Invalid'
}

export type ProcessMessageError = ProcessMessageError_BadFormat | ProcessMessageError_Corrupt | ProcessMessageError_Unsupported | ProcessMessageError_Overweight | ProcessMessageError_Yield

export interface ProcessMessageError_BadFormat {
    __kind: 'BadFormat'
}

export interface ProcessMessageError_Corrupt {
    __kind: 'Corrupt'
}

export interface ProcessMessageError_Unsupported {
    __kind: 'Unsupported'
}

export interface ProcessMessageError_Overweight {
    __kind: 'Overweight'
    value: Weight
}

export interface ProcessMessageError_Yield {
    __kind: 'Yield'
}

export type V2NetworkId = V2NetworkId_Any | V2NetworkId_Named | V2NetworkId_Polkadot | V2NetworkId_Kusama

export interface V2NetworkId_Any {
    __kind: 'Any'
}

export interface V2NetworkId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V2NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V2NetworkId_Kusama {
    __kind: 'Kusama'
}

export type V2BodyId = V2BodyId_Unit | V2BodyId_Named | V2BodyId_Index | V2BodyId_Executive | V2BodyId_Technical | V2BodyId_Legislative | V2BodyId_Judicial | V2BodyId_Defense | V2BodyId_Administration | V2BodyId_Treasury

export interface V2BodyId_Unit {
    __kind: 'Unit'
}

export interface V2BodyId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V2BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V2BodyId_Executive {
    __kind: 'Executive'
}

export interface V2BodyId_Technical {
    __kind: 'Technical'
}

export interface V2BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V2BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V2BodyId_Defense {
    __kind: 'Defense'
}

export interface V2BodyId_Administration {
    __kind: 'Administration'
}

export interface V2BodyId_Treasury {
    __kind: 'Treasury'
}

export type V2BodyPart = V2BodyPart_Voice | V2BodyPart_Members | V2BodyPart_Fraction | V2BodyPart_AtLeastProportion | V2BodyPart_MoreThanProportion

export interface V2BodyPart_Voice {
    __kind: 'Voice'
}

export interface V2BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V2BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V2BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface Digest {
    logs: DigestItem[]
}

export interface Type_116 {
    roundNumber: bigint
    identity: Uint8Array
    first: [Prevote, Uint8Array]
    second: [Prevote, Uint8Array]
}

export interface Type_122 {
    roundNumber: bigint
    identity: Uint8Array
    first: [Precommit, Uint8Array]
    second: [Precommit, Uint8Array]
}

export interface V5CommittedCandidateReceipt {
    descriptor: V5CandidateDescriptor
    commitments: V5CandidateCommitments
}

export type V5ValidityAttestation = V5ValidityAttestation_Implicit | V5ValidityAttestation_Explicit

export interface V5ValidityAttestation_Implicit {
    __kind: 'Implicit'
    value: Uint8Array
}

export interface V5ValidityAttestation_Explicit {
    __kind: 'Explicit'
    value: Uint8Array
}

export type V5DisputeStatement = V5DisputeStatement_Valid | V5DisputeStatement_Invalid

export interface V5DisputeStatement_Valid {
    __kind: 'Valid'
    value: V5ValidDisputeStatementKind
}

export interface V5DisputeStatement_Invalid {
    __kind: 'Invalid'
    value: V5InvalidDisputeStatementKind
}

export type V2Response = V2Response_Null | V2Response_Assets | V2Response_ExecutionResult | V2Response_Version

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V2MultiAsset[]
}

export interface V2Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ([number, V2Error] | undefined)
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export type V2MultiAssetFilter = V2MultiAssetFilter_Definite | V2MultiAssetFilter_Wild

export interface V2MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V2MultiAsset[]
}

export interface V2MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V2WildMultiAsset
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export type DispatchClass = DispatchClass_Normal | DispatchClass_Operational | DispatchClass_Mandatory

export interface DispatchClass_Normal {
    __kind: 'Normal'
}

export interface DispatchClass_Operational {
    __kind: 'Operational'
}

export interface DispatchClass_Mandatory {
    __kind: 'Mandatory'
}

export type Pays = Pays_Yes | Pays_No

export interface Pays_Yes {
    __kind: 'Yes'
}

export interface Pays_No {
    __kind: 'No'
}

export interface ModuleError {
    index: number
    error: Uint8Array
}

export type TokenError = TokenError_FundsUnavailable | TokenError_OnlyProvider | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Unsupported | TokenError_CannotCreateHold | TokenError_NotExpendable | TokenError_Blocked

export interface TokenError_FundsUnavailable {
    __kind: 'FundsUnavailable'
}

export interface TokenError_OnlyProvider {
    __kind: 'OnlyProvider'
}

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
}

export interface TokenError_CannotCreateHold {
    __kind: 'CannotCreateHold'
}

export interface TokenError_NotExpendable {
    __kind: 'NotExpendable'
}

export interface TokenError_Blocked {
    __kind: 'Blocked'
}

export type ArithmeticError = ArithmeticError_Underflow | ArithmeticError_Overflow | ArithmeticError_DivisionByZero

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
    __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
    __kind: 'NoLayer'
}

export interface IndividualExposure {
    who: Uint8Array
    value: bigint
}

export interface V5CandidateDescriptor {
    paraId: number
    relayParent: Uint8Array
    collator: Uint8Array
    persistedValidationDataHash: Uint8Array
    povHash: Uint8Array
    erasureRoot: Uint8Array
    signature: Uint8Array
    paraHead: Uint8Array
    validationCodeHash: Uint8Array
}

export type DigestItem = DigestItem_PreRuntime | DigestItem_Consensus | DigestItem_Seal | DigestItem_Other | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Uint8Array
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface Prevote {
    targetHash: Uint8Array
    targetNumber: number
}

export interface Precommit {
    targetHash: Uint8Array
    targetNumber: number
}

export interface V5CandidateCommitments {
    upwardMessages: Uint8Array[]
    horizontalMessages: OutboundHrmpMessage[]
    newValidationCode: (Uint8Array | undefined)
    headData: Uint8Array
    processedDownwardMessages: number
    hrmpWatermark: number
}

export type V5ValidDisputeStatementKind = V5ValidDisputeStatementKind_Explicit | V5ValidDisputeStatementKind_BackingSeconded | V5ValidDisputeStatementKind_BackingValid | V5ValidDisputeStatementKind_ApprovalChecking

export interface V5ValidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export interface V5ValidDisputeStatementKind_BackingSeconded {
    __kind: 'BackingSeconded'
    value: Uint8Array
}

export interface V5ValidDisputeStatementKind_BackingValid {
    __kind: 'BackingValid'
    value: Uint8Array
}

export interface V5ValidDisputeStatementKind_ApprovalChecking {
    __kind: 'ApprovalChecking'
}

export type V5InvalidDisputeStatementKind = V5InvalidDisputeStatementKind_Explicit

export interface V5InvalidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export type V2Error = V2Error_Overflow | V2Error_Unimplemented | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_BadOrigin | V2Error_InvalidLocation | V2Error_AssetNotFound | V2Error_FailedToTransactAsset | V2Error_NotWithdrawable | V2Error_LocationCannotHold | V2Error_ExceedsMaxMessageSize | V2Error_DestinationUnsupported | V2Error_Transport | V2Error_Unroutable | V2Error_UnknownClaim | V2Error_FailedToDecode | V2Error_MaxWeightInvalid | V2Error_NotHoldingFees | V2Error_TooExpensive | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_WeightLimitReached | V2Error_Barrier | V2Error_WeightNotComputable

export interface V2Error_Overflow {
    __kind: 'Overflow'
}

export interface V2Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V2Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
    __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V2Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V2Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V2Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V2Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V2Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V2Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V2Error_Transport {
    __kind: 'Transport'
}

export interface V2Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V2Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V2Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V2Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V2Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V2Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V2Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V2Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface V2Error_Barrier {
    __kind: 'Barrier'
}

export interface V2Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export type V2WildMultiAsset = V2WildMultiAsset_All | V2WildMultiAsset_AllOf

export interface V2WildMultiAsset_All {
    __kind: 'All'
}

export interface V2WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V2AssetId
    fun: V2WildFungibility
}

export interface OutboundHrmpMessage {
    recipient: number
    data: Uint8Array
}

export type V2WildFungibility = V2WildFungibility_Fungible | V2WildFungibility_NonFungible

export interface V2WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V2WildFungibility_NonFungible {
    __kind: 'NonFungible'
}
