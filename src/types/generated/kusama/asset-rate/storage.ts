import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1001000 from '../v1001000'

export const conversionRateToNative =  {
    /**
     *  Maps an asset to its fixed point representation in the native balance.
     * 
     *  E.g. `native_amount = asset_amount * ConversionRateToNative::<T>::get(asset_kind)`
     */
    v1001000: new StorageType('AssetRate.ConversionRateToNative', 'Optional', [v1001000.VersionedLocatableAsset], v1001000.FixedU128) as ConversionRateToNativeV1001000,
}

/**
 *  Maps an asset to its fixed point representation in the native balance.
 * 
 *  E.g. `native_amount = asset_amount * ConversionRateToNative::<T>::get(asset_kind)`
 */
export interface ConversionRateToNativeV1001000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1001000.VersionedLocatableAsset): Promise<(v1001000.FixedU128 | undefined)>
    getMany(block: Block, keys: v1001000.VersionedLocatableAsset[]): Promise<(v1001000.FixedU128 | undefined)[]>
    getKeys(block: Block): Promise<v1001000.VersionedLocatableAsset[]>
    getKeys(block: Block, key: v1001000.VersionedLocatableAsset): Promise<v1001000.VersionedLocatableAsset[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1001000.VersionedLocatableAsset[]>
    getKeysPaged(pageSize: number, block: Block, key: v1001000.VersionedLocatableAsset): AsyncIterable<v1001000.VersionedLocatableAsset[]>
    getPairs(block: Block): Promise<[k: v1001000.VersionedLocatableAsset, v: (v1001000.FixedU128 | undefined)][]>
    getPairs(block: Block, key: v1001000.VersionedLocatableAsset): Promise<[k: v1001000.VersionedLocatableAsset, v: (v1001000.FixedU128 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1001000.VersionedLocatableAsset, v: (v1001000.FixedU128 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1001000.VersionedLocatableAsset): AsyncIterable<[k: v1001000.VersionedLocatableAsset, v: (v1001000.FixedU128 | undefined)][]>
}
