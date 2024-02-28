import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v9110 from '../v9110'
import * as v9170 from '../v9170'
import * as v9340 from '../v9340'
import * as v1000001 from '../v1000001'
import * as v1001002 from '../v1001002'

export const parachains =  {
    /**
     *  All parachains. Ordered ascending by `ParaId`. Parathreads are not included.
     */
    v9110: new StorageType('Paras.Parachains', 'Default', [], sts.array(() => v9110.Id)) as ParachainsV9110,
}

/**
 *  All parachains. Ordered ascending by `ParaId`. Parathreads are not included.
 */
export interface ParachainsV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.Id[]
    get(block: Block): Promise<(v9110.Id[] | undefined)>
}

export const paraLifecycles =  {
    /**
     *  The current lifecycle of a all known Para IDs.
     */
    v9110: new StorageType('Paras.ParaLifecycles', 'Optional', [v9110.Id], v9110.ParaLifecycle) as ParaLifecyclesV9110,
}

/**
 *  The current lifecycle of a all known Para IDs.
 */
export interface ParaLifecyclesV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.Id): Promise<(v9110.ParaLifecycle | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(v9110.ParaLifecycle | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (v9110.ParaLifecycle | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (v9110.ParaLifecycle | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (v9110.ParaLifecycle | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (v9110.ParaLifecycle | undefined)][]>
}

export const heads =  {
    /**
     *  The head-data of every registered para.
     */
    v9110: new StorageType('Paras.Heads', 'Optional', [v9110.Id], v9110.HeadData) as HeadsV9110,
}

/**
 *  The head-data of every registered para.
 */
export interface HeadsV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.Id): Promise<(v9110.HeadData | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(v9110.HeadData | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (v9110.HeadData | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (v9110.HeadData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (v9110.HeadData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (v9110.HeadData | undefined)][]>
}

export const currentCodeHash =  {
    /**
     *  The validation code hash of every live para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    v9110: new StorageType('Paras.CurrentCodeHash', 'Optional', [v9110.Id], v9110.ValidationCodeHash) as CurrentCodeHashV9110,
}

/**
 *  The validation code hash of every live para.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface CurrentCodeHashV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.Id): Promise<(v9110.ValidationCodeHash | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(v9110.ValidationCodeHash | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (v9110.ValidationCodeHash | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (v9110.ValidationCodeHash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (v9110.ValidationCodeHash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (v9110.ValidationCodeHash | undefined)][]>
}

export const pastCodeHash =  {
    /**
     *  Actual past code hash, indicated by the para id as well as the block number at which it
     *  became outdated.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    v9110: new StorageType('Paras.PastCodeHash', 'Optional', [sts.tuple(() => [v9110.Id, sts.number()])], v9110.ValidationCodeHash) as PastCodeHashV9110,
}

/**
 *  Actual past code hash, indicated by the para id as well as the block number at which it
 *  became outdated.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface PastCodeHashV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v9110.Id, number]): Promise<(v9110.ValidationCodeHash | undefined)>
    getMany(block: Block, keys: [v9110.Id, number][]): Promise<(v9110.ValidationCodeHash | undefined)[]>
    getKeys(block: Block): Promise<[v9110.Id, number][]>
    getKeys(block: Block, key: [v9110.Id, number]): Promise<[v9110.Id, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v9110.Id, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [v9110.Id, number]): AsyncIterable<[v9110.Id, number][]>
    getPairs(block: Block): Promise<[k: [v9110.Id, number], v: (v9110.ValidationCodeHash | undefined)][]>
    getPairs(block: Block, key: [v9110.Id, number]): Promise<[k: [v9110.Id, number], v: (v9110.ValidationCodeHash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v9110.Id, number], v: (v9110.ValidationCodeHash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v9110.Id, number]): AsyncIterable<[k: [v9110.Id, number], v: (v9110.ValidationCodeHash | undefined)][]>
}

export const pastCodeMeta =  {
    /**
     *  Past code of parachains. The parachains themselves may not be registered anymore,
     *  but we also keep their code on-chain for the same amount of time as outdated code
     *  to keep it available for secondary checkers.
     */
    v9110: new StorageType('Paras.PastCodeMeta', 'Default', [v9110.Id], v9110.ParaPastCodeMeta) as PastCodeMetaV9110,
}

/**
 *  Past code of parachains. The parachains themselves may not be registered anymore,
 *  but we also keep their code on-chain for the same amount of time as outdated code
 *  to keep it available for secondary checkers.
 */
export interface PastCodeMetaV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.ParaPastCodeMeta
    get(block: Block, key: v9110.Id): Promise<(v9110.ParaPastCodeMeta | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(v9110.ParaPastCodeMeta | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (v9110.ParaPastCodeMeta | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (v9110.ParaPastCodeMeta | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (v9110.ParaPastCodeMeta | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (v9110.ParaPastCodeMeta | undefined)][]>
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
    v9110: new StorageType('Paras.PastCodePruning', 'Default', [], sts.array(() => sts.tuple(() => [v9110.Id, sts.number()]))) as PastCodePruningV9110,
}

/**
 *  Which paras have past code that needs pruning and the relay-chain block at which the code was replaced.
 *  Note that this is the actual height of the included block, not the expected height at which the
 *  code upgrade would be applied, although they may be equal.
 *  This is to ensure the entire acceptance period is covered, not an offset acceptance period starting
 *  from the time at which the parachain perceives a code upgrade as having occurred.
 *  Multiple entries for a single para are permitted. Ordered ascending by block number.
 */
export interface PastCodePruningV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9110.Id, number][]
    get(block: Block): Promise<([v9110.Id, number][] | undefined)>
}

export const futureCodeUpgrades =  {
    /**
     *  The block number at which the planned code change is expected for a para.
     *  The change will be applied after the first parablock for this ID included which executes
     *  in the context of a relay chain block with a number >= `expected_at`.
     */
    v9110: new StorageType('Paras.FutureCodeUpgrades', 'Optional', [v9110.Id], sts.number()) as FutureCodeUpgradesV9110,
}

/**
 *  The block number at which the planned code change is expected for a para.
 *  The change will be applied after the first parablock for this ID included which executes
 *  in the context of a relay chain block with a number >= `expected_at`.
 */
export interface FutureCodeUpgradesV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.Id): Promise<(number | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (number | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (number | undefined)][]>
}

export const futureCodeHash =  {
    /**
     *  The actual future code hash of a para.
     * 
     *  Corresponding code can be retrieved with [`CodeByHash`].
     */
    v9110: new StorageType('Paras.FutureCodeHash', 'Optional', [v9110.Id], v9110.ValidationCodeHash) as FutureCodeHashV9110,
}

/**
 *  The actual future code hash of a para.
 * 
 *  Corresponding code can be retrieved with [`CodeByHash`].
 */
export interface FutureCodeHashV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.Id): Promise<(v9110.ValidationCodeHash | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(v9110.ValidationCodeHash | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (v9110.ValidationCodeHash | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (v9110.ValidationCodeHash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (v9110.ValidationCodeHash | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (v9110.ValidationCodeHash | undefined)][]>
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
    v9110: new StorageType('Paras.UpgradeGoAheadSignal', 'Optional', [v9110.Id], v9110.V1UpgradeGoAhead) as UpgradeGoAheadSignalV9110,
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
export interface UpgradeGoAheadSignalV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.Id): Promise<(v9110.V1UpgradeGoAhead | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(v9110.V1UpgradeGoAhead | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (v9110.V1UpgradeGoAhead | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (v9110.V1UpgradeGoAhead | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (v9110.V1UpgradeGoAhead | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (v9110.V1UpgradeGoAhead | undefined)][]>
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
    v9110: new StorageType('Paras.UpgradeRestrictionSignal', 'Optional', [v9110.Id], v9110.V1UpgradeRestriction) as UpgradeRestrictionSignalV9110,
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
export interface UpgradeRestrictionSignalV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.Id): Promise<(v9110.V1UpgradeRestriction | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(v9110.V1UpgradeRestriction | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (v9110.V1UpgradeRestriction | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (v9110.V1UpgradeRestriction | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (v9110.V1UpgradeRestriction | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (v9110.V1UpgradeRestriction | undefined)][]>
}

export const upgradeCooldowns =  {
    /**
     *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
     * 
     *  Ordered ascending by block number.
     */
    v9110: new StorageType('Paras.UpgradeCooldowns', 'Default', [], sts.array(() => sts.tuple(() => [v9110.Id, sts.number()]))) as UpgradeCooldownsV9110,
}

/**
 *  The list of parachains that are awaiting for their upgrade restriction to cooldown.
 * 
 *  Ordered ascending by block number.
 */
export interface UpgradeCooldownsV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9110.Id, number][]
    get(block: Block): Promise<([v9110.Id, number][] | undefined)>
}

export const upcomingUpgrades =  {
    /**
     *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
     *  upgrade and at which relay-chain block it is expected at.
     * 
     *  Ordered ascending by block number.
     */
    v9110: new StorageType('Paras.UpcomingUpgrades', 'Default', [], sts.array(() => sts.tuple(() => [v9110.Id, sts.number()]))) as UpcomingUpgradesV9110,
}

/**
 *  The list of upcoming code upgrades. Each item is a pair of which para performs a code
 *  upgrade and at which relay-chain block it is expected at.
 * 
 *  Ordered ascending by block number.
 */
export interface UpcomingUpgradesV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v9110.Id, number][]
    get(block: Block): Promise<([v9110.Id, number][] | undefined)>
}

export const actionsQueue =  {
    /**
     *  The actions to perform during the start of a specific session index.
     */
    v9110: new StorageType('Paras.ActionsQueue', 'Default', [sts.number()], sts.array(() => v9110.Id)) as ActionsQueueV9110,
}

/**
 *  The actions to perform during the start of a specific session index.
 */
export interface ActionsQueueV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9110.Id[]
    get(block: Block, key: number): Promise<(v9110.Id[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v9110.Id[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v9110.Id[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v9110.Id[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v9110.Id[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v9110.Id[] | undefined)][]>
}

export const upcomingParasGenesis =  {
    /**
     *  Upcoming paras instantiation arguments.
     */
    v9110: new StorageType('Paras.UpcomingParasGenesis', 'Optional', [v9110.Id], v9110.ParaGenesisArgs) as UpcomingParasGenesisV9110,
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
export interface UpcomingParasGenesisV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.Id): Promise<(v9110.ParaGenesisArgs | undefined)>
    getMany(block: Block, keys: v9110.Id[]): Promise<(v9110.ParaGenesisArgs | undefined)[]>
    getKeys(block: Block): Promise<v9110.Id[]>
    getKeys(block: Block, key: v9110.Id): Promise<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<v9110.Id[]>
    getPairs(block: Block): Promise<[k: v9110.Id, v: (v9110.ParaGenesisArgs | undefined)][]>
    getPairs(block: Block, key: v9110.Id): Promise<[k: v9110.Id, v: (v9110.ParaGenesisArgs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.Id, v: (v9110.ParaGenesisArgs | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.Id): AsyncIterable<[k: v9110.Id, v: (v9110.ParaGenesisArgs | undefined)][]>
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
    v9110: new StorageType('Paras.CodeByHashRefs', 'Default', [v9110.ValidationCodeHash], sts.number()) as CodeByHashRefsV9110,
}

/**
 *  The number of reference on the validation code in [`CodeByHash`] storage.
 */
export interface CodeByHashRefsV9110  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: v9110.ValidationCodeHash): Promise<(number | undefined)>
    getMany(block: Block, keys: v9110.ValidationCodeHash[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v9110.ValidationCodeHash[]>
    getKeys(block: Block, key: v9110.ValidationCodeHash): Promise<v9110.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.ValidationCodeHash): AsyncIterable<v9110.ValidationCodeHash[]>
    getPairs(block: Block): Promise<[k: v9110.ValidationCodeHash, v: (number | undefined)][]>
    getPairs(block: Block, key: v9110.ValidationCodeHash): Promise<[k: v9110.ValidationCodeHash, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.ValidationCodeHash, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.ValidationCodeHash): AsyncIterable<[k: v9110.ValidationCodeHash, v: (number | undefined)][]>
}

export const codeByHash =  {
    /**
     *  Validation code stored by its hash.
     * 
     *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
     *  [`PastCodeHash`].
     */
    v9110: new StorageType('Paras.CodeByHash', 'Optional', [v9110.ValidationCodeHash], v9110.ValidationCode) as CodeByHashV9110,
}

/**
 *  Validation code stored by its hash.
 * 
 *  This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
 *  [`PastCodeHash`].
 */
export interface CodeByHashV9110  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9110.ValidationCodeHash): Promise<(v9110.ValidationCode | undefined)>
    getMany(block: Block, keys: v9110.ValidationCodeHash[]): Promise<(v9110.ValidationCode | undefined)[]>
    getKeys(block: Block): Promise<v9110.ValidationCodeHash[]>
    getKeys(block: Block, key: v9110.ValidationCodeHash): Promise<v9110.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9110.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block, key: v9110.ValidationCodeHash): AsyncIterable<v9110.ValidationCodeHash[]>
    getPairs(block: Block): Promise<[k: v9110.ValidationCodeHash, v: (v9110.ValidationCode | undefined)][]>
    getPairs(block: Block, key: v9110.ValidationCodeHash): Promise<[k: v9110.ValidationCodeHash, v: (v9110.ValidationCode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9110.ValidationCodeHash, v: (v9110.ValidationCode | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9110.ValidationCodeHash): AsyncIterable<[k: v9110.ValidationCodeHash, v: (v9110.ValidationCode | undefined)][]>
}

export const pvfActiveVoteMap =  {
    /**
     *  All currently active PVF pre-checking votes.
     * 
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    v9170: new StorageType('Paras.PvfActiveVoteMap', 'Optional', [v9170.ValidationCodeHash], v9170.PvfCheckActiveVoteState) as PvfActiveVoteMapV9170,
    /**
     *  All currently active PVF pre-checking votes.
     * 
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    v1000001: new StorageType('Paras.PvfActiveVoteMap', 'Optional', [v1000001.ValidationCodeHash], v1000001.PvfCheckActiveVoteState) as PvfActiveVoteMapV1000001,
    /**
     *  All currently active PVF pre-checking votes.
     * 
     *  Invariant:
     *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
     */
    v1001002: new StorageType('Paras.PvfActiveVoteMap', 'Optional', [v1001002.ValidationCodeHash], v1001002.PvfCheckActiveVoteState) as PvfActiveVoteMapV1001002,
}

/**
 *  All currently active PVF pre-checking votes.
 * 
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface PvfActiveVoteMapV9170  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v9170.ValidationCodeHash): Promise<(v9170.PvfCheckActiveVoteState | undefined)>
    getMany(block: Block, keys: v9170.ValidationCodeHash[]): Promise<(v9170.PvfCheckActiveVoteState | undefined)[]>
    getKeys(block: Block): Promise<v9170.ValidationCodeHash[]>
    getKeys(block: Block, key: v9170.ValidationCodeHash): Promise<v9170.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v9170.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block, key: v9170.ValidationCodeHash): AsyncIterable<v9170.ValidationCodeHash[]>
    getPairs(block: Block): Promise<[k: v9170.ValidationCodeHash, v: (v9170.PvfCheckActiveVoteState | undefined)][]>
    getPairs(block: Block, key: v9170.ValidationCodeHash): Promise<[k: v9170.ValidationCodeHash, v: (v9170.PvfCheckActiveVoteState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v9170.ValidationCodeHash, v: (v9170.PvfCheckActiveVoteState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v9170.ValidationCodeHash): AsyncIterable<[k: v9170.ValidationCodeHash, v: (v9170.PvfCheckActiveVoteState | undefined)][]>
}

/**
 *  All currently active PVF pre-checking votes.
 * 
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface PvfActiveVoteMapV1000001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000001.ValidationCodeHash): Promise<(v1000001.PvfCheckActiveVoteState | undefined)>
    getMany(block: Block, keys: v1000001.ValidationCodeHash[]): Promise<(v1000001.PvfCheckActiveVoteState | undefined)[]>
    getKeys(block: Block): Promise<v1000001.ValidationCodeHash[]>
    getKeys(block: Block, key: v1000001.ValidationCodeHash): Promise<v1000001.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000001.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000001.ValidationCodeHash): AsyncIterable<v1000001.ValidationCodeHash[]>
    getPairs(block: Block): Promise<[k: v1000001.ValidationCodeHash, v: (v1000001.PvfCheckActiveVoteState | undefined)][]>
    getPairs(block: Block, key: v1000001.ValidationCodeHash): Promise<[k: v1000001.ValidationCodeHash, v: (v1000001.PvfCheckActiveVoteState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000001.ValidationCodeHash, v: (v1000001.PvfCheckActiveVoteState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000001.ValidationCodeHash): AsyncIterable<[k: v1000001.ValidationCodeHash, v: (v1000001.PvfCheckActiveVoteState | undefined)][]>
}

/**
 *  All currently active PVF pre-checking votes.
 * 
 *  Invariant:
 *  - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
 */
export interface PvfActiveVoteMapV1001002  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1001002.ValidationCodeHash): Promise<(v1001002.PvfCheckActiveVoteState | undefined)>
    getMany(block: Block, keys: v1001002.ValidationCodeHash[]): Promise<(v1001002.PvfCheckActiveVoteState | undefined)[]>
    getKeys(block: Block): Promise<v1001002.ValidationCodeHash[]>
    getKeys(block: Block, key: v1001002.ValidationCodeHash): Promise<v1001002.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1001002.ValidationCodeHash[]>
    getKeysPaged(pageSize: number, block: Block, key: v1001002.ValidationCodeHash): AsyncIterable<v1001002.ValidationCodeHash[]>
    getPairs(block: Block): Promise<[k: v1001002.ValidationCodeHash, v: (v1001002.PvfCheckActiveVoteState | undefined)][]>
    getPairs(block: Block, key: v1001002.ValidationCodeHash): Promise<[k: v1001002.ValidationCodeHash, v: (v1001002.PvfCheckActiveVoteState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1001002.ValidationCodeHash, v: (v1001002.PvfCheckActiveVoteState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1001002.ValidationCodeHash): AsyncIterable<[k: v1001002.ValidationCodeHash, v: (v1001002.PvfCheckActiveVoteState | undefined)][]>
}

export const pvfActiveVoteList =  {
    /**
     *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
     */
    v9170: new StorageType('Paras.PvfActiveVoteList', 'Default', [], sts.array(() => v9170.ValidationCodeHash)) as PvfActiveVoteListV9170,
}

/**
 *  The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
 */
export interface PvfActiveVoteListV9170  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v9170.ValidationCodeHash[]
    get(block: Block): Promise<(v9170.ValidationCodeHash[] | undefined)>
}

export const mostRecentContext =  {
    /**
     *  The context (relay-chain block number) of the most recent parachain head.
     */
    v1000001: new StorageType('Paras.MostRecentContext', 'Optional', [v1000001.Id], sts.number()) as MostRecentContextV1000001,
}

/**
 *  The context (relay-chain block number) of the most recent parachain head.
 */
export interface MostRecentContextV1000001  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000001.Id): Promise<(number | undefined)>
    getMany(block: Block, keys: v1000001.Id[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v1000001.Id[]>
    getKeys(block: Block, key: v1000001.Id): Promise<v1000001.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000001.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000001.Id): AsyncIterable<v1000001.Id[]>
    getPairs(block: Block): Promise<[k: v1000001.Id, v: (number | undefined)][]>
    getPairs(block: Block, key: v1000001.Id): Promise<[k: v1000001.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000001.Id, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000001.Id): AsyncIterable<[k: v1000001.Id, v: (number | undefined)][]>
}
