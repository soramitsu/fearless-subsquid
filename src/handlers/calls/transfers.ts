import { BlockContext, Call } from '../../types'
import { getCallData } from '../../utils/entities'
import { calls } from '../../types/generated/merged'
import { createCallHistoryElement } from '../../utils/history'
import { logStartProcessingCall } from '../../utils/logs'
import { toAddress } from '../../utils'
import { Transfer } from '../../model'

export async function transferCallHandler(
	ctx: BlockContext,
	call: Call<'Balances.transfer'>
): Promise<void> {
	logStartProcessingCall(ctx, call)

  const type = calls.balances.transfer
	const data = getCallData(ctx, type, call)

	const amount = data.value.toString()
	const to = toAddress(typeof data.dest === 'string' ? data.dest : 'value' in data?.dest ? data.dest.value : data.dest.__kind)
	const signatureFrom = call?.extrinsic?.signature?.address as any
	const from = toAddress(typeof signatureFrom === 'string' ? signatureFrom : 'value' in signatureFrom ? signatureFrom.value : signatureFrom)

	const transfer = new Transfer({
    amount,
		to,
		from,
		fee: null
		// fee: call?.extrinsic,
  })

	await createCallHistoryElement(ctx, call, { transfer, address: from })
	createCallHistoryElement(ctx, call, { transfer, address: to })
}

export async function transferKeepAliveCallHandler(
	ctx: BlockContext,
	call: Call<'Balances.transfer_keep_alive'>
): Promise<void> {
	logStartProcessingCall(ctx, call)

  const type = calls.balances.transferKeepAlive
	const data = getCallData(ctx, type, call)

	const amount = data.value.toString()

	const to = toAddress(typeof data.dest === 'string' ? data.dest : 'value' in data?.dest ? data.dest.value : data.dest.__kind)
	const signatureFrom = call?.extrinsic?.signature?.address as any
	const from = toAddress(typeof signatureFrom === 'string' ? signatureFrom : 'value' in signatureFrom ? signatureFrom.value : signatureFrom)

	const transfer = new Transfer({
    amount,
		from,
		fee: null
		// fee: call?.extrinsic,
  })

	await createCallHistoryElement(ctx, call, { transfer, address: from })
	createCallHistoryElement(ctx, call, { transfer, address: to })
}

export async function transferAllowDeathCallHandler(
	ctx: BlockContext,
	call: Call<'Balances.transfer_allow_death'>
): Promise<void> {
	logStartProcessingCall(ctx, call)

  const type = calls.balances.transferAllowDeath
	const data = getCallData(ctx, type, call)

	const amount = data.value.toString()

	const to = toAddress('value' in data?.dest ? data.dest.value : data.dest.__kind)
	const signatureFrom = call?.extrinsic?.signature?.address as any
	const from = toAddress(typeof signatureFrom === 'string' ? signatureFrom : 'value' in signatureFrom ? signatureFrom.value : signatureFrom)

	const transfer = new Transfer({
    amount,
		to,
		from,
		fee: null
		// fee: call?.extrinsic,
  })

	await createCallHistoryElement(ctx, call, { transfer, address: from })
	createCallHistoryElement(ctx, call, { transfer, address: to })
}
