import * as kusamaCalls from '../../kusama/parachains/calls'


export const setHeads = {
	name: 'Parachains.set_heads',
	v1020Kusama: kusamaCalls.setHeads['v1020'],
}

export const reportDoubleVote = {
	name: 'Parachains.report_double_vote',
	v1058Kusama: kusamaCalls.reportDoubleVote['v1058'],
}

export const transferToParachain = {
	name: 'Parachains.transfer_to_parachain',
	v2013Kusama: kusamaCalls.transferToParachain['v2013'],
}

export const sendXcmpMessage = {
	name: 'Parachains.send_xcmp_message',
	v2013Kusama: kusamaCalls.sendXcmpMessage['v2013'],
}
