import * as soraPolkadotStorage from '../../sora-polkadot/preimage/storage'
import * as soraKusamaStorage from '../../sora-kusama/preimage/storage'


export const statusFor = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.statusFor['v10'],
	v7SoraKusama: soraKusamaStorage.statusFor['v7'],
}

export const preimageFor = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.preimageFor['v10'],
	v7SoraKusama: soraKusamaStorage.preimageFor['v7'],
}
