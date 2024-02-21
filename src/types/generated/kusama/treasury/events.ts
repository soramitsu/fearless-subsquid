import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1032 from '../v1032'
import * as v1038 from '../v1038'
import * as v2025 from '../v2025'
import * as v9160 from '../v9160'
import * as v9250 from '../v9250'
import * as v1001000 from '../v1001000'

export const proposed =  {
    name: 'Treasury.Proposed',
    /**
     *  New proposal.
     */
    v1020: new EventType(
        'Treasury.Proposed',
        v1020.ProposalIndex
    ),
    /**
     * New proposal.
     */
    v9160: new EventType(
        'Treasury.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
        })
    ),
}

export const spending =  {
    name: 'Treasury.Spending',
    /**
     *  We have ended a spend period and will now allocate funds.
     */
    v1020: new EventType(
        'Treasury.Spending',
        v1020.Balance
    ),
    /**
     * We have ended a spend period and will now allocate funds.
     */
    v9160: new EventType(
        'Treasury.Spending',
        sts.struct({
            budgetRemaining: sts.bigint(),
        })
    ),
}

export const awarded =  {
    name: 'Treasury.Awarded',
    /**
     *  Some funds have been allocated.
     */
    v1020: new EventType(
        'Treasury.Awarded',
        sts.tuple([v1020.ProposalIndex, v1020.Balance, v1020.AccountId])
    ),
    /**
     * Some funds have been allocated.
     */
    v9160: new EventType(
        'Treasury.Awarded',
        sts.struct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: v9160.AccountId32,
        })
    ),
}

export const burnt =  {
    name: 'Treasury.Burnt',
    /**
     *  Some of our funds have been burnt.
     */
    v1020: new EventType(
        'Treasury.Burnt',
        v1020.Balance
    ),
    /**
     * Some of our funds have been burnt.
     */
    v9160: new EventType(
        'Treasury.Burnt',
        sts.struct({
            burntFunds: sts.bigint(),
        })
    ),
}

export const rollover =  {
    name: 'Treasury.Rollover',
    /**
     *  Spending has finished; this is the amount that rolls over until next spend.
     */
    v1020: new EventType(
        'Treasury.Rollover',
        v1020.Balance
    ),
    /**
     * Spending has finished; this is the amount that rolls over until next spend.
     */
    v9160: new EventType(
        'Treasury.Rollover',
        sts.struct({
            rolloverBalance: sts.bigint(),
        })
    ),
}

export const deposit =  {
    name: 'Treasury.Deposit',
    /**
     *  Some funds have been deposited.
     */
    v1020: new EventType(
        'Treasury.Deposit',
        v1020.Balance
    ),
    /**
     * Some funds have been deposited.
     */
    v9160: new EventType(
        'Treasury.Deposit',
        sts.struct({
            value: sts.bigint(),
        })
    ),
}

export const rejected =  {
    name: 'Treasury.Rejected',
    /**
     *  A proposal was rejected; funds were slashed.
     */
    v1032: new EventType(
        'Treasury.Rejected',
        sts.tuple([v1032.ProposalIndex, v1032.Balance])
    ),
    /**
     * A proposal was rejected; funds were slashed.
     */
    v9160: new EventType(
        'Treasury.Rejected',
        sts.struct({
            proposalIndex: sts.number(),
            slashed: sts.bigint(),
        })
    ),
}

export const newTip =  {
    name: 'Treasury.NewTip',
    /**
     *  A new tip suggestion has been opened.
     */
    v1038: new EventType(
        'Treasury.NewTip',
        v1038.Hash
    ),
}

export const tipClosing =  {
    name: 'Treasury.TipClosing',
    /**
     *  A tip suggestion has reached threshold and is closing.
     */
    v1038: new EventType(
        'Treasury.TipClosing',
        v1038.Hash
    ),
}

export const tipClosed =  {
    name: 'Treasury.TipClosed',
    /**
     *  A tip suggestion has been closed.
     */
    v1038: new EventType(
        'Treasury.TipClosed',
        sts.tuple([v1038.Hash, v1038.AccountId, v1038.Balance])
    ),
}

export const tipRetracted =  {
    name: 'Treasury.TipRetracted',
    /**
     *  A tip suggestion has been retracted.
     */
    v1038: new EventType(
        'Treasury.TipRetracted',
        v1038.Hash
    ),
}

