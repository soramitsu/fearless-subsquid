import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v2005 from '../v2005'
import * as v2023 from '../v2023'
import * as v9180 from '../v9180'
import * as v9420 from '../v9420'

export const proxies =  {
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    v2005: new StorageType('Proxy.Proxies', 'Default', [v2005.AccountId], sts.tuple(() => [sts.array(() => sts.tuple(() => [v2005.AccountId, v2005.ProxyType])), v2005.BalanceOf])) as ProxiesV2005,
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    v2023: new StorageType('Proxy.Proxies', 'Default', [v2023.AccountId], sts.tuple(() => [sts.array(() => v2023.ProxyDefinition), v2023.BalanceOf])) as ProxiesV2023,
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    v9180: new StorageType('Proxy.Proxies', 'Default', [v9180.AccountId32], sts.tuple(() => [sts.array(() => v9180.ProxyDefinition), sts.bigint()])) as ProxiesV9180,
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
export interface ProxiesV2005  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [[v2005.AccountId, v2005.ProxyType][], v2005.BalanceOf]
    get(block: Block, key: v2005.AccountId): Promise<([[v2005.AccountId, v2005.ProxyType][], v2005.BalanceOf] | undefined)>
    getMany(block: Block, keys: v2005.AccountId[]): Promise<([[v2005.AccountId, v2005.ProxyType][], v2005.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<v2005.AccountId[]>
    getKeys(block: Block, key: v2005.AccountId): Promise<v2005.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2005.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v2005.AccountId): AsyncIterable<v2005.AccountId[]>
    getPairs(block: Block): Promise<[k: v2005.AccountId, v: ([[v2005.AccountId, v2005.ProxyType][], v2005.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: v2005.AccountId): Promise<[k: v2005.AccountId, v: ([[v2005.AccountId, v2005.ProxyType][], v2005.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2005.AccountId, v: ([[v2005.AccountId, v2005.ProxyType][], v2005.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2005.AccountId): AsyncIterable<[k: v2005.AccountId, v: ([[v2005.AccountId, v2005.ProxyType][], v2005.BalanceOf] | undefined)][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxiesV2023  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v2023.ProxyDefinition[], v2023.BalanceOf]
    get(block: Block, key: v2023.AccountId): Promise<([v2023.ProxyDefinition[], v2023.BalanceOf] | undefined)>
    getMany(block: Block, keys: v2023.AccountId[]): Promise<([v2023.ProxyDefinition[], v2023.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<v2023.AccountId[]>
    getKeys(block: Block, key: v2023.AccountId): Promise<v2023.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2023.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v2023.AccountId): AsyncIterable<v2023.AccountId[]>
    getPairs(block: Block): Promise<[k: v2023.AccountId, v: ([v2023.ProxyDefinition[], v2023.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: v2023.AccountId): Promise<[k: v2023.AccountId, v: ([v2023.ProxyDefinition[], v2023.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2023.AccountId, v: ([v2023.ProxyDefinition[], v2023.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2023.AccountId): AsyncIterable<[k: v2023.AccountId, v: ([v2023.ProxyDefinition[], v2023.BalanceOf] | undefined)][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxiesV9180  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9180.ProxyDefinition[], bigint]
    get(block: Block, key: v9180.AccountId32): Promise<([v9180.ProxyDefinition[], bigint] | undefined)>
    getMany(block: Block, keys: v9180.AccountId32[]): Promise<([v9180.ProxyDefinition[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<v9180.AccountId32[]>
    getKeys(block: Block, key: v9180.AccountId32): Promise<v9180.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9180.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v9180.AccountId32): AsyncIterable<v9180.AccountId32[]>
    getPairs(block: Block): Promise<[k: v9180.AccountId32, v: ([v9180.ProxyDefinition[], bigint] | undefined)][]>
    getPairs(block: Block, key: v9180.AccountId32): Promise<[k: v9180.AccountId32, v: ([v9180.ProxyDefinition[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9180.AccountId32, v: ([v9180.ProxyDefinition[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9180.AccountId32): AsyncIterable<[k: v9180.AccountId32, v: ([v9180.ProxyDefinition[], bigint] | undefined)][]>
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
    v2023: new StorageType('Proxy.Announcements', 'Default', [v2023.AccountId], sts.tuple(() => [sts.array(() => v2023.ProxyAnnouncement), v2023.BalanceOf])) as AnnouncementsV2023,
}

/**
 *  The announcements made by the proxy (key).
 */
export interface AnnouncementsV2023  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v2023.ProxyAnnouncement[], v2023.BalanceOf]
    get(block: Block, key: v2023.AccountId): Promise<([v2023.ProxyAnnouncement[], v2023.BalanceOf] | undefined)>
    getMany(block: Block, keys: v2023.AccountId[]): Promise<([v2023.ProxyAnnouncement[], v2023.BalanceOf] | undefined)[]>
    getKeys(block: Block): Promise<v2023.AccountId[]>
    getKeys(block: Block, key: v2023.AccountId): Promise<v2023.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v2023.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v2023.AccountId): AsyncIterable<v2023.AccountId[]>
    getPairs(block: Block): Promise<[k: v2023.AccountId, v: ([v2023.ProxyAnnouncement[], v2023.BalanceOf] | undefined)][]>
    getPairs(block: Block, key: v2023.AccountId): Promise<[k: v2023.AccountId, v: ([v2023.ProxyAnnouncement[], v2023.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v2023.AccountId, v: ([v2023.ProxyAnnouncement[], v2023.BalanceOf] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v2023.AccountId): AsyncIterable<[k: v2023.AccountId, v: ([v2023.ProxyAnnouncement[], v2023.BalanceOf] | undefined)][]>
}
