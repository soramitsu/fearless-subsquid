import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const channelNonces =  {
    v7: new StorageType('SubstrateBridgeInboundChannel.ChannelNonces', 'Default', [v7.SubNetworkId], sts.bigint()) as ChannelNoncesV7,
}

export interface ChannelNoncesV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v7.SubNetworkId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v7.SubNetworkId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v7.SubNetworkId[]>
    getKeys(block: Block, key: v7.SubNetworkId): Promise<v7.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v7.SubNetworkId[]>
    getKeysPaged(pageSize: number, block: Block, key: v7.SubNetworkId): AsyncIterable<v7.SubNetworkId[]>
    getPairs(block: Block): Promise<[k: v7.SubNetworkId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v7.SubNetworkId): Promise<[k: v7.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v7.SubNetworkId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v7.SubNetworkId): AsyncIterable<[k: v7.SubNetworkId, v: (bigint | undefined)][]>
}
