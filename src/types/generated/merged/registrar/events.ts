import * as kusamaEvents from '../../kusama/registrar/events'


export const parathreadRegistered = {
	name: 'Registrar.ParathreadRegistered',
	v1020Kusama: kusamaEvents.parathreadRegistered['v1020'],
}

export const parathreadDeregistered = {
	name: 'Registrar.ParathreadDeregistered',
	v1020Kusama: kusamaEvents.parathreadDeregistered['v1020'],
}

export const registered = {
	name: 'Registrar.Registered',
	v9010Kusama: kusamaEvents.registered['v9010'],
	v9230Kusama: kusamaEvents.registered['v9230'],
}

export const deregistered = {
	name: 'Registrar.Deregistered',
	v9010Kusama: kusamaEvents.deregistered['v9010'],
	v9230Kusama: kusamaEvents.deregistered['v9230'],
}

export const reserved = {
	name: 'Registrar.Reserved',
	v9010Kusama: kusamaEvents.reserved['v9010'],
	v9230Kusama: kusamaEvents.reserved['v9230'],
}

export const swapped = {
	name: 'Registrar.Swapped',
	v9430Kusama: kusamaEvents.swapped['v9430'],
}
