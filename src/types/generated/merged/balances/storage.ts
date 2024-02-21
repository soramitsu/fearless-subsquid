import * as kusamaStorage from '../../kusama/balances/storage'


export const totalIssuance = {
	name: '',
	v1020Kusama: kusamaStorage.totalIssuance['v1020'],
}

export const vesting = {
	name: '',
	v1020Kusama: kusamaStorage.vesting['v1020'],
}

export const freeBalance = {
	name: '',
	v1020Kusama: kusamaStorage.freeBalance['v1020'],
}

export const reservedBalance = {
	name: '',
	v1020Kusama: kusamaStorage.reservedBalance['v1020'],
}

export const locks = {
	name: '',
	v1020Kusama: kusamaStorage.locks['v1020'],
	v1050Kusama: kusamaStorage.locks['v1050'],
}

export const account = {
	name: '',
	v1050Kusama: kusamaStorage.account['v1050'],
	v9420Kusama: kusamaStorage.account['v9420'],
}

export const storageVersion = {
	name: '',
	v1050Kusama: kusamaStorage.storageVersion['v1050'],
	v9111Kusama: kusamaStorage.storageVersion['v9111'],
}

export const reserves = {
	name: '',
	v9050Kusama: kusamaStorage.reserves['v9050'],
}

export const inactiveIssuance = {
	name: '',
	v9340Kusama: kusamaStorage.inactiveIssuance['v9340'],
}

export const holds = {
	name: '',
	v9420Kusama: kusamaStorage.holds['v9420'],
	v1001000Kusama: kusamaStorage.holds['v1001000'],
}

export const freezes = {
	name: '',
	v9420Kusama: kusamaStorage.freezes['v9420'],
	v1001000Kusama: kusamaStorage.freezes['v1001000'],
}
