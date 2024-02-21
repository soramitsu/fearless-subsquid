import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const placeBid =  {
    name: 'Gilt.place_bid',
    /**
     *  Place a bid for a gilt to be issued.
     * 
     *  Origin must be Signed, and account must have at least `amount` in free balance.
     * 
     *  - `amount`: The amount of the bid; these funds will be reserved. If the bid is
     *  successfully elevated into an issued gilt, then these funds will continue to be
     *  reserved until the gilt expires. Must be at least `MinFreeze`.
     *  - `duration`: The number of periods for which the funds will be locked if the gilt is
     *  issued. It will expire only after this period has elapsed after the point of issuance.
     *  Must be greater than 1 and no more than `QueueCount`.
     * 
     *  Complexities:
     *  - `Queues[duration].len()` (just take max).
     */
    v9010: new CallType(
        'Gilt.place_bid',
        sts.struct({
            amount: sts.bigint(),
            duration: sts.number(),
        })
    ),
}

export const retractBid =  {
    name: 'Gilt.retract_bid',
    /**
     *  Retract a previously placed bid.
     * 
     *  Origin must be Signed, and the account should have previously issued a still-active bid
     *  of `amount` for `duration`.
     * 
     *  - `amount`: The amount of the previous bid.
     *  - `duration`: The duration of the previous bid.
     */
    v9010: new CallType(
        'Gilt.retract_bid',
        sts.struct({
            amount: sts.bigint(),
            duration: sts.number(),
        })
    ),
}

export const setTarget =  {
    name: 'Gilt.set_target',
    /**
     *  Set target proportion of gilt-funds.
     * 
     *  Origin must be `AdminOrigin`.
     * 
     *  - `target`: The target proportion of effective issued funds that should be under gilts
     *  at any one time.
     */
    v9010: new CallType(
        'Gilt.set_target',
        sts.struct({
            target: sts.bigint(),
        })
    ),
}

export const thaw =  {
    name: 'Gilt.thaw',
    /**
     *  Remove an active but expired gilt. Reserved funds under gilt are freed and balance is
     *  adjusted to ensure that the funds grow or shrink to maintain the equivalent proportion
     *  of effective total issued funds.
     * 
     *  Origin must be Signed and the account must be the owner of the gilt of the given index.
     * 
     *  - `index`: The index of the gilt to be thawed.
     */
    v9010: new CallType(
        'Gilt.thaw',
        sts.struct({
            index: sts.number(),
        })
    ),
}
