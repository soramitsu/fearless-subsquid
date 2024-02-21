import * as kusamaCalls from '../../kusama/identity/calls'


export const addRegistrar = {
	name: 'Identity.add_registrar',
	v1030Kusama: kusamaCalls.addRegistrar['v1030'],
	v9291Kusama: kusamaCalls.addRegistrar['v9291'],
}

export const setIdentity = {
	name: 'Identity.set_identity',
	v1030Kusama: kusamaCalls.setIdentity['v1030'],
	v1032Kusama: kusamaCalls.setIdentity['v1032'],
}

export const setSubs = {
	name: 'Identity.set_subs',
	v1030Kusama: kusamaCalls.setSubs['v1030'],
}

export const clearIdentity = {
	name: 'Identity.clear_identity',
	v1030Kusama: kusamaCalls.clearIdentity['v1030'],
}

export const requestJudgement = {
	name: 'Identity.request_judgement',
	v1030Kusama: kusamaCalls.requestJudgement['v1030'],
}

export const cancelRequest = {
	name: 'Identity.cancel_request',
	v1030Kusama: kusamaCalls.cancelRequest['v1030'],
}

export const setFee = {
	name: 'Identity.set_fee',
	v1030Kusama: kusamaCalls.setFee['v1030'],
}

export const setFields = {
	name: 'Identity.set_fields',
	v1030Kusama: kusamaCalls.setFields['v1030'],
}

export const provideJudgement = {
	name: 'Identity.provide_judgement',
	v1030Kusama: kusamaCalls.provideJudgement['v1030'],
	v1050Kusama: kusamaCalls.provideJudgement['v1050'],
	v2028Kusama: kusamaCalls.provideJudgement['v2028'],
	v9111Kusama: kusamaCalls.provideJudgement['v9111'],
	v9300Kusama: kusamaCalls.provideJudgement['v9300'],
}

export const killIdentity = {
	name: 'Identity.kill_identity',
	v1030Kusama: kusamaCalls.killIdentity['v1030'],
	v1050Kusama: kusamaCalls.killIdentity['v1050'],
	v2028Kusama: kusamaCalls.killIdentity['v2028'],
	v9111Kusama: kusamaCalls.killIdentity['v9111'],
}

export const setAccountId = {
	name: 'Identity.set_account_id',
	v1031Kusama: kusamaCalls.setAccountId['v1031'],
	v9291Kusama: kusamaCalls.setAccountId['v9291'],
}

export const addSub = {
	name: 'Identity.add_sub',
	v2015Kusama: kusamaCalls.addSub['v2015'],
	v2028Kusama: kusamaCalls.addSub['v2028'],
	v9111Kusama: kusamaCalls.addSub['v9111'],
}

export const renameSub = {
	name: 'Identity.rename_sub',
	v2015Kusama: kusamaCalls.renameSub['v2015'],
	v2028Kusama: kusamaCalls.renameSub['v2028'],
	v9111Kusama: kusamaCalls.renameSub['v9111'],
}

export const removeSub = {
	name: 'Identity.remove_sub',
	v2015Kusama: kusamaCalls.removeSub['v2015'],
	v2028Kusama: kusamaCalls.removeSub['v2028'],
	v9111Kusama: kusamaCalls.removeSub['v9111'],
}

export const quitSub = {
	name: 'Identity.quit_sub',
	v2015Kusama: kusamaCalls.quitSub['v2015'],
}
