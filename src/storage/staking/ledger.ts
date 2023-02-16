import { UnknownVersionError } from '../../common/errors'
import { decodeId, encodeId } from '../../common/tools'
import { StakingLedgerStorage } from '../../types/generated/storage'
import { BlockContext as StorageContext } from '../../types/generated/support'

interface StorageData {
    stash: string
    active: bigint
}

async function getStorageData(
    ctx: StorageContext,
    accounts: string[]
): Promise<(StorageData | undefined)[] | undefined> {
    const storage = new StakingLedgerStorage(ctx)
    if (!storage.isExists) return undefined

    const u8s = accounts.map((a) => decodeId(a))

    if (storage.isV0) {
        return await storage.asV0
            .getMany(u8s)
            .then((data) => data.map((ledger) => ledger && { active: ledger.active, stash: encodeId(ledger.stash) }))
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export interface Ledger {
    stash: string
    active: bigint
}

export const ledger = {
    async get(ctx: StorageContext, controllerId: string): Promise<Ledger | undefined> {
        return await this.getMany(ctx, [controllerId]).then((data) => data?.[0])
    },
    async getMany(ctx: StorageContext, controllerIds: string[]): Promise<(Ledger | undefined)[] | undefined> {
        const data = await getStorageData(ctx, controllerIds)
        if (!data) return undefined

        return data
    },
}
