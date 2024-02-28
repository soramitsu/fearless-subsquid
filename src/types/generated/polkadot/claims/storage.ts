import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v0 from '../v0'

export const claims =  {
    v0: new StorageType('Claims.Claims', 'Optional', [v0.EthereumAddress], v0.BalanceOf) as ClaimsV0,
}

export interface ClaimsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.EthereumAddress): Promise<(v0.BalanceOf | undefined)>
    getMany(block: Block, keys: v0.EthereumAddress[]): Promise<(v0.BalanceOf | undefined)[]>
    getKeys(block: Block): Promise<v0.EthereumAddress[]>
    getKeys(block: Block, key: v0.EthereumAddress): Promise<v0.EthereumAddress[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.EthereumAddress[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.EthereumAddress): AsyncIterable<v0.EthereumAddress[]>
    getPairs(block: Block): Promise<[k: v0.EthereumAddress, v: (v0.BalanceOf | undefined)][]>
    getPairs(block: Block, key: v0.EthereumAddress): Promise<[k: v0.EthereumAddress, v: (v0.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.EthereumAddress, v: (v0.BalanceOf | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.EthereumAddress): AsyncIterable<[k: v0.EthereumAddress, v: (v0.BalanceOf | undefined)][]>
}

export const total =  {
    v0: new StorageType('Claims.Total', 'Default', [], v0.BalanceOf) as TotalV0,
}

export interface TotalV0  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v0.BalanceOf
    get(block: Block): Promise<(v0.BalanceOf | undefined)>
}

export const vesting =  {
    /**
     *  Vesting schedule for a claim.
     *  First balance is the total amount that should be held for vesting.
     *  Second balance is how much should be unlocked per block.
     *  The block number is when the vesting should start.
     */
    v0: new StorageType('Claims.Vesting', 'Optional', [v0.EthereumAddress], sts.tuple(() => [v0.BalanceOf, v0.BalanceOf, v0.BlockNumber])) as VestingV0,
}

/**
 *  Vesting schedule for a claim.
 *  First balance is the total amount that should be held for vesting.
 *  Second balance is how much should be unlocked per block.
 *  The block number is when the vesting should start.
 */
export interface VestingV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.EthereumAddress): Promise<([v0.BalanceOf, v0.BalanceOf, v0.BlockNumber] | undefined)>
    getMany(block: Block, keys: v0.EthereumAddress[]): Promise<([v0.BalanceOf, v0.BalanceOf, v0.BlockNumber] | undefined)[]>
    getKeys(block: Block): Promise<v0.EthereumAddress[]>
    getKeys(block: Block, key: v0.EthereumAddress): Promise<v0.EthereumAddress[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.EthereumAddress[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.EthereumAddress): AsyncIterable<v0.EthereumAddress[]>
    getPairs(block: Block): Promise<[k: v0.EthereumAddress, v: ([v0.BalanceOf, v0.BalanceOf, v0.BlockNumber] | undefined)][]>
    getPairs(block: Block, key: v0.EthereumAddress): Promise<[k: v0.EthereumAddress, v: ([v0.BalanceOf, v0.BalanceOf, v0.BlockNumber] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.EthereumAddress, v: ([v0.BalanceOf, v0.BalanceOf, v0.BlockNumber] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.EthereumAddress): AsyncIterable<[k: v0.EthereumAddress, v: ([v0.BalanceOf, v0.BalanceOf, v0.BlockNumber] | undefined)][]>
}

export const signing =  {
    /**
     *  The statement kind that must be signed, if any.
     */
    v0: new StorageType('Claims.Signing', 'Optional', [v0.EthereumAddress], v0.StatementKind) as SigningV0,
}

/**
 *  The statement kind that must be signed, if any.
 */
export interface SigningV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.EthereumAddress): Promise<(v0.StatementKind | undefined)>
    getMany(block: Block, keys: v0.EthereumAddress[]): Promise<(v0.StatementKind | undefined)[]>
    getKeys(block: Block): Promise<v0.EthereumAddress[]>
    getKeys(block: Block, key: v0.EthereumAddress): Promise<v0.EthereumAddress[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.EthereumAddress[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.EthereumAddress): AsyncIterable<v0.EthereumAddress[]>
    getPairs(block: Block): Promise<[k: v0.EthereumAddress, v: (v0.StatementKind | undefined)][]>
    getPairs(block: Block, key: v0.EthereumAddress): Promise<[k: v0.EthereumAddress, v: (v0.StatementKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.EthereumAddress, v: (v0.StatementKind | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.EthereumAddress): AsyncIterable<[k: v0.EthereumAddress, v: (v0.StatementKind | undefined)][]>
}

export const preclaims =  {
    /**
     *  Pre-claimed Ethereum accounts, by the Account ID that they are claimed to.
     */
    v0: new StorageType('Claims.Preclaims', 'Optional', [v0.AccountId], v0.EthereumAddress) as PreclaimsV0,
}

/**
 *  Pre-claimed Ethereum accounts, by the Account ID that they are claimed to.
 */
export interface PreclaimsV0  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v0.AccountId): Promise<(v0.EthereumAddress | undefined)>
    getMany(block: Block, keys: v0.AccountId[]): Promise<(v0.EthereumAddress | undefined)[]>
    getKeys(block: Block): Promise<v0.AccountId[]>
    getKeys(block: Block, key: v0.AccountId): Promise<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v0.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<v0.AccountId[]>
    getPairs(block: Block): Promise<[k: v0.AccountId, v: (v0.EthereumAddress | undefined)][]>
    getPairs(block: Block, key: v0.AccountId): Promise<[k: v0.AccountId, v: (v0.EthereumAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v0.AccountId, v: (v0.EthereumAddress | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v0.AccountId): AsyncIterable<[k: v0.AccountId, v: (v0.EthereumAddress | undefined)][]>
}
