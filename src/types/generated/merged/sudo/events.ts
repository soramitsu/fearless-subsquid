import * as polkadotEvents from '../../polkadot/sudo/events'


export const sudid = {
	name: 'Sudo.Sudid',
	v0Polkadot: polkadotEvents.sudid['v0'],
}

export const keyChanged = {
	name: 'Sudo.KeyChanged',
	v0Polkadot: polkadotEvents.keyChanged['v0'],
}

export const sudoAsDone = {
	name: 'Sudo.SudoAsDone',
	v0Polkadot: polkadotEvents.sudoAsDone['v0'],
}
