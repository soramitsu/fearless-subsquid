import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1052 from '../v1052'

export const recentHints =  {
    /**
     *  Recent hints.
     */
    v1052: new StorageType('FinalityTracker.RecentHints', 'Default', [], sts.array(() => v1052.BlockNumber)) as RecentHintsV1052,
}

/**
 *  Recent hints.
 */
export interface RecentHintsV1052  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1052.BlockNumber[]
    get(block: Block): Promise<(v1052.BlockNumber[] | undefined)>
}

export const orderedHints =  {
    /**
     *  Ordered recent hints.
     */
    v1052: new StorageType('FinalityTracker.OrderedHints', 'Default', [], sts.array(() => v1052.BlockNumber)) as OrderedHintsV1052,
}

/**
 *  Ordered recent hints.
 */
export interface OrderedHintsV1052  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1052.BlockNumber[]
    get(block: Block): Promise<(v1052.BlockNumber[] | undefined)>
}

export const median =  {
    /**
     *  The median.
     */
    v1052: new StorageType('FinalityTracker.Median', 'Default', [], v1052.BlockNumber) as MedianV1052,
}

/**
 *  The median.
 */
export interface MedianV1052  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1052.BlockNumber
    get(block: Block): Promise<(v1052.BlockNumber | undefined)>
}

export const update =  {
    /**
     *  Final hint to apply in the block. `None` means "same as parent".
     */
    v1052: new StorageType('FinalityTracker.Update', 'Optional', [], v1052.BlockNumber) as UpdateV1052,
}

/**
 *  Final hint to apply in the block. `None` means "same as parent".
 */
export interface UpdateV1052  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1052.BlockNumber | undefined)>
}

export const initialized =  {
    v1052: new StorageType('FinalityTracker.Initialized', 'Default', [], sts.boolean()) as InitializedV1052,
}

export interface InitializedV1052  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
