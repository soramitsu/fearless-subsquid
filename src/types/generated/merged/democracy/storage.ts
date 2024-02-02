import * as soraPolkadotStorage from '../../sora-polkadot/democracy/storage'
import * as soraKusamaStorage from '../../sora-kusama/democracy/storage'


export const publicPropCount = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.publicPropCount['v10'],
	soraKusamaV7: soraKusamaStorage.publicPropCount['v7'],
}

export const publicProps = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.publicProps['v10'],
	soraKusamaV7: soraKusamaStorage.publicProps['v7'],
}

export const depositOf = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.depositOf['v10'],
	soraKusamaV7: soraKusamaStorage.depositOf['v7'],
}

export const referendumCount = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.referendumCount['v10'],
	soraKusamaV7: soraKusamaStorage.referendumCount['v7'],
}

export const lowestUnbaked = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.lowestUnbaked['v10'],
	soraKusamaV7: soraKusamaStorage.lowestUnbaked['v7'],
}

export const referendumInfoOf = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.referendumInfoOf['v10'],
	soraKusamaV7: soraKusamaStorage.referendumInfoOf['v7'],
}

export const votingOf = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.votingOf['v10'],
	soraKusamaV7: soraKusamaStorage.votingOf['v7'],
}

export const lastTabledWasExternal = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.lastTabledWasExternal['v10'],
	soraKusamaV7: soraKusamaStorage.lastTabledWasExternal['v7'],
}

export const nextExternal = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.nextExternal['v10'],
	soraKusamaV7: soraKusamaStorage.nextExternal['v7'],
}

export const blacklist = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.blacklist['v10'],
	soraKusamaV7: soraKusamaStorage.blacklist['v7'],
}

export const cancellations = {
	name: '',
	soraPolkadotV10: soraPolkadotStorage.cancellations['v10'],
	soraKusamaV7: soraKusamaStorage.cancellations['v7'],
}
