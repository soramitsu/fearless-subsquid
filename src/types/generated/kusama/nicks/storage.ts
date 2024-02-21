import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'

export const nameOf =  {
    /**
     *  The lookup table for names.
     */
    v1020: new StorageType('Sudo.NameOf', 'Optional', [v1020.AccountId], sts.tuple(() => [sts.bytes(), v1020.BalanceOf])) as NameOfV1020,
}

/**
 *  The lookup table for names.
 */
export interface NameOfV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.AccountId): Promise<([Bytes, v1020.BalanceOf] | undefined)>
    getMany(block: Block, keys: v1020.AccountId[]): Promise<([Bytes, v1020.BalanceOf] | undefined)[]>
}
