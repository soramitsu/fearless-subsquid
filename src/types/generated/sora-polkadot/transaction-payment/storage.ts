import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const nextFeeMultiplier =  {
    v1: new StorageType('TransactionPayment.NextFeeMultiplier', 'Default', [], v1.FixedU128) as NextFeeMultiplierV1,
}

export interface NextFeeMultiplierV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.FixedU128
    get(block: Block): Promise<(v1.FixedU128 | undefined)>
}

export const storageVersion =  {
    v1: new StorageType('TransactionPayment.StorageVersion', 'Default', [], v1.Type_170) as StorageVersionV1,
}

export interface StorageVersionV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Type_170
    get(block: Block): Promise<(v1.Type_170 | undefined)>
}
