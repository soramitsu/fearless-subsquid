import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1022 from '../v1022'
import * as v1050 from '../v1050'
import * as v2025 from '../v2025'
import * as v9090 from '../v9090'
import * as v9111 from '../v9111'
import * as v9130 from '../v9130'
import * as v9160 from '../v9160'
import * as v9170 from '../v9170'
import * as v9190 from '../v9190'

export const proposed =  {
    name: 'Democracy.Proposed',
    v1020: new EventType(
        'Democracy.Proposed',
        sts.tuple([v1020.PropIndex, v1020.Balance])
    ),
    /**
     * A motion has been proposed by a public account.
     */
    v9130: new EventType(
        'Democracy.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
        })
    ),
}

export const tabled =  {
    name: 'Democracy.Tabled',
    v1020: new EventType(
        'Democracy.Tabled',
        sts.tuple([v1020.PropIndex, v1020.Balance, sts.array(() => v1020.AccountId)])
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v9130: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
            depositors: sts.array(() => v9130.AccountId32),
        })
    ),
    /**
     * A public proposal has been tabled for referendum vote.
     */
    v9320: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
        })
    ),
}

export const externalTabled =  {
    name: 'Democracy.ExternalTabled',
    v1020: new EventType(
        'Democracy.ExternalTabled',
        sts.unit()
    ),
}

export const started =  {
    name: 'Democracy.Started',
    v1020: new EventType(
        'Democracy.Started',
        sts.tuple([v1020.ReferendumIndex, v1020.VoteThreshold])
    ),
    /**
     * A referendum has begun.
     */
    v9130: new EventType(
        'Democracy.Started',
        sts.struct({
            refIndex: sts.number(),
            threshold: v9130.VoteThreshold,
        })
    ),
}

export const passed =  {
    name: 'Democracy.Passed',
    v1020: new EventType(
        'Democracy.Passed',
        v1020.ReferendumIndex
    ),
    /**
     * A proposal has been approved by referendum.
     */
    v9130: new EventType(
        'Democracy.Passed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const notPassed =  {
    name: 'Democracy.NotPassed',
    v1020: new EventType(
        'Democracy.NotPassed',
        v1020.ReferendumIndex
    ),
    /**
     * A proposal has been rejected by referendum.
     */
    v9130: new EventType(
        'Democracy.NotPassed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const cancelled =  {
    name: 'Democracy.Cancelled',
    v1020: new EventType(
        'Democracy.Cancelled',
        v1020.ReferendumIndex
    ),
    /**
     * A referendum has been cancelled.
     */
    v9130: new EventType(
        'Democracy.Cancelled',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const executed =  {
    name: 'Democracy.Executed',
    v1020: new EventType(
        'Democracy.Executed',
        sts.tuple([v1020.ReferendumIndex, sts.boolean()])
    ),
    /**
     *  A proposal has been enacted. \[ref_index, result\]
     */
    v9090: new EventType(
        'Democracy.Executed',
        sts.tuple([v9090.ReferendumIndex, v9090.DispatchResult])
    ),
    /**
     * A proposal has been enacted. \[ref_index, result\]
     */
    v9111: new EventType(
        'Democracy.Executed',
        sts.tuple([sts.number(), sts.result(() => sts.unit(), () => v9111.DispatchError)])
    ),
    /**
     * A proposal has been enacted.
     */
    v9130: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v9130.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v9160: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v9160.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v9170: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v9170.DispatchError),
        })
    ),
    /**
     * A proposal has been enacted.
     */
    v9190: new EventType(
        'Democracy.Executed',
        sts.struct({
            refIndex: sts.number(),
            result: sts.result(() => sts.unit(), () => v9190.DispatchError),
        })
    ),
}

export const delegated =  {
    name: 'Democracy.Delegated',
    v1020: new EventType(
        'Democracy.Delegated',
        sts.tuple([v1020.AccountId, v1020.AccountId])
    ),
    /**
     * An account has delegated their vote to another account.
     */
    v9130: new EventType(
        'Democracy.Delegated',
        sts.struct({
            who: v9130.AccountId32,
            target: v9130.AccountId32,
        })
    ),
}

export const undelegated =  {
    name: 'Democracy.Undelegated',
    v1020: new EventType(
        'Democracy.Undelegated',
        v1020.AccountId
    ),
    /**
     * An account has cancelled a previous delegation operation.
     */
    v9130: new EventType(
        'Democracy.Undelegated',
        sts.struct({
            account: v9130.AccountId32,
        })
    ),
}

