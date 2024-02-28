import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v5 from '../v5'
import * as v23 from '../v23'
import * as v9110 from '../v9110'
import * as v9420 from '../v9420'

export const proxies =  {
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    v5: new StorageType('Proxy.Proxies', 'Default', [v5.AccountId], sts.tuple(() => [sts.array(() => sts.tuple(() => [v5.AccountId, v5.ProxyType])), v5.BalanceOf])) as ProxiesV5,
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    v23: new StorageType('Proxy.Proxies', 'Default', [v23.AccountId], sts.tuple(() => [sts.array(() => v23.ProxyDefinition), v23.BalanceOf])) as ProxiesV23,
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    v9110: new StorageType('Proxy.Proxies', 'Default', [v9110.AccountId32], sts.tuple(() => [sts.array(() => v9110.ProxyDefinition), sts.bigint()])) as ProxiesV9110,
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    v9420: new StorageType('Proxy.Proxies', 'Default', [v9420.AccountId32], sts.tuple(() => [sts.array(() => v9420.ProxyDefinition), sts.bigint()])) as ProxiesV9420,
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxiesV5  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [[v5.AccountId, v5.ProxyType][], v5.BalanceOf]
    get(block: Block, key: v5.AccountId): Promise<([[v5.AccountId, v5.ProxyType][], v5.BalanceOf] | undefined)>
    getMany(block: Block, keys: v5.AccountId[]): Promise<([[v5.AccountId, v5.ProxyType][], v5.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<v5.AccountId[]>
    getKeys(block: Block, key: v5.AccountId): Promise<v5.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v5.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v5.AccountId): AsyncIterable<v5.AccountId[]>
    getPairs(block: Block): Promise<[k: v5.AccountId, v: ([[v5.AccountId, v5.ProxyType][], v5.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: v5.AccountId): Promise<[k: v5.AccountId, v: ([[v5.AccountId, v5.ProxyType][], v5.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v5.AccountId, v: ([[v5.AccountId, v5.ProxyType][], v5.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v5.AccountId): AsyncIterable<[k: v5.AccountId, v: ([[v5.AccountId, v5.ProxyType][], v5.BalanceOf] | undefined)][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxiesV23  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v23.ProxyDefinition[], v23.BalanceOf]
    get(block: Block, key: v23.AccountId): Promise<([v23.ProxyDefinition[], v23.BalanceOf] | undefined)>
    getMany(block: Block, keys: v23.AccountId[]): Promise<([v23.ProxyDefinition[], v23.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<v23.AccountId[]>
    getKeys(block: Block, key: v23.AccountId): Promise<v23.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v23.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v23.AccountId): AsyncIterable<v23.AccountId[]>
    getPairs(block: Block): Promise<[k: v23.AccountId, v: ([v23.ProxyDefinition[], v23.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: v23.AccountId): Promise<[k: v23.AccountId, v: ([v23.ProxyDefinition[], v23.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v23.AccountId, v: ([v23.ProxyDefinition[], v23.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v23.AccountId): AsyncIterable<[k: v23.AccountId, v: ([v23.ProxyDefinition[], v23.BalanceOf] | undefined)][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxiesV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9110.ProxyDefinition[], bigint]
    get(block: Block, key: v9110.AccountId32): Promise<([v9110.ProxyDefinition[], bigint] | undefined)>
    getMany(block: Block, keys: v9110.AccountId32[]): Promise<([v9110.ProxyDefinition[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<v9110.AccountId32[]>
    getKeys(block: Block, key: v9110.AccountId32): Promise<v9110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.AccountId32): AsyncIterable<v9110.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9110.AccountId32, v: ([v9110.ProxyDefinition[], bigint] | undefined)][]>
    getPairs(block: Block, key: v9110.AccountId32): Promise<[k: v9110.AccountId32, v: ([v9110.ProxyDefinition[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.AccountId32, v: ([v9110.ProxyDefinition[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.AccountId32): AsyncIterable<[k: v9110.AccountId32, v: ([v9110.ProxyDefinition[], bigint] | undefined)][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxiesV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9420.ProxyDefinition[], bigint]
    get(block: Block, key: v9420.AccountId32): Promise<([v9420.ProxyDefinition[], bigint] | undefined)>
    getMany(block: Block, keys: v9420.AccountId32[]): Promise<([v9420.ProxyDefinition[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<v9420.AccountId32[]>
    getKeys(block: Block, key: v9420.AccountId32): Promise<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<v9420.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9420.AccountId32, v: ([v9420.ProxyDefinition[], bigint] | undefined)][]>
    getPairs(block: Block, key: v9420.AccountId32): Promise<[k: v9420.AccountId32, v: ([v9420.ProxyDefinition[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.AccountId32, v: ([v9420.ProxyDefinition[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.AccountId32): AsyncIterable<[k: v9420.AccountId32, v: ([v9420.ProxyDefinition[], bigint] | undefined)][]>
}

export const announcements =  {
    /**
     *  The announcements made by the proxy (key).
     */
    v23: new StorageType('Proxy.Announcements', 'Default', [v23.AccountId], sts.tuple(() => [sts.array(() => v23.ProxyAnnouncement), v23.BalanceOf])) as AnnouncementsV23,
}

/**
 *  The announcements made by the proxy (key).
 */
export interface AnnouncementsV23  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v23.ProxyAnnouncement[], v23.BalanceOf]
    get(block: Block, key: v23.AccountId): Promise<([v23.ProxyAnnouncement[], v23.BalanceOf] | undefined)>
    getMany(block: Block, keys: v23.AccountId[]): Promise<([v23.ProxyAnnouncement[], v23.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<v23.AccountId[]>
    getKeys(block: Block, key: v23.AccountId): Promise<v23.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v23.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v23.AccountId): AsyncIterable<v23.AccountId[]>
    getPairs(block: Block): Promise<[k: v23.AccountId, v: ([v23.ProxyAnnouncement[], v23.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: v23.AccountId): Promise<[k: v23.AccountId, v: ([v23.ProxyAnnouncement[], v23.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v23.AccountId, v: ([v23.ProxyAnnouncement[], v23.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v23.AccountId): AsyncIterable<[k: v23.AccountId, v: ([v23.ProxyAnnouncement[], v23.BalanceOf] | undefined)][]>
}
