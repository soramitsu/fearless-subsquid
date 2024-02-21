import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1000000 from '../v1000000'

export const controlAutoMigration =  {
    name: 'StateTrieMigration.control_auto_migration',
    /**
     * See [`Pallet::control_auto_migration`].
     */
    v1000000: new CallType(
        'StateTrieMigration.control_auto_migration',
        sts.struct({
            maybeConfig: sts.option(() => v1000000.MigrationLimits),
        })
    ),
}

export const continueMigrate =  {
    name: 'StateTrieMigration.continue_migrate',
    /**
     * See [`Pallet::continue_migrate`].
     */
    v1000000: new CallType(
        'StateTrieMigration.continue_migrate',
        sts.struct({
            limits: v1000000.MigrationLimits,
            realSizeUpper: sts.number(),
            witnessTask: v1000000.MigrationTask,
        })
    ),
}

export const migrateCustomTop =  {
    name: 'StateTrieMigration.migrate_custom_top',
    /**
     * See [`Pallet::migrate_custom_top`].
     */
    v1000000: new CallType(
        'StateTrieMigration.migrate_custom_top',
        sts.struct({
            keys: sts.array(() => sts.bytes()),
            witnessSize: sts.number(),
        })
    ),
}

export const migrateCustomChild =  {
    name: 'StateTrieMigration.migrate_custom_child',
    /**
     * See [`Pallet::migrate_custom_child`].
     */
    v1000000: new CallType(
        'StateTrieMigration.migrate_custom_child',
        sts.struct({
            root: sts.bytes(),
            childKeys: sts.array(() => sts.bytes()),
            totalSize: sts.number(),
        })
    ),
}

export const setSignedMaxLimits =  {
    name: 'StateTrieMigration.set_signed_max_limits',
    /**
     * See [`Pallet::set_signed_max_limits`].
     */
    v1000000: new CallType(
        'StateTrieMigration.set_signed_max_limits',
        sts.struct({
            limits: v1000000.MigrationLimits,
        })
    ),
}

export const forceSetProgress =  {
    name: 'StateTrieMigration.force_set_progress',
    /**
     * See [`Pallet::force_set_progress`].
     */
    v1000000: new CallType(
        'StateTrieMigration.force_set_progress',
        sts.struct({
            progressTop: v1000000.Progress,
            progressChild: v1000000.Progress,
        })
    ),
}
