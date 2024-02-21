import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'
import * as v9130 from '../v9130'

export const bidPlaced =  {
    name: 'Gilt.BidPlaced',
    /**
     *  A bid was successfully placed.
     *  \[ who, amount, duration \]
     */
    v9010: new EventType(
        'Gilt.BidPlaced',
        sts.tuple([v9010.AccountId, v9010.BalanceOf, sts.number()])
    ),
    /**
     * A bid was successfully placed.
     */
    v9130: new EventType(
        'Gilt.BidPlaced',
        sts.struct({
            who: v9130.AccountId32,
            amount: sts.bigint(),
            duration: sts.number(),
        })
    ),
}

export const bidRetracted =  {
    name: 'Gilt.BidRetracted',
    /**
     *  A bid was successfully removed (before being accepted as a gilt).
     *  \[ who, amount, duration \]
     */
    v9010: new EventType(
        'Gilt.BidRetracted',
        sts.tuple([v9010.AccountId, v9010.BalanceOf, sts.number()])
    ),
    /**
     * A bid was successfully removed (before being accepted as a gilt).
     */
    v9130: new EventType(
        'Gilt.BidRetracted',
        sts.struct({
            who: v9130.AccountId32,
            amount: sts.bigint(),
            duration: sts.number(),
        })
    ),
}

export const giltIssued =  {
    name: 'Gilt.GiltIssued',
    /**
     *  A bid was accepted as a gilt. The balance may not be released until expiry.
     *  \[ index, expiry, who, amount \]
     */
    v9010: new EventType(
        'Gilt.GiltIssued',
        sts.tuple([v9010.ActiveIndex, v9010.BlockNumber, v9010.AccountId, v9010.BalanceOf])
    ),
    /**
     * A bid was accepted as a gilt. The balance may not be released until expiry.
     */
    v9130: new EventType(
        'Gilt.GiltIssued',
        sts.struct({
            index: sts.number(),
            expiry: sts.number(),
            who: v9130.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const giltThawed =  {
    name: 'Gilt.GiltThawed',
    /**
     *  An expired gilt has been thawed.
     *  \[ index, who, original_amount, additional_amount \]
     */
    v9010: new EventType(
        'Gilt.GiltThawed',
        sts.tuple([v9010.ActiveIndex, v9010.AccountId, v9010.BalanceOf, v9010.BalanceOf])
    ),
    /**
     * An expired gilt has been thawed.
     */
    v9130: new EventType(
        'Gilt.GiltThawed',
        sts.struct({
            index: sts.number(),
            who: v9130.AccountId32,
            originalAmount: sts.bigint(),
            additionalAmount: sts.bigint(),
        })
    ),
}
