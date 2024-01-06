import { UnknownVersionError } from '../../../common/errors'
import { encodeId, getOriginAccountId, isAdressSS58 } from '../../../common/tools'
import { BalancesTransferAllowDeathCall } from '../../../types/generated/calls'
import { CallContext, CallHandlerContext } from '../../types/contexts'
import { saveTransfer } from '../../util/entities'

interface EventData {
    to: Uint8Array | null
    amount: bigint
}

function getCallData(ctx: CallContext): EventData | undefined {
    const call = new BalancesTransferAllowDeathCall(ctx)
    if (call.isV9420) {
        const { dest, value } = call.asV9420
        return {
            to: dest.value,
            amount: value,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

export async function handleTransferAllowDeath(ctx: CallHandlerContext) {
    const data = getCallData(ctx)
    if (!data) return

    const accountId = getOriginAccountId(ctx.call.origin)
    if (!accountId) return

    const toId = data.to !== null && isAdressSS58(data.to) ? encodeId(data.to) : null;

    await saveTransfer(ctx, {
        id: ctx.call.id,
        extrinsicHash: ctx.extrinsic.hash,
        timestamp: ctx.block.timestamp,
        blockNumber: ctx.block.height,
        fromId: accountId,
        toId: toId,
        amount: data.amount,
        success: ctx.call.success,
        extrinsicIdx: ctx.extrinsic.id,
        fee: ctx.extrinsic.fee,
    })
}