import * as kusamaEvents from '../../kusama/nomination-pools/events'


export const created = {
	name: 'NominationPools.Created',
	v9220Kusama: kusamaEvents.created['v9220'],
}

export const bonded = {
	name: 'NominationPools.Bonded',
	v9220Kusama: kusamaEvents.bonded['v9220'],
}

export const paidOut = {
	name: 'NominationPools.PaidOut',
	v9220Kusama: kusamaEvents.paidOut['v9220'],
}

export const unbonded = {
	name: 'NominationPools.Unbonded',
	v9220Kusama: kusamaEvents.unbonded['v9220'],
	v9250Kusama: kusamaEvents.unbonded['v9250'],
	v9271Kusama: kusamaEvents.unbonded['v9271'],
}

export const withdrawn = {
	name: 'NominationPools.Withdrawn',
	v9220Kusama: kusamaEvents.withdrawn['v9220'],
	v9250Kusama: kusamaEvents.withdrawn['v9250'],
}

export const destroyed = {
	name: 'NominationPools.Destroyed',
	v9220Kusama: kusamaEvents.destroyed['v9220'],
}

export const stateChanged = {
	name: 'NominationPools.StateChanged',
	v9220Kusama: kusamaEvents.stateChanged['v9220'],
}

export const memberRemoved = {
	name: 'NominationPools.MemberRemoved',
	v9220Kusama: kusamaEvents.memberRemoved['v9220'],
}

export const rolesUpdated = {
	name: 'NominationPools.RolesUpdated',
	v9220Kusama: kusamaEvents.rolesUpdated['v9220'],
	v9230Kusama: kusamaEvents.rolesUpdated['v9230'],
	v9420Kusama: kusamaEvents.rolesUpdated['v9420'],
}

export const poolSlashed = {
	name: 'NominationPools.PoolSlashed',
	v9250Kusama: kusamaEvents.poolSlashed['v9250'],
}

export const unbondingPoolSlashed = {
	name: 'NominationPools.UnbondingPoolSlashed',
	v9250Kusama: kusamaEvents.unbondingPoolSlashed['v9250'],
}

export const poolCommissionUpdated = {
	name: 'NominationPools.PoolCommissionUpdated',
	v9420Kusama: kusamaEvents.poolCommissionUpdated['v9420'],
}

export const poolMaxCommissionUpdated = {
	name: 'NominationPools.PoolMaxCommissionUpdated',
	v9420Kusama: kusamaEvents.poolMaxCommissionUpdated['v9420'],
}

export const poolCommissionChangeRateUpdated = {
	name: 'NominationPools.PoolCommissionChangeRateUpdated',
	v9420Kusama: kusamaEvents.poolCommissionChangeRateUpdated['v9420'],
}

export const poolCommissionClaimed = {
	name: 'NominationPools.PoolCommissionClaimed',
	v9420Kusama: kusamaEvents.poolCommissionClaimed['v9420'],
}

export const minBalanceDeficitAdjusted = {
	name: 'NominationPools.MinBalanceDeficitAdjusted',
	v1001000Kusama: kusamaEvents.minBalanceDeficitAdjusted['v1001000'],
}

export const minBalanceExcessAdjusted = {
	name: 'NominationPools.MinBalanceExcessAdjusted',
	v1001000Kusama: kusamaEvents.minBalanceExcessAdjusted['v1001000'],
}
