import type {Result, Option} from './support'

export interface Nominator {
    nominations: Bond[]
    total: bigint
}

export interface Bond {
    owner: Uint8Array
    amount: bigint
}
