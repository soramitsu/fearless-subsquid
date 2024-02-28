import * as polkadotEvents from '../../polkadot/conviction-voting/events'


export const delegated = {
	name: 'ConvictionVoting.Delegated',
	v9420Polkadot: polkadotEvents.delegated['v9420'],
}

export const undelegated = {
	name: 'ConvictionVoting.Undelegated',
	v9420Polkadot: polkadotEvents.undelegated['v9420'],
}
