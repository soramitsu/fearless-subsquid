import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'

export const members =  {
    /**
     *  The current membership, stored as an ordered Vec.
     */
    v0: new StorageType('Instance1Membership.Members', 'Default', [], sts.array(() => v0.AccountId)) as MembersV0,
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface MembersV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.AccountId[]
    get(block: Block): Promise<(v0.AccountId[] | undefined)>
}

export const prime =  {
    /**
     *  The current prime member, if one exists.
     */
    v0: new StorageType('Instance1Membership.Prime', 'Optional', [], v0.AccountId) as PrimeV0,
}

/**
 *  The current prime member, if one exists.
 */
export interface PrimeV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v0.AccountId | undefined)>
}
