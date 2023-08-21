import { UnknownVersionError } from '../../../common/errors'
import { encodeId, getOriginAccountId, isAddressS58 } from '../../../common/tools'
import { BalancesTransferKeepAliveCall } from '../../../types/generated/calls'
import { CallContext, CallHandlerContext } from '../../types/contexts'
import { saveTransfer } from '../../util/entities'

interface EventData {
    to: Uint8Array
    amount: bigint
}


function getCallData(ctx: CallContext): EventData | undefined {
    const call = new BalancesTransferKeepAliveCall(ctx)

    if (call.isV0) {
        const { dest, value } = call.asV0
        return {
            to: dest as Uint8Array,
            amount: value,
        }
    } else if (call.isV28) {
        const { dest, value } = call.asV28
        return {
            to: dest.value as Uint8Array,
            amount: value,
        }
    } else if (call.isV9110) {
        const { dest, value } = call.asV9110
        return {
            to: dest.value as Uint8Array,
            amount: value,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

export async function handleTransferKeepAlive(ctx: CallHandlerContext) {
    const data = getCallData(ctx)
    if (!data) return

    const accountId = getOriginAccountId(ctx.call.origin)
    if (!accountId) return

    await saveTransfer(ctx, {
        id: ctx.call.id,
        extrinsicHash: ctx.extrinsic.hash,
        timestamp: ctx.block.timestamp,
        blockNumber: ctx.block.height,
        fromId: accountId,
        toId: isAddressS58(data.to) ? encodeId(data.to) : null,
        amount: data.amount,
        success: ctx.call.success,
        extrinsicIdx: ctx.extrinsic.id,
        fee: ctx.extrinsic.fee,
    })
}
