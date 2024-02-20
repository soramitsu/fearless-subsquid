import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'

export const authorities =  {
    /**
     *  The current authorities set
     */
    v7: new StorageType('Beefy.Authorities', 'Default', [], sts.array(() => sts.bytes())) as AuthoritiesV7,
}

/**
 *  The current authorities set
 */
export interface AuthoritiesV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<(Bytes[] | undefined)>
}

export const validatorSetId =  {
    /**
     *  The current validator set id
     */
    v7: new StorageType('Beefy.ValidatorSetId', 'Default', [], sts.bigint()) as ValidatorSetIdV7,
}

/**
 *  The current validator set id
 */
export interface ValidatorSetIdV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const nextAuthorities =  {
    /**
     *  Authorities set scheduled to be used with the next session
     */
    v7: new StorageType('Beefy.NextAuthorities', 'Default', [], sts.array(() => sts.bytes())) as NextAuthoritiesV7,
}

/**
 *  Authorities set scheduled to be used with the next session
 */
export interface NextAuthoritiesV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<(Bytes[] | undefined)>
}
