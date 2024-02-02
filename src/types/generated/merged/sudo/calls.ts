import * as soraPolkadotCalls from '../../sora-polkadot/sudo/calls'
import * as soraKusamaCalls from '../../sora-kusama/sudo/calls'


export const sudo = {
	name: 'Sudo.sudo',
	soraPolkadotV1: soraPolkadotCalls.sudo['v1'],
	soraPolkadotV10: soraPolkadotCalls.sudo['v10'],
	soraKusamaV1: soraKusamaCalls.sudo['v1'],
	soraKusamaV7: soraKusamaCalls.sudo['v7'],
	soraKusamaV9: soraKusamaCalls.sudo['v9'],
}

export const sudoUncheckedWeight = {
	name: 'Sudo.sudo_unchecked_weight',
	soraPolkadotV1: soraPolkadotCalls.sudoUncheckedWeight['v1'],
	soraPolkadotV10: soraPolkadotCalls.sudoUncheckedWeight['v10'],
	soraKusamaV1: soraKusamaCalls.sudoUncheckedWeight['v1'],
	soraKusamaV7: soraKusamaCalls.sudoUncheckedWeight['v7'],
	soraKusamaV9: soraKusamaCalls.sudoUncheckedWeight['v9'],
}

export const setKey = {
	name: 'Sudo.set_key',
	soraPolkadotV1: soraPolkadotCalls.setKey['v1'],
	soraKusamaV1: soraKusamaCalls.setKey['v1'],
}

export const sudoAs = {
	name: 'Sudo.sudo_as',
	soraPolkadotV1: soraPolkadotCalls.sudoAs['v1'],
	soraPolkadotV10: soraPolkadotCalls.sudoAs['v10'],
	soraKusamaV1: soraKusamaCalls.sudoAs['v1'],
	soraKusamaV7: soraKusamaCalls.sudoAs['v7'],
	soraKusamaV9: soraKusamaCalls.sudoAs['v9'],
}
