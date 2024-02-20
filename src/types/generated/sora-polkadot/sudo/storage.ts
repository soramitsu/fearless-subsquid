import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const key =  {
    /**
     *  The `AccountId` of the sudo key.
     */
    v1: new StorageType('Sudo.Key', 'Optional', [], v1.AccountId32) as KeyV1,
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface KeyV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1.AccountId32 | undefined)>
}
