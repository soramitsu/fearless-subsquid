import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'

export const key =  {
    /**
     *  The `AccountId` of the sudo key.
     */
    v1020: new StorageType('Sudo.Key', 'Default', [], v1020.AccountId) as KeyV1020,
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface KeyV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.AccountId
    get(block: Block): Promise<(v1020.AccountId | undefined)>
}
