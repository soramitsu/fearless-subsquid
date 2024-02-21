import * as kusamaCalls from '../../kusama/claims/calls'


export const claim = {
	name: 'Claims.claim',
	v1020Kusama: kusamaCalls.claim['v1020'],
}

export const mintClaim = {
	name: 'Claims.mint_claim',
	v1020Kusama: kusamaCalls.mintClaim['v1020'],
	v1024Kusama: kusamaCalls.mintClaim['v1024'],
	v2005Kusama: kusamaCalls.mintClaim['v2005'],
}

export const claimAttest = {
	name: 'Claims.claim_attest',
	v2005Kusama: kusamaCalls.claimAttest['v2005'],
}

export const attest = {
	name: 'Claims.attest',
	v2005Kusama: kusamaCalls.attest['v2005'],
}

export const moveClaim = {
	name: 'Claims.move_claim',
	v2007Kusama: kusamaCalls.moveClaim['v2007'],
}
