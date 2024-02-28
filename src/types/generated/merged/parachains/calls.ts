import * as polkadotCalls from '../../polkadot/parachains/calls'


export const setHeads = {
	name: 'Parachains.set_heads',
	v0Polkadot: polkadotCalls.setHeads['v0'],
}

export const reportDoubleVote = {
	name: 'Parachains.report_double_vote',
	v0Polkadot: polkadotCalls.reportDoubleVote['v0'],
}

export const transferToParachain = {
	name: 'Parachains.transfer_to_parachain',
	v13Polkadot: polkadotCalls.transferToParachain['v13'],
}

export const sendXcmpMessage = {
	name: 'Parachains.send_xcmp_message',
	v13Polkadot: polkadotCalls.sendXcmpMessage['v13'],
}
