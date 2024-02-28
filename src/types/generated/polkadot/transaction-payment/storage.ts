import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'
import * as v11 from '../v11'
import * as v9110 from '../v9110'

export const nextFeeMultiplier =  {
    v0: new StorageType('TransactionPayment.NextFeeMultiplier', 'Default', [], v0.Multiplier) as NextFeeMultiplierV0,
}

export interface NextFeeMultiplierV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Multiplier
    get(block: Block): Promise<(v0.Multiplier | undefined)>
}

export const storageVersion =  {
    v11: new StorageType('TransactionPayment.StorageVersion', 'Default', [], v11.Releases) as StorageVersionV11,
    v9110: new StorageType('TransactionPayment.StorageVersion', 'Default', [], v9110.Type_385) as StorageVersionV9110,
}

export interface StorageVersionV11  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v11.Releases
    get(block: Block): Promise<(v11.Releases | undefined)>
}

export interface StorageVersionV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.Type_385
    get(block: Block): Promise<(v9110.Type_385 | undefined)>
}
