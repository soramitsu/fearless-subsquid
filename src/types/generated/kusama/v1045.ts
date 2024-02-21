import {sts, Result, Option, Bytes, BitSequence} from './support'

export type BlockNumber = number

export const BlockNumber = sts.number()

export type AccountId = Bytes

export interface SlashingSpans {
    spanIndex: SpanIndex
    lastStart: EraIndex
    lastNonzeroSlash: EraIndex
    prior: EraIndex[]
}

export type EraIndex = number

export type SpanIndex = number

export const SlashingSpans: sts.Type<SlashingSpans> = sts.struct(() => {
    return  {
        spanIndex: SpanIndex,
        lastStart: EraIndex,
        lastNonzeroSlash: EraIndex,
        prior: sts.array(() => EraIndex),
    }
})

export const EraIndex = sts.number()

export const SpanIndex = sts.number()

export const AccountId = sts.bytes()

export interface EventRecord {
    phase: Phase
    event: Type_266
    topics: Hash[]
}

export type Hash = Bytes

export type Type_266 = Type_266_Balances | Type_266_Claims | Type_266_Council | Type_266_Democracy | Type_266_ElectionsPhragmen | Type_266_Grandpa | Type_266_Identity | Type_266_ImOnline | Type_266_Indices | Type_266_Offences | Type_266_Recovery | Type_266_Registrar | Type_266_Session | Type_266_Slots | Type_266_Society | Type_266_Staking | Type_266_System | Type_266_TechnicalCommittee | Type_266_TechnicalMembership | Type_266_Treasury | Type_266_Utility

export interface Type_266_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Type_266_Claims {
    __kind: 'Claims'
    value: ClaimsEvent
}

export interface Type_266_Council {
    __kind: 'Council'
    value: CouncilEvent
}

export interface Type_266_Democracy {
    __kind: 'Democracy'
    value: DemocracyEvent
}

export interface Type_266_ElectionsPhragmen {
    __kind: 'ElectionsPhragmen'
    value: ElectionsPhragmenEvent
}

export interface Type_266_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Type_266_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface Type_266_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineEvent
}

export interface Type_266_Indices {
    __kind: 'Indices'
    value: IndicesEvent
}

export interface Type_266_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Type_266_Recovery {
    __kind: 'Recovery'
    value: RecoveryEvent
}

export interface Type_266_Registrar {
    __kind: 'Registrar'
    value: RegistrarEvent
}

export interface Type_266_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Type_266_Slots {
    __kind: 'Slots'
    value: SlotsEvent
}

export interface Type_266_Society {
    __kind: 'Society'
    value: SocietyEvent
}

export interface Type_266_Staking {
    __kind: 'Staking'
    value: StakingEvent
}

export interface Type_266_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Type_266_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeEvent
}

export interface Type_266_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipEvent
}

export interface Type_266_Treasury {
    __kind: 'Treasury'
    value: TreasuryEvent
}

export interface Type_266_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export type UtilityEvent = UtilityEvent_BatchCompleted | UtilityEvent_BatchInterrupted | UtilityEvent_MultisigApproval | UtilityEvent_MultisigCancelled | UtilityEvent_MultisigExecuted | UtilityEvent_NewMultisig

/**
 *  Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 *  well as the error.
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    value: [number, DispatchError]
}

/**
 *  A multisig operation has been approved by someone. First param is the account that is
 *  approving, third is the multisig account.
 */
export interface UtilityEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    value: [AccountId, Timepoint, AccountId]
}

/**
 *  A multisig operation has been cancelled. First param is the account that is
 *  cancelling, third is the multisig account.
 */
export interface UtilityEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    value: [AccountId, Timepoint, AccountId]
}

/**
 *  A multisig operation has been executed. First param is the account that is
 *  approving, third is the multisig account.
 */
export interface UtilityEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    value: [AccountId, Timepoint, AccountId, DispatchResult]
}

/**
 *  A new multisig operation has begun. First param is the account that is approving,
 *  second is the multisig account.
 */
export interface UtilityEvent_NewMultisig {
    __kind: 'NewMultisig'
    value: [AccountId, AccountId]
}

export type DispatchResult = Result<null, DispatchError>

