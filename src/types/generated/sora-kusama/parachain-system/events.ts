import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v7 from '../v7'

export const validationFunctionStored =  {
    name: 'ParachainSystem.ValidationFunctionStored',
    /**
     * The validation function has been scheduled to apply.
     */
    v1: new EventType(
        'ParachainSystem.ValidationFunctionStored',
        sts.unit()
    ),
}

export const validationFunctionApplied =  {
    name: 'ParachainSystem.ValidationFunctionApplied',
    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    v1: new EventType(
        'ParachainSystem.ValidationFunctionApplied',
        sts.number()
    ),
    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    v7: new EventType(
        'ParachainSystem.ValidationFunctionApplied',
        sts.struct({
            relayChainBlockNum: sts.number(),
        })
    ),
}

export const validationFunctionDiscarded =  {
    name: 'ParachainSystem.ValidationFunctionDiscarded',
    /**
     * The relay-chain aborted the upgrade process.
     */
    v1: new EventType(
        'ParachainSystem.ValidationFunctionDiscarded',
        sts.unit()
    ),
}

export const upgradeAuthorized =  {
    name: 'ParachainSystem.UpgradeAuthorized',
    /**
     * An upgrade has been authorized.
     */
    v1: new EventType(
        'ParachainSystem.UpgradeAuthorized',
        v1.H256
    ),
    /**
     * An upgrade has been authorized.
     */
    v7: new EventType(
        'ParachainSystem.UpgradeAuthorized',
        sts.struct({
            codeHash: v7.H256,
        })
    ),
}

export const downwardMessagesReceived =  {
    name: 'ParachainSystem.DownwardMessagesReceived',
    /**
     * Some downward messages have been received and will be processed.
     * \[ count \]
     */
    v1: new EventType(
        'ParachainSystem.DownwardMessagesReceived',
        sts.number()
    ),
    /**
     * Some downward messages have been received and will be processed.
     */
    v7: new EventType(
        'ParachainSystem.DownwardMessagesReceived',
        sts.struct({
            count: sts.number(),
        })
    ),
}

export const downwardMessagesProcessed =  {
    name: 'ParachainSystem.DownwardMessagesProcessed',
    /**
     * Downward messages were processed using the given weight.
     * \[ weight_used, result_mqc_head \]
     */
    v1: new EventType(
        'ParachainSystem.DownwardMessagesProcessed',
        sts.tuple([sts.bigint(), v1.H256])
    ),
    /**
     * Downward messages were processed using the given weight.
     */
    v7: new EventType(
        'ParachainSystem.DownwardMessagesProcessed',
        sts.struct({
            weightUsed: v7.Weight,
            dmqHead: v7.H256,
        })
    ),
}

export const upwardMessageSent =  {
    name: 'ParachainSystem.UpwardMessageSent',
    /**
     * An upward message was sent to the relay chain.
     */
    v7: new EventType(
        'ParachainSystem.UpwardMessageSent',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
        })
    ),
}
