import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v2015 from '../v2015'
import * as v2030 from '../v2030'
import * as v9111 from '../v9111'
import * as v9130 from '../v9130'

export const reportEquivocation =  {
    name: 'Babe.report_equivocation',
    /**
     *  Report authority equivocation/misbehavior. This method will verify
     *  the equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence will
     *  be reported.
     */
    v2015: new CallType(
        'Babe.report_equivocation',
        sts.struct({
            equivocationProof: v2015.BabeEquivocationProof,
            keyOwnerProof: v2015.KeyOwnerProof,
        })
    ),
    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     */
    v9111: new CallType(
        'Babe.report_equivocation',
        sts.struct({
            equivocationProof: v9111.EquivocationProof,
            keyOwnerProof: v9111.MembershipProof,
        })
    ),
    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     */
    v9130: new CallType(
        'Babe.report_equivocation',
        sts.struct({
            equivocationProof: v9130.EquivocationProof,
            keyOwnerProof: v9130.MembershipProof,
        })
    ),
}

export const reportEquivocationUnsigned =  {
    name: 'Babe.report_equivocation_unsigned',
    /**
     *  Report authority equivocation/misbehavior. This method will verify
     *  the equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence will
     *  be reported.
     *  This extrinsic must be called unsigned and it is expected that only
     *  block authors will call it (validated in `ValidateUnsigned`), as such
     *  if the block author is defined it will be defined as the equivocation
     *  reporter.
     */
    v2015: new CallType(
        'Babe.report_equivocation_unsigned',
        sts.struct({
            equivocationProof: v2015.BabeEquivocationProof,
            keyOwnerProof: v2015.KeyOwnerProof,
        })
    ),
    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    v9111: new CallType(
        'Babe.report_equivocation_unsigned',
        sts.struct({
            equivocationProof: v9111.EquivocationProof,
            keyOwnerProof: v9111.MembershipProof,
        })
    ),
    /**
     * Report authority equivocation/misbehavior. This method will verify
     * the equivocation proof and validate the given key ownership proof
     * against the extracted offender. If both are valid, the offence will
     * be reported.
     * This extrinsic must be called unsigned and it is expected that only
     * block authors will call it (validated in `ValidateUnsigned`), as such
     * if the block author is defined it will be defined as the equivocation
     * reporter.
     */
    v9130: new CallType(
        'Babe.report_equivocation_unsigned',
        sts.struct({
            equivocationProof: v9130.EquivocationProof,
            keyOwnerProof: v9130.MembershipProof,
        })
    ),
}

export const planConfigChange =  {
    name: 'Babe.plan_config_change',
    /**
     *  Plan an epoch config change. The epoch config change is recorded and will be enacted on
     *  the next call to `enact_epoch_change`. The config will be activated one epoch after.
     *  Multiple calls to this method will replace any existing planned config change that had
     *  not been enacted yet.
     */
    v2030: new CallType(
        'Babe.plan_config_change',
        sts.struct({
            config: v2030.NextConfigDescriptor,
        })
    ),
    /**
     * Plan an epoch config change. The epoch config change is recorded and will be enacted on
     * the next call to `enact_epoch_change`. The config will be activated one epoch after.
     * Multiple calls to this method will replace any existing planned config change that had
     * not been enacted yet.
     */
    v9111: new CallType(
        'Babe.plan_config_change',
        sts.struct({
            config: v9111.NextConfigDescriptor,
        })
    ),
}
