import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'

export const recentHints =  {
    /**
     *  Recent hints.
     */
    v0: new StorageType('FinalityTracker.RecentHints', 'Default', [], sts.array(() => v0.BlockNumber)) as RecentHintsV0,
}

/**
 *  Recent hints.
 */
export interface RecentHintsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.BlockNumber[]
    get(block: Block): Promise<(v0.BlockNumber[] | undefined)>
}

export const orderedHints =  {
    /**
     *  Ordered recent hints.
     */
    v0: new StorageType('FinalityTracker.OrderedHints', 'Default', [], sts.array(() => v0.BlockNumber)) as OrderedHintsV0,
}

/**
 *  Ordered recent hints.
 */
export interface OrderedHintsV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.BlockNumber[]
    get(block: Block): Promise<(v0.BlockNumber[] | undefined)>
}

export const median =  {
    /**
     *  The median.
     */
    v0: new StorageType('FinalityTracker.Median', 'Default', [], v0.BlockNumber) as MedianV0,
}

/**
 *  The median.
 */
export interface MedianV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.BlockNumber
    get(block: Block): Promise<(v0.BlockNumber | undefined)>
}

export const update =  {
    /**
     *  Final hint to apply in the block. `None` means "same as parent".
     */
    v0: new StorageType('FinalityTracker.Update', 'Optional', [], v0.BlockNumber) as UpdateV0,
}

/**
 *  Final hint to apply in the block. `None` means "same as parent".
 */
export interface UpdateV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.BlockNumber | undefined)>
}

export const initialized =  {
    v0: new StorageType('FinalityTracker.Initialized', 'Default', [], sts.boolean()) as InitializedV0,
}

export interface InitializedV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
