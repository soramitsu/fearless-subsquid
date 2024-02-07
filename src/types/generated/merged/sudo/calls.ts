import * as soraPolkadotCalls from '../../sora-polkadot/sudo/calls'
import * as soraKusamaCalls from '../../sora-kusama/sudo/calls'


export const sudo = {
	name: 'Sudo.sudo',
	v1SoraPolkadot: soraPolkadotCalls.sudo['v1'],
	v10SoraPolkadot: soraPolkadotCalls.sudo['v10'],
	v1SoraKusama: soraKusamaCalls.sudo['v1'],
	v7SoraKusama: soraKusamaCalls.sudo['v7'],
	v9SoraKusama: soraKusamaCalls.sudo['v9'],
}

export const sudoUncheckedWeight = {
	name: 'Sudo.sudo_unchecked_weight',
	v1SoraPolkadot: soraPolkadotCalls.sudoUncheckedWeight['v1'],
	v10SoraPolkadot: soraPolkadotCalls.sudoUncheckedWeight['v10'],
	v1SoraKusama: soraKusamaCalls.sudoUncheckedWeight['v1'],
	v7SoraKusama: soraKusamaCalls.sudoUncheckedWeight['v7'],
	v9SoraKusama: soraKusamaCalls.sudoUncheckedWeight['v9'],
}

export const setKey = {
	name: 'Sudo.set_key',
	v1SoraPolkadot: soraPolkadotCalls.setKey['v1'],
	v1SoraKusama: soraKusamaCalls.setKey['v1'],
}

export const sudoAs = {
	name: 'Sudo.sudo_as',
	v1SoraPolkadot: soraPolkadotCalls.sudoAs['v1'],
	v10SoraPolkadot: soraPolkadotCalls.sudoAs['v10'],
	v1SoraKusama: soraKusamaCalls.sudoAs['v1'],
	v7SoraKusama: soraKusamaCalls.sudoAs['v7'],
	v9SoraKusama: soraKusamaCalls.sudoAs['v9'],
}
