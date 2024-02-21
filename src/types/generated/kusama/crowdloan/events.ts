import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'
import * as v9111 from '../v9111'
import * as v9160 from '../v9160'
import * as v9170 from '../v9170'
import * as v9190 from '../v9190'
import * as v9230 from '../v9230'
import * as v9320 from '../v9320'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'

export const created =  {
    name: 'Crowdloan.Created',
    /**
     *  Create a new crowdloaning campaign. [fund_index]
     */
    v9010: new EventType(
        'Crowdloan.Created',
        v9010.ParaId
    ),
    /**
     * Create a new crowdloaning campaign.
     */
    v9230: new EventType(
        'Crowdloan.Created',
        sts.struct({
            paraId: v9230.Id,
        })
    ),
}

export const contributed =  {
    name: 'Crowdloan.Contributed',
    /**
     *  Contributed to a crowd sale. [who, fund_index, amount]
     */
    v9010: new EventType(
        'Crowdloan.Contributed',
        sts.tuple([v9010.AccountId, v9010.ParaId, v9010.Balance])
    ),
    /**
     * Contributed to a crowd sale.
     */
    v9230: new EventType(
        'Crowdloan.Contributed',
        sts.struct({
            who: v9230.AccountId32,
            fundIndex: v9230.Id,
            amount: sts.bigint(),
        })
    ),
}

export const withdrew =  {
    name: 'Crowdloan.Withdrew',
    /**
     *  Withdrew full balance of a contributor. [who, fund_index, amount]
     */
    v9010: new EventType(
        'Crowdloan.Withdrew',
        sts.tuple([v9010.AccountId, v9010.ParaId, v9010.Balance])
    ),
    /**
     * Withdrew full balance of a contributor.
     */
    v9230: new EventType(
        'Crowdloan.Withdrew',
        sts.struct({
            who: v9230.AccountId32,
            fundIndex: v9230.Id,
            amount: sts.bigint(),
        })
    ),
}

export const partiallyRefunded =  {
    name: 'Crowdloan.PartiallyRefunded',
    /**
     *  The loans in a fund have been partially dissolved, i.e. there are some left
     *  over child keys that still need to be killed. [fund_index]
     */
    v9010: new EventType(
        'Crowdloan.PartiallyRefunded',
        v9010.ParaId
    ),
    /**
     * The loans in a fund have been partially dissolved, i.e. there are some left
     * over child keys that still need to be killed.
     */
    v9230: new EventType(
        'Crowdloan.PartiallyRefunded',
        sts.struct({
            paraId: v9230.Id,
        })
    ),
}

export const allRefunded =  {
    name: 'Crowdloan.AllRefunded',
    /**
     *  All loans in a fund have been refunded. [fund_index]
     */
    v9010: new EventType(
        'Crowdloan.AllRefunded',
        v9010.ParaId
    ),
    /**
     * All loans in a fund have been refunded.
     */
    v9230: new EventType(
        'Crowdloan.AllRefunded',
        sts.struct({
            paraId: v9230.Id,
        })
    ),
}

export const dissolved =  {
    name: 'Crowdloan.Dissolved',
    /**
     *  Fund is dissolved. [fund_index]
     */
    v9010: new EventType(
        'Crowdloan.Dissolved',
        v9010.ParaId
    ),
    /**
     * Fund is dissolved.
     */
    v9230: new EventType(
        'Crowdloan.Dissolved',
        sts.struct({
            paraId: v9230.Id,
        })
    ),
}

export const deployDataFixed =  {
    name: 'Crowdloan.DeployDataFixed',
    /**
     *  The deploy data of the funded parachain is set. [fund_index]
     */
    v9010: new EventType(
        'Crowdloan.DeployDataFixed',
        v9010.ParaId
    ),
}

export const onboarded =  {
    name: 'Crowdloan.Onboarded',
    /**
     *  On-boarding process for a winning parachain fund is completed. [find_index, parachain_id]
     */
    v9010: new EventType(
        'Crowdloan.Onboarded',
        sts.tuple([v9010.ParaId, v9010.ParaId])
    ),
}

export const handleBidResult =  {
    name: 'Crowdloan.HandleBidResult',
    /**
     *  The result of trying to submit a new bid to the Slots pallet.
     */
    v9010: new EventType(
        'Crowdloan.HandleBidResult',
        sts.tuple([v9010.ParaId, v9010.DispatchResult])
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v9111: new EventType(
        'Crowdloan.HandleBidResult',
        sts.tuple([v9111.Id, sts.result(() => sts.unit(), () => v9111.DispatchError)])
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v9160: new EventType(
        'Crowdloan.HandleBidResult',
        sts.tuple([v9160.Id, sts.result(() => sts.unit(), () => v9160.DispatchError)])
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v9170: new EventType(
        'Crowdloan.HandleBidResult',
        sts.tuple([v9170.Id, sts.result(() => sts.unit(), () => v9170.DispatchError)])
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v9190: new EventType(
        'Crowdloan.HandleBidResult',
        sts.tuple([v9190.Id, sts.result(() => sts.unit(), () => v9190.DispatchError)])
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v9230: new EventType(
        'Crowdloan.HandleBidResult',
        sts.struct({
            paraId: v9230.Id,
            result: sts.result(() => sts.unit(), () => v9230.DispatchError),
        })
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v9320: new EventType(
        'Crowdloan.HandleBidResult',
        sts.struct({
            paraId: v9320.Id,
            result: sts.result(() => sts.unit(), () => v9320.DispatchError),
        })
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v9420: new EventType(
        'Crowdloan.HandleBidResult',
        sts.struct({
            paraId: v9420.Id,
            result: sts.result(() => sts.unit(), () => v9420.DispatchError),
        })
    ),
    /**
     * The result of trying to submit a new bid to the Slots pallet.
     */
    v9430: new EventType(
        'Crowdloan.HandleBidResult',
        sts.struct({
            paraId: v9430.Id,
            result: sts.result(() => sts.unit(), () => v9430.DispatchError),
        })
    ),
}

export const edited =  {
    name: 'Crowdloan.Edited',
    /**
     *  The configuration to a crowdloan has been edited. [fund_index]
     */
    v9010: new EventType(
        'Crowdloan.Edited',
        v9010.ParaId
    ),
    /**
     * The configuration to a crowdloan has been edited.
     */
    v9230: new EventType(
        'Crowdloan.Edited',
        sts.struct({
            paraId: v9230.Id,
        })
    ),
}

export const memoUpdated =  {
    name: 'Crowdloan.MemoUpdated',
    /**
     *  A memo has been updated. [who, fund_index, memo]
     */
    v9010: new EventType(
        'Crowdloan.MemoUpdated',
        sts.tuple([v9010.AccountId, v9010.ParaId, sts.bytes()])
    ),
    /**
     * A memo has been updated.
     */
    v9230: new EventType(
        'Crowdloan.MemoUpdated',
        sts.struct({
            who: v9230.AccountId32,
            paraId: v9230.Id,
            memo: sts.bytes(),
        })
    ),
}

export const addedToNewRaise =  {
    name: 'Crowdloan.AddedToNewRaise',
    /**
     *  A parachain has been moved to NewRaise
     */
    v9010: new EventType(
        'Crowdloan.AddedToNewRaise',
        v9010.ParaId
    ),
    /**
     * A parachain has been moved to `NewRaise`
     */
    v9230: new EventType(
        'Crowdloan.AddedToNewRaise',
        sts.struct({
            paraId: v9230.Id,
        })
    ),
}
