import { BlockContext, Call } from '../../types'
import { encodeId, getCallData, getOriginAccountId, isAdressSS58 } from '../../utils/entities'
import { calls } from '../../types/generated/merged'
import { createCallHistoryElement } from '../../utils/history'
import { logStartProcessingEvent } from '../../utils/logs'

export async function transferCallHandler(
	ctx: BlockContext,
	event: Call<'Balances.transfer'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

  const type = calls.balances.transfer
	const data = getCallData(ctx, type, event)

	const accountId = getOriginAccountId(ctx.call.origin)

	const historyData = {
		amount: data.amount,
		fee: ctx.extrinsic.fee,
		extrinsicIdx: ctx.extrinsic.id,
		fromId: accountId,
		toId: isAdressSS58(data.to) ? encodeId(data.to) : null,
	}

	createCallHistoryElement(ctx, event, historyData)
}

export async function transferKeepAliveCallHandler(
	ctx: BlockContext,
	event: Call<'Balances.transfer_keep_alive'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

  const type = calls.balances.transferKeepAlive
	const data = getCallData(ctx, type, event)

	const accountId = getOriginAccountId(ctx.call.origin)

	const historyData = {
		amount: data.amount,
		fee: ctx.extrinsic.fee,
		extrinsicIdx: ctx.extrinsic.id,
		fromId: accountId,
		toId: isAdressSS58(data.to) ? encodeId(data.to) : null,
	}

	createCallHistoryElement(ctx, event, historyData)
}

export async function transferAllowDeathCallHandler(
	ctx: BlockContext,
	event: Call<'Balances.transfer_allow_death'>
): Promise<void> {
	logStartProcessingEvent(ctx, event)

  const type = calls.balances.transferAllowDeath
	const data = getCallData(ctx, type, event)

	const accountId = getOriginAccountId(ctx.call.origin)

	const historyData = {
		amount: data.amount,
		fee: ctx.extrinsic.fee,
		extrinsicIdx: ctx.extrinsic.id,
		fromId: accountId,
		toId: isAdressSS58(data.to) ? encodeId(data.to) : null,
	}

	createCallHistoryElement(ctx, event, historyData)
}
