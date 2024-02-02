import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const authorities =  {
    /**
     *  The current authority set.
     */
    v1: new StorageType('Aura.Authorities', 'Default', [], sts.array(() => sts.bytes())) as AuthoritiesV1,
}

/**
 *  The current authority set.
 */
export interface AuthoritiesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<(Bytes[] | undefined)>
}

export const currentSlot =  {
    /**
     *  The current slot of this block.
     * 
     *  This will be set in `on_initialize`.
     */
    v1: new StorageType('Aura.CurrentSlot', 'Default', [], v1.Slot) as CurrentSlotV1,
}

/**
 *  The current slot of this block.
 * 
 *  This will be set in `on_initialize`.
 */
export interface CurrentSlotV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Slot
    get(block: Block): Promise<(v1.Slot | undefined)>
}
