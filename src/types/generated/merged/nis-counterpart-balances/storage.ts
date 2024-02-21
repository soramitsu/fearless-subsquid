import * as kusamaStorage from '../../kusama/nis-counterpart-balances/storage'


export const totalIssuance = {
	name: '',
	v9340Kusama: kusamaStorage.totalIssuance['v9340'],
}

export const inactiveIssuance = {
	name: '',
	v9340Kusama: kusamaStorage.inactiveIssuance['v9340'],
}

export const account = {
	name: '',
	v9340Kusama: kusamaStorage.account['v9340'],
	v9420Kusama: kusamaStorage.account['v9420'],
}

export const locks = {
	name: '',
	v9340Kusama: kusamaStorage.locks['v9340'],
}

export const reserves = {
	name: '',
	v9340Kusama: kusamaStorage.reserves['v9340'],
}

export const holds = {
	name: '',
	v9420Kusama: kusamaStorage.holds['v9420'],
	v1000000Kusama: kusamaStorage.holds['v1000000'],
	v1001000Kusama: kusamaStorage.holds['v1001000'],
}

export const freezes = {
	name: '',
	v9420Kusama: kusamaStorage.freezes['v9420'],
}
