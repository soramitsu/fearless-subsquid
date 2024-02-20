import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v7 from '../v7'

export const key =  {
    /**
     *  The `AccountId` of the sudo key.
     */
    v1: new StorageType('Sudo.Key', 'Default', [], v1.AccountId32) as KeyV1,
    /**
     *  The `AccountId` of the sudo key.
     */
    v7: new StorageType('Sudo.Key', 'Optional', [], v7.AccountId32) as KeyV7,
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface KeyV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.AccountId32
    get(block: Block): Promise<(v1.AccountId32 | undefined)>
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface KeyV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v7.AccountId32 | undefined)>
}
