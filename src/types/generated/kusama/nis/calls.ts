import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v9381 from '../v9381'

export const placeBid =  {
    name: 'Nis.place_bid',
    /**
     * Place a bid.
     * 
     * Origin must be Signed, and account must have at least `amount` in free balance.
     * 
     * - `amount`: The amount of the bid; these funds will be reserved, and if/when
     *   consolidated, removed. Must be at least `MinBid`.
     * - `duration`: The number of periods before which the newly consolidated bid may be
     *   thawed. Must be greater than 1 and no more than `QueueCount`.
     * 
     * Complexities:
     * - `Queues[duration].len()` (just take max).
     */
    v9340: new CallType(
        'Nis.place_bid',
        sts.struct({
            amount: sts.bigint(),
            duration: sts.number(),
        })
    ),
}

export const retractBid =  {
    name: 'Nis.retract_bid',
    /**
     * Retract a previously placed bid.
     * 
     * Origin must be Signed, and the account should have previously issued a still-active bid
     * of `amount` for `duration`.
     * 
     * - `amount`: The amount of the previous bid.
     * - `duration`: The duration of the previous bid.
     */
    v9340: new CallType(
        'Nis.retract_bid',
        sts.struct({
            amount: sts.bigint(),
            duration: sts.number(),
        })
    ),
}

export const fundDeficit =  {
    name: 'Nis.fund_deficit',
    /**
     * Ensure we have sufficient funding for all potential payouts.
     * 
     * - `origin`: Must be accepted by `FundOrigin`.
     */
    v9340: new CallType(
        'Nis.fund_deficit',
        sts.unit()
    ),
}

export const thaw =  {
    name: 'Nis.thaw',
    /**
     * Reduce or remove an outstanding receipt, placing the according proportion of funds into
     * the account of the owner.
     * 
     * - `origin`: Must be Signed and the account must be the owner of the receipt `index` as
     *   well as any fungible counterpart.
     * - `index`: The index of the receipt.
     * - `portion`: If `Some`, then only the given portion of the receipt should be thawed. If
     *   `None`, then all of it should be.
     */
    v9340: new CallType(
        'Nis.thaw',
        sts.struct({
            index: sts.number(),
            portion: sts.option(() => sts.bigint()),
        })
    ),
}

export const thawPrivate =  {
    name: 'Nis.thaw_private',
    /**
     * Reduce or remove an outstanding receipt, placing the according proportion of funds into
     * the account of the owner.
     * 
     * - `origin`: Must be Signed and the account must be the owner of the receipt `index` as
     *   well as any fungible counterpart.
     * - `index`: The index of the receipt.
     * - `portion`: If `Some`, then only the given portion of the receipt should be thawed. If
     *   `None`, then all of it should be.
     */
    v9381: new CallType(
        'Nis.thaw_private',
        sts.struct({
            index: sts.number(),
            maybeProportion: sts.option(() => v9381.Perquintill),
        })
    ),
}

export const thawCommunal =  {
    name: 'Nis.thaw_communal',
    /**
     * Reduce or remove an outstanding receipt, placing the according proportion of funds into
     * the account of the owner.
     * 
     * - `origin`: Must be Signed and the account must be the owner of the fungible counterpart
     *   for receipt `index`.
     * - `index`: The index of the receipt.
     */
    v9381: new CallType(
        'Nis.thaw_communal',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const communify =  {
    name: 'Nis.communify',
    /**
     * Make a private receipt communal and create fungible counterparts for its owner.
     */
    v9381: new CallType(
        'Nis.communify',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const privatize =  {
    name: 'Nis.privatize',
    /**
     * Make a communal receipt private and burn fungible counterparts from its owner.
     */
    v9381: new CallType(
        'Nis.privatize',
        sts.struct({
            index: sts.number(),
        })
    ),
}
