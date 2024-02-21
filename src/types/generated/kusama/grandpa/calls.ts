import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v2005 from '../v2005'
import * as v2015 from '../v2015'
import * as v2022 from '../v2022'

export const reportMisbehavior =  {
    name: 'Grandpa.report_misbehavior',
    /**
     *  Report some misbehavior.
     */
    v1020: new CallType(
        'Grandpa.report_misbehavior',
        sts.struct({
            report: sts.bytes(),
        })
    ),
}

export const reportEquivocation =  {
    name: 'Grandpa.report_equivocation',
    /**
     *  Report voter equivocation/misbehavior. This method will verify the
     *  equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence
     *  will be reported.
     * 
     *  Since the weight of the extrinsic is 0, in order to avoid DoS by
     *  submission of invalid equivocation reports, a mandatory pre-validation of
     *  the extrinsic is implemented in a `SignedExtension`.
     */
    v2005: new CallType(
        'Grandpa.report_equivocation',
        sts.struct({
            equivocationProof: v2005.GrandpaEquivocationProof,
            keyOwnerProof: v2005.KeyOwnerProof,
        })
    ),
}

export const reportEquivocationUnsigned =  {
    name: 'Grandpa.report_equivocation_unsigned',
    /**
     *  Report voter equivocation/misbehavior. This method will verify the
     *  equivocation proof and validate the given key ownership proof
     *  against the extracted offender. If both are valid, the offence
     *  will be reported.
     * 
     *  This extrinsic must be called unsigned and it is expected that only
     *  block authors will call it (validated in `ValidateUnsigned`), as such
     *  if the block author is defined it will be defined as the equivocation
     *  reporter.
     */
    v2015: new CallType(
        'Grandpa.report_equivocation_unsigned',
        sts.struct({
            equivocationProof: v2015.GrandpaEquivocationProof,
            keyOwnerProof: v2015.KeyOwnerProof,
        })
    ),
}

export const noteStalled =  {
    name: 'Grandpa.note_stalled',
    /**
     *  Note that the current authority set of the GRANDPA finality gadget has
     *  stalled. This will trigger a forced authority set change at the beginning
     *  of the next session, to be enacted `delay` blocks after that. The delay
     *  should be high enough to safely assume that the block signalling the
     *  forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
     *  will start the new authority set using the given finalized block as base.
     *  Only callable by root.
     */
    v2022: new CallType(
        'Grandpa.note_stalled',
        sts.struct({
            delay: v2022.BlockNumber,
            bestFinalizedBlockNumber: v2022.BlockNumber,
        })
    ),
}
