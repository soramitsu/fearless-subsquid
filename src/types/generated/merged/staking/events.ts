import * as kusamaEvents from '../../kusama/staking/events'


export const reward = {
	name: 'Staking.Reward',
	v1020Kusama: kusamaEvents.reward['v1020'],
	v1050Kusama: kusamaEvents.reward['v1050'],
}

export const slash = {
	name: 'Staking.Slash',
	v1020Kusama: kusamaEvents.slash['v1020'],
}

export const oldSlashingReportDiscarded = {
	name: 'Staking.OldSlashingReportDiscarded',
	v1020Kusama: kusamaEvents.oldSlashingReportDiscarded['v1020'],
	v9300Kusama: kusamaEvents.oldSlashingReportDiscarded['v9300'],
}

export const bonded = {
	name: 'Staking.Bonded',
	v1051Kusama: kusamaEvents.bonded['v1051'],
	v9300Kusama: kusamaEvents.bonded['v9300'],
}

export const unbonded = {
	name: 'Staking.Unbonded',
	v1051Kusama: kusamaEvents.unbonded['v1051'],
	v9300Kusama: kusamaEvents.unbonded['v9300'],
}

export const withdrawn = {
	name: 'Staking.Withdrawn',
	v1051Kusama: kusamaEvents.withdrawn['v1051'],
	v9300Kusama: kusamaEvents.withdrawn['v9300'],
}

export const stakingElection = {
	name: 'Staking.StakingElection',
	v1058Kusama: kusamaEvents.stakingElection['v1058'],
	v2030Kusama: kusamaEvents.stakingElection['v2030'],
}

export const eraPayout = {
	name: 'Staking.EraPayout',
	v1062Kusama: kusamaEvents.eraPayout['v1062'],
}

export const solutionStored = {
	name: 'Staking.SolutionStored',
	v2005Kusama: kusamaEvents.solutionStored['v2005'],
}

export const kicked = {
	name: 'Staking.Kicked',
	v2028Kusama: kusamaEvents.kicked['v2028'],
	v9300Kusama: kusamaEvents.kicked['v9300'],
}

export const stakingElectionFailed = {
	name: 'Staking.StakingElectionFailed',
	v9050Kusama: kusamaEvents.stakingElectionFailed['v9050'],
}

export const eraPaid = {
	name: 'Staking.EraPaid',
	v9090Kusama: kusamaEvents.eraPaid['v9090'],
	v9300Kusama: kusamaEvents.eraPaid['v9300'],
}

export const rewarded = {
	name: 'Staking.Rewarded',
	v9090Kusama: kusamaEvents.rewarded['v9090'],
	v9300Kusama: kusamaEvents.rewarded['v9300'],
	v1001000Kusama: kusamaEvents.rewarded['v1001000'],
}

export const slashed = {
	name: 'Staking.Slashed',
	v9090Kusama: kusamaEvents.slashed['v9090'],
	v9300Kusama: kusamaEvents.slashed['v9300'],
}

export const stakersElected = {
	name: 'Staking.StakersElected',
	v9090Kusama: kusamaEvents.stakersElected['v9090'],
}

export const chilled = {
	name: 'Staking.Chilled',
	v9090Kusama: kusamaEvents.chilled['v9090'],
	v9300Kusama: kusamaEvents.chilled['v9300'],
}

export const payoutStarted = {
	name: 'Staking.PayoutStarted',
	v9090Kusama: kusamaEvents.payoutStarted['v9090'],
	v9300Kusama: kusamaEvents.payoutStarted['v9300'],
}

export const validatorPrefsSet = {
	name: 'Staking.ValidatorPrefsSet',
	v9200Kusama: kusamaEvents.validatorPrefsSet['v9200'],
	v9300Kusama: kusamaEvents.validatorPrefsSet['v9300'],
}

export const slashReported = {
	name: 'Staking.SlashReported',
	v9350Kusama: kusamaEvents.slashReported['v9350'],
}

export const forceEra = {
	name: 'Staking.ForceEra',
	v9370Kusama: kusamaEvents.forceEra['v9370'],
}

export const snapshotVotersSizeExceeded = {
	name: 'Staking.SnapshotVotersSizeExceeded',
	v1000000Kusama: kusamaEvents.snapshotVotersSizeExceeded['v1000000'],
}

export const snapshotTargetsSizeExceeded = {
	name: 'Staking.SnapshotTargetsSizeExceeded',
	v1000000Kusama: kusamaEvents.snapshotTargetsSizeExceeded['v1000000'],
}
