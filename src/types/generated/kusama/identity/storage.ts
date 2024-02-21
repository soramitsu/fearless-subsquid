import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1030 from '../v1030'
import * as v1031 from '../v1031'
import * as v1032 from '../v1032'

export const identityOf =  {
    /**
     *  Information that is pertinent to identify the entity behind an account.
     */
    v1030: new StorageType('Sudo.IdentityOf', 'Optional', [v1030.AccountId], v1030.Registration) as IdentityOfV1030,
    /**
     *  Information that is pertinent to identify the entity behind an account.
     */
    v1032: new StorageType('Sudo.IdentityOf', 'Optional', [v1032.AccountId], v1032.Registration) as IdentityOfV1032,
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 */
export interface IdentityOfV1030  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1030.AccountId): Promise<(v1030.Registration | undefined)>
    getMany(block: Block, keys: v1030.AccountId[]): Promise<(v1030.Registration | undefined)[]>
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 */
export interface IdentityOfV1032  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1032.AccountId): Promise<(v1032.Registration | undefined)>
    getMany(block: Block, keys: v1032.AccountId[]): Promise<(v1032.Registration | undefined)[]>
}

export const subsOf =  {
    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts together with
     *  their "local" name (i.e. in the context of the identity).
     */
    v1030: new StorageType('Sudo.SubsOf', 'Default', [v1030.AccountId], sts.tuple(() => [v1030.BalanceOf, sts.array(() => sts.tuple(() => [v1030.AccountId, v1030.Data]))])) as SubsOfV1030,
    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     */
    v1031: new StorageType('Sudo.SubsOf', 'Default', [v1031.AccountId], sts.tuple(() => [v1031.BalanceOf, sts.array(() => v1031.AccountId)])) as SubsOfV1031,
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts together with
 *  their "local" name (i.e. in the context of the identity).
 */
export interface SubsOfV1030  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1030.BalanceOf, [v1030.AccountId, v1030.Data][]]
    get(block: Block, key: v1030.AccountId): Promise<([v1030.BalanceOf, [v1030.AccountId, v1030.Data][]] | undefined)>
    getMany(block: Block, keys: v1030.AccountId[]): Promise<([v1030.BalanceOf, [v1030.AccountId, v1030.Data][]] | undefined)[]>
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 */
export interface SubsOfV1031  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1031.BalanceOf, v1031.AccountId[]]
    get(block: Block, key: v1031.AccountId): Promise<([v1031.BalanceOf, v1031.AccountId[]] | undefined)>
    getMany(block: Block, keys: v1031.AccountId[]): Promise<([v1031.BalanceOf, v1031.AccountId[]] | undefined)[]>
}

export const registrars =  {
    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    v1030: new StorageType('Sudo.Registrars', 'Default', [], sts.array(() => sts.option(() => v1030.RegistrarInfo))) as RegistrarsV1030,
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface RegistrarsV1030  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1030.RegistrarInfo | undefined)[]
    get(block: Block): Promise<((v1030.RegistrarInfo | undefined)[] | undefined)>
}

export const superOf =  {
    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    v1031: new StorageType('Sudo.SuperOf', 'Optional', [v1031.AccountId], sts.tuple(() => [v1031.AccountId, v1031.Data])) as SuperOfV1031,
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface SuperOfV1031  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1031.AccountId): Promise<([v1031.AccountId, v1031.Data] | undefined)>
    getMany(block: Block, keys: v1031.AccountId[]): Promise<([v1031.AccountId, v1031.Data] | undefined)[]>
}
