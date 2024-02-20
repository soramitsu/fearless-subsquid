import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const beefyAuthorities =  {
    /**
     *  Details of current BEEFY authority set.
     */
    v1: new StorageType('BeefyMmr.BeefyAuthorities', 'Default', [], v1.BeefyAuthoritySet) as BeefyAuthoritiesV1,
}

/**
 *  Details of current BEEFY authority set.
 */
export interface BeefyAuthoritiesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.BeefyAuthoritySet
    get(block: Block): Promise<(v1.BeefyAuthoritySet | undefined)>
}

export const beefyNextAuthorities =  {
    /**
     *  Details of next BEEFY authority set.
     * 
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    v1: new StorageType('BeefyMmr.BeefyNextAuthorities', 'Default', [], v1.BeefyAuthoritySet) as BeefyNextAuthoritiesV1,
}

/**
 *  Details of next BEEFY authority set.
 * 
 *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
 */
export interface BeefyNextAuthoritiesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.BeefyAuthoritySet
    get(block: Block): Promise<(v1.BeefyAuthoritySet | undefined)>
}
