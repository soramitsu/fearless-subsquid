import * as soraPolkadotCalls from '../../sora-polkadot/balances/calls'
import * as soraKusamaCalls from '../../sora-kusama/balances/calls'


export const transfer = {
	name: 'Balances.transfer',
	v1SoraPolkadot: soraPolkadotCalls.transfer['v1'],
	v1SoraKusama: soraKusamaCalls.transfer['v1'],
}

export const setBalance = {
	name: 'Balances.set_balance',
	v1SoraPolkadot: soraPolkadotCalls.setBalance['v1'],
	v1SoraKusama: soraKusamaCalls.setBalance['v1'],
}

export const forceTransfer = {
	name: 'Balances.force_transfer',
	v1SoraPolkadot: soraPolkadotCalls.forceTransfer['v1'],
	v1SoraKusama: soraKusamaCalls.forceTransfer['v1'],
}

export const transferKeepAlive = {
	name: 'Balances.transfer_keep_alive',
	v1SoraPolkadot: soraPolkadotCalls.transferKeepAlive['v1'],
	v1SoraKusama: soraKusamaCalls.transferKeepAlive['v1'],
}

export const transferAll = {
	name: 'Balances.transfer_all',
	v1SoraPolkadot: soraPolkadotCalls.transferAll['v1'],
	v1SoraKusama: soraKusamaCalls.transferAll['v1'],
}

export const forceUnreserve = {
	name: 'Balances.force_unreserve',
	v1SoraPolkadot: soraPolkadotCalls.forceUnreserve['v1'],
	v1SoraKusama: soraKusamaCalls.forceUnreserve['v1'],
}
