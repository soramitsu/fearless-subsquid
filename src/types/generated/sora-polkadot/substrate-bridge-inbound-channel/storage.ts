import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v10 from '../v10'

export const channelNonces =  {
    v1: new StorageType('SubstrateBridgeInboundChannel.ChannelNonces', 'Default', [v1.SubNetworkId], sts.bigint()) as ChannelNoncesV1,
    v10: new StorageType('SubstrateBridgeInboundChannel.ChannelNonces', 'Default', [v10.SubNetworkId], sts.bigint()) as ChannelNoncesV10,
}

export interface ChannelNoncesV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v1.SubNetworkId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v1.SubNetworkId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v1.SubNetworkId[]>
    getKeys(block: Block, key: v1.SubNetworkId): Promise<v1.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v1.SubNetworkId): AsyncIterable<v1.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v1.SubNetworkId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v1.SubNetworkId): Promise<[k: v1.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1.SubNetworkId): AsyncIterable<[k: v1.SubNetworkId, v: (bigint | undefined)][]>
}

export interface ChannelNoncesV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v10.SubNetworkId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v10.SubNetworkId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v10.SubNetworkId[]>
    getKeys(block: Block, key: v10.SubNetworkId): Promise<v10.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v10.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v10.SubNetworkId): AsyncIterable<v10.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v10.SubNetworkId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v10.SubNetworkId): Promise<[k: v10.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v10.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v10.SubNetworkId): AsyncIterable<[k: v10.SubNetworkId, v: (bigint | undefined)][]>
}

export const rewardFraction =  {
    v1: new StorageType('SubstrateBridgeInboundChannel.RewardFraction', 'Default', [], v1.Perbill) as RewardFractionV1,
}

export interface RewardFractionV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Perbill
    get(block: Block): Promise<(v1.Perbill | undefined)>
}
