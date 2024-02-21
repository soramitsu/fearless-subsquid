import * as kusamaCalls from '../../kusama/authorship/calls'


export const setUncles = {
	name: 'Authorship.set_uncles',
	v1020Kusama: kusamaCalls.setUncles['v1020'],
	v9111Kusama: kusamaCalls.setUncles['v9111'],
	v9130Kusama: kusamaCalls.setUncles['v9130'],
}
