import * as polkadotCalls from '../../polkadot/purchase/calls'


export const createAccount = {
	name: 'Purchase.create_account',
	v15Polkadot: polkadotCalls.createAccount['v15'],
}

export const updateValidityStatus = {
	name: 'Purchase.update_validity_status',
	v15Polkadot: polkadotCalls.updateValidityStatus['v15'],
}

export const updateBalance = {
	name: 'Purchase.update_balance',
	v15Polkadot: polkadotCalls.updateBalance['v15'],
}

export const payout = {
	name: 'Purchase.payout',
	v15Polkadot: polkadotCalls.payout['v15'],
}

export const setPaymentAccount = {
	name: 'Purchase.set_payment_account',
	v15Polkadot: polkadotCalls.setPaymentAccount['v15'],
}

export const setStatement = {
	name: 'Purchase.set_statement',
	v15Polkadot: polkadotCalls.setStatement['v15'],
}

export const setUnlockBlock = {
	name: 'Purchase.set_unlock_block',
	v15Polkadot: polkadotCalls.setUnlockBlock['v15'],
}
