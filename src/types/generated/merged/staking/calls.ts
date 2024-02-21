import * as kusamaCalls from '../../kusama/staking/calls'


export const bond = {
	name: 'Staking.bond',
	v1020Kusama: kusamaCalls.bond['v1020'],
	v1050Kusama: kusamaCalls.bond['v1050'],
	v2028Kusama: kusamaCalls.bond['v2028'],
	v9111Kusama: kusamaCalls.bond['v9111'],
	v9430Kusama: kusamaCalls.bond['v9430'],
}

export const bondExtra = {
	name: 'Staking.bond_extra',
	v1020Kusama: kusamaCalls.bondExtra['v1020'],
}

export const unbond = {
	name: 'Staking.unbond',
	v1020Kusama: kusamaCalls.unbond['v1020'],
}

export const withdrawUnbonded = {
	name: 'Staking.withdraw_unbonded',
	v1020Kusama: kusamaCalls.withdrawUnbonded['v1020'],
	v2005Kusama: kusamaCalls.withdrawUnbonded['v2005'],
}

export const validate = {
	name: 'Staking.validate',
	v1020Kusama: kusamaCalls.validate['v1020'],
	v2028Kusama: kusamaCalls.validate['v2028'],
}

export const nominate = {
	name: 'Staking.nominate',
	v1020Kusama: kusamaCalls.nominate['v1020'],
	v1050Kusama: kusamaCalls.nominate['v1050'],
	v2028Kusama: kusamaCalls.nominate['v2028'],
	v9111Kusama: kusamaCalls.nominate['v9111'],
}

export const chill = {
	name: 'Staking.chill',
	v1020Kusama: kusamaCalls.chill['v1020'],
}

export const setPayee = {
	name: 'Staking.set_payee',
	v1020Kusama: kusamaCalls.setPayee['v1020'],
}

export const setController = {
	name: 'Staking.set_controller',
	v1020Kusama: kusamaCalls.setController['v1020'],
	v1050Kusama: kusamaCalls.setController['v1050'],
	v2028Kusama: kusamaCalls.setController['v2028'],
	v9111Kusama: kusamaCalls.setController['v9111'],
	v9430Kusama: kusamaCalls.setController['v9430'],
}

export const setValidatorCount = {
	name: 'Staking.set_validator_count',
	v1020Kusama: kusamaCalls.setValidatorCount['v1020'],
}

export const forceNoEras = {
	name: 'Staking.force_no_eras',
	v1020Kusama: kusamaCalls.forceNoEras['v1020'],
}

export const forceNewEra = {
	name: 'Staking.force_new_era',
	v1020Kusama: kusamaCalls.forceNewEra['v1020'],
}

export const setInvulnerables = {
	name: 'Staking.set_invulnerables',
	v1020Kusama: kusamaCalls.setInvulnerables['v1020'],
	v2024Kusama: kusamaCalls.setInvulnerables['v2024'],
}

export const forceUnstake = {
	name: 'Staking.force_unstake',
	v1020Kusama: kusamaCalls.forceUnstake['v1020'],
	v2005Kusama: kusamaCalls.forceUnstake['v2005'],
}

export const forceNewEraAlways = {
	name: 'Staking.force_new_era_always',
	v1020Kusama: kusamaCalls.forceNewEraAlways['v1020'],
}

export const cancelDeferredSlash = {
	name: 'Staking.cancel_deferred_slash',
	v1020Kusama: kusamaCalls.cancelDeferredSlash['v1020'],
}

export const rebond = {
	name: 'Staking.rebond',
	v1038Kusama: kusamaCalls.rebond['v1038'],
}

export const payoutNominator = {
	name: 'Staking.payout_nominator',
	v1050Kusama: kusamaCalls.payoutNominator['v1050'],
}

export const payoutValidator = {
	name: 'Staking.payout_validator',
	v1050Kusama: kusamaCalls.payoutValidator['v1050'],
}

export const setHistoryDepth = {
	name: 'Staking.set_history_depth',
	v1050Kusama: kusamaCalls.setHistoryDepth['v1050'],
	v2005Kusama: kusamaCalls.setHistoryDepth['v2005'],
}

export const reapStash = {
	name: 'Staking.reap_stash',
	v1050Kusama: kusamaCalls.reapStash['v1050'],
	v2005Kusama: kusamaCalls.reapStash['v2005'],
}

export const payoutStakers = {
	name: 'Staking.payout_stakers',
	v1058Kusama: kusamaCalls.payoutStakers['v1058'],
}

export const submitElectionSolution = {
	name: 'Staking.submit_election_solution',
	v1058Kusama: kusamaCalls.submitElectionSolution['v1058'],
	v2005Kusama: kusamaCalls.submitElectionSolution['v2005'],
	v2023Kusama: kusamaCalls.submitElectionSolution['v2023'],
}

export const submitElectionSolutionUnsigned = {
	name: 'Staking.submit_election_solution_unsigned',
	v1058Kusama: kusamaCalls.submitElectionSolutionUnsigned['v1058'],
	v2005Kusama: kusamaCalls.submitElectionSolutionUnsigned['v2005'],
	v2023Kusama: kusamaCalls.submitElectionSolutionUnsigned['v2023'],
}

export const increaseValidatorCount = {
	name: 'Staking.increase_validator_count',
	v2011Kusama: kusamaCalls.increaseValidatorCount['v2011'],
}

export const scaleValidatorCount = {
	name: 'Staking.scale_validator_count',
	v2011Kusama: kusamaCalls.scaleValidatorCount['v2011'],
}

export const kick = {
	name: 'Staking.kick',
	v2028Kusama: kusamaCalls.kick['v2028'],
	v9111Kusama: kusamaCalls.kick['v9111'],
}

export const updateStakingLimits = {
	name: 'Staking.update_staking_limits',
	v9050Kusama: kusamaCalls.updateStakingLimits['v9050'],
}

export const chillOther = {
	name: 'Staking.chill_other',
	v9050Kusama: kusamaCalls.chillOther['v9050'],
}

export const setStakingLimits = {
	name: 'Staking.set_staking_limits',
	v9080Kusama: kusamaCalls.setStakingLimits['v9080'],
}

export const setStakingConfigs = {
	name: 'Staking.set_staking_configs',
	v9160Kusama: kusamaCalls.setStakingConfigs['v9160'],
	v9180Kusama: kusamaCalls.setStakingConfigs['v9180'],
}

export const forceApplyMinCommission = {
	name: 'Staking.force_apply_min_commission',
	v9170Kusama: kusamaCalls.forceApplyMinCommission['v9170'],
}

export const setMinCommission = {
	name: 'Staking.set_min_commission',
	v9370Kusama: kusamaCalls.setMinCommission['v9370'],
}
