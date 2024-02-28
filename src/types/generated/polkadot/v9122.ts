import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface V1ScrapedOnChainVotes {
    session: number
    backingValidatorsPerCandidate: [V1CandidateReceipt, [V0ValidatorIndex, V0ValidityAttestation][]][]
    disputes: V1DisputeStatementSet[]
}

export interface V1DisputeStatementSet {
    candidateHash: CandidateHash
    session: number
    statements: [V1DisputeStatement, V0ValidatorIndex, Bytes][]
}

export type V1DisputeStatement = V1DisputeStatement_Invalid | V1DisputeStatement_Valid

export interface V1DisputeStatement_Invalid {
    __kind: 'Invalid'
    value: V1InvalidDisputeStatementKind
}

export interface V1DisputeStatement_Valid {
    __kind: 'Valid'
    value: V1ValidDisputeStatementKind
}

export type V1ValidDisputeStatementKind = V1ValidDisputeStatementKind_ApprovalChecking | V1ValidDisputeStatementKind_BackingSeconded | V1ValidDisputeStatementKind_BackingValid | V1ValidDisputeStatementKind_Explicit

export interface V1ValidDisputeStatementKind_ApprovalChecking {
    __kind: 'ApprovalChecking'
}

export interface V1ValidDisputeStatementKind_BackingSeconded {
    __kind: 'BackingSeconded'
    value: H256
}

export interface V1ValidDisputeStatementKind_BackingValid {
    __kind: 'BackingValid'
    value: H256
}

export interface V1ValidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export type H256 = Bytes

export type V1InvalidDisputeStatementKind = V1InvalidDisputeStatementKind_Explicit

export interface V1InvalidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export type CandidateHash = Bytes

export type V0ValidityAttestation = V0ValidityAttestation_Explicit | V0ValidityAttestation_Implicit

export interface V0ValidityAttestation_Explicit {
    __kind: 'Explicit'
    value: Bytes
}

export interface V0ValidityAttestation_Implicit {
    __kind: 'Implicit'
    value: Bytes
}

export type V0ValidatorIndex = number

export interface V1CandidateReceipt {
    descriptor: V1CandidateDescriptor
    commitmentsHash: H256
}

export interface V1CandidateDescriptor {
    paraId: Id
    relayParent: H256
    collator: V0Public
    persistedValidationDataHash: H256
    povHash: H256
    erasureRoot: H256
    signature: V0Signature
    paraHead: H256
    validationCodeHash: ValidationCodeHash
}

export type ValidationCodeHash = Bytes

export type V0Signature = Bytes

export type V0Public = Bytes

export type Id = number

export const V1ScrapedOnChainVotes: sts.Type<V1ScrapedOnChainVotes> = sts.struct(() => {
    return  {
        session: sts.number(),
        backingValidatorsPerCandidate: sts.array(() => sts.tuple(() => [V1CandidateReceipt, sts.array(() => sts.tuple(() => [V0ValidatorIndex, V0ValidityAttestation]))])),
        disputes: sts.array(() => V1DisputeStatementSet),
    }
})

export const V1DisputeStatementSet: sts.Type<V1DisputeStatementSet> = sts.struct(() => {
    return  {
        candidateHash: CandidateHash,
        session: sts.number(),
        statements: sts.array(() => sts.tuple(() => [V1DisputeStatement, V0ValidatorIndex, sts.bytes()])),
    }
})

export const V1DisputeStatement: sts.Type<V1DisputeStatement> = sts.closedEnum(() => {
    return  {
        Invalid: V1InvalidDisputeStatementKind,
        Valid: V1ValidDisputeStatementKind,
    }
})

export const V1ValidDisputeStatementKind: sts.Type<V1ValidDisputeStatementKind> = sts.closedEnum(() => {
    return  {
        ApprovalChecking: sts.unit(),
        BackingSeconded: H256,
        BackingValid: H256,
        Explicit: sts.unit(),
    }
})

export const H256 = sts.bytes()

export const V1InvalidDisputeStatementKind: sts.Type<V1InvalidDisputeStatementKind> = sts.closedEnum(() => {
    return  {
        Explicit: sts.unit(),
    }
})

export const CandidateHash = sts.bytes()

export const V0ValidityAttestation: sts.Type<V0ValidityAttestation> = sts.closedEnum(() => {
    return  {
        Explicit: sts.bytes(),
        Implicit: sts.bytes(),
    }
})

export const V0ValidatorIndex = sts.number()

export const V1CandidateReceipt: sts.Type<V1CandidateReceipt> = sts.struct(() => {
    return  {
        descriptor: V1CandidateDescriptor,
        commitmentsHash: H256,
    }
})

export const V1CandidateDescriptor: sts.Type<V1CandidateDescriptor> = sts.struct(() => {
    return  {
        paraId: Id,
        relayParent: H256,
        collator: V0Public,
        persistedValidationDataHash: H256,
        povHash: H256,
        erasureRoot: H256,
        signature: V0Signature,
        paraHead: H256,
        validationCodeHash: ValidationCodeHash,
    }
})

export const ValidationCodeHash = sts.bytes()

export const V0Signature = sts.bytes()

export const V0Public = sts.bytes()

export const Id = sts.number()

export interface EventRecord {
    phase: Phase
    event: Event
    topics: H256[]
}

export type Event = Event_Auctions | Event_Balances | Event_Bounties | Event_Claims | Event_Council | Event_Crowdloan | Event_Democracy | Event_ElectionProviderMultiPhase | Event_Grandpa | Event_Hrmp | Event_Identity | Event_ImOnline | Event_Indices | Event_Multisig | Event_Offences | Event_ParaInclusion | Event_Paras | Event_PhragmenElection | Event_Proxy | Event_Registrar | Event_Scheduler | Event_Session | Event_Slots | Event_Staking | Event_System | Event_TechnicalCommittee | Event_TechnicalMembership | Event_Tips | Event_Treasury | Event_Ump | Event_Utility | Event_Vesting

export interface Event_Auctions {
    __kind: 'Auctions'
    value: AuctionsEvent
}

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_Bounties {
    __kind: 'Bounties'
    value: BountiesEvent
}

export interface Event_Claims {
    __kind: 'Claims'
    value: ClaimsEvent
}

export interface Event_Council {
    __kind: 'Council'
    value: CouncilEvent
}

export interface Event_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanEvent
}

export interface Event_Democracy {
    __kind: 'Democracy'
    value: DemocracyEvent
}

export interface Event_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseEvent
}

export interface Event_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Event_Hrmp {
    __kind: 'Hrmp'
    value: HrmpEvent
}

export interface Event_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface Event_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineEvent
}

export interface Event_Indices {
    __kind: 'Indices'
    value: IndicesEvent
}

export interface Event_Multisig {
    __kind: 'Multisig'
    value: MultisigEvent
}

export interface Event_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Event_ParaInclusion {
    __kind: 'ParaInclusion'
    value: ParaInclusionEvent
}

export interface Event_Paras {
    __kind: 'Paras'
    value: ParasEvent
}

export interface Event_PhragmenElection {
    __kind: 'PhragmenElection'
    value: PhragmenElectionEvent
}

export interface Event_Proxy {
    __kind: 'Proxy'
    value: ProxyEvent
}

export interface Event_Registrar {
    __kind: 'Registrar'
    value: RegistrarEvent
}

export interface Event_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Event_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Event_Slots {
    __kind: 'Slots'
    value: SlotsEvent
}

export interface Event_Staking {
    __kind: 'Staking'
    value: StakingEvent
}

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeEvent
}

export interface Event_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipEvent
}

export interface Event_Tips {
    __kind: 'Tips'
    value: TipsEvent
}

export interface Event_Treasury {
    __kind: 'Treasury'
    value: TreasuryEvent
}

export interface Event_Ump {
    __kind: 'Ump'
    value: UmpEvent
}

