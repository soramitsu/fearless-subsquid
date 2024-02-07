import * as soraPolkadotStorage from '../../sora-polkadot/democracy/storage'
import * as soraKusamaStorage from '../../sora-kusama/democracy/storage'


export const publicPropCount = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.publicPropCount['v10'],
	v7SoraKusama: soraKusamaStorage.publicPropCount['v7'],
}

export const publicProps = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.publicProps['v10'],
	v7SoraKusama: soraKusamaStorage.publicProps['v7'],
}

export const depositOf = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.depositOf['v10'],
	v7SoraKusama: soraKusamaStorage.depositOf['v7'],
}

export const referendumCount = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.referendumCount['v10'],
	v7SoraKusama: soraKusamaStorage.referendumCount['v7'],
}

export const lowestUnbaked = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.lowestUnbaked['v10'],
	v7SoraKusama: soraKusamaStorage.lowestUnbaked['v7'],
}

export const referendumInfoOf = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.referendumInfoOf['v10'],
	v7SoraKusama: soraKusamaStorage.referendumInfoOf['v7'],
}

export const votingOf = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.votingOf['v10'],
	v7SoraKusama: soraKusamaStorage.votingOf['v7'],
}

export const lastTabledWasExternal = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.lastTabledWasExternal['v10'],
	v7SoraKusama: soraKusamaStorage.lastTabledWasExternal['v7'],
}

export const nextExternal = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.nextExternal['v10'],
	v7SoraKusama: soraKusamaStorage.nextExternal['v7'],
}

export const blacklist = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.blacklist['v10'],
	v7SoraKusama: soraKusamaStorage.blacklist['v7'],
}

export const cancellations = {
	name: '',
	v10SoraPolkadot: soraPolkadotStorage.cancellations['v10'],
	v7SoraKusama: soraKusamaStorage.cancellations['v7'],
}
