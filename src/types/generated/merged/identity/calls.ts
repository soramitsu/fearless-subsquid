import * as polkadotCalls from '../../polkadot/identity/calls'


export const addRegistrar = {
	name: 'Identity.add_registrar',
	v5Polkadot: polkadotCalls.addRegistrar['v5'],
	v9291Polkadot: polkadotCalls.addRegistrar['v9291'],
}

export const setIdentity = {
	name: 'Identity.set_identity',
	v5Polkadot: polkadotCalls.setIdentity['v5'],
}

export const setSubs = {
	name: 'Identity.set_subs',
	v5Polkadot: polkadotCalls.setSubs['v5'],
}

export const clearIdentity = {
	name: 'Identity.clear_identity',
	v5Polkadot: polkadotCalls.clearIdentity['v5'],
}

export const requestJudgement = {
	name: 'Identity.request_judgement',
	v5Polkadot: polkadotCalls.requestJudgement['v5'],
}

export const cancelRequest = {
	name: 'Identity.cancel_request',
	v5Polkadot: polkadotCalls.cancelRequest['v5'],
}

export const setFee = {
	name: 'Identity.set_fee',
	v5Polkadot: polkadotCalls.setFee['v5'],
}

export const setAccountId = {
	name: 'Identity.set_account_id',
	v5Polkadot: polkadotCalls.setAccountId['v5'],
	v9291Polkadot: polkadotCalls.setAccountId['v9291'],
}

export const setFields = {
	name: 'Identity.set_fields',
	v5Polkadot: polkadotCalls.setFields['v5'],
}

export const provideJudgement = {
	name: 'Identity.provide_judgement',
	v5Polkadot: polkadotCalls.provideJudgement['v5'],
	v28Polkadot: polkadotCalls.provideJudgement['v28'],
	v9110Polkadot: polkadotCalls.provideJudgement['v9110'],
	v9300Polkadot: polkadotCalls.provideJudgement['v9300'],
}

export const killIdentity = {
	name: 'Identity.kill_identity',
	v5Polkadot: polkadotCalls.killIdentity['v5'],
	v28Polkadot: polkadotCalls.killIdentity['v28'],
	v9110Polkadot: polkadotCalls.killIdentity['v9110'],
}

export const addSub = {
	name: 'Identity.add_sub',
	v15Polkadot: polkadotCalls.addSub['v15'],
	v28Polkadot: polkadotCalls.addSub['v28'],
	v9110Polkadot: polkadotCalls.addSub['v9110'],
}

export const renameSub = {
	name: 'Identity.rename_sub',
	v15Polkadot: polkadotCalls.renameSub['v15'],
	v28Polkadot: polkadotCalls.renameSub['v28'],
	v9110Polkadot: polkadotCalls.renameSub['v9110'],
}

export const removeSub = {
	name: 'Identity.remove_sub',
	v15Polkadot: polkadotCalls.removeSub['v15'],
	v28Polkadot: polkadotCalls.removeSub['v28'],
	v9110Polkadot: polkadotCalls.removeSub['v9110'],
}

export const quitSub = {
	name: 'Identity.quit_sub',
	v15Polkadot: polkadotCalls.quitSub['v15'],
}
