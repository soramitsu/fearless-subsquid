import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'

export const randomMaterial =  {
    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    v1020: new StorageType('RandomnessCollectiveFlip.RandomMaterial', 'Default', [], sts.array(() => v1020.Hash)) as RandomMaterialV1020,
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomMaterialV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.Hash[]
    get(block: Block): Promise<(v1020.Hash[] | undefined)>
}
