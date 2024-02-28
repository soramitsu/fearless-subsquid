import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'

export const randomMaterial =  {
    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    v0: new StorageType('RandomnessCollectiveFlip.RandomMaterial', 'Default', [], sts.array(() => v0.Hash)) as RandomMaterialV0,
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomMaterialV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.Hash[]
    get(block: Block): Promise<(v0.Hash[] | undefined)>
}
