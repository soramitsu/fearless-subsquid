import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface LastRuntimeUpgradeInfo {
    specVersion: number
    specName: string
}

export const LastRuntimeUpgradeInfo: sts.Type<LastRuntimeUpgradeInfo> = sts.struct(() => {
    return  {
        specVersion: sts.number(),
        specName: sts.string(),
    }
})
