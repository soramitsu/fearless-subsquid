import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v2011 from '../v2011'
import * as v9111 from '../v9111'

export const nextFeeMultiplier =  {
    v1020: new StorageType('Balances.NextFeeMultiplier', 'Default', [], v1020.Multiplier) as NextFeeMultiplierV1020,
}

export interface NextFeeMultiplierV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.Multiplier
    get(block: Block): Promise<(v1020.Multiplier | undefined)>
}

export const storageVersion =  {
    v2011: new StorageType('TransactionPayment.StorageVersion', 'Default', [], v2011.Releases) as StorageVersionV2011,
    v9111: new StorageType('TransactionPayment.StorageVersion', 'Default', [], v9111.Type_199) as StorageVersionV9111,
}

export interface StorageVersionV2011  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v2011.Releases
    get(block: Block): Promise<(v2011.Releases | undefined)>
}

export interface StorageVersionV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9111.Type_199
    get(block: Block): Promise<(v9111.Type_199 | undefined)>
}
