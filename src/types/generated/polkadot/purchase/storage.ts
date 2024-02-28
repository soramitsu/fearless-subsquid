import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v15 from '../v15'

export const accounts =  {
    v15: new StorageType('Purchase.Accounts', 'Default', [v15.AccountId], v15.AccountStatus) as AccountsV15,
}

export interface AccountsV15  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v15.AccountStatus
    get(block: Block, key: v15.AccountId): Promise<(v15.AccountStatus | undefined)>
    getMany(block: Block, keys: v15.AccountId[]): Promise<(v15.AccountStatus | undefined)[]>
    getKeys(block: Block): Promise<v15.AccountId[]>
    getKeys(block: Block, key: v15.AccountId): Promise<v15.AccountId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v15.AccountId[]>
    getKeysPaged(pageSize: number, block: Block, key: v15.AccountId): AsyncIterable<v15.AccountId[]>
    getPairs(block: Block): Promise<[k: v15.AccountId, v: (v15.AccountStatus | undefined)][]>
    getPairs(block: Block, key: v15.AccountId): Promise<[k: v15.AccountId, v: (v15.AccountStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v15.AccountId, v: (v15.AccountStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v15.AccountId): AsyncIterable<[k: v15.AccountId, v: (v15.AccountStatus | undefined)][]>
}

export const paymentAccount =  {
    v15: new StorageType('Purchase.PaymentAccount', 'Default', [], v15.AccountId) as PaymentAccountV15,
}

export interface PaymentAccountV15  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v15.AccountId
    get(block: Block): Promise<(v15.AccountId | undefined)>
}

export const statement =  {
    v15: new StorageType('Purchase.Statement', 'Default', [], sts.bytes()) as StatementV15,
}

export interface StatementV15  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block): Promise<(Bytes | undefined)>
}

export const unlockBlock =  {
    v15: new StorageType('Purchase.UnlockBlock', 'Default', [], v15.BlockNumber) as UnlockBlockV15,
}

export interface UnlockBlockV15  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v15.BlockNumber
    get(block: Block): Promise<(v15.BlockNumber | undefined)>
}
