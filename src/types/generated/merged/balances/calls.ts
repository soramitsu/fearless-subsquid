import * as soraPolkadotCalls from '../../sora-polkadot/balances/calls'
import * as soraKusamaCalls from '../../sora-kusama/balances/calls'


export const transfer = {
	name: 'Balances.transfer',
	soraPolkadotV1: soraPolkadotCalls.transfer['v1'],
	soraKusamaV1: soraKusamaCalls.transfer['v1'],
}

export const setBalance = {
	name: 'Balances.set_balance',
	soraPolkadotV1: soraPolkadotCalls.setBalance['v1'],
	soraKusamaV1: soraKusamaCalls.setBalance['v1'],
}

export const forceTransfer = {
	name: 'Balances.force_transfer',
	soraPolkadotV1: soraPolkadotCalls.forceTransfer['v1'],
	soraKusamaV1: soraKusamaCalls.forceTransfer['v1'],
}

export const transferKeepAlive = {
	name: 'Balances.transfer_keep_alive',
	soraPolkadotV1: soraPolkadotCalls.transferKeepAlive['v1'],
	soraKusamaV1: soraKusamaCalls.transferKeepAlive['v1'],
}

export const transferAll = {
	name: 'Balances.transfer_all',
	soraPolkadotV1: soraPolkadotCalls.transferAll['v1'],
	soraKusamaV1: soraKusamaCalls.transferAll['v1'],
}

export const forceUnreserve = {
	name: 'Balances.force_unreserve',
	soraPolkadotV1: soraPolkadotCalls.forceUnreserve['v1'],
	soraKusamaV1: soraKusamaCalls.forceUnreserve['v1'],
}
