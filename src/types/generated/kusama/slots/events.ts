import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v9010 from '../v9010'
import * as v9230 from '../v9230'

export const newLeasePeriod =  {
    name: 'Slots.NewLeasePeriod',
    /**
     *  A new lease period is beginning.
     */
    v1020: new EventType(
        'Slots.NewLeasePeriod',
        v1020.LeasePeriod
    ),
    /**
     * A new `[lease_period]` is beginning.
     */
    v9230: new EventType(
        'Slots.NewLeasePeriod',
        sts.struct({
            leasePeriod: sts.number(),
        })
    ),
}

export const auctionStarted =  {
    name: 'Slots.AuctionStarted',
    /**
     *  An auction started. Provides its index and the block number where it will begin to
     *  close and the first lease period of the quadruplet that is auctioned.
     */
    v1020: new EventType(
        'Slots.AuctionStarted',
        sts.tuple([v1020.AuctionIndex, v1020.LeasePeriod, v1020.BlockNumber])
    ),
}

export const auctionClosed =  {
    name: 'Slots.AuctionClosed',
    /**
     *  An auction ended. All funds become unreserved.
     */
    v1020: new EventType(
        'Slots.AuctionClosed',
        v1020.AuctionIndex
    ),
}

export const wonDeploy =  {
    name: 'Slots.WonDeploy',
    /**
     *  Someone won the right to deploy a parachain. Balance amount is deducted for deposit.
     */
    v1020: new EventType(
        'Slots.WonDeploy',
        sts.tuple([v1020.NewBidder, v1020.SlotRange, v1020.ParaId, v1020.Balance])
    ),
}

export const wonRenewal =  {
    name: 'Slots.WonRenewal',
    /**
     *  An existing parachain won the right to continue.
     *  First balance is the extra amount reseved. Second is the total amount reserved.
     */
    v1020: new EventType(
        'Slots.WonRenewal',
        sts.tuple([v1020.ParaId, v1020.SlotRange, v1020.Balance, v1020.Balance])
    ),
}

export const reserved =  {
    name: 'Slots.Reserved',
    /**
     *  Funds were reserved for a winning bid. First balance is the extra amount reserved.
     *  Second is the total.
     */
    v1020: new EventType(
        'Slots.Reserved',
        sts.tuple([v1020.AccountId, v1020.Balance, v1020.Balance])
    ),
}

export const unreserved =  {
    name: 'Slots.Unreserved',
    /**
     *  Funds were unreserved since bidder is no longer active.
     */
    v1020: new EventType(
        'Slots.Unreserved',
        sts.tuple([v1020.AccountId, v1020.Balance])
    ),
}

export const leased =  {
    name: 'Slots.Leased',
    /**
     *  An existing parachain won the right to continue.
     *  First balance is the extra amount reseved. Second is the total amount reserved.
     *  \[parachain_id, leaser, period_begin, period_count, extra_reseved, total_amount\]
     */
    v9010: new EventType(
        'Slots.Leased',
        sts.tuple([v9010.ParaId, v9010.AccountId, v9010.LeasePeriod, v9010.LeasePeriod, v9010.Balance, v9010.Balance])
    ),
    /**
     * A para has won the right to a continuous set of lease periods as a parachain.
     * First balance is any extra amount reserved on top of the para's existing deposit.
     * Second balance is the total amount reserved.
     */
    v9230: new EventType(
        'Slots.Leased',
        sts.struct({
            paraId: v9230.Id,
            leaser: v9230.AccountId32,
            periodBegin: sts.number(),
            periodCount: sts.number(),
            extraReserved: sts.bigint(),
            totalAmount: sts.bigint(),
        })
    ),
}