export interface Timepoint {
    height: BlockNumber
    index: number
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
    value: DispatchErrorModule
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

export type TokenError = TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_Frozen | TokenError_NoFunds | TokenError_Overflow | TokenError_Underflow | TokenError_UnknownAsset | TokenError_WouldDie

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

export interface TokenError_Overflow {
    __kind: 'Overflow'
}

export interface TokenError_Underflow {
    __kind: 'Underflow'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
}

export interface DispatchErrorModule {
    index: number
    error: number
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

export type TreasuryEvent = TreasuryEvent_Awarded | TreasuryEvent_Burnt | TreasuryEvent_Deposit | TreasuryEvent_NewTip | TreasuryEvent_Proposed | TreasuryEvent_Rejected | TreasuryEvent_Rollover | TreasuryEvent_Spending | TreasuryEvent_TipClosed | TreasuryEvent_TipClosing | TreasuryEvent_TipRetracted

/**
 *  Some funds have been allocated.
 */
export interface TreasuryEvent_Awarded {
    __kind: 'Awarded'
    value: [ProposalIndex, Balance, AccountId]
}

/**
 *  Some of our funds have been burnt.
 */
export interface TreasuryEvent_Burnt {
    __kind: 'Burnt'
    value: Balance
}

/**
 *  Some funds have been deposited.
 */
export interface TreasuryEvent_Deposit {
    __kind: 'Deposit'
    value: Balance
}

/**
 *  A new tip suggestion has been opened.
 */
export interface TreasuryEvent_NewTip {
    __kind: 'NewTip'
    value: Hash
}

/**
 *  New proposal.
 */
export interface TreasuryEvent_Proposed {
    __kind: 'Proposed'
    value: ProposalIndex
}

/**
 *  A proposal was rejected; funds were slashed.
 */
export interface TreasuryEvent_Rejected {
    __kind: 'Rejected'
    value: [ProposalIndex, Balance]
}

/**
 *  Spending has finished; this is the amount that rolls over until next spend.
 */
export interface TreasuryEvent_Rollover {
    __kind: 'Rollover'
    value: Balance
}

/**
 *  We have ended a spend period and will now allocate funds.
 */
export interface TreasuryEvent_Spending {
    __kind: 'Spending'
    value: Balance
}

/**
 *  A tip suggestion has been closed.
 */
export interface TreasuryEvent_TipClosed {
    __kind: 'TipClosed'
    value: [Hash, AccountId, Balance]
}

/**
 *  A tip suggestion has reached threshold and is closing.
 */
export interface TreasuryEvent_TipClosing {
    __kind: 'TipClosing'
    value: Hash
}

/**
 *  A tip suggestion has been retracted.
 */
export interface TreasuryEvent_TipRetracted {
    __kind: 'TipRetracted'
    value: Hash
}

export type Balance = bigint

export type ProposalIndex = number

export type TechnicalMembershipEvent = TechnicalMembershipEvent_Dummy | TechnicalMembershipEvent_KeyChanged | TechnicalMembershipEvent_MemberAdded | TechnicalMembershipEvent_MemberRemoved | TechnicalMembershipEvent_MembersReset | TechnicalMembershipEvent_MembersSwapped

/**
 *  Phantom member, never used.
 */
export interface TechnicalMembershipEvent_Dummy {
    __kind: 'Dummy'
}

/**
 *  One of the members' keys changed.
 */
export interface TechnicalMembershipEvent_KeyChanged {
    __kind: 'KeyChanged'
}

/**
 *  The given member was added; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberAdded {
    __kind: 'MemberAdded'
}

/**
 *  The given member was removed; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberRemoved {
    __kind: 'MemberRemoved'
}

/**
 *  The membership was reset; see the transaction for who the new set is.
 */
export interface TechnicalMembershipEvent_MembersReset {
    __kind: 'MembersReset'
}

/**
 *  Two members were swapped; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MembersSwapped {
    __kind: 'MembersSwapped'
}

export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted

/**
 *  A motion was approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Approved {
    __kind: 'Approved'
    value: Hash
}

/**
 *  A motion was not approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Disapproved {
    __kind: 'Disapproved'
    value: Hash
}

/**
 *  A motion was executed; `bool` is true if returned without error.
 */
export interface TechnicalCommitteeEvent_Executed {
    __kind: 'Executed'
    value: [Hash, boolean]
}

/**
 *  A single member did some action; `bool` is true if returned without error.
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [Hash, boolean]
}

/**
 *  A motion (given hash) has been proposed (by given account) with a threshold (given
 *  `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Proposed {
    __kind: 'Proposed'
    value: [AccountId, ProposalIndex, Hash, MemberCount]
}

/**
 *  A motion (given hash) has been voted on by given account, leaving
 *  a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Voted {
    __kind: 'Voted'
    value: [AccountId, Hash, boolean, MemberCount, MemberCount]
}

export type MemberCount = number

export type SystemEvent = SystemEvent_CodeUpdated | SystemEvent_ExtrinsicFailed | SystemEvent_ExtrinsicSuccess

/**
 *  `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 *  An extrinsic failed.
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    value: [DispatchError, DispatchInfo]
}

/**
 *  An extrinsic completed successfully.
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    value: DispatchInfo
}

export interface DispatchInfo {
    weight: Weight
    class: DispatchClass
    paysFee: boolean
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

export type Weight = number

export type StakingEvent = StakingEvent_OldSlashingReportDiscarded | StakingEvent_Reward | StakingEvent_Slash

/**
 *  An old slashing report from a prior era was discarded because it could
 *  not be processed.
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    value: SessionIndex
}

/**
 *  All validators have been rewarded by the first balance; the second is the remainder
 *  from the maximum amount of reward.
 */
export interface StakingEvent_Reward {
    __kind: 'Reward'
    value: [Balance, Balance]
}

/**
 *  One validator (and its nominators) has been slashed by the given amount.
 */
export interface StakingEvent_Slash {
    __kind: 'Slash'
    value: [AccountId, Balance]
}

export type SessionIndex = number

export type SocietyEvent = SocietyEvent_AutoUnbid | SocietyEvent_Bid | SocietyEvent_CandidateSuspended | SocietyEvent_Challenged | SocietyEvent_DefenderVote | SocietyEvent_Founded | SocietyEvent_Inducted | SocietyEvent_MemberSuspended | SocietyEvent_NewMaxMembers | SocietyEvent_SuspendedMemberJudgement | SocietyEvent_Unbid | SocietyEvent_Unfounded | SocietyEvent_Unvouch | SocietyEvent_Vote | SocietyEvent_Vouch

/**
 *  A candidate was dropped (due to an excess of bids in the system).
 */
export interface SocietyEvent_AutoUnbid {
    __kind: 'AutoUnbid'
    value: AccountId
}

/**
 *  A membership bid just happened. The given account is the candidate's ID and their offer
 *  is the second.
 */
export interface SocietyEvent_Bid {
    __kind: 'Bid'
    value: [AccountId, Balance]
}

/**
 *  A candidate has been suspended
 */
export interface SocietyEvent_CandidateSuspended {
    __kind: 'CandidateSuspended'
    value: AccountId
}

/**
 *  A member has been challenged
 */
export interface SocietyEvent_Challenged {
    __kind: 'Challenged'
    value: AccountId
}

/**
 *  A vote has been placed for a defending member (voter, vote)
 */
export interface SocietyEvent_DefenderVote {
    __kind: 'DefenderVote'
    value: [AccountId, boolean]
}

/**
 *  The society is founded by the given identity.
 */
export interface SocietyEvent_Founded {
    __kind: 'Founded'
    value: AccountId
}

/**
 *  A group of candidates have been inducted. The batch's primary is the first value, the
 *  batch in full is the second.
 */
export interface SocietyEvent_Inducted {
    __kind: 'Inducted'
    value: [AccountId, AccountId[]]
}

/**
 *  A member has been suspended
 */
export interface SocietyEvent_MemberSuspended {
    __kind: 'MemberSuspended'
    value: AccountId
}

/**
 *  A new max member count has been set
 */
export interface SocietyEvent_NewMaxMembers {
    __kind: 'NewMaxMembers'
    value: number
}

/**
 *  A suspended member has been judged
 */
export interface SocietyEvent_SuspendedMemberJudgement {
    __kind: 'SuspendedMemberJudgement'
    value: [AccountId, boolean]
}

/**
 *  A candidate was dropped (by their request).
 */
export interface SocietyEvent_Unbid {
    __kind: 'Unbid'
    value: AccountId
}

/**
 *  Society is unfounded.
 */
export interface SocietyEvent_Unfounded {
    __kind: 'Unfounded'
    value: AccountId
}

/**
 *  A candidate was dropped (by request of who vouched for them).
 */
export interface SocietyEvent_Unvouch {
    __kind: 'Unvouch'
    value: AccountId
}

/**
 *  A vote has been placed (candidate, voter, vote)
 */
export interface SocietyEvent_Vote {
    __kind: 'Vote'
    value: [AccountId, AccountId, boolean]
}

/**
 *  A membership bid just happened by vouching. The given account is the candidate's ID and
 *  their offer is the second. The vouching party is the third.
 */
export interface SocietyEvent_Vouch {
    __kind: 'Vouch'
    value: [AccountId, Balance, AccountId]
}

export type SlotsEvent = SlotsEvent_AuctionClosed | SlotsEvent_AuctionStarted | SlotsEvent_NewLeasePeriod | SlotsEvent_Reserved | SlotsEvent_Unreserved | SlotsEvent_WonDeploy | SlotsEvent_WonRenewal

/**
 *  An auction ended. All funds become unreserved.
 */
export interface SlotsEvent_AuctionClosed {
    __kind: 'AuctionClosed'
    value: AuctionIndex
}

/**
 *  An auction started. Provides its index and the block number where it will begin to
 *  close and the first lease period of the quadruplet that is auctioned.
 */
export interface SlotsEvent_AuctionStarted {
    __kind: 'AuctionStarted'
    value: [AuctionIndex, LeasePeriod, BlockNumber]
}

/**
 *  A new lease period is beginning.
 */
export interface SlotsEvent_NewLeasePeriod {
    __kind: 'NewLeasePeriod'
    value: LeasePeriod
}

/**
 *  Funds were reserved for a winning bid. First balance is the extra amount reserved.
 *  Second is the total.
 */
export interface SlotsEvent_Reserved {
    __kind: 'Reserved'
    value: [AccountId, Balance, Balance]
}

/**
 *  Funds were unreserved since bidder is no longer active.
 */
export interface SlotsEvent_Unreserved {
    __kind: 'Unreserved'
    value: [AccountId, Balance]
}

/**
 *  Someone won the right to deploy a parachain. Balance amount is deducted for deposit.
 */
export interface SlotsEvent_WonDeploy {
    __kind: 'WonDeploy'
    value: [NewBidder, SlotRange, ParaId, Balance]
}

/**
 *  An existing parachain won the right to continue.
 *  First balance is the extra amount reseved. Second is the total amount reserved.
 */
export interface SlotsEvent_WonRenewal {
    __kind: 'WonRenewal'
    value: [ParaId, SlotRange, Balance, Balance]
}

export type ParaId = number

export type SlotRange = SlotRange_OneOne | SlotRange_OneThree | SlotRange_OneTwo | SlotRange_ThreeThree | SlotRange_TwoThree | SlotRange_TwoTwo | SlotRange_ZeroOne | SlotRange_ZeroThree | SlotRange_ZeroTwo | SlotRange_ZeroZero

export interface SlotRange_OneOne {
    __kind: 'OneOne'
}

export interface SlotRange_OneThree {
    __kind: 'OneThree'
}

export interface SlotRange_OneTwo {
    __kind: 'OneTwo'
}

export interface SlotRange_ThreeThree {
    __kind: 'ThreeThree'
}

export interface SlotRange_TwoThree {
    __kind: 'TwoThree'
}

export interface SlotRange_TwoTwo {
    __kind: 'TwoTwo'
}

export interface SlotRange_ZeroOne {
    __kind: 'ZeroOne'
}

export interface SlotRange_ZeroThree {
    __kind: 'ZeroThree'
}

export interface SlotRange_ZeroTwo {
    __kind: 'ZeroTwo'
}

export interface SlotRange_ZeroZero {
    __kind: 'ZeroZero'
}

export interface NewBidder {
    who: AccountId
    sub: SubId
}

export type SubId = number

export type LeasePeriod = number

export type AuctionIndex = number

export type SessionEvent = SessionEvent_NewSession

/**
 *  New session has happened. Note that the argument is the session index, not the block
 *  number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    value: SessionIndex
}

export type RegistrarEvent = RegistrarEvent_ParathreadDeregistered | RegistrarEvent_ParathreadRegistered

/**
 *  The parathread of the supplied ID was de-registered.
 */
export interface RegistrarEvent_ParathreadDeregistered {
    __kind: 'ParathreadDeregistered'
    value: ParaId
}

/**
 *  A parathread was registered; its new ID is supplied.
 */
export interface RegistrarEvent_ParathreadRegistered {
    __kind: 'ParathreadRegistered'
    value: ParaId
}

export type RecoveryEvent = RecoveryEvent_AccountRecovered | RecoveryEvent_RecoveryClosed | RecoveryEvent_RecoveryCreated | RecoveryEvent_RecoveryInitiated | RecoveryEvent_RecoveryRemoved | RecoveryEvent_RecoveryVouched

/**
 *  Account_1 has been successfully recovered by account_2
 */
export interface RecoveryEvent_AccountRecovered {
    __kind: 'AccountRecovered'
    value: [AccountId, AccountId]
}

/**
 *  A recovery process for account_1 by account_2 has been closed
 */
export interface RecoveryEvent_RecoveryClosed {
    __kind: 'RecoveryClosed'
    value: [AccountId, AccountId]
}

/**
 *  A recovery process has been set up for an account
 */
export interface RecoveryEvent_RecoveryCreated {
    __kind: 'RecoveryCreated'
    value: AccountId
}

/**
 *  A recovery process has been initiated for account_1 by account_2
 */
export interface RecoveryEvent_RecoveryInitiated {
    __kind: 'RecoveryInitiated'
    value: [AccountId, AccountId]
}

/**
 *  A recovery process has been removed for an account
 */
export interface RecoveryEvent_RecoveryRemoved {
    __kind: 'RecoveryRemoved'
    value: AccountId
}

/**
 *  A recovery process for account_1 by account_2 has been vouched for by account_3
 */
export interface RecoveryEvent_RecoveryVouched {
    __kind: 'RecoveryVouched'
    value: [AccountId, AccountId, AccountId]
}

export type OffencesEvent = OffencesEvent_Offence

/**
 *  There is an offence reported of the given `kind` happened at the `session_index` and
 *  (kind-specific) time slot. This event is not deposited for duplicate slashes.
 */
export interface OffencesEvent_Offence {
    __kind: 'Offence'
    value: [Kind, OpaqueTimeSlot]
}

export type OpaqueTimeSlot = Bytes

export type Kind = Bytes

export type IndicesEvent = IndicesEvent_NewAccountIndex

/**
 *  A new account index was assigned.
 * 
 *  This event is not triggered when an existing index is reassigned
 *  to another `AccountId`.
 */
export interface IndicesEvent_NewAccountIndex {
    __kind: 'NewAccountIndex'
    value: [AccountId, AccountIndex]
}

export type AccountIndex = number

export type ImOnlineEvent = ImOnlineEvent_AllGood | ImOnlineEvent_HeartbeatReceived | ImOnlineEvent_SomeOffline

/**
 *  At the end of the session, no offence was committed.
 */
export interface ImOnlineEvent_AllGood {
    __kind: 'AllGood'
}

/**
 *  A new heartbeat was received from `AuthorityId`
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    value: AuthorityId
}

/**
 *  At the end of the session, at least once validator was found to be offline.
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    value: IdentificationTuple[]
}

export type IdentificationTuple = [ValidatorId, FullIdentification]

export interface FullIdentification {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

export interface IndividualExposure {
    who: AccountId
    value: bigint
}

export type ValidatorId = Bytes

export type AuthorityId = Bytes

export type IdentityEvent = IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_IdentitySet | IdentityEvent_JudgementGiven | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_RegistrarAdded

/**
 *  A name was cleared, and the given balance returned.
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    value: [AccountId, Balance]
}

/**
 *  A name was removed and the given balance slashed.
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    value: [AccountId, Balance]
}

/**
 *  A name was set or reset (which will remove all judgements).
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    value: AccountId
}

/**
 *  A judgement was given by a registrar.
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    value: [AccountId, RegistrarIndex]
}

/**
 *  A judgement was asked from a registrar.
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    value: [AccountId, RegistrarIndex]
}

/**
 *  A judgement request was retracted.
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    value: [AccountId, RegistrarIndex]
}

/**
 *  A registrar was added.
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    value: RegistrarIndex
}

export type RegistrarIndex = number

export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 *  New authority set has been applied.
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    value: NextAuthority[]
}

/**
 *  Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 *  Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
}

export type NextAuthority = [AuthorityId, AuthorityWeight]

export type AuthorityWeight = bigint

export type ElectionsPhragmenEvent = ElectionsPhragmenEvent_EmptyTerm | ElectionsPhragmenEvent_MemberKicked | ElectionsPhragmenEvent_MemberRenounced | ElectionsPhragmenEvent_NewTerm | ElectionsPhragmenEvent_VoterReported

/**
 *  No (or not enough) candidates existed for this round.
 */
export interface ElectionsPhragmenEvent_EmptyTerm {
    __kind: 'EmptyTerm'
}

/**
 *  A member has been removed. This should always be followed by either `NewTerm` ot
 *  `EmptyTerm`.
 */
export interface ElectionsPhragmenEvent_MemberKicked {
    __kind: 'MemberKicked'
    value: AccountId
}

/**
 *  A member has renounced their candidacy.
 */
export interface ElectionsPhragmenEvent_MemberRenounced {
    __kind: 'MemberRenounced'
    value: AccountId
}

/**
 *  A new term with new members. This indicates that enough candidates existed, not that
 *  enough have has been elected. The inner value must be examined for this purpose.
 */
export interface ElectionsPhragmenEvent_NewTerm {
    __kind: 'NewTerm'
    value: [AccountId, Balance][]
}

/**
 *  A voter (first element) was reported (byt the second element) with the the report being
 *  successful or not (third element).
 */
export interface ElectionsPhragmenEvent_VoterReported {
    __kind: 'VoterReported'
    value: [AccountId, AccountId, boolean]
}

export type DemocracyEvent = DemocracyEvent_Cancelled | DemocracyEvent_Delegated | DemocracyEvent_Executed | DemocracyEvent_ExternalTabled | DemocracyEvent_NotPassed | DemocracyEvent_Passed | DemocracyEvent_PreimageInvalid | DemocracyEvent_PreimageMissing | DemocracyEvent_PreimageNoted | DemocracyEvent_PreimageReaped | DemocracyEvent_PreimageUsed | DemocracyEvent_Proposed | DemocracyEvent_Started | DemocracyEvent_Tabled | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed

/**
 *  A referendum has been cancelled.
 */
export interface DemocracyEvent_Cancelled {
    __kind: 'Cancelled'
    value: ReferendumIndex
}

/**
 *  An account has delegated their vote to another account.
 */
export interface DemocracyEvent_Delegated {
    __kind: 'Delegated'
    value: [AccountId, AccountId]
}

/**
 *  A proposal has been enacted.
 */
export interface DemocracyEvent_Executed {
    __kind: 'Executed'
    value: [ReferendumIndex, boolean]
}

/**
 *  An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
    __kind: 'ExternalTabled'
}

/**
 *  A proposal has been rejected by referendum.
 */
export interface DemocracyEvent_NotPassed {
    __kind: 'NotPassed'
    value: ReferendumIndex
}

/**
 *  A proposal has been approved by referendum.
 */
export interface DemocracyEvent_Passed {
    __kind: 'Passed'
    value: ReferendumIndex
}

/**
 *  A proposal could not be executed because its preimage was invalid.
 */
export interface DemocracyEvent_PreimageInvalid {
    __kind: 'PreimageInvalid'
    value: [Hash, ReferendumIndex]
}

/**
 *  A proposal could not be executed because its preimage was missing.
 */
export interface DemocracyEvent_PreimageMissing {
    __kind: 'PreimageMissing'
    value: [Hash, ReferendumIndex]
}

/**
 *  A proposal's preimage was noted, and the deposit taken.
 */
export interface DemocracyEvent_PreimageNoted {
    __kind: 'PreimageNoted'
    value: [Hash, AccountId, Balance]
}

/**
 *  A registered preimage was removed and the deposit collected by the reaper (last item).
 */
export interface DemocracyEvent_PreimageReaped {
    __kind: 'PreimageReaped'
    value: [Hash, AccountId, Balance, AccountId]
}

/**
 *  A proposal preimage was removed and used (the deposit was returned).
 */
export interface DemocracyEvent_PreimageUsed {
    __kind: 'PreimageUsed'
    value: [Hash, AccountId, Balance]
}

/**
 *  A motion has been proposed by a public account.
 */
export interface DemocracyEvent_Proposed {
    __kind: 'Proposed'
    value: [PropIndex, Balance]
}

/**
 *  A referendum has begun.
 */
export interface DemocracyEvent_Started {
    __kind: 'Started'
    value: [ReferendumIndex, VoteThreshold]
}

/**
 *  A public proposal has been tabled for referendum vote.
 */
export interface DemocracyEvent_Tabled {
    __kind: 'Tabled'
    value: [PropIndex, Balance, AccountId[]]
}

/**
 *  An account has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
    __kind: 'Undelegated'
    value: AccountId
}

/**
 *  An external proposal has been vetoed.
 */
export interface DemocracyEvent_Vetoed {
    __kind: 'Vetoed'
    value: [AccountId, Hash, BlockNumber]
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

export type PropIndex = number

export type ReferendumIndex = number

export type CouncilEvent = CouncilEvent_Approved | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Proposed | CouncilEvent_Voted

/**
 *  A motion was approved by the required threshold.
 */
export interface CouncilEvent_Approved {
    __kind: 'Approved'
    value: Hash
}

/**
 *  A motion was not approved by the required threshold.
 */
export interface CouncilEvent_Disapproved {
    __kind: 'Disapproved'
    value: Hash
}

/**
 *  A motion was executed; `bool` is true if returned without error.
 */
export interface CouncilEvent_Executed {
    __kind: 'Executed'
    value: [Hash, boolean]
}

/**
 *  A single member did some action; `bool` is true if returned without error.
 */
export interface CouncilEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    value: [Hash, boolean]
}

/**
 *  A motion (given hash) has been proposed (by given account) with a threshold (given
 *  `MemberCount`).
 */
export interface CouncilEvent_Proposed {
    __kind: 'Proposed'
    value: [AccountId, ProposalIndex, Hash, MemberCount]
}

/**
 *  A motion (given hash) has been voted on by given account, leaving
 *  a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface CouncilEvent_Voted {
    __kind: 'Voted'
    value: [AccountId, Hash, boolean, MemberCount, MemberCount]
}

export type ClaimsEvent = ClaimsEvent_Claimed

/**
 *  Someone claimed some DOTs.
 */
export interface ClaimsEvent_Claimed {
    __kind: 'Claimed'
    value: [AccountId, EthereumAddress, Balance]
}

export type EthereumAddress = Bytes

export type BalancesEvent = BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_NewAccount | BalancesEvent_ReapedAccount | BalancesEvent_Transfer

/**
 *  A balance was set by root (who, free, reserved).
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    value: [AccountId, Balance, Balance]
}

/**
 *  Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    value: [AccountId, Balance]
}

/**
 *  A new account was created.
 */
export interface BalancesEvent_NewAccount {
    __kind: 'NewAccount'
    value: [AccountId, Balance]
}

/**
 *  An account was reaped.
 */
export interface BalancesEvent_ReapedAccount {
    __kind: 'ReapedAccount'
    value: [AccountId, Balance]
}

/**
 *  Transfer succeeded (from, to, value, fees).
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    value: [AccountId, AccountId, Balance, Balance]
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
        event: Type_266,
        topics: sts.array(() => Hash),
    }
})

export const Hash = sts.bytes()

export const Type_266: sts.Type<Type_266> = sts.closedEnum(() => {
    return  {
        Balances: BalancesEvent,
        Claims: ClaimsEvent,
        Council: CouncilEvent,
        Democracy: DemocracyEvent,
        ElectionsPhragmen: ElectionsPhragmenEvent,
        Grandpa: GrandpaEvent,
        Identity: IdentityEvent,
        ImOnline: ImOnlineEvent,
        Indices: IndicesEvent,
        Offences: OffencesEvent,
        Recovery: RecoveryEvent,
        Registrar: RegistrarEvent,
        Session: SessionEvent,
        Slots: SlotsEvent,
        Society: SocietyEvent,
        Staking: StakingEvent,
        System: SystemEvent,
        TechnicalCommittee: TechnicalCommitteeEvent,
        TechnicalMembership: TechnicalMembershipEvent,
        Treasury: TreasuryEvent,
        Utility: UtilityEvent,
    }
})

export const UtilityEvent: sts.Type<UtilityEvent> = sts.closedEnum(() => {
    return  {
        BatchCompleted: sts.unit(),
        BatchInterrupted: sts.tuple(() => [sts.number(), DispatchError]),
        MultisigApproval: sts.tuple(() => [AccountId, Timepoint, AccountId]),
        MultisigCancelled: sts.tuple(() => [AccountId, Timepoint, AccountId]),
        MultisigExecuted: sts.tuple(() => [AccountId, Timepoint, AccountId, DispatchResult]),
        NewMultisig: sts.tuple(() => [AccountId, AccountId]),
    }
})

export const DispatchResult = sts.result(() => sts.unit(), () => DispatchError)

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return  {
        height: BlockNumber,
        index: sts.number(),
    }
})

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Module: DispatchErrorModule,
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
        Overflow: sts.unit(),
        Underflow: sts.unit(),
        UnknownAsset: sts.unit(),
        WouldDie: sts.unit(),
    }
})

export const DispatchErrorModule: sts.Type<DispatchErrorModule> = sts.struct(() => {
    return  {
        index: sts.number(),
        error: sts.number(),
    }
})

export const ArithmeticError: sts.Type<ArithmeticError> = sts.closedEnum(() => {
    return  {
        DivisionByZero: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
    }
})

export const TreasuryEvent: sts.Type<TreasuryEvent> = sts.closedEnum(() => {
    return  {
        Awarded: sts.tuple(() => [ProposalIndex, Balance, AccountId]),
        Burnt: Balance,
        Deposit: Balance,
        NewTip: Hash,
        Proposed: ProposalIndex,
        Rejected: sts.tuple(() => [ProposalIndex, Balance]),
        Rollover: Balance,
        Spending: Balance,
        TipClosed: sts.tuple(() => [Hash, AccountId, Balance]),
        TipClosing: Hash,
        TipRetracted: Hash,
    }
})

export const Balance = sts.bigint()

export const ProposalIndex = sts.number()

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

export const TechnicalCommitteeEvent: sts.Type<TechnicalCommitteeEvent> = sts.closedEnum(() => {
    return  {
        Approved: Hash,
        Disapproved: Hash,
        Executed: sts.tuple(() => [Hash, sts.boolean()]),
        MemberExecuted: sts.tuple(() => [Hash, sts.boolean()]),
        Proposed: sts.tuple(() => [AccountId, ProposalIndex, Hash, MemberCount]),
        Voted: sts.tuple(() => [AccountId, Hash, sts.boolean(), MemberCount, MemberCount]),
    }
})

export const MemberCount = sts.number()

export const SystemEvent: sts.Type<SystemEvent> = sts.closedEnum(() => {
    return  {
        CodeUpdated: sts.unit(),
        ExtrinsicFailed: sts.tuple(() => [DispatchError, DispatchInfo]),
        ExtrinsicSuccess: DispatchInfo,
    }
})

export const DispatchInfo: sts.Type<DispatchInfo> = sts.struct(() => {
    return  {
        weight: Weight,
        class: DispatchClass,
        paysFee: sts.boolean(),
    }
})

export const DispatchClass: sts.Type<DispatchClass> = sts.closedEnum(() => {
    return  {
        Mandatory: sts.unit(),
        Normal: sts.unit(),
        Operational: sts.unit(),
    }
})

export const Weight = sts.number()

export const StakingEvent: sts.Type<StakingEvent> = sts.closedEnum(() => {
    return  {
        OldSlashingReportDiscarded: SessionIndex,
        Reward: sts.tuple(() => [Balance, Balance]),
        Slash: sts.tuple(() => [AccountId, Balance]),
    }
})

export const SessionIndex = sts.number()

export const SocietyEvent: sts.Type<SocietyEvent> = sts.closedEnum(() => {
    return  {
        AutoUnbid: AccountId,
        Bid: sts.tuple(() => [AccountId, Balance]),
        CandidateSuspended: AccountId,
        Challenged: AccountId,
        DefenderVote: sts.tuple(() => [AccountId, sts.boolean()]),
        Founded: AccountId,
        Inducted: sts.tuple(() => [AccountId, sts.array(() => AccountId)]),
        MemberSuspended: AccountId,
        NewMaxMembers: sts.number(),
        SuspendedMemberJudgement: sts.tuple(() => [AccountId, sts.boolean()]),
        Unbid: AccountId,
        Unfounded: AccountId,
        Unvouch: AccountId,
        Vote: sts.tuple(() => [AccountId, AccountId, sts.boolean()]),
        Vouch: sts.tuple(() => [AccountId, Balance, AccountId]),
    }
})

export const SlotsEvent: sts.Type<SlotsEvent> = sts.closedEnum(() => {
    return  {
        AuctionClosed: AuctionIndex,
        AuctionStarted: sts.tuple(() => [AuctionIndex, LeasePeriod, BlockNumber]),
        NewLeasePeriod: LeasePeriod,
        Reserved: sts.tuple(() => [AccountId, Balance, Balance]),
        Unreserved: sts.tuple(() => [AccountId, Balance]),
        WonDeploy: sts.tuple(() => [NewBidder, SlotRange, ParaId, Balance]),
        WonRenewal: sts.tuple(() => [ParaId, SlotRange, Balance, Balance]),
    }
})

export const ParaId = sts.number()

export const SlotRange: sts.Type<SlotRange> = sts.closedEnum(() => {
    return  {
        OneOne: sts.unit(),
        OneThree: sts.unit(),
        OneTwo: sts.unit(),
        ThreeThree: sts.unit(),
        TwoThree: sts.unit(),
        TwoTwo: sts.unit(),
        ZeroOne: sts.unit(),
        ZeroThree: sts.unit(),
        ZeroTwo: sts.unit(),
        ZeroZero: sts.unit(),
    }
})

export const NewBidder: sts.Type<NewBidder> = sts.struct(() => {
    return  {
        who: AccountId,
        sub: SubId,
    }
})

export const SubId = sts.number()

export const LeasePeriod = sts.number()

export const AuctionIndex = sts.number()

export const SessionEvent: sts.Type<SessionEvent> = sts.closedEnum(() => {
    return  {
        NewSession: SessionIndex,
    }
})

export const RegistrarEvent: sts.Type<RegistrarEvent> = sts.closedEnum(() => {
    return  {
        ParathreadDeregistered: ParaId,
        ParathreadRegistered: ParaId,
    }
})

export const RecoveryEvent: sts.Type<RecoveryEvent> = sts.closedEnum(() => {
    return  {
        AccountRecovered: sts.tuple(() => [AccountId, AccountId]),
        RecoveryClosed: sts.tuple(() => [AccountId, AccountId]),
        RecoveryCreated: AccountId,
        RecoveryInitiated: sts.tuple(() => [AccountId, AccountId]),
        RecoveryRemoved: AccountId,
        RecoveryVouched: sts.tuple(() => [AccountId, AccountId, AccountId]),
    }
})

export const OffencesEvent: sts.Type<OffencesEvent> = sts.closedEnum(() => {
    return  {
        Offence: sts.tuple(() => [Kind, OpaqueTimeSlot]),
    }
})

export const OpaqueTimeSlot = sts.bytes()

export const Kind = sts.bytes()

export const IndicesEvent: sts.Type<IndicesEvent> = sts.closedEnum(() => {
    return  {
        NewAccountIndex: sts.tuple(() => [AccountId, AccountIndex]),
    }
})

export const AccountIndex = sts.number()

export const ImOnlineEvent: sts.Type<ImOnlineEvent> = sts.closedEnum(() => {
    return  {
        AllGood: sts.unit(),
        HeartbeatReceived: AuthorityId,
        SomeOffline: sts.array(() => IdentificationTuple),
    }
})

export const IdentificationTuple = sts.tuple(() => [ValidatorId, FullIdentification])

export const FullIdentification: sts.Type<FullIdentification> = sts.struct(() => {
    return  {
        total: sts.bigint(),
        own: sts.bigint(),
        others: sts.array(() => IndividualExposure),
    }
})

export const IndividualExposure: sts.Type<IndividualExposure> = sts.struct(() => {
    return  {
        who: AccountId,
        value: sts.bigint(),
    }
})

export const ValidatorId = sts.bytes()

export const AuthorityId = sts.bytes()

export const IdentityEvent: sts.Type<IdentityEvent> = sts.closedEnum(() => {
    return  {
        IdentityCleared: sts.tuple(() => [AccountId, Balance]),
        IdentityKilled: sts.tuple(() => [AccountId, Balance]),
        IdentitySet: AccountId,
        JudgementGiven: sts.tuple(() => [AccountId, RegistrarIndex]),
        JudgementRequested: sts.tuple(() => [AccountId, RegistrarIndex]),
        JudgementUnrequested: sts.tuple(() => [AccountId, RegistrarIndex]),
        RegistrarAdded: RegistrarIndex,
    }
})

export const RegistrarIndex = sts.number()

export const GrandpaEvent: sts.Type<GrandpaEvent> = sts.closedEnum(() => {
    return  {
        NewAuthorities: sts.array(() => NextAuthority),
        Paused: sts.unit(),
        Resumed: sts.unit(),
    }
})

export const NextAuthority = sts.tuple(() => [AuthorityId, AuthorityWeight])

export const AuthorityWeight = sts.bigint()

export const ElectionsPhragmenEvent: sts.Type<ElectionsPhragmenEvent> = sts.closedEnum(() => {
    return  {
        EmptyTerm: sts.unit(),
        MemberKicked: AccountId,
        MemberRenounced: AccountId,
        NewTerm: sts.array(() => sts.tuple(() => [AccountId, Balance])),
        VoterReported: sts.tuple(() => [AccountId, AccountId, sts.boolean()]),
    }
})

export const DemocracyEvent: sts.Type<DemocracyEvent> = sts.closedEnum(() => {
    return  {
        Cancelled: ReferendumIndex,
        Delegated: sts.tuple(() => [AccountId, AccountId]),
        Executed: sts.tuple(() => [ReferendumIndex, sts.boolean()]),
        ExternalTabled: sts.unit(),
        NotPassed: ReferendumIndex,
        Passed: ReferendumIndex,
        PreimageInvalid: sts.tuple(() => [Hash, ReferendumIndex]),
        PreimageMissing: sts.tuple(() => [Hash, ReferendumIndex]),
        PreimageNoted: sts.tuple(() => [Hash, AccountId, Balance]),
        PreimageReaped: sts.tuple(() => [Hash, AccountId, Balance, AccountId]),
        PreimageUsed: sts.tuple(() => [Hash, AccountId, Balance]),
        Proposed: sts.tuple(() => [PropIndex, Balance]),
        Started: sts.tuple(() => [ReferendumIndex, VoteThreshold]),
        Tabled: sts.tuple(() => [PropIndex, Balance, sts.array(() => AccountId)]),
        Undelegated: AccountId,
        Vetoed: sts.tuple(() => [AccountId, Hash, BlockNumber]),
    }
})

export const VoteThreshold: sts.Type<VoteThreshold> = sts.closedEnum(() => {
    return  {
        SimpleMajority: sts.unit(),
        SuperMajorityAgainst: sts.unit(),
        SuperMajorityApprove: sts.unit(),
    }
})

export const PropIndex = sts.number()

export const ReferendumIndex = sts.number()

export const CouncilEvent: sts.Type<CouncilEvent> = sts.closedEnum(() => {
    return  {
        Approved: Hash,
        Disapproved: Hash,
        Executed: sts.tuple(() => [Hash, sts.boolean()]),
        MemberExecuted: sts.tuple(() => [Hash, sts.boolean()]),
        Proposed: sts.tuple(() => [AccountId, ProposalIndex, Hash, MemberCount]),
        Voted: sts.tuple(() => [AccountId, Hash, sts.boolean(), MemberCount, MemberCount]),
    }
})

export const ClaimsEvent: sts.Type<ClaimsEvent> = sts.closedEnum(() => {
    return  {
        Claimed: sts.tuple(() => [AccountId, EthereumAddress, Balance]),
    }
})

export const EthereumAddress = sts.bytes()

export const BalancesEvent: sts.Type<BalancesEvent> = sts.closedEnum(() => {
    return  {
        BalanceSet: sts.tuple(() => [AccountId, Balance, Balance]),
        Deposit: sts.tuple(() => [AccountId, Balance]),
        NewAccount: sts.tuple(() => [AccountId, Balance]),
        ReapedAccount: sts.tuple(() => [AccountId, Balance]),
        Transfer: sts.tuple(() => [AccountId, AccountId, Balance, Balance]),
    }
})

export const Phase: sts.Type<Phase> = sts.closedEnum(() => {
    return  {
        ApplyExtrinsic: sts.number(),
        Finalization: sts.unit(),
        Initialization: sts.unit(),
    }
})
