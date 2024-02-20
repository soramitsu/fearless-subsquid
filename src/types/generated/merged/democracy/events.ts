import * as soraPolkadotEvents from '../../sora-polkadot/democracy/events'
import * as soraKusamaEvents from '../../sora-kusama/democracy/events'


export const proposed = {
	name: 'Democracy.Proposed',
	v10SoraPolkadot: soraPolkadotEvents.proposed['v10'],
	v7SoraKusama: soraKusamaEvents.proposed['v7'],
}

export const tabled = {
	name: 'Democracy.Tabled',
	v10SoraPolkadot: soraPolkadotEvents.tabled['v10'],
	v7SoraKusama: soraKusamaEvents.tabled['v7'],
}

export const externalTabled = {
	name: 'Democracy.ExternalTabled',
	v10SoraPolkadot: soraPolkadotEvents.externalTabled['v10'],
	v7SoraKusama: soraKusamaEvents.externalTabled['v7'],
}

export const started = {
	name: 'Democracy.Started',
	v10SoraPolkadot: soraPolkadotEvents.started['v10'],
	v7SoraKusama: soraKusamaEvents.started['v7'],
}

export const passed = {
	name: 'Democracy.Passed',
	v10SoraPolkadot: soraPolkadotEvents.passed['v10'],
	v7SoraKusama: soraKusamaEvents.passed['v7'],
}

export const notPassed = {
	name: 'Democracy.NotPassed',
	v10SoraPolkadot: soraPolkadotEvents.notPassed['v10'],
	v7SoraKusama: soraKusamaEvents.notPassed['v7'],
}

export const cancelled = {
	name: 'Democracy.Cancelled',
	v10SoraPolkadot: soraPolkadotEvents.cancelled['v10'],
	v7SoraKusama: soraKusamaEvents.cancelled['v7'],
}

export const delegated = {
	name: 'Democracy.Delegated',
	v10SoraPolkadot: soraPolkadotEvents.delegated['v10'],
	v7SoraKusama: soraKusamaEvents.delegated['v7'],
}

export const undelegated = {
	name: 'Democracy.Undelegated',
	v10SoraPolkadot: soraPolkadotEvents.undelegated['v10'],
	v7SoraKusama: soraKusamaEvents.undelegated['v7'],
}

export const vetoed = {
	name: 'Democracy.Vetoed',
	v10SoraPolkadot: soraPolkadotEvents.vetoed['v10'],
	v7SoraKusama: soraKusamaEvents.vetoed['v7'],
}

export const blacklisted = {
	name: 'Democracy.Blacklisted',
	v10SoraPolkadot: soraPolkadotEvents.blacklisted['v10'],
	v7SoraKusama: soraKusamaEvents.blacklisted['v7'],
}

export const voted = {
	name: 'Democracy.Voted',
	v10SoraPolkadot: soraPolkadotEvents.voted['v10'],
	v7SoraKusama: soraKusamaEvents.voted['v7'],
}

export const seconded = {
	name: 'Democracy.Seconded',
	v10SoraPolkadot: soraPolkadotEvents.seconded['v10'],
	v7SoraKusama: soraKusamaEvents.seconded['v7'],
}

export const proposalCanceled = {
	name: 'Democracy.ProposalCanceled',
	v10SoraPolkadot: soraPolkadotEvents.proposalCanceled['v10'],
	v7SoraKusama: soraKusamaEvents.proposalCanceled['v7'],
}
