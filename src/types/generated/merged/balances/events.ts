import * as soraPolkadotEvents from '../../sora-polkadot/balances/events'
import * as soraKusamaEvents from '../../sora-kusama/balances/events'


export const endowed = {
	name: 'Balances.Endowed',
	v1SoraPolkadot: soraPolkadotEvents.endowed['v1'],
	v1SoraKusama: soraKusamaEvents.endowed['v1'],
}

export const dustLost = {
	name: 'Balances.DustLost',
	v1SoraPolkadot: soraPolkadotEvents.dustLost['v1'],
	v1SoraKusama: soraKusamaEvents.dustLost['v1'],
}

export const transfer = {
	name: 'Balances.Transfer',
	v1SoraPolkadot: soraPolkadotEvents.transfer['v1'],
	v1SoraKusama: soraKusamaEvents.transfer['v1'],
}

export const balanceSet = {
	name: 'Balances.BalanceSet',
	v1SoraPolkadot: soraPolkadotEvents.balanceSet['v1'],
	v1SoraKusama: soraKusamaEvents.balanceSet['v1'],
}

export const reserved = {
	name: 'Balances.Reserved',
	v1SoraPolkadot: soraPolkadotEvents.reserved['v1'],
	v1SoraKusama: soraKusamaEvents.reserved['v1'],
}

export const unreserved = {
	name: 'Balances.Unreserved',
	v1SoraPolkadot: soraPolkadotEvents.unreserved['v1'],
	v1SoraKusama: soraKusamaEvents.unreserved['v1'],
}

export const reserveRepatriated = {
	name: 'Balances.ReserveRepatriated',
	v1SoraPolkadot: soraPolkadotEvents.reserveRepatriated['v1'],
	v1SoraKusama: soraKusamaEvents.reserveRepatriated['v1'],
}

export const deposit = {
	name: 'Balances.Deposit',
	v1SoraPolkadot: soraPolkadotEvents.deposit['v1'],
	v1SoraKusama: soraKusamaEvents.deposit['v1'],
}

export const withdraw = {
	name: 'Balances.Withdraw',
	v1SoraPolkadot: soraPolkadotEvents.withdraw['v1'],
	v1SoraKusama: soraKusamaEvents.withdraw['v1'],
}

export const slashed = {
	name: 'Balances.Slashed',
	v1SoraPolkadot: soraPolkadotEvents.slashed['v1'],
	v1SoraKusama: soraKusamaEvents.slashed['v1'],
}
