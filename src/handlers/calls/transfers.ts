import { BlockContext, Call } from '../../types'
import { encodeId, getCallData, getOriginAccountId, isAdressSS58 } from '../../utils/entities'
import { calls } from '../../types/generated/merged'
import { createCallHistoryElement } from '../../utils/history'
import { logStartProcessingCall } from '../../utils/logs'

export async function transferCallHandler(
	ctx: BlockContext,
	call: Call<'Balances.transfer'>
): Promise<void> {
	logStartProcessingCall(ctx, call)

  const type = calls.balances.transfer
	const data = getCallData(ctx, type, call)

	const accountId = getOriginAccountId(ctx.call.origin)

	const historyData = {
		amount: data.amount,
		// fee: ctx.extrinsic.fee,
		extrinsicIdx: ctx.extrinsic.id,
		fromId: accountId,
		toId: isAdressSS58(data.to) ? encodeId(data.to) : null,
	}

	createCallHistoryElement(ctx, call, historyData)
}

export async function transferKeepAliveCallHandler(
	ctx: BlockContext,
	call: Call<'Balances.transfer_keep_alive'>
): Promise<void> {
	logStartProcessingCall(ctx, call)

  const type = calls.balances.transferKeepAlive
	const data = getCallData(ctx, type, call)

	const accountId = getOriginAccountId(ctx.call.origin)

	const historyData = {
		amount: data.amount,
		// fee: ctx.extrinsic.fee,
		extrinsicIdx: ctx.extrinsic.id,
		fromId: accountId,
		toId: isAdressSS58(data.to) ? encodeId(data.to) : null,
	}

	createCallHistoryElement(ctx, call, historyData)
}

export async function transferAllowDeathCallHandler(
	ctx: BlockContext,
	call: Call<'Balances.transfer_allow_death'>
): Promise<void> {
	logStartProcessingCall(ctx, call)

  const type = calls.balances.transferAllowDeath
	const data = getCallData(ctx, type, call)

	const accountId = getOriginAccountId(ctx.call.origin)

	const historyData = {
		amount: data.amount,
		// fee: ctx.extrinsic.fee,
		extrinsicIdx: ctx.extrinsic.id,
		fromId: accountId,
		toId: isAdressSS58(data.to) ? encodeId(data.to) : null,
	}

	createCallHistoryElement(ctx, call, historyData)
}
