import * as polkadotCalls from '../../polkadot/im-online/calls'


export const heartbeat = {
	name: 'ImOnline.heartbeat',
	v0Polkadot: polkadotCalls.heartbeat['v0'],
	v1000001Polkadot: polkadotCalls.heartbeat['v1000001'],
}
