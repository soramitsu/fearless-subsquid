import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'
import * as v9090 from '../v9090'
import * as v9111 from '../v9111'
import * as v9160 from '../v9160'
import * as v9340 from '../v9340'
import * as v1000000 from '../v1000000'
import * as v1001000 from '../v1001000'

export const parachains =  {
    /**
     *  All parachains. Ordered ascending by ParaId. Parathreads are not included.
     */
    v9010: new StorageType('Paras.Parachains', 'Default', [], sts.array(() => v9010.ParaId)) as ParachainsV9010,
}

/**
 *  All parachains. Ordered ascending by ParaId. Parathreads are not included.
 */
export interface ParachainsV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.ParaId[]
    get(block: Block): Promise<(v9010.ParaId[] | undefined)>
}

export const paraLifecycles =  {
    /**
     *  The current lifecycle of a all known Para IDs.
     */
    v9010: new StorageType('Paras.ParaLifecycles', 'Optional', [v9010.ParaId], v9010.ParaLifecycle) as ParaLifecyclesV9010,
    /**
     *  The current lifecycle of a all known Para IDs.
     */
    v9111: new StorageType('Paras.ParaLifecycles', 'Optional', [v9111.Id], v9111.ParaLifecycle) as ParaLifecyclesV9111,
}

/**
 *  The current lifecycle of a all known Para IDs.
 */