export interface Event_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Event_Vesting {
    __kind: 'Vesting'
    value: VestingEvent
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type VestingEvent = VestingEvent_VestingCompleted | VestingEvent_VestingUpdated

/**
 * An \[account\] has become fully vested.
 */
export interface VestingEvent_VestingCompleted {
    __kind: 'VestingCompleted'
    value: AccountId32
}

/**
 * The amount vested has been updated. This could indicate a change in funds available.
 * The balance given is the amount which is left unvested (and thus locked).
 * \[account, unvested\]
 */
export interface VestingEvent_VestingUpdated {
    __kind: 'VestingUpdated'
    value: [AccountId32, bigint]
}

export type AccountId32 = Bytes

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type UtilityEvent = UtilityEvent_BatchCompleted | UtilityEvent_BatchInterrupted | UtilityEvent_ItemCompleted

/**
 * Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 * well as the error. \[index, error\]
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    value: [number, DispatchError]
}

/**
 * A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
    __kind: 'ItemCompleted'
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
export type UmpEvent = UmpEvent_ExecutedUpward | UmpEvent_InvalidFormat | UmpEvent_OverweightEnqueued | UmpEvent_OverweightServiced | UmpEvent_UnsupportedVersion | UmpEvent_UpwardMessagesReceived | UmpEvent_WeightExhausted

/**
 * Upward message executed with the given outcome.
 * \[ id, outcome \]
 */
export interface UmpEvent_ExecutedUpward {
    __kind: 'ExecutedUpward'
    value: [Bytes, V2Outcome]
}

/**
 * Upward message is invalid XCM.
 * \[ id \]
 */
export interface UmpEvent_InvalidFormat {
    __kind: 'InvalidFormat'
    value: Bytes
}

/**
 * The weight budget was exceeded for an individual downward message.
 * 
 * This message can be later dispatched manually using `service_overweight` dispatchable
 * using the assigned `overweight_index`.
 * 
 * \[ para, id, overweight_index, required \]
 */
export interface UmpEvent_OverweightEnqueued {
    __kind: 'OverweightEnqueued'
    value: [Id, Bytes, bigint, bigint]
}

/**
 * Downward message from the overweight queue was executed with the given actual weight
 * used.
 * 
 * \[ overweight_index, used \]
 */
export interface UmpEvent_OverweightServiced {
    __kind: 'OverweightServiced'
    value: [bigint, bigint]
}

/**
 * Upward message is unsupported version of XCM.
 * \[ id \]
 */
export interface UmpEvent_UnsupportedVersion {
    __kind: 'UnsupportedVersion'
    value: Bytes
}

/**
 * Some downward messages have been received and will be processed.
 * \[ para, count, size \]
 */
export interface UmpEvent_UpwardMessagesReceived {
    __kind: 'UpwardMessagesReceived'
    value: [Id, number, number]
}

/**
 * The weight limit for handling downward messages was reached.
 * \[ id, remaining, required \]
 */
export interface UmpEvent_WeightExhausted {
    __kind: 'WeightExhausted'
    value: [Bytes, bigint, bigint]
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
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TreasuryEvent = TreasuryEvent_Awarded | TreasuryEvent_Burnt | TreasuryEvent_Deposit | TreasuryEvent_Proposed | TreasuryEvent_Rejected | TreasuryEvent_Rollover | TreasuryEvent_Spending

/**
 * Some funds have been allocated. \[proposal_index, award, beneficiary\]
 */
export interface TreasuryEvent_Awarded {
    __kind: 'Awarded'
    value: [number, bigint, AccountId32]
}

/**
 * Some of our funds have been burnt. \[burn\]
 */
export interface TreasuryEvent_Burnt {
    __kind: 'Burnt'
    value: bigint
}

/**
 * Some funds have been deposited. \[deposit\]
 */
export interface TreasuryEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

/**
 * New proposal. \[proposal_index\]
 */
export interface TreasuryEvent_Proposed {
    __kind: 'Proposed'
    value: number
}

/**
 * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
 */
export interface TreasuryEvent_Rejected {
    __kind: 'Rejected'
    value: [number, bigint]
}

/**
 * Spending has finished; this is the amount that rolls over until next spend.
 * \[budget_remaining\]
 */
export interface TreasuryEvent_Rollover {
    __kind: 'Rollover'
    value: bigint
}

/**
 * We have ended a spend period and will now allocate funds. \[budget_remaining\]
 */
export interface TreasuryEvent_Spending {
    __kind: 'Spending'
    value: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TipsEvent = TipsEvent_NewTip | TipsEvent_TipClosed | TipsEvent_TipClosing | TipsEvent_TipRetracted | TipsEvent_TipSlashed

/**
 * A new tip suggestion has been opened. \[tip_hash\]
 */
export interface TipsEvent_NewTip {
    __kind: 'NewTip'
    value: H256
}

/**
 * A tip suggestion has been closed. \[tip_hash, who, payout\]
 */
export interface TipsEvent_TipClosed {
    __kind: 'TipClosed'
    value: [H256, AccountId32, bigint]
}

/**
 * A tip suggestion has reached threshold and is closing. \[tip_hash\]
 */
export interface TipsEvent_TipClosing {
    __kind: 'TipClosing'
    value: H256
}

/**
 * A tip suggestion has been retracted. \[tip_hash\]
 */
export interface TipsEvent_TipRetracted {
    __kind: 'TipRetracted'
    value: H256
}

/**
 * A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
 */
export interface TipsEvent_TipSlashed {
    __kind: 'TipSlashed'
    value: [H256, AccountId32, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TechnicalMembershipEvent = TechnicalMembershipEvent_Dummy | TechnicalMembershipEvent_KeyChanged | TechnicalMembershipEvent_MemberAdded | TechnicalMembershipEvent_MemberRemoved | TechnicalMembershipEvent_MembersReset | TechnicalMembershipEvent_MembersSwapped

/**
 * Phantom member, never used.
 */
export interface TechnicalMembershipEvent_Dummy {
    __kind: 'Dummy'
}

/**
 * One of the members' keys changed.
 */
export interface TechnicalMembershipEvent_KeyChanged {
    __kind: 'KeyChanged'
}

/**
 * The given member was added; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberAdded {
    __kind: 'MemberAdded'
}

/**
 * The given member was removed; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberRemoved {
    __kind: 'MemberRemoved'
}

/**
 * The membership was reset; see the transaction for who the new set is.
 */
export interface TechnicalMembershipEvent_MembersReset {
    __kind: 'MembersReset'
}

/**
 * Two members were swapped; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MembersSwapped {
    __kind: 'MembersSwapped'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Closed | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted

/**
 * A motion was approved by the required threshold.
 * \[proposal_hash\]
 */
export interface TechnicalCommitteeEvent_Approved {
    __kind: 'Approved'
    value: H256
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 * \[proposal_hash, yes, no\]
 */
export interface TechnicalCommitteeEvent_Closed {
    __kind: 'Closed'
    value: [H256, number, number]
}

/**
 * A motion was not approved by the required threshold.
 * \[proposal_hash\]
 */
export interface TechnicalCommitteeEvent_Disapproved {
    __kind: 'Disapproved'
    value: H256
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 * \[proposal_hash, result\]
 */
export interface TechnicalCommitteeEvent_Executed {
    __kind: 'Executed'
    value: [H256, Result<null, DispatchError>]
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 * \[proposal_hash, result\]
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [H256, Result<null, DispatchError>]
}

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 * \[account, proposal_index, proposal_hash, threshold\]
 */
export interface TechnicalCommitteeEvent_Proposed {
    __kind: 'Proposed'
    value: [AccountId32, number, H256, number]
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 * \[account, proposal_hash, voted, yes, no\]
 */
export interface TechnicalCommitteeEvent_Voted {
    __kind: 'Voted'
    value: [AccountId32, H256, boolean, number, number]
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

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type StakingEvent = StakingEvent_Bonded | StakingEvent_Chilled | StakingEvent_EraPaid | StakingEvent_Kicked | StakingEvent_OldSlashingReportDiscarded | StakingEvent_PayoutStarted | StakingEvent_Rewarded | StakingEvent_Slashed | StakingEvent_StakersElected | StakingEvent_StakingElectionFailed | StakingEvent_Unbonded | StakingEvent_Withdrawn

/**
 * An account has bonded this amount. \[stash, amount\]
 * 
 * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 * it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    value: [AccountId32, bigint]
}

/**
 * An account has stopped participating as either a validator or nominator.
 * \[stash\]
 */
export interface StakingEvent_Chilled {
    __kind: 'Chilled'
    value: AccountId32
}

/**
 * The era payout has been set; the first balance is the validator-payout; the second is
 * the remainder from the maximum amount of reward.
 * \[era_index, validator_payout, remainder\]
 */
export interface StakingEvent_EraPaid {
    __kind: 'EraPaid'
    value: [number, bigint, bigint]
}

/**
 * A nominator has been kicked from a validator. \[nominator, stash\]
 */
export interface StakingEvent_Kicked {
    __kind: 'Kicked'
    value: [AccountId32, AccountId32]
}

/**
 * An old slashing report from a prior era was discarded because it could
 * not be processed. \[session_index\]
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    value: number
}

/**
 * The stakers' rewards are getting paid. \[era_index, validator_stash\]
 */
export interface StakingEvent_PayoutStarted {
    __kind: 'PayoutStarted'
    value: [number, AccountId32]
}

/**
 * The nominator has been rewarded by this amount. \[stash, amount\]
 */
export interface StakingEvent_Rewarded {
    __kind: 'Rewarded'
    value: [AccountId32, bigint]
}

/**
 * One validator (and its nominators) has been slashed by the given amount.
 * \[validator, amount\]
 */
export interface StakingEvent_Slashed {
    __kind: 'Slashed'
    value: [AccountId32, bigint]
}

/**
 * A new set of stakers was elected.
 */
export interface StakingEvent_StakersElected {
    __kind: 'StakersElected'
}

/**
 * The election failed. No new era is planned.
 */
export interface StakingEvent_StakingElectionFailed {
    __kind: 'StakingElectionFailed'
}

/**
 * An account has unbonded this amount. \[stash, amount\]
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    value: [AccountId32, bigint]
}

/**
 * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 * from the unlocking queue. \[stash, amount\]
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    value: [AccountId32, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SlotsEvent = SlotsEvent_Leased | SlotsEvent_NewLeasePeriod

/**
 * A para has won the right to a continuous set of lease periods as a parachain.
 * First balance is any extra amount reserved on top of the para's existing deposit.
 * Second balance is the total amount reserved.
 * `[parachain_id, leaser, period_begin, period_count, extra_reserved, total_amount]`
 */
export interface SlotsEvent_Leased {
    __kind: 'Leased'
    value: [Id, AccountId32, number, number, bigint, bigint]
}

/**
 * A new `[lease_period]` is beginning.
 */
export interface SlotsEvent_NewLeasePeriod {
    __kind: 'NewLeasePeriod'
    value: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SessionEvent = SessionEvent_NewSession

/**
 * New session has happened. Note that the argument is the \[session_index\], not the
 * block number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    value: number
}

/**
 * Events type.
 */
export type SchedulerEvent = SchedulerEvent_Canceled | SchedulerEvent_Dispatched | SchedulerEvent_Scheduled

/**
 * Canceled some task. \[when, index\]
 */
export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    value: [number, number]
}

/**
 * Dispatched some task. \[task, id, result\]
 */
export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    value: [[number, number], (Bytes | undefined), Result<null, DispatchError>]
}

/**
 * Scheduled some task. \[when, index\]
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    value: [number, number]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type RegistrarEvent = RegistrarEvent_Deregistered | RegistrarEvent_Registered | RegistrarEvent_Reserved

export interface RegistrarEvent_Deregistered {
    __kind: 'Deregistered'
    value: Id
}

export interface RegistrarEvent_Registered {
    __kind: 'Registered'
    value: [Id, AccountId32]
}

export interface RegistrarEvent_Reserved {
    __kind: 'Reserved'
    value: [Id, AccountId32]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ProxyEvent = ProxyEvent_Announced | ProxyEvent_AnonymousCreated | ProxyEvent_ProxyAdded | ProxyEvent_ProxyExecuted

/**
 * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
 */
export interface ProxyEvent_Announced {
    __kind: 'Announced'
    value: [AccountId32, AccountId32, H256]
}

/**
 * Anonymous account has been created by new proxy with given
 * disambiguation index and proxy type. \[anonymous, who, proxy_type,
 * disambiguation_index\]
 */
export interface ProxyEvent_AnonymousCreated {
    __kind: 'AnonymousCreated'
    value: [AccountId32, AccountId32, ProxyType, number]
}

/**
 * A proxy was added. \[delegator, delegatee, proxy_type, delay\]
 */
export interface ProxyEvent_ProxyAdded {
    __kind: 'ProxyAdded'
    value: [AccountId32, AccountId32, ProxyType, number]
}

/**
 * A proxy was executed correctly, with the given \[result\].
 */
export interface ProxyEvent_ProxyExecuted {
    __kind: 'ProxyExecuted'
    value: Result<null, DispatchError>
}

export type ProxyType = ProxyType_Any | ProxyType_Auction | ProxyType_CancelProxy | ProxyType_Governance | ProxyType_IdentityJudgement | ProxyType_NonTransfer | ProxyType_Staking

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_Auction {
    __kind: 'Auction'
}

export interface ProxyType_CancelProxy {
    __kind: 'CancelProxy'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_IdentityJudgement {
    __kind: 'IdentityJudgement'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_Staking {
    __kind: 'Staking'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PhragmenElectionEvent = PhragmenElectionEvent_CandidateSlashed | PhragmenElectionEvent_ElectionError | PhragmenElectionEvent_EmptyTerm | PhragmenElectionEvent_MemberKicked | PhragmenElectionEvent_NewTerm | PhragmenElectionEvent_Renounced | PhragmenElectionEvent_SeatHolderSlashed

/**
 * A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
 * runner-up.
 * 
 * Note that old members and runners-up are also candidates.
 */
export interface PhragmenElectionEvent_CandidateSlashed {
    __kind: 'CandidateSlashed'
    value: [AccountId32, bigint]
}

/**
 * Internal error happened while trying to perform election.
 */
export interface PhragmenElectionEvent_ElectionError {
    __kind: 'ElectionError'
}

/**
 * No (or not enough) candidates existed for this round. This is different from
 * `NewTerm(\[\])`. See the description of `NewTerm`.
 */
export interface PhragmenElectionEvent_EmptyTerm {
    __kind: 'EmptyTerm'
}

/**
 * A \[member\] has been removed. This should always be followed by either `NewTerm` or
 * `EmptyTerm`.
 */
export interface PhragmenElectionEvent_MemberKicked {
    __kind: 'MemberKicked'
    value: AccountId32
}

/**
 * A new term with \[new_members\]. This indicates that enough candidates existed to run
 * the election, not that enough have has been elected. The inner value must be examined
 * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
 * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
 * begin with.
 */
export interface PhragmenElectionEvent_NewTerm {
    __kind: 'NewTerm'
    value: [AccountId32, bigint][]
}

/**
 * Someone has renounced their candidacy.
 */
export interface PhragmenElectionEvent_Renounced {
    __kind: 'Renounced'
    value: AccountId32
}

/**
 * A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
 */
export interface PhragmenElectionEvent_SeatHolderSlashed {
    __kind: 'SeatHolderSlashed'
    value: [AccountId32, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ParasEvent = ParasEvent_ActionQueued | ParasEvent_CodeUpgradeScheduled | ParasEvent_CurrentCodeUpdated | ParasEvent_CurrentHeadUpdated | ParasEvent_NewHeadNoted

/**
 * A para has been queued to execute pending actions. `para_id`
 */
export interface ParasEvent_ActionQueued {
    __kind: 'ActionQueued'
    value: [Id, number]
}

/**
 * A code upgrade has been scheduled for a Para. `para_id`
 */
export interface ParasEvent_CodeUpgradeScheduled {
    __kind: 'CodeUpgradeScheduled'
    value: Id
}

/**
 * Current code has been updated for a Para. `para_id`
 */
export interface ParasEvent_CurrentCodeUpdated {
    __kind: 'CurrentCodeUpdated'
    value: Id
}

/**
 * Current head has been updated for a Para. `para_id`
 */
export interface ParasEvent_CurrentHeadUpdated {
    __kind: 'CurrentHeadUpdated'
    value: Id
}

/**
 * A new head has been noted for a Para. `para_id`
 */
export interface ParasEvent_NewHeadNoted {
    __kind: 'NewHeadNoted'
    value: Id
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ParaInclusionEvent = ParaInclusionEvent_CandidateBacked | ParaInclusionEvent_CandidateIncluded | ParaInclusionEvent_CandidateTimedOut

/**
 * A candidate was backed. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateBacked {
    __kind: 'CandidateBacked'
    value: [V1CandidateReceipt, HeadData, V1CoreIndex, V1GroupIndex]
}

/**
 * A candidate was included. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateIncluded {
    __kind: 'CandidateIncluded'
    value: [V1CandidateReceipt, HeadData, V1CoreIndex, V1GroupIndex]
}

/**
 * A candidate timed out. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateTimedOut {
    __kind: 'CandidateTimedOut'
    value: [V1CandidateReceipt, HeadData, V1CoreIndex]
}

export type V1GroupIndex = number

export type V1CoreIndex = number

export type HeadData = Bytes

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
    value: [Bytes, Bytes]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type MultisigEvent = MultisigEvent_MultisigApproval | MultisigEvent_MultisigCancelled | MultisigEvent_MultisigExecuted | MultisigEvent_NewMultisig

/**
 * A multisig operation has been approved by someone.
 * \[approving, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    value: [AccountId32, Timepoint, AccountId32, Bytes]
}

/**
 * A multisig operation has been cancelled. \[cancelling, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    value: [AccountId32, Timepoint, AccountId32, Bytes]
}

/**
 * A multisig operation has been executed. \[approving, timepoint, multisig, call_hash\]
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    value: [AccountId32, Timepoint, AccountId32, Bytes, Result<null, DispatchError>]
}

/**
 * A new multisig operation has begun. \[approving, multisig, call_hash\]
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    value: [AccountId32, AccountId32, Bytes]
}

export interface Timepoint {
    height: number
    index: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type IndicesEvent = IndicesEvent_IndexAssigned | IndicesEvent_IndexFreed | IndicesEvent_IndexFrozen

/**
 * A account index was assigned. \[index, who\]
 */
export interface IndicesEvent_IndexAssigned {
    __kind: 'IndexAssigned'
    value: [AccountId32, number]
}

/**
 * A account index has been freed up (unassigned). \[index\]
 */
export interface IndicesEvent_IndexFreed {
    __kind: 'IndexFreed'
    value: number
}

/**
 * A account index has been frozen to its current account ID. \[index, who\]
 */
export interface IndicesEvent_IndexFrozen {
    __kind: 'IndexFrozen'
    value: [number, AccountId32]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ImOnlineEvent = ImOnlineEvent_AllGood | ImOnlineEvent_HeartbeatReceived | ImOnlineEvent_SomeOffline

/**
 * At the end of the session, no offence was committed.
 */
export interface ImOnlineEvent_AllGood {
    __kind: 'AllGood'
}

/**
 * A new heartbeat was received from `AuthorityId` \[authority_id\]
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    value: Bytes
}

/**
 * At the end of the session, at least one validator was found to be \[offline\].
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    value: [AccountId32, Exposure][]
}

export interface Exposure {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

export interface IndividualExposure {
    who: AccountId32
    value: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type IdentityEvent = IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_IdentitySet | IdentityEvent_JudgementGiven | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked

/**
 * A name was cleared, and the given balance returned. \[who, deposit\]
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    value: [AccountId32, bigint]
}

/**
 * A name was removed and the given balance slashed. \[who, deposit\]
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    value: [AccountId32, bigint]
}

/**
 * A name was set or reset (which will remove all judgements). \[who\]
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    value: AccountId32
}

/**
 * A judgement was given by a registrar. \[target, registrar_index\]
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    value: [AccountId32, number]
}

/**
 * A judgement was asked from a registrar. \[who, registrar_index\]
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    value: [AccountId32, number]
}

/**
 * A judgement request was retracted. \[who, registrar_index\]
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    value: [AccountId32, number]
}

/**
 * A registrar was added. \[registrar_index\]
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    value: number
}

/**
 * A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityAdded {
    __kind: 'SubIdentityAdded'
    value: [AccountId32, AccountId32, bigint]
}

/**
 * A sub-identity was removed from an identity and the deposit freed.
 * \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityRemoved {
    __kind: 'SubIdentityRemoved'
    value: [AccountId32, AccountId32, bigint]
}

/**
 * A sub-identity was cleared, and the given deposit repatriated from the
 * main identity account to the sub-identity account. \[sub, main, deposit\]
 */
export interface IdentityEvent_SubIdentityRevoked {
    __kind: 'SubIdentityRevoked'
    value: [AccountId32, AccountId32, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type HrmpEvent = HrmpEvent_ChannelClosed | HrmpEvent_OpenChannelAccepted | HrmpEvent_OpenChannelCanceled | HrmpEvent_OpenChannelRequested

/**
 * HRMP channel closed. `[by_parachain, channel_id]`
 */
export interface HrmpEvent_ChannelClosed {
    __kind: 'ChannelClosed'
    value: [Id, HrmpChannelId]
}

/**
 * Open HRMP channel accepted. `[sender, recipient]`
 */
export interface HrmpEvent_OpenChannelAccepted {
    __kind: 'OpenChannelAccepted'
    value: [Id, Id]
}

/**
 * An HRMP channel request sent by the receiver was canceled by either party.
 * `[by_parachain, channel_id]`
 */
export interface HrmpEvent_OpenChannelCanceled {
    __kind: 'OpenChannelCanceled'
    value: [Id, HrmpChannelId]
}

/**
 * Open HRMP channel requested.
 * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
 */
export interface HrmpEvent_OpenChannelRequested {
    __kind: 'OpenChannelRequested'
    value: [Id, Id, number, number]
}

export interface HrmpChannelId {
    sender: Id
    recipient: Id
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 * New authority set has been applied. \[authority_set\]
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    value: [Public, bigint][]
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

export type Public = Bytes

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ElectionProviderMultiPhaseEvent = ElectionProviderMultiPhaseEvent_ElectionFinalized | ElectionProviderMultiPhaseEvent_Rewarded | ElectionProviderMultiPhaseEvent_SignedPhaseStarted | ElectionProviderMultiPhaseEvent_Slashed | ElectionProviderMultiPhaseEvent_SolutionStored | ElectionProviderMultiPhaseEvent_UnsignedPhaseStarted

/**
 * The election has been finalized, with `Some` of the given computation, or else if the
 * election failed, `None`.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFinalized {
    __kind: 'ElectionFinalized'
    value?: (ElectionCompute | undefined)
}

/**
 * An account has been rewarded for their signed submission being finalized.
 */
export interface ElectionProviderMultiPhaseEvent_Rewarded {
    __kind: 'Rewarded'
    value: [AccountId32, bigint]
}

/**
 * The signed phase of the given round has started.
 */
export interface ElectionProviderMultiPhaseEvent_SignedPhaseStarted {
    __kind: 'SignedPhaseStarted'
    value: number
}

/**
 * An account has been slashed for submitting an invalid signed submission.
 */
export interface ElectionProviderMultiPhaseEvent_Slashed {
    __kind: 'Slashed'
    value: [AccountId32, bigint]
}

/**
 * A solution was stored with the given compute.
 * 
 * If the solution is signed, this means that it hasn't yet been processed. If the
 * solution is unsigned, this means that it has also been processed.
 * 
 * The `bool` is `true` when a previous solution was ejected to make room for this one.
 */
export interface ElectionProviderMultiPhaseEvent_SolutionStored {
    __kind: 'SolutionStored'
    value: [ElectionCompute, boolean]
}

/**
 * The unsigned phase of the given round has started.
 */
export interface ElectionProviderMultiPhaseEvent_UnsignedPhaseStarted {
    __kind: 'UnsignedPhaseStarted'
    value: number
}

export type ElectionCompute = ElectionCompute_Emergency | ElectionCompute_Fallback | ElectionCompute_OnChain | ElectionCompute_Signed | ElectionCompute_Unsigned

export interface ElectionCompute_Emergency {
    __kind: 'Emergency'
}

export interface ElectionCompute_Fallback {
    __kind: 'Fallback'
}

export interface ElectionCompute_OnChain {
    __kind: 'OnChain'
}

export interface ElectionCompute_Signed {
    __kind: 'Signed'
}

export interface ElectionCompute_Unsigned {
    __kind: 'Unsigned'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type DemocracyEvent = DemocracyEvent_Blacklisted | DemocracyEvent_Cancelled | DemocracyEvent_Delegated | DemocracyEvent_Executed | DemocracyEvent_ExternalTabled | DemocracyEvent_NotPassed | DemocracyEvent_Passed | DemocracyEvent_PreimageInvalid | DemocracyEvent_PreimageMissing | DemocracyEvent_PreimageNoted | DemocracyEvent_PreimageReaped | DemocracyEvent_PreimageUsed | DemocracyEvent_Proposed | DemocracyEvent_Started | DemocracyEvent_Tabled | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed

/**
 * A proposal \[hash\] has been blacklisted permanently.
 */
export interface DemocracyEvent_Blacklisted {
    __kind: 'Blacklisted'
    value: H256
}

/**
 * A referendum has been cancelled. \[ref_index\]
 */
export interface DemocracyEvent_Cancelled {
    __kind: 'Cancelled'
    value: number
}

/**
 * An account has delegated their vote to another account. \[who, target\]
 */
export interface DemocracyEvent_Delegated {
    __kind: 'Delegated'
    value: [AccountId32, AccountId32]
}

/**
 * A proposal has been enacted. \[ref_index, result\]
 */
export interface DemocracyEvent_Executed {
    __kind: 'Executed'
    value: [number, Result<null, DispatchError>]
}

/**
 * An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
    __kind: 'ExternalTabled'
}

/**
 * A proposal has been rejected by referendum. \[ref_index\]
 */
export interface DemocracyEvent_NotPassed {
    __kind: 'NotPassed'
    value: number
}

/**
 * A proposal has been approved by referendum. \[ref_index\]
 */
export interface DemocracyEvent_Passed {
    __kind: 'Passed'
    value: number
}

/**
 * A proposal could not be executed because its preimage was invalid.
 * \[proposal_hash, ref_index\]
 */
export interface DemocracyEvent_PreimageInvalid {
    __kind: 'PreimageInvalid'
    value: [H256, number]
}

/**
 * A proposal could not be executed because its preimage was missing.
 * \[proposal_hash, ref_index\]
 */
export interface DemocracyEvent_PreimageMissing {
    __kind: 'PreimageMissing'
    value: [H256, number]
}

/**
 * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
 */
export interface DemocracyEvent_PreimageNoted {
    __kind: 'PreimageNoted'
    value: [H256, AccountId32, bigint]
}

/**
 * A registered preimage was removed and the deposit collected by the reaper.
 * \[proposal_hash, provider, deposit, reaper\]
 */
export interface DemocracyEvent_PreimageReaped {
    __kind: 'PreimageReaped'
    value: [H256, AccountId32, bigint, AccountId32]
}

/**
 * A proposal preimage was removed and used (the deposit was returned).
 * \[proposal_hash, provider, deposit\]
 */
export interface DemocracyEvent_PreimageUsed {
    __kind: 'PreimageUsed'
    value: [H256, AccountId32, bigint]
}

/**
 * A motion has been proposed by a public account. \[proposal_index, deposit\]
 */
export interface DemocracyEvent_Proposed {
    __kind: 'Proposed'
    value: [number, bigint]
}

/**
 * A referendum has begun. \[ref_index, threshold\]
 */
export interface DemocracyEvent_Started {
    __kind: 'Started'
    value: [number, VoteThreshold]
}

/**
 * A public proposal has been tabled for referendum vote. \[proposal_index, deposit,
 * depositors\]
 */
export interface DemocracyEvent_Tabled {
    __kind: 'Tabled'
    value: [number, bigint, AccountId32[]]
}

/**
 * An \[account\] has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
    __kind: 'Undelegated'
    value: AccountId32
}

/**
 * An external proposal has been vetoed. \[who, proposal_hash, until\]
 */
export interface DemocracyEvent_Vetoed {
    __kind: 'Vetoed'
    value: [AccountId32, H256, number]
}

export type VoteThreshold = VoteThreshold_SimpleMajority | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SuperMajorityApprove

export interface VoteThreshold_SimpleMajority {
    __kind: 'SimpleMajority'
}

export interface VoteThreshold_SuperMajorityAgainst {
    __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SuperMajorityApprove {
    __kind: 'SuperMajorityApprove'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CrowdloanEvent = CrowdloanEvent_AddedToNewRaise | CrowdloanEvent_AllRefunded | CrowdloanEvent_Contributed | CrowdloanEvent_Created | CrowdloanEvent_Dissolved | CrowdloanEvent_Edited | CrowdloanEvent_HandleBidResult | CrowdloanEvent_MemoUpdated | CrowdloanEvent_PartiallyRefunded | CrowdloanEvent_Withdrew

/**
 * A parachain has been moved to `NewRaise`
 */
export interface CrowdloanEvent_AddedToNewRaise {
    __kind: 'AddedToNewRaise'
    value: Id
}

/**
 * All loans in a fund have been refunded. `[fund_index]`
 */
export interface CrowdloanEvent_AllRefunded {
    __kind: 'AllRefunded'
    value: Id
}

/**
 * Contributed to a crowd sale. `[who, fund_index, amount]`
 */
export interface CrowdloanEvent_Contributed {
    __kind: 'Contributed'
    value: [AccountId32, Id, bigint]
}

/**
 * Create a new crowdloaning campaign. `[fund_index]`
 */
export interface CrowdloanEvent_Created {
    __kind: 'Created'
    value: Id
}

/**
 * Fund is dissolved. `[fund_index]`
 */
export interface CrowdloanEvent_Dissolved {
    __kind: 'Dissolved'
    value: Id
}

/**
 * The configuration to a crowdloan has been edited. `[fund_index]`
 */
export interface CrowdloanEvent_Edited {
    __kind: 'Edited'
    value: Id
}

/**
 * The result of trying to submit a new bid to the Slots pallet.
 */
export interface CrowdloanEvent_HandleBidResult {
    __kind: 'HandleBidResult'
    value: [Id, Result<null, DispatchError>]
}

/**
 * A memo has been updated. `[who, fund_index, memo]`
 */
export interface CrowdloanEvent_MemoUpdated {
    __kind: 'MemoUpdated'
    value: [AccountId32, Id, Bytes]
}

/**
 * The loans in a fund have been partially dissolved, i.e. there are some left
 * over child keys that still need to be killed. `[fund_index]`
 */
export interface CrowdloanEvent_PartiallyRefunded {
    __kind: 'PartiallyRefunded'
    value: Id
}

/**
 * Withdrew full balance of a contributor. `[who, fund_index, amount]`
 */
export interface CrowdloanEvent_Withdrew {
    __kind: 'Withdrew'
    value: [AccountId32, Id, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CouncilEvent = CouncilEvent_Approved | CouncilEvent_Closed | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Proposed | CouncilEvent_Voted

/**
 * A motion was approved by the required threshold.
 * \[proposal_hash\]
 */
export interface CouncilEvent_Approved {
    __kind: 'Approved'
    value: H256
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 * \[proposal_hash, yes, no\]
 */
export interface CouncilEvent_Closed {
    __kind: 'Closed'
    value: [H256, number, number]
}

/**
 * A motion was not approved by the required threshold.
 * \[proposal_hash\]
 */
export interface CouncilEvent_Disapproved {
    __kind: 'Disapproved'
    value: H256
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 * \[proposal_hash, result\]
 */
export interface CouncilEvent_Executed {
    __kind: 'Executed'
    value: [H256, Result<null, DispatchError>]
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 * \[proposal_hash, result\]
 */
export interface CouncilEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [H256, Result<null, DispatchError>]
}

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 * \[account, proposal_index, proposal_hash, threshold\]
 */
export interface CouncilEvent_Proposed {
    __kind: 'Proposed'
    value: [AccountId32, number, H256, number]
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 * \[account, proposal_hash, voted, yes, no\]
 */
export interface CouncilEvent_Voted {
    __kind: 'Voted'
    value: [AccountId32, H256, boolean, number, number]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ClaimsEvent = ClaimsEvent_Claimed

/**
 * Someone claimed some DOTs. `[who, ethereum_address, amount]`
 */
export interface ClaimsEvent_Claimed {
    __kind: 'Claimed'
    value: [AccountId32, EthereumAddress, bigint]
}

export type EthereumAddress = Bytes

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type BountiesEvent = BountiesEvent_BountyAwarded | BountiesEvent_BountyBecameActive | BountiesEvent_BountyCanceled | BountiesEvent_BountyClaimed | BountiesEvent_BountyExtended | BountiesEvent_BountyProposed | BountiesEvent_BountyRejected

/**
 * A bounty is awarded to a beneficiary. \[index, beneficiary\]
 */
export interface BountiesEvent_BountyAwarded {
    __kind: 'BountyAwarded'
    value: [number, AccountId32]
}

/**
 * A bounty proposal is funded and became active. \[index\]
 */
export interface BountiesEvent_BountyBecameActive {
    __kind: 'BountyBecameActive'
    value: number
}

/**
 * A bounty is cancelled. \[index\]
 */
export interface BountiesEvent_BountyCanceled {
    __kind: 'BountyCanceled'
    value: number
}

/**
 * A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
 */
export interface BountiesEvent_BountyClaimed {
    __kind: 'BountyClaimed'
    value: [number, bigint, AccountId32]
}

/**
 * A bounty expiry is extended. \[index\]
 */
export interface BountiesEvent_BountyExtended {
    __kind: 'BountyExtended'
    value: number
}

/**
 * New bounty proposal. \[index\]
 */
export interface BountiesEvent_BountyProposed {
    __kind: 'BountyProposed'
    value: number
}

/**
 * A bounty proposal was rejected; funds were slashed. \[index, bond\]
 */
export interface BountiesEvent_BountyRejected {
    __kind: 'BountyRejected'
    value: [number, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type BalancesEvent = BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_DustLost | BalancesEvent_Endowed | BalancesEvent_ReserveRepatriated | BalancesEvent_Reserved | BalancesEvent_Slashed | BalancesEvent_Transfer | BalancesEvent_Unreserved | BalancesEvent_Withdraw

/**
 * A balance was set by root. \[who, free, reserved\]
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    value: [AccountId32, bigint, bigint]
}

/**
 * Some amount was deposited into the account (e.g. for transaction fees). \[who,
 * deposit\]
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    value: [AccountId32, bigint]
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss. \[account, balance\]
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    value: [AccountId32, bigint]
}

/**
 * An account was created with some free balance. \[account, free_balance\]
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    value: [AccountId32, bigint]
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 * \[from, to, balance, destination_status\]
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    value: [AccountId32, AccountId32, bigint, BalanceStatus]
}

/**
 * Some balance was reserved (moved from free to reserved). \[who, value\]
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    value: [AccountId32, bigint]
}

/**
 * Some amount was removed from the account (e.g. for misbehavior). \[who,
 * amount_slashed\]
 */
export interface BalancesEvent_Slashed {
    __kind: 'Slashed'
    value: [AccountId32, bigint]
}

/**
 * Transfer succeeded. \[from, to, value\]
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    value: [AccountId32, AccountId32, bigint]
}

/**
 * Some balance was unreserved (moved from reserved to free). \[who, value\]
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    value: [AccountId32, bigint]
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
 */
export interface BalancesEvent_Withdraw {
    __kind: 'Withdraw'
    value: [AccountId32, bigint]
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type AuctionsEvent = AuctionsEvent_AuctionClosed | AuctionsEvent_AuctionStarted | AuctionsEvent_BidAccepted | AuctionsEvent_ReserveConfiscated | AuctionsEvent_Reserved | AuctionsEvent_Unreserved | AuctionsEvent_WinningOffset

/**
 * An auction ended. All funds become unreserved. `[auction_index]`
 */
export interface AuctionsEvent_AuctionClosed {
    __kind: 'AuctionClosed'
    value: number
}

/**
 * An auction started. Provides its index and the block number where it will begin to
 * close and the first lease period of the quadruplet that is auctioned.
 * `[auction_index, lease_period, ending]`
 */
export interface AuctionsEvent_AuctionStarted {
    __kind: 'AuctionStarted'
    value: [number, number, number]
}

/**
 * A new bid has been accepted as the current winner.
 * `[who, para_id, amount, first_slot, last_slot]`
 */
export interface AuctionsEvent_BidAccepted {
    __kind: 'BidAccepted'
    value: [AccountId32, Id, bigint, number, number]
}

/**
 * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
 * but no parachain slot has been leased.
 * `[parachain_id, leaser, amount]`
 */
export interface AuctionsEvent_ReserveConfiscated {
    __kind: 'ReserveConfiscated'
    value: [Id, AccountId32, bigint]
}

/**
 * Funds were reserved for a winning bid. First balance is the extra amount reserved.
 * Second is the total. `[bidder, extra_reserved, total_amount]`
 */
export interface AuctionsEvent_Reserved {
    __kind: 'Reserved'
    value: [AccountId32, bigint, bigint]
}

/**
 * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
 */
export interface AuctionsEvent_Unreserved {
    __kind: 'Unreserved'
    value: [AccountId32, bigint]
}

/**
 * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
 * `[auction_index, block_number]`
 */
export interface AuctionsEvent_WinningOffset {
    __kind: 'WinningOffset'
    value: [number, number]
}

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

export const EventRecord: sts.Type<EventRecord> = sts.struct(() => {
    return  {
        phase: Phase,
        event: Event,
        topics: sts.array(() => H256),
    }
})

export const Event: sts.Type<Event> = sts.closedEnum(() => {
    return  {
        Auctions: AuctionsEvent,
        Balances: BalancesEvent,
        Bounties: BountiesEvent,
        Claims: ClaimsEvent,
        Council: CouncilEvent,
        Crowdloan: CrowdloanEvent,
        Democracy: DemocracyEvent,
        ElectionProviderMultiPhase: ElectionProviderMultiPhaseEvent,
        Grandpa: GrandpaEvent,
        Hrmp: HrmpEvent,
        Identity: IdentityEvent,
        ImOnline: ImOnlineEvent,
        Indices: IndicesEvent,
        Multisig: MultisigEvent,
        Offences: OffencesEvent,
        ParaInclusion: ParaInclusionEvent,
        Paras: ParasEvent,
        PhragmenElection: PhragmenElectionEvent,
        Proxy: ProxyEvent,
        Registrar: RegistrarEvent,
        Scheduler: SchedulerEvent,
        Session: SessionEvent,
        Slots: SlotsEvent,
        Staking: StakingEvent,
        System: SystemEvent,
        TechnicalCommittee: TechnicalCommitteeEvent,
        TechnicalMembership: TechnicalMembershipEvent,
        Tips: TipsEvent,
        Treasury: TreasuryEvent,
        Ump: UmpEvent,
        Utility: UtilityEvent,
        Vesting: VestingEvent,
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const VestingEvent: sts.Type<VestingEvent> = sts.closedEnum(() => {
    return  {
        VestingCompleted: AccountId32,
        VestingUpdated: sts.tuple(() => [AccountId32, sts.bigint()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const UtilityEvent: sts.Type<UtilityEvent> = sts.closedEnum(() => {
    return  {
        BatchCompleted: sts.unit(),
        BatchInterrupted: sts.tuple(() => [sts.number(), DispatchError]),
        ItemCompleted: sts.unit(),
    }
})

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

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const UmpEvent: sts.Type<UmpEvent> = sts.closedEnum(() => {
    return  {
        ExecutedUpward: sts.tuple(() => [sts.bytes(), V2Outcome]),
        InvalidFormat: sts.bytes(),
        OverweightEnqueued: sts.tuple(() => [Id, sts.bytes(), sts.bigint(), sts.bigint()]),
        OverweightServiced: sts.tuple(() => [sts.bigint(), sts.bigint()]),
        UnsupportedVersion: sts.bytes(),
        UpwardMessagesReceived: sts.tuple(() => [Id, sts.number(), sts.number()]),
        WeightExhausted: sts.tuple(() => [sts.bytes(), sts.bigint(), sts.bigint()]),
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

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const TreasuryEvent: sts.Type<TreasuryEvent> = sts.closedEnum(() => {
    return  {
        Awarded: sts.tuple(() => [sts.number(), sts.bigint(), AccountId32]),
        Burnt: sts.bigint(),
        Deposit: sts.bigint(),
        Proposed: sts.number(),
        Rejected: sts.tuple(() => [sts.number(), sts.bigint()]),
        Rollover: sts.bigint(),
        Spending: sts.bigint(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const TipsEvent: sts.Type<TipsEvent> = sts.closedEnum(() => {
    return  {
        NewTip: H256,
        TipClosed: sts.tuple(() => [H256, AccountId32, sts.bigint()]),
        TipClosing: H256,
        TipRetracted: H256,
        TipSlashed: sts.tuple(() => [H256, AccountId32, sts.bigint()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const TechnicalMembershipEvent: sts.Type<TechnicalMembershipEvent> = sts.closedEnum(() => {
    return  {
        Dummy: sts.unit(),
        KeyChanged: sts.unit(),
        MemberAdded: sts.unit(),
        MemberRemoved: sts.unit(),
        MembersReset: sts.unit(),
        MembersSwapped: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const TechnicalCommitteeEvent: sts.Type<TechnicalCommitteeEvent> = sts.closedEnum(() => {
    return  {
        Approved: H256,
        Closed: sts.tuple(() => [H256, sts.number(), sts.number()]),
        Disapproved: H256,
        Executed: sts.tuple(() => [H256, sts.result(() => sts.unit(), () => DispatchError)]),
        MemberExecuted: sts.tuple(() => [H256, sts.result(() => sts.unit(), () => DispatchError)]),
        Proposed: sts.tuple(() => [AccountId32, sts.number(), H256, sts.number()]),
        Voted: sts.tuple(() => [AccountId32, H256, sts.boolean(), sts.number(), sts.number()]),
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

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const StakingEvent: sts.Type<StakingEvent> = sts.closedEnum(() => {
    return  {
        Bonded: sts.tuple(() => [AccountId32, sts.bigint()]),
        Chilled: AccountId32,
        EraPaid: sts.tuple(() => [sts.number(), sts.bigint(), sts.bigint()]),
        Kicked: sts.tuple(() => [AccountId32, AccountId32]),
        OldSlashingReportDiscarded: sts.number(),
        PayoutStarted: sts.tuple(() => [sts.number(), AccountId32]),
        Rewarded: sts.tuple(() => [AccountId32, sts.bigint()]),
        Slashed: sts.tuple(() => [AccountId32, sts.bigint()]),
        StakersElected: sts.unit(),
        StakingElectionFailed: sts.unit(),
        Unbonded: sts.tuple(() => [AccountId32, sts.bigint()]),
        Withdrawn: sts.tuple(() => [AccountId32, sts.bigint()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const SlotsEvent: sts.Type<SlotsEvent> = sts.closedEnum(() => {
    return  {
        Leased: sts.tuple(() => [Id, AccountId32, sts.number(), sts.number(), sts.bigint(), sts.bigint()]),
        NewLeasePeriod: sts.number(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const SessionEvent: sts.Type<SessionEvent> = sts.closedEnum(() => {
    return  {
        NewSession: sts.number(),
    }
})

/**
 * Events type.
 */
export const SchedulerEvent: sts.Type<SchedulerEvent> = sts.closedEnum(() => {
    return  {
        Canceled: sts.tuple(() => [sts.number(), sts.number()]),
        Dispatched: sts.tuple(() => [sts.tuple(() => [sts.number(), sts.number()]), sts.option(() => sts.bytes()), sts.result(() => sts.unit(), () => DispatchError)]),
        Scheduled: sts.tuple(() => [sts.number(), sts.number()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const RegistrarEvent: sts.Type<RegistrarEvent> = sts.closedEnum(() => {
    return  {
        Deregistered: Id,
        Registered: sts.tuple(() => [Id, AccountId32]),
        Reserved: sts.tuple(() => [Id, AccountId32]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const ProxyEvent: sts.Type<ProxyEvent> = sts.closedEnum(() => {
    return  {
        Announced: sts.tuple(() => [AccountId32, AccountId32, H256]),
        AnonymousCreated: sts.tuple(() => [AccountId32, AccountId32, ProxyType, sts.number()]),
        ProxyAdded: sts.tuple(() => [AccountId32, AccountId32, ProxyType, sts.number()]),
        ProxyExecuted: sts.result(() => sts.unit(), () => DispatchError),
    }
})

export const ProxyType: sts.Type<ProxyType> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Auction: sts.unit(),
        CancelProxy: sts.unit(),
        Governance: sts.unit(),
        IdentityJudgement: sts.unit(),
        NonTransfer: sts.unit(),
        Staking: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const PhragmenElectionEvent: sts.Type<PhragmenElectionEvent> = sts.closedEnum(() => {
    return  {
        CandidateSlashed: sts.tuple(() => [AccountId32, sts.bigint()]),
        ElectionError: sts.unit(),
        EmptyTerm: sts.unit(),
        MemberKicked: AccountId32,
        NewTerm: sts.array(() => sts.tuple(() => [AccountId32, sts.bigint()])),
        Renounced: AccountId32,
        SeatHolderSlashed: sts.tuple(() => [AccountId32, sts.bigint()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const ParasEvent: sts.Type<ParasEvent> = sts.closedEnum(() => {
    return  {
        ActionQueued: sts.tuple(() => [Id, sts.number()]),
        CodeUpgradeScheduled: Id,
        CurrentCodeUpdated: Id,
        CurrentHeadUpdated: Id,
        NewHeadNoted: Id,
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const ParaInclusionEvent: sts.Type<ParaInclusionEvent> = sts.closedEnum(() => {
    return  {
        CandidateBacked: sts.tuple(() => [V1CandidateReceipt, HeadData, V1CoreIndex, V1GroupIndex]),
        CandidateIncluded: sts.tuple(() => [V1CandidateReceipt, HeadData, V1CoreIndex, V1GroupIndex]),
        CandidateTimedOut: sts.tuple(() => [V1CandidateReceipt, HeadData, V1CoreIndex]),
    }
})

export const V1GroupIndex = sts.number()

export const V1CoreIndex = sts.number()

export const HeadData = sts.bytes()

/**
 * Events type.
 */
export const OffencesEvent: sts.Type<OffencesEvent> = sts.closedEnum(() => {
    return  {
        Offence: sts.tuple(() => [sts.bytes(), sts.bytes()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const MultisigEvent: sts.Type<MultisigEvent> = sts.closedEnum(() => {
    return  {
        MultisigApproval: sts.tuple(() => [AccountId32, Timepoint, AccountId32, sts.bytes()]),
        MultisigCancelled: sts.tuple(() => [AccountId32, Timepoint, AccountId32, sts.bytes()]),
        MultisigExecuted: sts.tuple(() => [AccountId32, Timepoint, AccountId32, sts.bytes(), sts.result(() => sts.unit(), () => DispatchError)]),
        NewMultisig: sts.tuple(() => [AccountId32, AccountId32, sts.bytes()]),
    }
})

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return  {
        height: sts.number(),
        index: sts.number(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const IndicesEvent: sts.Type<IndicesEvent> = sts.closedEnum(() => {
    return  {
        IndexAssigned: sts.tuple(() => [AccountId32, sts.number()]),
        IndexFreed: sts.number(),
        IndexFrozen: sts.tuple(() => [sts.number(), AccountId32]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const ImOnlineEvent: sts.Type<ImOnlineEvent> = sts.closedEnum(() => {
    return  {
        AllGood: sts.unit(),
        HeartbeatReceived: sts.bytes(),
        SomeOffline: sts.array(() => sts.tuple(() => [AccountId32, Exposure])),
    }
})

export const Exposure: sts.Type<Exposure> = sts.struct(() => {
    return  {
        total: sts.bigint(),
        own: sts.bigint(),
        others: sts.array(() => IndividualExposure),
    }
})

export const IndividualExposure: sts.Type<IndividualExposure> = sts.struct(() => {
    return  {
        who: AccountId32,
        value: sts.bigint(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const IdentityEvent: sts.Type<IdentityEvent> = sts.closedEnum(() => {
    return  {
        IdentityCleared: sts.tuple(() => [AccountId32, sts.bigint()]),
        IdentityKilled: sts.tuple(() => [AccountId32, sts.bigint()]),
        IdentitySet: AccountId32,
        JudgementGiven: sts.tuple(() => [AccountId32, sts.number()]),
        JudgementRequested: sts.tuple(() => [AccountId32, sts.number()]),
        JudgementUnrequested: sts.tuple(() => [AccountId32, sts.number()]),
        RegistrarAdded: sts.number(),
        SubIdentityAdded: sts.tuple(() => [AccountId32, AccountId32, sts.bigint()]),
        SubIdentityRemoved: sts.tuple(() => [AccountId32, AccountId32, sts.bigint()]),
        SubIdentityRevoked: sts.tuple(() => [AccountId32, AccountId32, sts.bigint()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const HrmpEvent: sts.Type<HrmpEvent> = sts.closedEnum(() => {
    return  {
        ChannelClosed: sts.tuple(() => [Id, HrmpChannelId]),
        OpenChannelAccepted: sts.tuple(() => [Id, Id]),
        OpenChannelCanceled: sts.tuple(() => [Id, HrmpChannelId]),
        OpenChannelRequested: sts.tuple(() => [Id, Id, sts.number(), sts.number()]),
    }
})

export const HrmpChannelId: sts.Type<HrmpChannelId> = sts.struct(() => {
    return  {
        sender: Id,
        recipient: Id,
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const GrandpaEvent: sts.Type<GrandpaEvent> = sts.closedEnum(() => {
    return  {
        NewAuthorities: sts.array(() => sts.tuple(() => [Public, sts.bigint()])),
        Paused: sts.unit(),
        Resumed: sts.unit(),
    }
})

export const Public = sts.bytes()

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const ElectionProviderMultiPhaseEvent: sts.Type<ElectionProviderMultiPhaseEvent> = sts.closedEnum(() => {
    return  {
        ElectionFinalized: sts.option(() => ElectionCompute),
        Rewarded: sts.tuple(() => [AccountId32, sts.bigint()]),
        SignedPhaseStarted: sts.number(),
        Slashed: sts.tuple(() => [AccountId32, sts.bigint()]),
        SolutionStored: sts.tuple(() => [ElectionCompute, sts.boolean()]),
        UnsignedPhaseStarted: sts.number(),
    }
})

export const ElectionCompute: sts.Type<ElectionCompute> = sts.closedEnum(() => {
    return  {
        Emergency: sts.unit(),
        Fallback: sts.unit(),
        OnChain: sts.unit(),
        Signed: sts.unit(),
        Unsigned: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const DemocracyEvent: sts.Type<DemocracyEvent> = sts.closedEnum(() => {
    return  {
        Blacklisted: H256,
        Cancelled: sts.number(),
        Delegated: sts.tuple(() => [AccountId32, AccountId32]),
        Executed: sts.tuple(() => [sts.number(), sts.result(() => sts.unit(), () => DispatchError)]),
        ExternalTabled: sts.unit(),
        NotPassed: sts.number(),
        Passed: sts.number(),
        PreimageInvalid: sts.tuple(() => [H256, sts.number()]),
        PreimageMissing: sts.tuple(() => [H256, sts.number()]),
        PreimageNoted: sts.tuple(() => [H256, AccountId32, sts.bigint()]),
        PreimageReaped: sts.tuple(() => [H256, AccountId32, sts.bigint(), AccountId32]),
        PreimageUsed: sts.tuple(() => [H256, AccountId32, sts.bigint()]),
        Proposed: sts.tuple(() => [sts.number(), sts.bigint()]),
        Started: sts.tuple(() => [sts.number(), VoteThreshold]),
        Tabled: sts.tuple(() => [sts.number(), sts.bigint(), sts.array(() => AccountId32)]),
        Undelegated: AccountId32,
        Vetoed: sts.tuple(() => [AccountId32, H256, sts.number()]),
    }
})

export const VoteThreshold: sts.Type<VoteThreshold> = sts.closedEnum(() => {
    return  {
        SimpleMajority: sts.unit(),
        SuperMajorityAgainst: sts.unit(),
        SuperMajorityApprove: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const CrowdloanEvent: sts.Type<CrowdloanEvent> = sts.closedEnum(() => {
    return  {
        AddedToNewRaise: Id,
        AllRefunded: Id,
        Contributed: sts.tuple(() => [AccountId32, Id, sts.bigint()]),
        Created: Id,
        Dissolved: Id,
        Edited: Id,
        HandleBidResult: sts.tuple(() => [Id, sts.result(() => sts.unit(), () => DispatchError)]),
        MemoUpdated: sts.tuple(() => [AccountId32, Id, sts.bytes()]),
        PartiallyRefunded: Id,
        Withdrew: sts.tuple(() => [AccountId32, Id, sts.bigint()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const CouncilEvent: sts.Type<CouncilEvent> = sts.closedEnum(() => {
    return  {
        Approved: H256,
        Closed: sts.tuple(() => [H256, sts.number(), sts.number()]),
        Disapproved: H256,
        Executed: sts.tuple(() => [H256, sts.result(() => sts.unit(), () => DispatchError)]),
        MemberExecuted: sts.tuple(() => [H256, sts.result(() => sts.unit(), () => DispatchError)]),
        Proposed: sts.tuple(() => [AccountId32, sts.number(), H256, sts.number()]),
        Voted: sts.tuple(() => [AccountId32, H256, sts.boolean(), sts.number(), sts.number()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const ClaimsEvent: sts.Type<ClaimsEvent> = sts.closedEnum(() => {
    return  {
        Claimed: sts.tuple(() => [AccountId32, EthereumAddress, sts.bigint()]),
    }
})

export const EthereumAddress = sts.bytes()

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const BountiesEvent: sts.Type<BountiesEvent> = sts.closedEnum(() => {
    return  {
        BountyAwarded: sts.tuple(() => [sts.number(), AccountId32]),
        BountyBecameActive: sts.number(),
        BountyCanceled: sts.number(),
        BountyClaimed: sts.tuple(() => [sts.number(), sts.bigint(), AccountId32]),
        BountyExtended: sts.number(),
        BountyProposed: sts.number(),
        BountyRejected: sts.tuple(() => [sts.number(), sts.bigint()]),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const BalancesEvent: sts.Type<BalancesEvent> = sts.closedEnum(() => {
    return  {
        BalanceSet: sts.tuple(() => [AccountId32, sts.bigint(), sts.bigint()]),
        Deposit: sts.tuple(() => [AccountId32, sts.bigint()]),
        DustLost: sts.tuple(() => [AccountId32, sts.bigint()]),
        Endowed: sts.tuple(() => [AccountId32, sts.bigint()]),
        ReserveRepatriated: sts.tuple(() => [AccountId32, AccountId32, sts.bigint(), BalanceStatus]),
        Reserved: sts.tuple(() => [AccountId32, sts.bigint()]),
        Slashed: sts.tuple(() => [AccountId32, sts.bigint()]),
        Transfer: sts.tuple(() => [AccountId32, AccountId32, sts.bigint()]),
        Unreserved: sts.tuple(() => [AccountId32, sts.bigint()]),
        Withdraw: sts.tuple(() => [AccountId32, sts.bigint()]),
    }
})

export const BalanceStatus: sts.Type<BalanceStatus> = sts.closedEnum(() => {
    return  {
        Free: sts.unit(),
        Reserved: sts.unit(),
    }
})

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export const AuctionsEvent: sts.Type<AuctionsEvent> = sts.closedEnum(() => {
    return  {
        AuctionClosed: sts.number(),
        AuctionStarted: sts.tuple(() => [sts.number(), sts.number(), sts.number()]),
        BidAccepted: sts.tuple(() => [AccountId32, Id, sts.bigint(), sts.number(), sts.number()]),
        ReserveConfiscated: sts.tuple(() => [Id, AccountId32, sts.bigint()]),
        Reserved: sts.tuple(() => [AccountId32, sts.bigint(), sts.bigint()]),
        Unreserved: sts.tuple(() => [AccountId32, sts.bigint()]),
        WinningOffset: sts.tuple(() => [sts.number(), sts.number()]),
    }
})

export const Phase: sts.Type<Phase> = sts.closedEnum(() => {
    return  {
        ApplyExtrinsic: sts.number(),
        Finalization: sts.unit(),
        Initialization: sts.unit(),
    }
})

export const AccountId32 = sts.bytes()
