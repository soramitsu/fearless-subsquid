import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'
import * as v9420 from '../v9420'

export const downwardMessageQueues =  {
    /**
     *  The downward messages addressed for a certain para.
     */
    v9110: new StorageType('Dmp.DownwardMessageQueues', 'Default', [v9110.Id], sts.array(() => v9110.InboundDownwardMessage)) as DownwardMessageQueuesV9110,
}

/**
 *  The downward messages addressed for a certain para.
 */
export interface DownwardMessageQueuesV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.InboundDownwardMessage[]
    get(block: Block, key: v9110.Id): Promise<(v9110.InboundDownwardMessage[] | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(v9110.InboundDownwardMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (v9110.InboundDownwardMessage[] | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (v9110.InboundDownwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (v9110.InboundDownwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (v9110.InboundDownwardMessage[] | undefined)][]>
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
    v9110: new StorageType('Dmp.DownwardMessageQueueHeads', 'Default', [v9110.Id], v9110.H256) as DownwardMessageQueueHeadsV9110,
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
export interface DownwardMessageQueueHeadsV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.H256
    get(block: Block, key: v9110.Id): Promise<(v9110.H256 | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(v9110.H256 | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (v9110.H256 | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (v9110.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (v9110.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (v9110.H256 | undefined)][]>
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
