import { UnknownVersionError } from '../../common/errors'
import { StakingErasStakersClippedStorage } from '../../types/generated/storage'
import { BlockContext as StorageContext } from '../../types/generated/support'
import { Exposure } from '../../types/generated/V0'

type StorageData = [k: [number, Uint8Array], v: Exposure][] | undefined
type StorageDataPromise = Promise<StorageData>

async function getStorageData(ctx: StorageContext, currentEraData: number): StorageDataPromise {
  const storage = new StakingErasStakersClippedStorage(ctx)

  if (!storage.isExists) return undefined

  if (storage.isV0) {
    return await storage.asV0.getPairs(currentEraData)
  } else {
    throw new UnknownVersionError(storage.constructor.name)
  }
}

const storageCache: {
  hash?: string
  value?: StorageData
} = {}

export async function getStakingErasStakersClipped(ctx: StorageContext, currentEraData: number): StorageDataPromise {
  if (storageCache.hash !== ctx.block.hash) {
    storageCache.hash = ctx.block.hash
    delete storageCache.value
  }

  if (!storageCache.value) {
    storageCache.value = await getStorageData(ctx, currentEraData)
  }

  return storageCache.value
}