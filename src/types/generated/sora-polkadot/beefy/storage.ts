import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const authorities =  {
    /**
     *  The current authorities set
     */
    v1: new StorageType('Beefy.Authorities', 'Default', [], sts.array(() => v1.Public)) as AuthoritiesV1,
}

/**
 *  The current authorities set
 */
export interface AuthoritiesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Public[]
    get(block: Block): Promise<(v1.Public[] | undefined)>
}

export const validatorSetId =  {
    /**
     *  The current validator set id
     */
    v1: new StorageType('Beefy.ValidatorSetId', 'Default', [], sts.bigint()) as ValidatorSetIdV1,
}

/**
 *  The current validator set id
 */
export interface ValidatorSetIdV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const nextAuthorities =  {
    /**
     *  Authorities set scheduled to be used with the next session
     */
    v1: new StorageType('Beefy.NextAuthorities', 'Default', [], sts.array(() => v1.Public)) as NextAuthoritiesV1,
}

/**
 *  Authorities set scheduled to be used with the next session
 */
export interface NextAuthoritiesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Public[]
    get(block: Block): Promise<(v1.Public[] | undefined)>
}
