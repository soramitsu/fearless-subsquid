import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'
import * as v9230 from '../v9230'

export const auctionStarted =  {
    name: 'Auctions.AuctionStarted',
    /**
     *  An auction started. Provides its index and the block number where it will begin to
     *  close and the first lease period of the quadruplet that is auctioned.
     *  [auction_index, lease_period, ending]
     */
    v9010: new EventType(
        'Auctions.AuctionStarted',
        sts.tuple([v9010.AuctionIndex, v9010.LeasePeriod, v9010.BlockNumber])
    ),
    /**
     * An auction started. Provides its index and the block number where it will begin to
     * close and the first lease period of the quadruplet that is auctioned.
     */
    v9230: new EventType(
        'Auctions.AuctionStarted',
        sts.struct({
            auctionIndex: sts.number(),
            leasePeriod: sts.number(),
            ending: sts.number(),
        })
    ),
}

export const auctionClosed =  {
    name: 'Auctions.AuctionClosed',
    /**
     *  An auction ended. All funds become unreserved. [auction_index]
     */
    v9010: new EventType(
        'Auctions.AuctionClosed',
        v9010.AuctionIndex
    ),
    /**
     * An auction ended. All funds become unreserved.
     */
    v9230: new EventType(
        'Auctions.AuctionClosed',
        sts.struct({
            auctionIndex: sts.number(),
        })
    ),
}

export const wonDeploy =  {
    name: 'Auctions.WonDeploy',
    /**
     *  Someone won the right to deploy a parachain. Balance amount is deducted for deposit.
     *  [bidder, range, parachain_id, amount]
     */
    v9010: new EventType(
        'Auctions.WonDeploy',
        sts.tuple([v9010.AccountId, v9010.SlotRange, v9010.ParaId, v9010.Balance])
    ),
}

export const wonRenewal =  {
    name: 'Auctions.WonRenewal',
    /**
     *  An existing parachain won the right to continue.
     *  First balance is the extra amount reseved. Second is the total amount reserved.
     *  [parachain_id, begin, count, total_amount]
     */
    v9010: new EventType(
        'Auctions.WonRenewal',
        sts.tuple([v9010.ParaId, v9010.LeasePeriod, v9010.LeasePeriod, v9010.Balance])
    ),
}

export const reserved =  {
    name: 'Auctions.Reserved',
    /**
     *  Funds were reserved for a winning bid. First balance is the extra amount reserved.
     *  Second is the total. [bidder, extra_reserved, total_amount]
     */
    v9010: new EventType(
        'Auctions.Reserved',
        sts.tuple([v9010.AccountId, v9010.Balance, v9010.Balance])
    ),
    /**
     * Funds were reserved for a winning bid. First balance is the extra amount reserved.
     * Second is the total.
     */
    v9230: new EventType(
        'Auctions.Reserved',
        sts.struct({
            bidder: v9230.AccountId32,
            extraReserved: sts.bigint(),
            totalAmount: sts.bigint(),
        })
    ),
}

export const unreserved =  {
    name: 'Auctions.Unreserved',
    /**
     *  Funds were unreserved since bidder is no longer active. [bidder, amount]
     */
    v9010: new EventType(
        'Auctions.Unreserved',
        sts.tuple([v9010.AccountId, v9010.Balance])
    ),
    /**
     * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
     */
    v9230: new EventType(
        'Auctions.Unreserved',
        sts.struct({
            bidder: v9230.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserveConfiscated =  {
    name: 'Auctions.ReserveConfiscated',
    /**
     *  Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
     *  but no parachain slot has been leased.
     *  \[parachain_id, leaser, amount\]
     */
    v9010: new EventType(
        'Auctions.ReserveConfiscated',
        sts.tuple([v9010.ParaId, v9010.AccountId, v9010.Balance])
    ),
    /**
     * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
     * but no parachain slot has been leased.
     */
    v9230: new EventType(
        'Auctions.ReserveConfiscated',
        sts.struct({
            paraId: v9230.Id,
            leaser: v9230.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const bidAccepted =  {
    name: 'Auctions.BidAccepted',
    /**
     *  A new bid has been accepted as the current winner.
     *  \[who, para_id, amount, first_slot, last_slot\]
     */
    v9010: new EventType(
        'Auctions.BidAccepted',
        sts.tuple([v9010.AccountId, v9010.ParaId, v9010.Balance, v9010.LeasePeriod, v9010.LeasePeriod])
    ),
    /**
     * A new bid has been accepted as the current winner.
     */
    v9230: new EventType(
        'Auctions.BidAccepted',
        sts.struct({
            bidder: v9230.AccountId32,
            paraId: v9230.Id,
            amount: sts.bigint(),
            firstSlot: sts.number(),
            lastSlot: sts.number(),
        })
    ),
}

export const winningOffset =  {
    name: 'Auctions.WinningOffset',
    /**
     *  The winning offset was chosen for an auction. This will map into the `Winning` storage map.
     *  \[auction_index, block_number\]
     */
    v9010: new EventType(
        'Auctions.WinningOffset',
        sts.tuple([v9010.AuctionIndex, v9010.BlockNumber])
    ),
    /**
     * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
     */
    v9230: new EventType(
        'Auctions.WinningOffset',
        sts.struct({
            auctionIndex: sts.number(),
            blockNumber: sts.number(),
        })
    ),
}