export const bountyProposed =  {
    name: 'Treasury.BountyProposed',
    /**
     *  New bounty proposal. [index]
     */
    v2025: new EventType(
        'Treasury.BountyProposed',
        v2025.BountyIndex
    ),
}

export const bountyRejected =  {
    name: 'Treasury.BountyRejected',
    /**
     *  A bounty proposal was rejected; funds were slashed. [index, bond]
     */
    v2025: new EventType(
        'Treasury.BountyRejected',
        sts.tuple([v2025.BountyIndex, v2025.Balance])
    ),
}

export const bountyBecameActive =  {
    name: 'Treasury.BountyBecameActive',
    /**
     *  A bounty proposal is funded and became active. [index]
     */
    v2025: new EventType(
        'Treasury.BountyBecameActive',
        v2025.BountyIndex
    ),
}

export const bountyAwarded =  {
    name: 'Treasury.BountyAwarded',
    /**
     *  A bounty is awarded to a beneficiary. [index, beneficiary]
     */
    v2025: new EventType(
        'Treasury.BountyAwarded',
        sts.tuple([v2025.BountyIndex, v2025.AccountId])
    ),
}

export const bountyClaimed =  {
    name: 'Treasury.BountyClaimed',
    /**
     *  A bounty is claimed by beneficiary. [index, payout, beneficiary]
     */
    v2025: new EventType(
        'Treasury.BountyClaimed',
        sts.tuple([v2025.BountyIndex, v2025.Balance, v2025.AccountId])
    ),
}

export const bountyCanceled =  {
    name: 'Treasury.BountyCanceled',
    /**
     *  A bounty is cancelled. [index]
     */
    v2025: new EventType(
        'Treasury.BountyCanceled',
        v2025.BountyIndex
    ),
}

export const bountyExtended =  {
    name: 'Treasury.BountyExtended',
    /**
     *  A bounty expiry is extended. [index]
     */
    v2025: new EventType(
        'Treasury.BountyExtended',
        v2025.BountyIndex
    ),
}

export const spendApproved =  {
    name: 'Treasury.SpendApproved',
    /**
     * A new spend proposal has been approved.
     */
    v9250: new EventType(
        'Treasury.SpendApproved',
        sts.struct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: v9250.AccountId32,
        })
    ),
}

export const updatedInactive =  {
    name: 'Treasury.UpdatedInactive',
    /**
     * The inactive funds of the pallet have been updated.
     */
    v9370: new EventType(
        'Treasury.UpdatedInactive',
        sts.struct({
            reactivated: sts.bigint(),
            deactivated: sts.bigint(),
        })
    ),
}

export const assetSpendApproved =  {
    name: 'Treasury.AssetSpendApproved',
    /**
     * A new asset spend proposal has been approved.
     */
    v1001000: new EventType(
        'Treasury.AssetSpendApproved',
        sts.struct({
            index: sts.number(),
            assetKind: v1001000.VersionedLocatableAsset,
            amount: sts.bigint(),
            beneficiary: v1001000.VersionedMultiLocation,
            validFrom: sts.number(),
            expireAt: sts.number(),
        })
    ),
}

export const assetSpendVoided =  {
    name: 'Treasury.AssetSpendVoided',
    /**
     * An approved spend was voided.
     */
    v1001000: new EventType(
        'Treasury.AssetSpendVoided',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const paid =  {
    name: 'Treasury.Paid',
    /**
     * A payment happened.
     */
    v1001000: new EventType(
        'Treasury.Paid',
        sts.struct({
            index: sts.number(),
            paymentId: sts.bigint(),
        })
    ),
}

export const paymentFailed =  {
    name: 'Treasury.PaymentFailed',
    /**
     * A payment failed and can be retried.
     */
    v1001000: new EventType(
        'Treasury.PaymentFailed',
        sts.struct({
            index: sts.number(),
            paymentId: sts.bigint(),
        })
    ),
}

export const spendProcessed =  {
    name: 'Treasury.SpendProcessed',
    /**
     * A spend was processed and removed from the storage. It might have been successfully
     * paid or it may have expired.
     */
    v1001000: new EventType(
        'Treasury.SpendProcessed',
        sts.struct({
            index: sts.number(),
        })
    ),
}
