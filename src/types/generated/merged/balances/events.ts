import * as soraPolkadotEvents from '../../sora-polkadot/balances/events'
import * as soraKusamaEvents from '../../sora-kusama/balances/events'


export const endowed = {
	name: 'Balances.Endowed',
	soraPolkadotV1: soraPolkadotEvents.endowed['v1'],
	soraKusamaV1: soraKusamaEvents.endowed['v1'],
}

export const dustLost = {
	name: 'Balances.DustLost',
	soraPolkadotV1: soraPolkadotEvents.dustLost['v1'],
	soraKusamaV1: soraKusamaEvents.dustLost['v1'],
}

export const transfer = {
	name: 'Balances.Transfer',
	soraPolkadotV1: soraPolkadotEvents.transfer['v1'],
	soraKusamaV1: soraKusamaEvents.transfer['v1'],
}

export const balanceSet = {
	name: 'Balances.BalanceSet',
	soraPolkadotV1: soraPolkadotEvents.balanceSet['v1'],
	soraKusamaV1: soraKusamaEvents.balanceSet['v1'],
}

export const reserved = {
	name: 'Balances.Reserved',
	soraPolkadotV1: soraPolkadotEvents.reserved['v1'],
	soraKusamaV1: soraKusamaEvents.reserved['v1'],
}

export const unreserved = {
	name: 'Balances.Unreserved',
	soraPolkadotV1: soraPolkadotEvents.unreserved['v1'],
	soraKusamaV1: soraKusamaEvents.unreserved['v1'],
}

export const reserveRepatriated = {
	name: 'Balances.ReserveRepatriated',
	soraPolkadotV1: soraPolkadotEvents.reserveRepatriated['v1'],
	soraKusamaV1: soraKusamaEvents.reserveRepatriated['v1'],
}

export const deposit = {
	name: 'Balances.Deposit',
	soraPolkadotV1: soraPolkadotEvents.deposit['v1'],
	soraKusamaV1: soraKusamaEvents.deposit['v1'],
}

export const withdraw = {
	name: 'Balances.Withdraw',
	soraPolkadotV1: soraPolkadotEvents.withdraw['v1'],
	soraKusamaV1: soraKusamaEvents.withdraw['v1'],
}

export const slashed = {
	name: 'Balances.Slashed',
	soraPolkadotV1: soraPolkadotEvents.slashed['v1'],
	soraKusamaV1: soraKusamaEvents.slashed['v1'],
}
