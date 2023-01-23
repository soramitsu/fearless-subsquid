import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v49 from './v49'
import * as v200 from './v200'
import * as v1001 from './v1001'
import * as v1502 from './v1502'

export class ParachainStakingDelegatorStateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'DelegatorState'
    }

    /**
     *  Get delegator state associated with an account if account is delegating else None
     */
    get isV1001(): boolean {
        return this.getTypeHash() === '03dfb3b8e1ca16deb35d7040cc81f72b135e75c4caeea578cfc2294e1f1f41ad'
    }

    /**
     *  Get delegator state associated with an account if account is delegating else None
     */
    get asV1001(): ParachainStakingDelegatorStateStorageV1001 {
        assert(this.isV1001)
        return this as any
    }

    /**
     *  Get delegator state associated with an account if account is delegating else None
     */
    get isV1502(): boolean {
        return this.getTypeHash() === '637263cfee3190d24faafd4e41f925a782ec1a9b5d80de08bd6ae287d0f0a10a'
    }

    /**
     *  Get delegator state associated with an account if account is delegating else None
     */
    get asV1502(): ParachainStakingDelegatorStateStorageV1502 {
        assert(this.isV1502)
        return this as any
    }
}

/**
 *  Get delegator state associated with an account if account is delegating else None
 */
export interface ParachainStakingDelegatorStateStorageV1001 {
    get(key: Uint8Array): Promise<(v1001.Delegator | undefined)>
    getAll(): Promise<v1001.Delegator[]>
    getMany(keys: Uint8Array[]): Promise<(v1001.Delegator | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001.Delegator][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001.Delegator][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001.Delegator][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001.Delegator][]>
}

/**
 *  Get delegator state associated with an account if account is delegating else None
 */
export interface ParachainStakingDelegatorStateStorageV1502 {
    get(key: Uint8Array): Promise<(v1502.Delegator | undefined)>
    getAll(): Promise<v1502.Delegator[]>
    getMany(keys: Uint8Array[]): Promise<(v1502.Delegator | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1502.Delegator][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1502.Delegator][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1502.Delegator][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1502.Delegator][]>
}

export class ParachainStakingNominatorStateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'NominatorState'
    }

    /**
     *  Get nominator state associated with an account if account is nominating else None
     */
    get isV49(): boolean {
        return this.getTypeHash() === 'f801fe87581f7dbb6db044ddd5a7adbe0d0ea1596ad42a8ccd22aa28f6be3e8f'
    }

    /**
     *  Get nominator state associated with an account if account is nominating else None
     */
    get asV49(): ParachainStakingNominatorStateStorageV49 {
        assert(this.isV49)
        return this as any
    }
}

/**
 *  Get nominator state associated with an account if account is nominating else None
 */
export interface ParachainStakingNominatorStateStorageV49 {
    get(key: Uint8Array): Promise<(v49.Nominator | undefined)>
    getAll(): Promise<v49.Nominator[]>
    getMany(keys: Uint8Array[]): Promise<(v49.Nominator | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v49.Nominator][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v49.Nominator][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v49.Nominator][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v49.Nominator][]>
}

export class ParachainStakingNominatorState2Storage extends StorageBase {
    protected getPrefix() {
        return 'ParachainStaking'
    }

    protected getName() {
        return 'NominatorState2'
    }

    /**
     *  Get nominator state associated with an account if account is nominating else None
     */
    get isV200(): boolean {
        return this.getTypeHash() === 'adc9b2765bcd5aa9c2ac9f93cd108b87d508a8d5494c318bf18ee6f4b599b8ed'
    }

    /**
     *  Get nominator state associated with an account if account is nominating else None
     */
    get asV200(): ParachainStakingNominatorState2StorageV200 {
        assert(this.isV200)
        return this as any
    }

    /**
     *  DEPRECATED in favor of DelegatorState
     *  Get nominator state associated with an account if account is nominating else None
     */
    get isV1001(): boolean {
        return this.getTypeHash() === 'c33bf4fdf125c8070ffd27253f9a811a9a2b244a0af652bf531999872325e904'
    }

    /**
     *  DEPRECATED in favor of DelegatorState
     *  Get nominator state associated with an account if account is nominating else None
     */
    get asV1001(): ParachainStakingNominatorState2StorageV1001 {
        assert(this.isV1001)
        return this as any
    }
}

/**
 *  Get nominator state associated with an account if account is nominating else None
 */
export interface ParachainStakingNominatorState2StorageV200 {
    get(key: Uint8Array): Promise<(v200.Nominator2 | undefined)>
    getAll(): Promise<v200.Nominator2[]>
    getMany(keys: Uint8Array[]): Promise<(v200.Nominator2 | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v200.Nominator2][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v200.Nominator2][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v200.Nominator2][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v200.Nominator2][]>
}

/**
 *  DEPRECATED in favor of DelegatorState
 *  Get nominator state associated with an account if account is nominating else None
 */
export interface ParachainStakingNominatorState2StorageV1001 {
    get(key: Uint8Array): Promise<(v1001.Nominator2 | undefined)>
    getAll(): Promise<v1001.Nominator2[]>
    getMany(keys: Uint8Array[]): Promise<(v1001.Nominator2 | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1001.Nominator2][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1001.Nominator2][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1001.Nominator2][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1001.Nominator2][]>
}
