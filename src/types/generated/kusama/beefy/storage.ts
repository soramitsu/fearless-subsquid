import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'

export const authorities =  {
    /**
     *  The current authorities set
     */
    v1000000: new StorageType('Beefy.Authorities', 'Default', [], sts.array(() => sts.bytes())) as AuthoritiesV1000000,
}

/**
 *  The current authorities set
 */
export interface AuthoritiesV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<(Bytes[] | undefined)>
}

export const validatorSetId =  {
    /**
     *  The current validator set id
     */
    v1000000: new StorageType('Beefy.ValidatorSetId', 'Default', [], sts.bigint()) as ValidatorSetIdV1000000,
}

/**
 *  The current validator set id
 */
export interface ValidatorSetIdV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const nextAuthorities =  {
    /**
     *  Authorities set scheduled to be used with the next session
     */
    v1000000: new StorageType('Beefy.NextAuthorities', 'Default', [], sts.array(() => sts.bytes())) as NextAuthoritiesV1000000,
}

/**
 *  Authorities set scheduled to be used with the next session
 */
export interface NextAuthoritiesV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<(Bytes[] | undefined)>
}

export const setIdSession =  {
    /**
     *  A mapping from BEEFY set ID to the index of the *most recent* session for which its
     *  members were responsible.
     * 
     *  This is only used for validating equivocation proofs. An equivocation proof must
     *  contains a key-ownership proof for a given session, therefore we need a way to tie
     *  together sessions and BEEFY set ids, i.e. we need to validate that a validator
     *  was the owner of a given key on a given session, and what the active set ID was
     *  during that session.
     * 
     *  TWOX-NOTE: `ValidatorSetId` is not under user control.
     */
    v1000000: new StorageType('Beefy.SetIdSession', 'Optional', [sts.bigint()], sts.number()) as SetIdSessionV1000000,
}

/**
 *  A mapping from BEEFY set ID to the index of the *most recent* session for which its
 *  members were responsible.
 * 
 *  This is only used for validating equivocation proofs. An equivocation proof must
 *  contains a key-ownership proof for a given session, therefore we need a way to tie
 *  together sessions and BEEFY set ids, i.e. we need to validate that a validator
 *  was the owner of a given key on a given session, and what the active set ID was
 *  during that session.
 * 
 *  TWOX-NOTE: `ValidatorSetId` is not under user control.
 */
export interface SetIdSessionV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(number | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (number | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (number | undefined)][]>
}

export const genesisBlock =  {
    /**
     *  Block number where BEEFY consensus is enabled/started.
     *  By changing this (through governance or sudo), BEEFY consensus is effectively
     *  restarted from the new block number.
     */
    v1000000: new StorageType('Beefy.GenesisBlock', 'Default', [], sts.option(() => sts.number())) as GenesisBlockV1000000,
}

/**
 *  Block number where BEEFY consensus is enabled/started.
 *  By changing this (through governance or sudo), BEEFY consensus is effectively
 *  restarted from the new block number.
 */
export interface GenesisBlockV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (number | undefined)
    get(block: Block): Promise<((number | undefined) | undefined)>
}
