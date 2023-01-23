import type {Result, Option} from './support'

export interface Delegator {
    id: Uint8Array
    delegations: Bond[]
    total: bigint
    requests: PendingDelegationRequests
    status: DelegatorStatus
}

export interface Nominator2 {
    delegations: Bond[]
    revocations: Uint8Array[]
    total: bigint
    scheduledRevocationsCount: number
    scheduledRevocationsTotal: bigint
    status: DelegatorStatus
}

export interface Bond {
    owner: Uint8Array
    amount: bigint
}

export interface PendingDelegationRequests {
    revocationsCount: number
    requests: [Uint8Array, DelegationRequest][]
    lessTotal: bigint
}

export type DelegatorStatus = DelegatorStatus_Active | DelegatorStatus_Leaving

export interface DelegatorStatus_Active {
    __kind: 'Active'
}

export interface DelegatorStatus_Leaving {
    __kind: 'Leaving'
    value: number
}

export interface DelegationRequest {
    collator: Uint8Array
    amount: bigint
    whenExecutable: number
    action: DelegationChange
}

export type DelegationChange = DelegationChange_Revoke | DelegationChange_Decrease

export interface DelegationChange_Revoke {
    __kind: 'Revoke'
}

export interface DelegationChange_Decrease {
    __kind: 'Decrease'
}
