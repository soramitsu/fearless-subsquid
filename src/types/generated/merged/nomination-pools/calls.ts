import * as polkadotCalls from '../../polkadot/nomination-pools/calls'


export const join = {
	name: 'NominationPools.join',
	v9280Polkadot: polkadotCalls.join['v9280'],
}

export const bondExtra = {
	name: 'NominationPools.bond_extra',
	v9280Polkadot: polkadotCalls.bondExtra['v9280'],
}

export const claimPayout = {
	name: 'NominationPools.claim_payout',
	v9280Polkadot: polkadotCalls.claimPayout['v9280'],
}

export const unbond = {
	name: 'NominationPools.unbond',
	v9280Polkadot: polkadotCalls.unbond['v9280'],
	v9291Polkadot: polkadotCalls.unbond['v9291'],
}

export const poolWithdrawUnbonded = {
	name: 'NominationPools.pool_withdraw_unbonded',
	v9280Polkadot: polkadotCalls.poolWithdrawUnbonded['v9280'],
}

export const withdrawUnbonded = {
	name: 'NominationPools.withdraw_unbonded',
	v9280Polkadot: polkadotCalls.withdrawUnbonded['v9280'],
	v9291Polkadot: polkadotCalls.withdrawUnbonded['v9291'],
}

export const create = {
	name: 'NominationPools.create',
	v9280Polkadot: polkadotCalls.create['v9280'],
	v9291Polkadot: polkadotCalls.create['v9291'],
	v9420Polkadot: polkadotCalls.create['v9420'],
}

export const nominate = {
	name: 'NominationPools.nominate',
	v9280Polkadot: polkadotCalls.nominate['v9280'],
}

export const setState = {
	name: 'NominationPools.set_state',
	v9280Polkadot: polkadotCalls.setState['v9280'],
}

export const setMetadata = {
	name: 'NominationPools.set_metadata',
	v9280Polkadot: polkadotCalls.setMetadata['v9280'],
}

export const setConfigs = {
	name: 'NominationPools.set_configs',
	v9280Polkadot: polkadotCalls.setConfigs['v9280'],
	v9420Polkadot: polkadotCalls.setConfigs['v9420'],
}

export const updateRoles = {
	name: 'NominationPools.update_roles',
	v9280Polkadot: polkadotCalls.updateRoles['v9280'],
	v9420Polkadot: polkadotCalls.updateRoles['v9420'],
}

export const chill = {
	name: 'NominationPools.chill',
	v9280Polkadot: polkadotCalls.chill['v9280'],
}

export const createWithPoolId = {
	name: 'NominationPools.create_with_pool_id',
	v9340Polkadot: polkadotCalls.createWithPoolId['v9340'],
	v9420Polkadot: polkadotCalls.createWithPoolId['v9420'],
}

export const bondExtraOther = {
	name: 'NominationPools.bond_extra_other',
	v9420Polkadot: polkadotCalls.bondExtraOther['v9420'],
}

export const setClaimPermission = {
	name: 'NominationPools.set_claim_permission',
	v9420Polkadot: polkadotCalls.setClaimPermission['v9420'],
}

export const claimPayoutOther = {
	name: 'NominationPools.claim_payout_other',
	v9420Polkadot: polkadotCalls.claimPayoutOther['v9420'],
}

export const setCommission = {
	name: 'NominationPools.set_commission',
	v9420Polkadot: polkadotCalls.setCommission['v9420'],
}

export const setCommissionMax = {
	name: 'NominationPools.set_commission_max',
	v9420Polkadot: polkadotCalls.setCommissionMax['v9420'],
}

export const setCommissionChangeRate = {
	name: 'NominationPools.set_commission_change_rate',
	v9420Polkadot: polkadotCalls.setCommissionChangeRate['v9420'],
}

export const claimCommission = {
	name: 'NominationPools.claim_commission',
	v9420Polkadot: polkadotCalls.claimCommission['v9420'],
}

export const adjustPoolDeposit = {
	name: 'NominationPools.adjust_pool_deposit',
	v1001002Polkadot: polkadotCalls.adjustPoolDeposit['v1001002'],
}
