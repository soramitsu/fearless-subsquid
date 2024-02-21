import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9340 from '../v9340'

export const bidPlaced =  {
    name: 'Nis.BidPlaced',
    /**
     * A bid was successfully placed.
     */
    v9340: new EventType(
        'Nis.BidPlaced',
        sts.struct({
            who: v9340.AccountId32,
            amount: sts.bigint(),
            duration: sts.number(),
        })
    ),
}

export const bidRetracted =  {
    name: 'Nis.BidRetracted',
    /**
     * A bid was successfully removed (before being accepted).
     */
    v9340: new EventType(
        'Nis.BidRetracted',
        sts.struct({
            who: v9340.AccountId32,
            amount: sts.bigint(),
            duration: sts.number(),
        })
    ),
}

export const bidDropped =  {
    name: 'Nis.BidDropped',
    /**
     * A bid was dropped from a queue because of another, more substantial, bid was present.
     */
    v9340: new EventType(
        'Nis.BidDropped',
        sts.struct({
            who: v9340.AccountId32,
            amount: sts.bigint(),
            duration: sts.number(),
        })
    ),
}

export const issued =  {
    name: 'Nis.Issued',
    /**
     * A bid was accepted. The balance may not be released until expiry.
     */
    v9340: new EventType(
        'Nis.Issued',
        sts.struct({
            /**
             * The identity of the receipt.
             */
            index: sts.number(),
            /**
             * The block number at which the receipt may be thawed.
             */
            expiry: sts.number(),
            /**
             * The owner of the receipt.
             */
            who: v9340.AccountId32,
            /**
             * The proportion of the effective total issuance which the receipt represents.
             */
            proportion: v9340.Perquintill,
            /**
             * The amount of funds which were debited from the owner.
             */
            amount: sts.bigint(),
        })
    ),
}

export const thawed =  {
    name: 'Nis.Thawed',
    /**
     * An receipt has been (at least partially) thawed.
     */
    v9340: new EventType(
        'Nis.Thawed',
        sts.struct({
            /**
             * The identity of the receipt.
             */
            index: sts.number(),
            /**
             * The owner.
             */
            who: v9340.AccountId32,
            /**
             * The proportion of the effective total issuance by which the owner was debited.
             */
            proportion: v9340.Perquintill,
            /**
             * The amount by which the owner was credited.
             */
            amount: sts.bigint(),
            /**
             * If `true` then the receipt is done.
             */
            dropped: sts.boolean(),
        })
    ),
}

export const funded =  {
    name: 'Nis.Funded',
    /**
     * An automatic funding of the deficit was made.
     */
    v9340: new EventType(
        'Nis.Funded',
        sts.struct({
            deficit: sts.bigint(),
        })
    ),
}

export const transferred =  {
    name: 'Nis.Transferred',
    /**
     * A receipt was transfered.
     */
    v9340: new EventType(
        'Nis.Transferred',
        sts.struct({
            from: v9340.AccountId32,
            to: v9340.AccountId32,
            index: sts.number(),
        })
    ),
}
