import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9090 from '../v9090'
import * as v9111 from '../v9111'
import * as v9420 from '../v9420'

export const downwardMessageQueues =  {
    /**
     *  The downward messages addressed for a certain para.
     */
    v9090: new StorageType('Dmp.DownwardMessageQueues', 'Default', [v9090.ParaId], sts.array(() => v9090.InboundDownwardMessage)) as DownwardMessageQueuesV9090,
    /**
     *  The downward messages addressed for a certain para.
     */
    v9111: new StorageType('Dmp.DownwardMessageQueues', 'Default', [v9111.Id], sts.array(() => v9111.InboundDownwardMessage)) as DownwardMessageQueuesV9111,
}

/**
 *  The downward messages addressed for a certain para.
 */
export interface DownwardMessageQueuesV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9090.InboundDownwardMessage[]
    get(block: Block, key: v9090.ParaId): Promise<(v9090.InboundDownwardMessage[] | undefined)>
    getMany(block: Block, keys: v9090.ParaId[]): Promise<(v9090.InboundDownwardMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v9090.ParaId[]>
    getKeys(block: Block, key: v9090.ParaId): Promise<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<v9090.ParaId[]>
    getPairs(block: Block): Promise<[k: v9090.ParaId, v: (v9090.InboundDownwardMessage[] | undefined)][]>
    getPairs(block: Block, key: v9090.ParaId): Promise<[k: v9090.ParaId, v: (v9090.InboundDownwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.ParaId, v: (v9090.InboundDownwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<[k: v9090.ParaId, v: (v9090.InboundDownwardMessage[] | undefined)][]>
}

/**
 *  The downward messages addressed for a certain para.
 */
export interface DownwardMessageQueuesV9111  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9111.InboundDownwardMessage[]
    get(block: Block, key: v9111.Id): Promise<(v9111.InboundDownwardMessage[] | undefined)>
    getMany(block: Block, keys: v9111.Id[]): Promise<(v9111.InboundDownwardMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v9111.Id[]>
    getKeys(block: Block, key: v9111.Id): Promise<v9111.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9111.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9111.Id): AsyncIterable<v9111.Id[]>
    getPairs(block: Block): Promise<[k: v9111.Id, v: (v9111.InboundDownwardMessage[] | undefined)][]>
    getPairs(block: Block, key: v9111.Id): Promise<[k: v9111.Id, v: (v9111.InboundDownwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9111.Id, v: (v9111.InboundDownwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9111.Id): AsyncIterable<[k: v9111.Id, v: (v9111.InboundDownwardMessage[] | undefined)][]>
}

export const downwardMessageQueueHeads =  {
    /**
     *  A mapping that stores the downward message queue MQC head for each para.
     * 
     *  Each link in this chain has a form:
     *  `(prev_head, B, H(M))`, where
     *  - `prev_head`: is the previous head hash or zero if none.
     *  - `B`: is the relay-chain block number in which a message was appended.
     *  - `H(M)`: is the hash of the message being appended.
     */
    v9090: new StorageType('Dmp.DownwardMessageQueueHeads', 'Default', [v9090.ParaId], v9090.Hash) as DownwardMessageQueueHeadsV9090,
}

/**
 *  A mapping that stores the downward message queue MQC head for each para.
 * 
 *  Each link in this chain has a form:
 *  `(prev_head, B, H(M))`, where
 *  - `prev_head`: is the previous head hash or zero if none.
 *  - `B`: is the relay-chain block number in which a message was appended.
 *  - `H(M)`: is the hash of the message being appended.
 */
export interface DownwardMessageQueueHeadsV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9090.Hash
    get(block: Block, key: v9090.ParaId): Promise<(v9090.Hash | undefined)>
    getMany(block: Block, keys: v9090.ParaId[]): Promise<(v9090.Hash | undefined)[]>
    getKeys(block: Block): Promise<v9090.ParaId[]>
    getKeys(block: Block, key: v9090.ParaId): Promise<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<v9090.ParaId[]>
    getPairs(block: Block): Promise<[k: v9090.ParaId, v: (v9090.Hash | undefined)][]>
    getPairs(block: Block, key: v9090.ParaId): Promise<[k: v9090.ParaId, v: (v9090.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.ParaId, v: (v9090.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<[k: v9090.ParaId, v: (v9090.Hash | undefined)][]>
}

export const deliveryFeeFactor =  {
    /**
     *  The number to multiply the base delivery fee by.
     */
    v9420: new StorageType('Dmp.DeliveryFeeFactor', 'Default', [v9420.Id], v9420.FixedU128) as DeliveryFeeFactorV9420,
}

/**
 *  The number to multiply the base delivery fee by.
 */
export interface DeliveryFeeFactorV9420  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9420.FixedU128
    get(block: Block, key: v9420.Id): Promise<(v9420.FixedU128 | undefined)>
    getMany(block: Block, keys: v9420.Id[]): Promise<(v9420.FixedU128 | undefined)[]>
    getKeys(block: Block): Promise<v9420.Id[]>
    getKeys(block: Block, key: v9420.Id): Promise<v9420.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9420.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9420.Id): AsyncIterable<v9420.Id[]>
    getPairs(block: Block): Promise<[k: v9420.Id, v: (v9420.FixedU128 | undefined)][]>
    getPairs(block: Block, key: v9420.Id): Promise<[k: v9420.Id, v: (v9420.FixedU128 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9420.Id, v: (v9420.FixedU128 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9420.Id): AsyncIterable<[k: v9420.Id, v: (v9420.FixedU128 | undefined)][]>
}
