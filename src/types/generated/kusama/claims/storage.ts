import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1024 from '../v1024'
import * as v2005 from '../v2005'

export const claims =  {
    v1020: new StorageType('Claims.Claims', 'Optional', [v1020.EthereumAddress], v1020.BalanceOf) as ClaimsV1020,
}

export interface ClaimsV1020  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1020.EthereumAddress): Promise<(v1020.BalanceOf | undefined)>
    getMany(block: Block, keys: v1020.EthereumAddress[]): Promise<(v1020.BalanceOf | undefined)[]>
}

export const total =  {
    v1020: new StorageType('Claims.Total', 'Default', [], v1020.BalanceOf) as TotalV1020,
}

export interface TotalV1020  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1020.BalanceOf
    get(block: Block): Promise<(v1020.BalanceOf | undefined)>
}

export const vesting =  {
    /**
     *  Vesting schedule for a claim.
     *  First balance is the total amount that should be held for vesting.
     *  Second balance is how much should be unlocked per block.
     *  The block number is when the vesting should start.
     */
    v1024: new StorageType('Claims.Vesting', 'Optional', [v1024.EthereumAddress], sts.tuple(() => [v1024.BalanceOf, v1024.BalanceOf, v1024.BlockNumber])) as VestingV1024,
}

/**
 *  Vesting schedule for a claim.
 *  First balance is the total amount that should be held for vesting.
 *  Second balance is how much should be unlocked per block.
 *  The block number is when the vesting should start.
 */
export interface VestingV1024  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1024.EthereumAddress): Promise<([v1024.BalanceOf, v1024.BalanceOf, v1024.BlockNumber] | undefined)>
    getMany(block: Block, keys: v1024.EthereumAddress[]): Promise<([v1024.BalanceOf, v1024.BalanceOf, v1024.BlockNumber] | undefined)[]>
}

export const signing =  {
    /**
     *  The statement kind that must be signed, if any.
     */
    v2005: new StorageType('Claims.Signing', 'Optional', [v2005.EthereumAddress], v2005.StatementKind) as SigningV2005,
}

/**
 *  The statement kind that must be signed, if any.
 */
export interface SigningV2005  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2005.EthereumAddress): Promise<(v2005.StatementKind | undefined)>
    getMany(block: Block, keys: v2005.EthereumAddress[]): Promise<(v2005.StatementKind | undefined)[]>
    getKeys(block: Block): Promise<v2005.EthereumAddress[]>
    getKeys(block: Block, key: v2005.EthereumAddress): Promise<v2005.EthereumAddress[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2005.EthereumAddress[]>
    getKeysPaged(pageSize: number, block: Block, key: v2005.EthereumAddress): AsyncIterable<v2005.EthereumAddress[]>
    getPairs(block: Block): Promise<[k: v2005.EthereumAddress, v: (v2005.StatementKind | undefined)][]>
    getPairs(block: Block, key: v2005.EthereumAddress): Promise<[k: v2005.EthereumAddress, v: (v2005.StatementKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2005.EthereumAddress, v: (v2005.StatementKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2005.EthereumAddress): AsyncIterable<[k: v2005.EthereumAddress, v: (v2005.StatementKind | undefined)][]>
}

export const preclaims =  {
    /**
     *  Pre-claimed Ethereum accounts, by the Account ID that they are claimed to.
     */
    v2005: new StorageType('Claims.Preclaims', 'Optional', [v2005.AccountId], v2005.EthereumAddress) as PreclaimsV2005,
}

/**
 *  Pre-claimed Ethereum accounts, by the Account ID that they are claimed to.
 */
export interface PreclaimsV2005  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v2005.AccountId): Promise<(v2005.EthereumAddress | undefined)>
    getMany(block: Block, keys: v2005.AccountId[]): Promise<(v2005.EthereumAddress | undefined)[]>
    getKeys(block: Block): Promise<v2005.AccountId[]>
    getKeys(block: Block, key: v2005.AccountId): Promise<v2005.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2005.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v2005.AccountId): AsyncIterable<v2005.AccountId[]>
    getPairs(block: Block): Promise<[k: v2005.AccountId, v: (v2005.EthereumAddress | undefined)][]>
    getPairs(block: Block, key: v2005.AccountId): Promise<[k: v2005.AccountId, v: (v2005.EthereumAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2005.AccountId, v: (v2005.EthereumAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2005.AccountId): AsyncIterable<[k: v2005.AccountId, v: (v2005.EthereumAddress | undefined)][]>
}
