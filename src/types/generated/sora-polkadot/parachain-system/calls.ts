import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1 from '../v1'

export const setValidationData =  {
    name: 'ParachainSystem.set_validation_data',
    /**
     * Set the current validation data.
     * 
     * This should be invoked exactly once per block. It will panic at the finalization
     * phase if the call was not invoked.
     * 
     * The dispatch origin for this call must be `Inherent`
     * 
     * As a side effect, this function upgrades the current validation function
     * if the appropriate time has come.
     */
    v1: new CallType(
        'ParachainSystem.set_validation_data',
        sts.struct({
            data: v1.ParachainInherentData,
        })
    ),
}

export const sudoSendUpwardMessage =  {
    name: 'ParachainSystem.sudo_send_upward_message',
    v1: new CallType(
        'ParachainSystem.sudo_send_upward_message',
        sts.struct({
            message: sts.bytes(),
        })
    ),
}

export const authorizeUpgrade =  {
    name: 'ParachainSystem.authorize_upgrade',
    v1: new CallType(
        'ParachainSystem.authorize_upgrade',
        sts.struct({
            codeHash: v1.H256,
        })
    ),
}

export const enactAuthorizedUpgrade =  {
    name: 'ParachainSystem.enact_authorized_upgrade',
    v1: new CallType(
        'ParachainSystem.enact_authorized_upgrade',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}
