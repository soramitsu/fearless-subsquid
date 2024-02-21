import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1050 from '../v1050'

export const members =  {
    /**
     *  The current membership, stored as an ordered Vec.
     */
    v1020: new StorageType('Instance1Membership.Members', 'Default', [], sts.array(() => v1020.AccountId)) as MembersV1020,
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface MembersV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.AccountId[]
    get(block: Block): Promise<(v1020.AccountId[] | undefined)>
}

export const prime =  {
    /**
     *  The current prime member, if one exists.
     */
    v1050: new StorageType('Instance1Membership.Prime', 'Optional', [], v1050.AccountId) as PrimeV1050,
}

/**
 *  The current prime member, if one exists.
 */
export interface PrimeV1050  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1050.AccountId | undefined)>
}
