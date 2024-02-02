import * as soraPolkadotEvents from '../../sora-polkadot/democracy/events'
import * as soraKusamaEvents from '../../sora-kusama/democracy/events'


export const proposed = {
	name: 'Democracy.Proposed',
	soraPolkadotV10: soraPolkadotEvents.proposed['v10'],
	soraKusamaV7: soraKusamaEvents.proposed['v7'],
}

export const tabled = {
	name: 'Democracy.Tabled',
	soraPolkadotV10: soraPolkadotEvents.tabled['v10'],
	soraKusamaV7: soraKusamaEvents.tabled['v7'],
}

export const externalTabled = {
	name: 'Democracy.ExternalTabled',
	soraPolkadotV10: soraPolkadotEvents.externalTabled['v10'],
	soraKusamaV7: soraKusamaEvents.externalTabled['v7'],
}

export const started = {
	name: 'Democracy.Started',
	soraPolkadotV10: soraPolkadotEvents.started['v10'],
	soraKusamaV7: soraKusamaEvents.started['v7'],
}

export const passed = {
	name: 'Democracy.Passed',
	soraPolkadotV10: soraPolkadotEvents.passed['v10'],
	soraKusamaV7: soraKusamaEvents.passed['v7'],
}

export const notPassed = {
	name: 'Democracy.NotPassed',
	soraPolkadotV10: soraPolkadotEvents.notPassed['v10'],
	soraKusamaV7: soraKusamaEvents.notPassed['v7'],
}

export const cancelled = {
	name: 'Democracy.Cancelled',
	soraPolkadotV10: soraPolkadotEvents.cancelled['v10'],
	soraKusamaV7: soraKusamaEvents.cancelled['v7'],
}

export const delegated = {
	name: 'Democracy.Delegated',
	soraPolkadotV10: soraPolkadotEvents.delegated['v10'],
	soraKusamaV7: soraKusamaEvents.delegated['v7'],
}

export const undelegated = {
	name: 'Democracy.Undelegated',
	soraPolkadotV10: soraPolkadotEvents.undelegated['v10'],
	soraKusamaV7: soraKusamaEvents.undelegated['v7'],
}

export const vetoed = {
	name: 'Democracy.Vetoed',
	soraPolkadotV10: soraPolkadotEvents.vetoed['v10'],
	soraKusamaV7: soraKusamaEvents.vetoed['v7'],
}

export const blacklisted = {
	name: 'Democracy.Blacklisted',
	soraPolkadotV10: soraPolkadotEvents.blacklisted['v10'],
	soraKusamaV7: soraKusamaEvents.blacklisted['v7'],
}

export const voted = {
	name: 'Democracy.Voted',
	soraPolkadotV10: soraPolkadotEvents.voted['v10'],
	soraKusamaV7: soraKusamaEvents.voted['v7'],
}

export const seconded = {
	name: 'Democracy.Seconded',
	soraPolkadotV10: soraPolkadotEvents.seconded['v10'],
	soraKusamaV7: soraKusamaEvents.seconded['v7'],
}

export const proposalCanceled = {
	name: 'Democracy.ProposalCanceled',
	soraPolkadotV10: soraPolkadotEvents.proposalCanceled['v10'],
	soraKusamaV7: soraKusamaEvents.proposalCanceled['v7'],
}
