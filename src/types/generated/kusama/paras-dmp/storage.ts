import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'

export const downwardMessageQueues =  {
    /**
     *  The downward messages addressed for a certain para.
     */
    v9010: new StorageType('Dmp.DownwardMessageQueues', 'Default', [v9010.ParaId], sts.array(() => v9010.InboundDownwardMessage)) as DownwardMessageQueuesV9010,
}

/**
 *  The downward messages addressed for a certain para.
 */
export interface DownwardMessageQueuesV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.InboundDownwardMessage[]
    get(block: Block, key: v9010.ParaId): Promise<(v9010.InboundDownwardMessage[] | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(v9010.InboundDownwardMessage[] | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (v9010.InboundDownwardMessage[] | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (v9010.InboundDownwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (v9010.InboundDownwardMessage[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (v9010.InboundDownwardMessage[] | undefined)][]>
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
    v9010: new StorageType('Dmp.DownwardMessageQueueHeads', 'Default', [v9010.ParaId], v9010.Hash) as DownwardMessageQueueHeadsV9010,
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
export interface DownwardMessageQueueHeadsV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.Hash
    get(block: Block, key: v9010.ParaId): Promise<(v9010.Hash | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(v9010.Hash | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (v9010.Hash | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (v9010.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (v9010.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (v9010.Hash | undefined)][]>
}
