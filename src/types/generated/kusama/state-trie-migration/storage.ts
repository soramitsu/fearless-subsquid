import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1000000 from '../v1000000'

export const migrationProcess =  {
    /**
     *  Migration progress.
     * 
     *  This stores the snapshot of the last migrated keys. It can be set into motion and move
     *  forward by any of the means provided by this pallet.
     */
    v1000000: new StorageType('StateTrieMigration.MigrationProcess', 'Default', [], v1000000.MigrationTask) as MigrationProcessV1000000,
}

/**
 *  Migration progress.
 * 
 *  This stores the snapshot of the last migrated keys. It can be set into motion and move
 *  forward by any of the means provided by this pallet.
 */
export interface MigrationProcessV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1000000.MigrationTask
    get(block: Block): Promise<(v1000000.MigrationTask | undefined)>
}

export const autoLimits =  {
    /**
     *  The limits that are imposed on automatic migrations.
     * 
     *  If set to None, then no automatic migration happens.
     */
    v1000000: new StorageType('StateTrieMigration.AutoLimits', 'Default', [], sts.option(() => v1000000.MigrationLimits)) as AutoLimitsV1000000,
}

/**
 *  The limits that are imposed on automatic migrations.
 * 
 *  If set to None, then no automatic migration happens.
 */
export interface AutoLimitsV1000000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1000000.MigrationLimits | undefined)
    get(block: Block): Promise<((v1000000.MigrationLimits | undefined) | undefined)>
}

export const signedMigrationMaxLimits =  {
    /**
     *  The maximum limits that the signed migration could use.
     * 
     *  If not set, no signed submission is allowed.
     */
    v1000000: new StorageType('StateTrieMigration.SignedMigrationMaxLimits', 'Optional', [], v1000000.MigrationLimits) as SignedMigrationMaxLimitsV1000000,
}

/**
 *  The maximum limits that the signed migration could use.
 * 
 *  If not set, no signed submission is allowed.
 */
export interface SignedMigrationMaxLimitsV1000000  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1000000.MigrationLimits | undefined)>
}
