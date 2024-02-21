import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1000000 from '../v1000000'

export const reportEquivocation =  {
    name: 'Beefy.report_equivocation',
    /**
     * See [`Pallet::report_equivocation`].
     */
    v1000000: new CallType(
        'Beefy.report_equivocation',
        sts.struct({
            equivocationProof: v1000000.Type_95,
            keyOwnerProof: v1000000.MembershipProof,
        })
    ),
}

export const reportEquivocationUnsigned =  {
    name: 'Beefy.report_equivocation_unsigned',
    /**
     * See [`Pallet::report_equivocation_unsigned`].
     */
    v1000000: new CallType(
        'Beefy.report_equivocation_unsigned',
        sts.struct({
            equivocationProof: v1000000.Type_95,
            keyOwnerProof: v1000000.MembershipProof,
        })
    ),
}

export const setNewGenesis =  {
    name: 'Beefy.set_new_genesis',
    /**
     * See [`Pallet::set_new_genesis`].
     */
    v1001000: new CallType(
        'Beefy.set_new_genesis',
        sts.struct({
            delayInBlocks: sts.number(),
        })
    ),
}
