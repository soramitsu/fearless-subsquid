import * as kusamaCalls from '../../kusama/nomination-pools/calls'


export const join = {
	name: 'NominationPools.join',
	v9220Kusama: kusamaCalls.join['v9220'],
}

export const bondExtra = {
	name: 'NominationPools.bond_extra',
	v9220Kusama: kusamaCalls.bondExtra['v9220'],
}

export const claimPayout = {
	name: 'NominationPools.claim_payout',
	v9220Kusama: kusamaCalls.claimPayout['v9220'],
}

export const unbond = {
	name: 'NominationPools.unbond',
	v9220Kusama: kusamaCalls.unbond['v9220'],
	v9291Kusama: kusamaCalls.unbond['v9291'],
}

export const poolWithdrawUnbonded = {
	name: 'NominationPools.pool_withdraw_unbonded',
	v9220Kusama: kusamaCalls.poolWithdrawUnbonded['v9220'],
}

export const withdrawUnbonded = {
	name: 'NominationPools.withdraw_unbonded',
	v9220Kusama: kusamaCalls.withdrawUnbonded['v9220'],
	v9291Kusama: kusamaCalls.withdrawUnbonded['v9291'],
}

export const create = {
	name: 'NominationPools.create',
	v9220Kusama: kusamaCalls.create['v9220'],
	v9291Kusama: kusamaCalls.create['v9291'],
	v9420Kusama: kusamaCalls.create['v9420'],
}

export const nominate = {
	name: 'NominationPools.nominate',
	v9220Kusama: kusamaCalls.nominate['v9220'],
}

export const setState = {
	name: 'NominationPools.set_state',
	v9220Kusama: kusamaCalls.setState['v9220'],
}

export const setMetadata = {
	name: 'NominationPools.set_metadata',
	v9220Kusama: kusamaCalls.setMetadata['v9220'],
}

export const setConfigs = {
	name: 'NominationPools.set_configs',
	v9220Kusama: kusamaCalls.setConfigs['v9220'],
	v9420Kusama: kusamaCalls.setConfigs['v9420'],
}

export const updateRoles = {
	name: 'NominationPools.update_roles',
	v9220Kusama: kusamaCalls.updateRoles['v9220'],
	v9230Kusama: kusamaCalls.updateRoles['v9230'],
	v9420Kusama: kusamaCalls.updateRoles['v9420'],
}

export const chill = {
	name: 'NominationPools.chill',
	v9250Kusama: kusamaCalls.chill['v9250'],
}

export const createWithPoolId = {
	name: 'NominationPools.create_with_pool_id',
	v9340Kusama: kusamaCalls.createWithPoolId['v9340'],
	v9420Kusama: kusamaCalls.createWithPoolId['v9420'],
}

export const bondExtraOther = {
	name: 'NominationPools.bond_extra_other',
	v9420Kusama: kusamaCalls.bondExtraOther['v9420'],
}

export const setClaimPermission = {
	name: 'NominationPools.set_claim_permission',
	v9420Kusama: kusamaCalls.setClaimPermission['v9420'],
}

export const claimPayoutOther = {
	name: 'NominationPools.claim_payout_other',
	v9420Kusama: kusamaCalls.claimPayoutOther['v9420'],
}

export const setCommission = {
	name: 'NominationPools.set_commission',
	v9420Kusama: kusamaCalls.setCommission['v9420'],
}

export const setCommissionMax = {
	name: 'NominationPools.set_commission_max',
	v9420Kusama: kusamaCalls.setCommissionMax['v9420'],
}

export const setCommissionChangeRate = {
	name: 'NominationPools.set_commission_change_rate',
	v9420Kusama: kusamaCalls.setCommissionChangeRate['v9420'],
}

export const claimCommission = {
	name: 'NominationPools.claim_commission',
	v9420Kusama: kusamaCalls.claimCommission['v9420'],
}

export const adjustPoolDeposit = {
	name: 'NominationPools.adjust_pool_deposit',
	v1001000Kusama: kusamaCalls.adjustPoolDeposit['v1001000'],
}