export interface ParaLifecyclesV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.ParaId): Promise<(v9010.ParaLifecycle | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(v9010.ParaLifecycle | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (v9010.ParaLifecycle | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (v9010.ParaLifecycle | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (v9010.ParaLifecycle | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (v9010.ParaLifecycle | undefined)][]>
}

/**
 *  The current lifecycle of a all known Para IDs.
 */
export interface ParaLifecyclesV9111  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9111.Id): Promise<(v9111.ParaLifecycle | undefined)>
    getMany(block: Block, keys: v9111.Id[]): Promise<(v9111.ParaLifecycle | undefined)[]>
    getKeys(block: Block): Promise<v9111.Id[]>
    getKeys(block: Block, key: v9111.Id): Promise<v9111.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9111.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9111.Id): AsyncIterable<v9111.Id[]>
    getPairs(block: Block): Promise<[k: v9111.Id, v: (v9111.ParaLifecycle | undefined)][]>
    getPairs(block: Block, key: v9111.Id): Promise<[k: v9111.Id, v: (v9111.ParaLifecycle | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9111.Id, v: (v9111.ParaLifecycle | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9111.Id): AsyncIterable<[k: v9111.Id, v: (v9111.ParaLifecycle | undefined)][]>
}

export const heads =  {
    /**
     *  The head-data of every registered para.
     */
    v9010: new StorageType('Paras.Heads', 'Optional', [v9010.ParaId], v9010.HeadData) as HeadsV9010,
}

/**
 *  The head-data of every registered para.
 */
export interface HeadsV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.ParaId): Promise<(v9010.HeadData | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(v9010.HeadData | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (v9010.HeadData | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (v9010.HeadData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (v9010.HeadData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (v9010.HeadData | undefined)][]>
}

export const currentCodeHash =  {
    /**
     *  The validation code hash of every live para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    v9010: new StorageType('Paras.CurrentCodeHash', 'Optional', [v9010.ParaId], v9010.Hash) as CurrentCodeHashV9010,
}

/**
 *  The validation code hash of every live para.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface CurrentCodeHashV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.ParaId): Promise<(v9010.Hash | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(v9010.Hash | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (v9010.Hash | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (v9010.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (v9010.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (v9010.Hash | undefined)][]>
}

export const pastCodeHash =  {
    /**
     *  Actual past code hash, indicated by the para id as well as the block number at which it
     *  became outdated.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    v9010: new StorageType('Paras.PastCodeHash', 'Optional', [sts.tuple(() => [v9010.ParaId, v9010.BlockNumber])], v9010.Hash) as PastCodeHashV9010,
}

/**
 *  Actual past code hash, indicated by the para id as well as the block number at which it
 *  became outdated.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface PastCodeHashV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v9010.ParaId, v9010.BlockNumber]): Promise<(v9010.Hash | undefined)>
    getMany(block: Block, keys: [v9010.ParaId, v9010.BlockNumber][]): Promise<(v9010.Hash | undefined)[]>
    getKeys(block: Block): Promise<[v9010.ParaId, v9010.BlockNumber][]>
    getKeys(block: Block, key: [v9010.ParaId, v9010.BlockNumber]): Promise<[v9010.ParaId, v9010.BlockNumber][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v9010.ParaId, v9010.BlockNumber][]>
    getKeysPaged(pageSize: number, block: Block, key: [v9010.ParaId, v9010.BlockNumber]): AsyncIterable<[v9010.ParaId, v9010.BlockNumber][]>
    getPairs(block: Block): Promise<[k: [v9010.ParaId, v9010.BlockNumber], v: (v9010.Hash | undefined)][]>
    getPairs(block: Block, key: [v9010.ParaId, v9010.BlockNumber]): Promise<[k: [v9010.ParaId, v9010.BlockNumber], v: (v9010.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v9010.ParaId, v9010.BlockNumber], v: (v9010.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v9010.ParaId, v9010.BlockNumber]): AsyncIterable<[k: [v9010.ParaId, v9010.BlockNumber], v: (v9010.Hash | undefined)][]>
}

export const pastCodeMeta =  {
    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to keep it available for secondary checkers.
     */
    v9010: new StorageType('Paras.PastCodeMeta', 'Default', [v9010.ParaId], v9010.ParaPastCodeMeta) as PastCodeMetaV9010,
}

/**
 *  Past code of parachains. The parachains themselves may not be registered anymore,
 *  but we also keep their code on-chain for the same amount of time as outdated code
 *  to keep it available for secondary checkers.
 */
export interface PastCodeMetaV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.ParaPastCodeMeta
    get(block: Block, key: v9010.ParaId): Promise<(v9010.ParaPastCodeMeta | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(v9010.ParaPastCodeMeta | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (v9010.ParaPastCodeMeta | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (v9010.ParaPastCodeMeta | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (v9010.ParaPastCodeMeta | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (v9010.ParaPastCodeMeta | undefined)][]>
}

export const pastCodePruning =  {
    /**
     *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
     *  Note that this is the actual height of the included block, not the expected height at which the
     *  code upgrade would be applied, although they may be equal.
     *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
     *  from the time at which the parachain perceives a code upgrade as having occurred.
     *  Multiple entries for a single para are permitted. Ordered ascending by block number.
     */
    v9010: new StorageType('Paras.PastCodePruning', 'Default', [], sts.array(() => sts.tuple(() => [v9010.ParaId, v9010.BlockNumber]))) as PastCodePruningV9010,
}

/**
 *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
 *  Note that this is the actual height of the included block, not the expected height at which the
 *  code upgrade would be applied, although they may be equal.
 *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
 *  from the time at which the parachain perceives a code upgrade as having occurred.
 *  Multiple entries for a single para are permitted. Ordered ascending by block number.
 */
export interface PastCodePruningV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9010.ParaId, v9010.BlockNumber][]
    get(block: Block): Promise<([v9010.ParaId, v9010.BlockNumber][] | undefined)>
}

export const futureCodeUpgrades =  {
    /**
     *  The block number at which the planned code change is expected for a para.
     *  The change will be applied after the first parablock for this ID included which executes
     *  in the context of a relay chain block with a number >= `expected_at`.
     */
    v9010: new StorageType('Paras.FutureCodeUpgrades', 'Optional', [v9010.ParaId], v9010.BlockNumber) as FutureCodeUpgradesV9010,
}

/**
 *  The block number at which the planned code change is expected for a para.
 *  The change will be applied after the first parablock for this ID included which executes
 *  in the context of a relay chain block with a number >= `expected_at`.
 */
export interface FutureCodeUpgradesV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.ParaId): Promise<(v9010.BlockNumber | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(v9010.BlockNumber | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (v9010.BlockNumber | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (v9010.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (v9010.BlockNumber | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (v9010.BlockNumber | undefined)][]>
}

export const futureCodeHash =  {
    /**
     *  The actual future code hash of a para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    v9010: new StorageType('Paras.FutureCodeHash', 'Optional', [v9010.ParaId], v9010.Hash) as FutureCodeHashV9010,
}

/**
 *  The actual future code hash of a para.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface FutureCodeHashV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.ParaId): Promise<(v9010.Hash | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(v9010.Hash | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (v9010.Hash | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (v9010.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (v9010.Hash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (v9010.Hash | undefined)][]>
}

export const actionsQueue =  {
    /**
     *  The actions to perform during the start of a specific session index.
     */
    v9010: new StorageType('Paras.ActionsQueue', 'Default', [v9010.SessionIndex], sts.array(() => v9010.ParaId)) as ActionsQueueV9010,
}

/**
 *  The actions to perform during the start of a specific session index.
 */
export interface ActionsQueueV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9010.ParaId[]
    get(block: Block, key: v9010.SessionIndex): Promise<(v9010.ParaId[] | undefined)>
    getMany(block: Block, keys: v9010.SessionIndex[]): Promise<(v9010.ParaId[] | undefined)[]>
    getKeys(block: Block): Promise<v9010.SessionIndex[]>
    getKeys(block: Block, key: v9010.SessionIndex): Promise<v9010.SessionIndex[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.SessionIndex[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.SessionIndex): AsyncIterable<v9010.SessionIndex[]>
    getPairs(block: Block): Promise<[k: v9010.SessionIndex, v: (v9010.ParaId[] | undefined)][]>
    getPairs(block: Block, key: v9010.SessionIndex): Promise<[k: v9010.SessionIndex, v: (v9010.ParaId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.SessionIndex, v: (v9010.ParaId[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.SessionIndex): AsyncIterable<[k: v9010.SessionIndex, v: (v9010.ParaId[] | undefined)][]>
}

export const upcomingParasGenesis =  {
    /**
     *  Upcoming paras instantiation arguments.
     */
    v9010: new StorageType('Paras.UpcomingParasGenesis', 'Optional', [v9010.ParaId], v9010.ParaGenesisArgs) as UpcomingParasGenesisV9010,
    /**
     *  Upcoming paras instantiation arguments.
     * 
     *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
     *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
     */
    v9340: new StorageType('Paras.UpcomingParasGenesis', 'Optional', [v9340.Id], v9340.ParaGenesisArgs) as UpcomingParasGenesisV9340,
}

/**
 *  Upcoming paras instantiation arguments.
 */
export interface UpcomingParasGenesisV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.ParaId): Promise<(v9010.ParaGenesisArgs | undefined)>
    getMany(block: Block, keys: v9010.ParaId[]): Promise<(v9010.ParaGenesisArgs | undefined)[]>
    getKeys(block: Block): Promise<v9010.ParaId[]>
    getKeys(block: Block, key: v9010.ParaId): Promise<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<v9010.ParaId[]>
    getPairs(block: Block): Promise<[k: v9010.ParaId, v: (v9010.ParaGenesisArgs | undefined)][]>
    getPairs(block: Block, key: v9010.ParaId): Promise<[k: v9010.ParaId, v: (v9010.ParaGenesisArgs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.ParaId, v: (v9010.ParaGenesisArgs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.ParaId): AsyncIterable<[k: v9010.ParaId, v: (v9010.ParaGenesisArgs | undefined)][]>
}

/**
 *  Upcoming paras instantiation arguments.
 * 
 *  NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
 *  to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
 */
export interface UpcomingParasGenesisV9340  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9340.Id): Promise<(v9340.ParaGenesisArgs | undefined)>
    getMany(block: Block, keys: v9340.Id[]): Promise<(v9340.ParaGenesisArgs | undefined)[]>
    getKeys(block: Block): Promise<v9340.Id[]>
    getKeys(block: Block, key: v9340.Id): Promise<v9340.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9340.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9340.Id): AsyncIterable<v9340.Id[]>
    getPairs(block: Block): Promise<[k: v9340.Id, v: (v9340.ParaGenesisArgs | undefined)][]>
    getPairs(block: Block, key: v9340.Id): Promise<[k: v9340.Id, v: (v9340.ParaGenesisArgs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9340.Id, v: (v9340.ParaGenesisArgs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9340.Id): AsyncIterable<[k: v9340.Id, v: (v9340.ParaGenesisArgs | undefined)][]>
}

export const codeByHashRefs =  {
    /**
     *  The number of reference on the validation code in [`CodeByHash`] storage.
     */
    v9010: new StorageType('Paras.CodeByHashRefs', 'Default', [v9010.Hash], sts.number()) as CodeByHashRefsV9010,
}

/**
 *  The number of reference on the validation code in [`CodeByHash`] storage.
 */
export interface CodeByHashRefsV9010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: v9010.Hash): Promise<(number | undefined)>
    getMany(block: Block, keys: v9010.Hash[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v9010.Hash[]>
    getKeys(block: Block, key: v9010.Hash): Promise<v9010.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.Hash): AsyncIterable<v9010.Hash[]>
    getPairs(block: Block): Promise<[k: v9010.Hash, v: (number | undefined)][]>
    getPairs(block: Block, key: v9010.Hash): Promise<[k: v9010.Hash, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.Hash, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.Hash): AsyncIterable<[k: v9010.Hash, v: (number | undefined)][]>
}

export const codeByHash =  {
    /**
     *  Validation code stored by its hash.
     * 
     *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
     *  [`PastCodeHash`].
     */
    v9010: new StorageType('Paras.CodeByHash', 'Optional', [v9010.Hash], v9010.ValidationCode) as CodeByHashV9010,
}

/**
 *  Validation code stored by its hash.
 * 
 *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
 *  [`PastCodeHash`].
 */
export interface CodeByHashV9010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9010.Hash): Promise<(v9010.ValidationCode | undefined)>
    getMany(block: Block, keys: v9010.Hash[]): Promise<(v9010.ValidationCode | undefined)[]>
    getKeys(block: Block): Promise<v9010.Hash[]>
    getKeys(block: Block, key: v9010.Hash): Promise<v9010.Hash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9010.Hash[]>
    getKeysPaged(pageSize: number, block: Block, key: v9010.Hash): AsyncIterable<v9010.Hash[]>
    getPairs(block: Block): Promise<[k: v9010.Hash, v: (v9010.ValidationCode | undefined)][]>
    getPairs(block: Block, key: v9010.Hash): Promise<[k: v9010.Hash, v: (v9010.ValidationCode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9010.Hash, v: (v9010.ValidationCode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9010.Hash): AsyncIterable<[k: v9010.Hash, v: (v9010.ValidationCode | undefined)][]>
}

export const upgradeGoAheadSignal =  {
    /**
     *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade procedure.
     * 
     *  This value is absent when there are no upgrades scheduled or during the time the relay chain
     *  performs the checks. It is set at the first relay-chain block when the corresponding parachain
     *  can switch its upgrade function. As soon as the parachain's block is included, the value
     *  gets reset to `None`.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    v9090: new StorageType('Paras.UpgradeGoAheadSignal', 'Optional', [v9090.ParaId], v9090.UpgradeGoAhead) as UpgradeGoAheadSignalV9090,
}

/**
 *  This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade procedure.
 * 
 *  This value is absent when there are no upgrades scheduled or during the time the relay chain
 *  performs the checks. It is set at the first relay-chain block when the corresponding parachain
 *  can switch its upgrade function. As soon as the parachain's block is included, the value
 *  gets reset to `None`.
 * 
 *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
 *  the format will require migration of parachains.
 */
export interface UpgradeGoAheadSignalV9090  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9090.ParaId): Promise<(v9090.UpgradeGoAhead | undefined)>
    getMany(block: Block, keys: v9090.ParaId[]): Promise<(v9090.UpgradeGoAhead | undefined)[]>
    getKeys(block: Block): Promise<v9090.ParaId[]>
    getKeys(block: Block, key: v9090.ParaId): Promise<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<v9090.ParaId[]>
    getPairs(block: Block): Promise<[k: v9090.ParaId, v: (v9090.UpgradeGoAhead | undefined)][]>
    getPairs(block: Block, key: v9090.ParaId): Promise<[k: v9090.ParaId, v: (v9090.UpgradeGoAhead | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.ParaId, v: (v9090.UpgradeGoAhead | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<[k: v9090.ParaId, v: (v9090.UpgradeGoAhead | undefined)][]>
}

export const upgradeRestrictionSignal =  {
    /**
     *  This is used by the relay-chain to communicate that there are restrictions for performing
     *  an upgrade for this parachain.
     * 
     *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
     *  potential use case is when we want to perform some maintenance (such as storage migration)
     *  we could restrict upgrades to make the process simpler.
     * 
     *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
     *  the format will require migration of parachains.
     */
    v9090: new StorageType('Paras.UpgradeRestrictionSignal', 'Optional', [v9090.ParaId], v9090.UpgradeRestriction) as UpgradeRestrictionSignalV9090,
}

/**
 *  This is used by the relay-chain to communicate that there are restrictions for performing
 *  an upgrade for this parachain.
 * 
 *  This may be a because the parachain waits for the upgrade cooldown to expire. Another
 *  potential use case is when we want to perform some maintenance (such as storage migration)
 *  we could restrict upgrades to make the process simpler.
 * 
 *  NOTE that this field is used by parachains via merkle storage proofs, therefore changing
 *  the format will require migration of parachains.
 */
export interface UpgradeRestrictionSignalV9090  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9090.ParaId): Promise<(v9090.UpgradeRestriction | undefined)>
    getMany(block: Block, keys: v9090.ParaId[]): Promise<(v9090.UpgradeRestriction | undefined)[]>
    getKeys(block: Block): Promise<v9090.ParaId[]>
    getKeys(block: Block, key: v9090.ParaId): Promise<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9090.ParaId[]>
    getKeysPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<v9090.ParaId[]>
    getPairs(block: Block): Promise<[k: v9090.ParaId, v: (v9090.UpgradeRestriction | undefined)][]>
    getPairs(block: Block, key: v9090.ParaId): Promise<[k: v9090.ParaId, v: (v9090.UpgradeRestriction | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9090.ParaId, v: (v9090.UpgradeRestriction | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9090.ParaId): AsyncIterable<[k: v9090.ParaId, v: (v9090.UpgradeRestriction | undefined)][]>
}

export const upgradeCooldowns =  {
    /**
     *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
     * 
     *  Ordered ascending by block number.
     */
    v9090: new StorageType('Paras.UpgradeCooldowns', 'Default', [], sts.array(() => sts.tuple(() => [v9090.ParaId, v9090.BlockNumber]))) as UpgradeCooldownsV9090,
}

/**
 *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
 * 
 *  Ordered ascending by block number.
 */
export interface UpgradeCooldownsV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9090.ParaId, v9090.BlockNumber][]
    get(block: Block): Promise<([v9090.ParaId, v9090.BlockNumber][] | undefined)>
}

export const upcomingUpgrades =  {
    /**
     *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
     *  upgrade and at which relay-chain block it is expected at.
     * 
     *  Ordered ascending by block number.
     */
    v9090: new StorageType('Paras.UpcomingUpgrades', 'Default', [], sts.array(() => sts.tuple(() => [v9090.ParaId, v9090.BlockNumber]))) as UpcomingUpgradesV9090,
}

/**
 *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
 *  upgrade and at which relay-chain block it is expected at.
 * 
 *  Ordered ascending by block number.
 */
export interface UpcomingUpgradesV9090  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9090.ParaId, v9090.BlockNumber][]
    get(block: Block): Promise<([v9090.ParaId, v9090.BlockNumber][] | undefined)>
}

export const pvfActiveVoteMap =  {
    /**
     *  All currently active PVF pre-checking votes.
     * 
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    v9160: new StorageType('Paras.PvfActiveVoteMap', 'Optional', [v9160.ValidationCodeHash], v9160.PvfCheckActiveVoteState) as PvfActiveVoteMapV9160,
    /**
     *  All currently active PVF pre-checking votes.
     * 
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    v1000000: new StorageType('Paras.PvfActiveVoteMap', 'Optional', [v1000000.ValidationCodeHash], v1000000.PvfCheckActiveVoteState) as PvfActiveVoteMapV1000000,
    /**
     *  All currently active PVF pre-checking votes.
     * 
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    v1001000: new StorageType('Paras.PvfActiveVoteMap', 'Optional', [v1001000.ValidationCodeHash], v1001000.PvfCheckActiveVoteState) as PvfActiveVoteMapV1001000,
}

/**
 *  All currently active PVF pre-checking votes.
 * 
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface PvfActiveVoteMapV9160  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9160.ValidationCodeHash): Promise<(v9160.PvfCheckActiveVoteState | undefined)>
    getMany(block: Block, keys: v9160.ValidationCodeHash[]): Promise<(v9160.PvfCheckActiveVoteState | undefined)[]>
    getKeys(block: Block): Promise<v9160.ValidationCodeHash[]>
    getKeys(block: Block, key: v9160.ValidationCodeHash): Promise<v9160.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9160.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block, key: v9160.ValidationCodeHash): AsyncIterable<v9160.ValidationCodeHash[]>
    getPairs(block: Block): Promise<[k: v9160.ValidationCodeHash, v: (v9160.PvfCheckActiveVoteState | undefined)][]>
    getPairs(block: Block, key: v9160.ValidationCodeHash): Promise<[k: v9160.ValidationCodeHash, v: (v9160.PvfCheckActiveVoteState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9160.ValidationCodeHash, v: (v9160.PvfCheckActiveVoteState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9160.ValidationCodeHash): AsyncIterable<[k: v9160.ValidationCodeHash, v: (v9160.PvfCheckActiveVoteState | undefined)][]>
}

/**
 *  All currently active PVF pre-checking votes.
 * 
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface PvfActiveVoteMapV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000000.ValidationCodeHash): Promise<(v1000000.PvfCheckActiveVoteState | undefined)>
    getMany(block: Block, keys: v1000000.ValidationCodeHash[]): Promise<(v1000000.PvfCheckActiveVoteState | undefined)[]>
    getKeys(block: Block): Promise<v1000000.ValidationCodeHash[]>
    getKeys(block: Block, key: v1000000.ValidationCodeHash): Promise<v1000000.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000000.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000000.ValidationCodeHash): AsyncIterable<v1000000.ValidationCodeHash[]>
    getPairs(block: Block): Promise<[k: v1000000.ValidationCodeHash, v: (v1000000.PvfCheckActiveVoteState | undefined)][]>
    getPairs(block: Block, key: v1000000.ValidationCodeHash): Promise<[k: v1000000.ValidationCodeHash, v: (v1000000.PvfCheckActiveVoteState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000000.ValidationCodeHash, v: (v1000000.PvfCheckActiveVoteState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000000.ValidationCodeHash): AsyncIterable<[k: v1000000.ValidationCodeHash, v: (v1000000.PvfCheckActiveVoteState | undefined)][]>
}

/**
 *  All currently active PVF pre-checking votes.
 * 
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface PvfActiveVoteMapV1001000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1001000.ValidationCodeHash): Promise<(v1001000.PvfCheckActiveVoteState | undefined)>
    getMany(block: Block, keys: v1001000.ValidationCodeHash[]): Promise<(v1001000.PvfCheckActiveVoteState | undefined)[]>
    getKeys(block: Block): Promise<v1001000.ValidationCodeHash[]>
    getKeys(block: Block, key: v1001000.ValidationCodeHash): Promise<v1001000.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1001000.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block, key: v1001000.ValidationCodeHash): AsyncIterable<v1001000.ValidationCodeHash[]>
    getPairs(block: Block): Promise<[k: v1001000.ValidationCodeHash, v: (v1001000.PvfCheckActiveVoteState | undefined)][]>
    getPairs(block: Block, key: v1001000.ValidationCodeHash): Promise<[k: v1001000.ValidationCodeHash, v: (v1001000.PvfCheckActiveVoteState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1001000.ValidationCodeHash, v: (v1001000.PvfCheckActiveVoteState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1001000.ValidationCodeHash): AsyncIterable<[k: v1001000.ValidationCodeHash, v: (v1001000.PvfCheckActiveVoteState | undefined)][]>
}

export const pvfActiveVoteList =  {
    /**
     *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
     */
    v9160: new StorageType('Paras.PvfActiveVoteList', 'Default', [], sts.array(() => v9160.ValidationCodeHash)) as PvfActiveVoteListV9160,
}

/**
 *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
 */
export interface PvfActiveVoteListV9160  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9160.ValidationCodeHash[]
    get(block: Block): Promise<(v9160.ValidationCodeHash[] | undefined)>
}

export const mostRecentContext =  {
    /**
     *  The context (relay-chain block number) of the most recent parachain head.
     */
    v1000000: new StorageType('Paras.MostRecentContext', 'Optional', [v1000000.Id], sts.number()) as MostRecentContextV1000000,
}

/**
 *  The context (relay-chain block number) of the most recent parachain head.
 */
export interface MostRecentContextV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000000.Id): Promise<(number | undefined)>
    getMany(block: Block, keys: v1000000.Id[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v1000000.Id[]>
    getKeys(block: Block, key: v1000000.Id): Promise<v1000000.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000000.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000000.Id): AsyncIterable<v1000000.Id[]>
    getPairs(block: Block): Promise<[k: v1000000.Id, v: (number | undefined)][]>
    getPairs(block: Block, key: v1000000.Id): Promise<[k: v1000000.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000000.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000000.Id): AsyncIterable<[k: v1000000.Id, v: (number | undefined)][]>
}
