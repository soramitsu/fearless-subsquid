import * as soraPolkadotStorage from '../../sora-polkadot/preimage/storage'
import * as soraKusamaStorage from '../../sora-kusama/preimage/storage'


export const statusFor = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.statusFor['v10'],
	soraKusamaV7: soraKusamaStorage.statusFor['v7'],
}

export const preimageFor = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.preimageFor['v10'],
	soraKusamaV7: soraKusamaStorage.preimageFor['v7'],
}
