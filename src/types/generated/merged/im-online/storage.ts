import * as kusamaStorage from '../../kusama/im-online/storage'


export const gossipAt = {
	name: '',
	v1020Kusama: kusamaStorage.gossipAt['v1020'],
}

export const keys = {
	name: '',
	v1020Kusama: kusamaStorage.keys['v1020'],
}

export const receivedHeartbeats = {
	name: '',
	v1020Kusama: kusamaStorage.receivedHeartbeats['v1020'],
	v9111Kusama: kusamaStorage.receivedHeartbeats['v9111'],
	v1000000Kusama: kusamaStorage.receivedHeartbeats['v1000000'],
}

export const authoredBlocks = {
	name: '',
	v1020Kusama: kusamaStorage.authoredBlocks['v1020'],
}

export const heartbeatAfter = {
	name: '',
	v1045Kusama: kusamaStorage.heartbeatAfter['v1045'],
}
