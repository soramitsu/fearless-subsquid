import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v7 from '../v7'

export const assetIdToMultilocation =  {
    v7: new StorageType('XCMApp.AssetIdToMultilocation', 'Optional', [v7.H256], v7.V3MultiLocation) as AssetIdToMultilocationV7,
}

export interface AssetIdToMultilocationV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.H256): Promise<(v7.V3MultiLocation | undefined)>
    getMany(block: Block, keys: v7.H256[]): Promise<(v7.V3MultiLocation | undefined)[]>
}

export const multilocationToAssetId =  {
    v7: new StorageType('XCMApp.MultilocationToAssetId', 'Optional', [v7.V3MultiLocation], v7.H256) as MultilocationToAssetIdV7,
}

export interface MultilocationToAssetIdV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.V3MultiLocation): Promise<(v7.H256 | undefined)>
    getMany(block: Block, keys: v7.V3MultiLocation[]): Promise<(v7.H256 | undefined)[]>
}

export const bridgeAssetTrap =  {
    /**
     *  Traps some amount of asset that should be sent to some Account
     *  An asset can be trapped if a message could not be added to the outbound channel, for example due to queue limit
     *  The trapped asset can be released by try_claim_bridge_asset root extrinsic
     */
    v7: new StorageType('XCMApp.BridgeAssetTrap', 'Optional', [sts.bigint()], v7.TrappedMessage) as BridgeAssetTrapV7,
}

/**
 *  Traps some amount of asset that should be sent to some Account
 *  An asset can be trapped if a message could not be added to the outbound channel, for example due to queue limit
 *  The trapped asset can be released by try_claim_bridge_asset root extrinsic
 */
export interface BridgeAssetTrapV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v7.TrappedMessage | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v7.TrappedMessage | undefined)[]>
}

export const bridgeAssetTrapNonce =  {
    /**
     *  Nonce for trapped message
     */
    v7: new StorageType('XCMApp.BridgeAssetTrapNonce', 'Default', [], sts.bigint()) as BridgeAssetTrapNonceV7,
}

/**
 *  Nonce for trapped message
 */
export interface BridgeAssetTrapNonceV7  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const assetMinimumAmount =  {
    /**
     *  Minimum amount of an asset that can be passed through incoming XCM message
     */
    v7: new StorageType('XCMApp.AssetMinimumAmount', 'Optional', [v7.V3MultiLocation], sts.bigint()) as AssetMinimumAmountV7,
}

/**
 *  Minimum amount of an asset that can be passed through incoming XCM message
 */
export interface AssetMinimumAmountV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.V3MultiLocation): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v7.V3MultiLocation[]): Promise<(bigint | undefined)[]>
}

export const trappedDoneResult =  {
    /**
     *  Stores successful Done result of a message if the result could not be sent back to Sora
     */
    v7: new StorageType('XCMApp.TrappedDoneResult', 'Optional', [v7.H256], sts.unit()) as TrappedDoneResultV7,
}

/**
 *  Stores successful Done result of a message if the result could not be sent back to Sora
 */
export interface TrappedDoneResultV7  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v7.H256): Promise<(null | undefined)>
    getMany(block: Block, keys: v7.H256[]): Promise<(null | undefined)[]>
}
