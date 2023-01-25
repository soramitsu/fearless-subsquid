
export type Result<T, E> = {
    __kind: 'Ok'
    value: T
} | {
    __kind: 'Err'
    value: E
}


interface Event {
    name: string
    args: any
}


export interface EventContext {
    _chain: {
        getEventHash(eventName: string): string
        decodeEvent(event: Event): any
    }
    event: Event
}


interface Call {
    name: string
    args: any
}


export interface CallContext {
    _chain: {
        getCallHash(name: string): string
        decodeCall(call: Call): any
    }
    call: Call
}


let showLatestWarning = true
export function deprecateLatest(): void {
    if (showLatestWarning) {
        showLatestWarning = false
        console.warn(`.isLatest, .asLatest properties are deprecated, if you believe this is a mistake, please leave a comment at https://github.com/subsquid/squid/issues/9`)
    }
}


export interface StorageContext {
    _chain: {
        getStorageItemTypeHash(prefix: string, name: string): string | undefined
        getStorage(blockHash: string, prefix: string, name: string, ...args: any[]): Promise<any>
        queryStorage(blockHash: string, prefix: string, name: string, ...args: any[]): Promise<any[]>
    }
    block: {
        hash: string
    }
}

export type Option<T> = {
    __kind: 'Some',
    value: T
} | {
    __kind: 'None'
}

export interface Chain {
    getEventHash(eventName: string): string
    decodeEvent(event: Event): any
    getCallHash(name: string): string
    decodeCall(call: Call): any
    getStorageItemTypeHash(prefix: string, name: string): string | undefined
    getStorage(blockHash: string, prefix: string, name: string, ...args: any[]): Promise<any>
    queryStorage2(blockHash: string, prefix: string, name: string, keyList?: any[]): Promise<any[]>
    getKeys(blockHash: string, prefix: string, name: string, ...args: any[]): Promise<any[]>
    getPairs(blockHash: string, prefix: string, name: string, ...args: any[]): Promise<any[]>
    getKeysPaged(pageSize: number, blockHash: string, prefix: string, name: string, ...args: any[]): AsyncIterable<any[]>
    getPairsPaged(pageSize: number, blockHash: string, prefix: string, name: string, ...args: any[]): AsyncIterable<[key: any, value: any][]>
    getConstantTypeHash(pallet: string, name: string): string | undefined
    getConstant(pallet: string, name: string): any
}
