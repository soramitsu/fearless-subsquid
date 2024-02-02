import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const serviceOverweight =  {
    name: 'DmpQueue.service_overweight',
    /**
     * Service a single overweight message.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     * 
     * Errors:
     * - `Unknown`: Message of `index` is unknown.
     * - `OverLimit`: Message execution may use greater than `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    v1: new CallType(
        'DmpQueue.service_overweight',
        sts.struct({
            index: sts.bigint(),
            weightLimit: sts.bigint(),
        })
    ),
    /**
     * Service a single overweight message.
     */
    v7: new CallType(
        'DmpQueue.service_overweight',
        sts.struct({
            index: sts.bigint(),
            weightLimit: v7.Weight,
        })
    ),
}
