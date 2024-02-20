import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const parachainId =  {
    v1: new StorageType('ParachainInfo.ParachainId', 'Default', [], v1.Id) as ParachainIdV1,
}

export interface ParachainIdV1  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1.Id
    get(block: Block): Promise<(v1.Id | undefined)>
}
