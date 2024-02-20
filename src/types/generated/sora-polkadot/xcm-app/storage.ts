import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v10 from '../v10'

export const assetIdToMultilocation =  {
    v1: new StorageType('XCMApp.AssetIdToMultilocation', 'Optional', [v1.H256], v1.V1MultiLocation) as AssetIdToMultilocationV1,
    v10: new StorageType('XCMApp.AssetIdToMultilocation', 'Optional', [v10.H256], v10.V3MultiLocation) as AssetIdToMultilocationV10,
}

export interface AssetIdToMultilocationV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.H256): Promise<(v1.V1MultiLocation | undefined)>
    getMany(block: Block, keys: v1.H256[]): Promise<(v1.V1MultiLocation | undefined)[]>
}

export interface AssetIdToMultilocationV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10.H256): Promise<(v10.V3MultiLocation | undefined)>
    getMany(block: Block, keys: v10.H256[]): Promise<(v10.V3MultiLocation | undefined)[]>
}

export const multilocationToAssetId =  {
    v1: new StorageType('XCMApp.MultilocationToAssetId', 'Optional', [v1.V1MultiLocation], v1.H256) as MultilocationToAssetIdV1,
    v10: new StorageType('XCMApp.MultilocationToAssetId', 'Optional', [v10.V3MultiLocation], v10.H256) as MultilocationToAssetIdV10,
}

export interface MultilocationToAssetIdV1  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1.V1MultiLocation): Promise<(v1.H256 | undefined)>
    getMany(block: Block, keys: v1.V1MultiLocation[]): Promise<(v1.H256 | undefined)[]>
}

export interface MultilocationToAssetIdV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10.V3MultiLocation): Promise<(v10.H256 | undefined)>
    getMany(block: Block, keys: v10.V3MultiLocation[]): Promise<(v10.H256 | undefined)[]>
}

export const bridgeAssetTrap =  {
    /**
     *  Traps some amount of asset that should be sent to some Account
     *  An asset can be trapped if a message could not be added to the outbound channel, for example due to queue limit
     *  The trapped asset can be released by try_claim_bridge_asset root extrinsic
     */
    v10: new StorageType('XCMApp.BridgeAssetTrap', 'Optional', [sts.bigint()], v10.TrappedMessage) as BridgeAssetTrapV10,
}

/**
 *  Traps some amount of asset that should be sent to some Account
 *  An asset can be trapped if a message could not be added to the outbound channel, for example due to queue limit
 *  The trapped asset can be released by try_claim_bridge_asset root extrinsic
 */
export interface BridgeAssetTrapV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v10.TrappedMessage | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v10.TrappedMessage | undefined)[]>
}

export const bridgeAssetTrapNonce =  {
    /**
     *  Nonce for trapped message
     */
    v10: new StorageType('XCMApp.BridgeAssetTrapNonce', 'Default', [], sts.bigint()) as BridgeAssetTrapNonceV10,
}

/**
 *  Nonce for trapped message
 */
export interface BridgeAssetTrapNonceV10  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const assetMinimumAmount =  {
    /**
     *  Minimum amount of an asset that can be passed through incoming XCM message
     */
    v10: new StorageType('XCMApp.AssetMinimumAmount', 'Optional', [v10.V3MultiLocation], sts.bigint()) as AssetMinimumAmountV10,
}

/**
 *  Minimum amount of an asset that can be passed through incoming XCM message
 */
export interface AssetMinimumAmountV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10.V3MultiLocation): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v10.V3MultiLocation[]): Promise<(bigint | undefined)[]>
}

export const trappedDoneResult =  {
    /**
     *  Stores successful Done result of a message if the result could not be sent back to Sora
     */
    v10: new StorageType('XCMApp.TrappedDoneResult', 'Optional', [v10.H256], sts.unit()) as TrappedDoneResultV10,
}

/**
 *  Stores successful Done result of a message if the result could not be sent back to Sora
 */
export interface TrappedDoneResultV10  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v10.H256): Promise<(null | undefined)>
    getMany(block: Block, keys: v10.H256[]): Promise<(null | undefined)[]>
}