export const vetoed =  {
    name: 'Democracy.Vetoed',
    v1020: new EventType(
        'Democracy.Vetoed',
        sts.tuple([v1020.AccountId, v1020.Hash, v1020.BlockNumber])
    ),
    /**
     * An external proposal has been vetoed.
     */
    v9130: new EventType(
        'Democracy.Vetoed',
        sts.struct({
            who: v9130.AccountId32,
            proposalHash: v9130.H256,
            until: sts.number(),
        })
    ),
}

export const preimageNoted =  {
    name: 'Democracy.PreimageNoted',
    /**
     *  A proposal's preimage was noted, and the deposit taken.
     */
    v1022: new EventType(
        'Democracy.PreimageNoted',
        sts.tuple([v1022.Hash, v1022.AccountId, v1022.Balance])
    ),
    /**
     * A proposal's preimage was noted, and the deposit taken.
     */
    v9130: new EventType(
        'Democracy.PreimageNoted',
        sts.struct({
            proposalHash: v9130.H256,
            who: v9130.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageUsed =  {
    name: 'Democracy.PreimageUsed',
    /**
     *  A proposal preimage was removed and used (the deposit was returned).
     */
    v1022: new EventType(
        'Democracy.PreimageUsed',
        sts.tuple([v1022.Hash, v1022.AccountId, v1022.Balance])
    ),
    /**
     * A proposal preimage was removed and used (the deposit was returned).
     */
    v9130: new EventType(
        'Democracy.PreimageUsed',
        sts.struct({
            proposalHash: v9130.H256,
            provider: v9130.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const preimageInvalid =  {
    name: 'Democracy.PreimageInvalid',
    /**
     *  A proposal could not be executed because its preimage was invalid.
     */
    v1022: new EventType(
        'Democracy.PreimageInvalid',
        sts.tuple([v1022.Hash, v1022.ReferendumIndex])
    ),
    /**
     * A proposal could not be executed because its preimage was invalid.
     */
    v9130: new EventType(
        'Democracy.PreimageInvalid',
        sts.struct({
            proposalHash: v9130.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageMissing =  {
    name: 'Democracy.PreimageMissing',
    /**
     *  A proposal could not be executed because its preimage was missing.
     */
    v1022: new EventType(
        'Democracy.PreimageMissing',
        sts.tuple([v1022.Hash, v1022.ReferendumIndex])
    ),
    /**
     * A proposal could not be executed because its preimage was missing.
     */
    v9130: new EventType(
        'Democracy.PreimageMissing',
        sts.struct({
            proposalHash: v9130.H256,
            refIndex: sts.number(),
        })
    ),
}

export const preimageReaped =  {
    name: 'Democracy.PreimageReaped',
    /**
     *  A registered preimage was removed and the deposit collected by the reaper (last item).
     */
    v1022: new EventType(
        'Democracy.PreimageReaped',
        sts.tuple([v1022.Hash, v1022.AccountId, v1022.Balance, v1022.AccountId])
    ),
    /**
     * A registered preimage was removed and the deposit collected by the reaper.
     */
    v9130: new EventType(
        'Democracy.PreimageReaped',
        sts.struct({
            proposalHash: v9130.H256,
            provider: v9130.AccountId32,
            deposit: sts.bigint(),
            reaper: v9130.AccountId32,
        })
    ),
}

export const unlocked =  {
    name: 'Democracy.Unlocked',
    /**
     *  An account has been unlocked successfully.
     */
    v1050: new EventType(
        'Democracy.Unlocked',
        v1050.AccountId
    ),
}

export const blacklisted =  {
    name: 'Democracy.Blacklisted',
    /**
     *  A proposal \[hash\] has been blacklisted permanently.
     */
    v2025: new EventType(
        'Democracy.Blacklisted',
        v2025.Hash
    ),
    /**
     * A proposal_hash has been blacklisted permanently.
     */
    v9130: new EventType(
        'Democracy.Blacklisted',
        sts.struct({
            proposalHash: v9130.H256,
        })
    ),
}

export const voted =  {
    name: 'Democracy.Voted',
    /**
     * An account has voted in a referendum
     */
    v9160: new EventType(
        'Democracy.Voted',
        sts.struct({
            voter: v9160.AccountId32,
            refIndex: sts.number(),
            vote: v9160.AccountVote,
        })
    ),
}

export const seconded =  {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    v9160: new EventType(
        'Democracy.Seconded',
        sts.struct({
            seconder: v9160.AccountId32,
            propIndex: sts.number(),
        })
    ),
}

export const proposalCanceled =  {
    name: 'Democracy.ProposalCanceled',
    /**
     * A proposal got canceled.
     */
    v9250: new EventType(
        'Democracy.ProposalCanceled',
        sts.struct({
            propIndex: sts.number(),
        })
    ),
}
