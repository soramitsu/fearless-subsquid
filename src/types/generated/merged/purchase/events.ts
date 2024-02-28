import * as polkadotEvents from '../../polkadot/purchase/events'


export const accountCreated = {
	name: 'Purchase.AccountCreated',
	v15Polkadot: polkadotEvents.accountCreated['v15'],
}

export const validityUpdated = {
	name: 'Purchase.ValidityUpdated',
	v15Polkadot: polkadotEvents.validityUpdated['v15'],
}

export const balanceUpdated = {
	name: 'Purchase.BalanceUpdated',
	v15Polkadot: polkadotEvents.balanceUpdated['v15'],
}

export const paymentComplete = {
	name: 'Purchase.PaymentComplete',
	v15Polkadot: polkadotEvents.paymentComplete['v15'],
}

export const paymentAccountSet = {
	name: 'Purchase.PaymentAccountSet',
	v15Polkadot: polkadotEvents.paymentAccountSet['v15'],
}

export const statementUpdated = {
	name: 'Purchase.StatementUpdated',
	v15Polkadot: polkadotEvents.statementUpdated['v15'],
}

export const unlockBlockUpdated = {
	name: 'Purchase.UnlockBlockUpdated',
	v15Polkadot: polkadotEvents.unlockBlockUpdated['v15'],
}
