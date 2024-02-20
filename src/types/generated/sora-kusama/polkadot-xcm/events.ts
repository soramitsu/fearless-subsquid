import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1 from '../v1'
import * as v7 from '../v7'

export const attempted =  {
    name: 'PolkadotXcm.Attempted',
    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    v1: new EventType(
        'PolkadotXcm.Attempted',
        v1.V2Outcome
    ),
    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    v7: new EventType(
        'PolkadotXcm.Attempted',
        v7.V3Outcome
    ),
}

export const sent =  {
    name: 'PolkadotXcm.Sent',
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    v1: new EventType(
        'PolkadotXcm.Sent',
        sts.tuple([v1.V1MultiLocation, v1.V1MultiLocation, sts.array(() => v1.V2Instruction)])
    ),
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    v7: new EventType(
        'PolkadotXcm.Sent',
        sts.tuple([v7.V3MultiLocation, v7.V3MultiLocation, sts.array(() => v7.V3Instruction)])
    ),
}

export const unexpectedResponse =  {
    name: 'PolkadotXcm.UnexpectedResponse',
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    v1: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.tuple([v1.V1MultiLocation, sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    v7: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.tuple([v7.V3MultiLocation, sts.bigint()])
    ),
}

export const responseReady =  {
    name: 'PolkadotXcm.ResponseReady',
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    v1: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.tuple([sts.bigint(), v1.V2Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    v7: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.tuple([sts.bigint(), v7.V3Response])
    ),
}

export const notified =  {
    name: 'PolkadotXcm.Notified',
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    v1: new EventType(
        'PolkadotXcm.Notified',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
}

export const notifyOverweight =  {
    name: 'PolkadotXcm.NotifyOverweight',
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    v1: new EventType(
        'PolkadotXcm.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), sts.bigint(), sts.bigint()])
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    v7: new EventType(
        'PolkadotXcm.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), v7.Weight, v7.Weight])
    ),
}

export const notifyDispatchError =  {
    name: 'PolkadotXcm.NotifyDispatchError',
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    v1: new EventType(
        'PolkadotXcm.NotifyDispatchError',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
}

export const notifyDecodeFailed =  {
    name: 'PolkadotXcm.NotifyDecodeFailed',
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     * 
     * \[ id, pallet index, call index \]
     */
    v1: new EventType(
        'PolkadotXcm.NotifyDecodeFailed',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
}

export const invalidResponder =  {
    name: 'PolkadotXcm.InvalidResponder',
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    v1: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.tuple([v1.V1MultiLocation, sts.bigint(), sts.option(() => v1.V1MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    v7: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.tuple([v7.V3MultiLocation, sts.bigint(), sts.option(() => v7.V3MultiLocation)])
    ),
}

export const invalidResponderVersion =  {
    name: 'PolkadotXcm.InvalidResponderVersion',
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    v1: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.tuple([v1.V1MultiLocation, sts.bigint()])
    ),
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    v7: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.tuple([v7.V3MultiLocation, sts.bigint()])
    ),
}

export const responseTaken =  {
    name: 'PolkadotXcm.ResponseTaken',
    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    v1: new EventType(
        'PolkadotXcm.ResponseTaken',
        sts.bigint()
    ),
}

export const assetsTrapped =  {
    name: 'PolkadotXcm.AssetsTrapped',
    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    v1: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.tuple([v1.H256, v1.V1MultiLocation, v1.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    v7: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.tuple([v7.H256, v7.V3MultiLocation, v7.VersionedMultiAssets])
    ),
}

export const versionChangeNotified =  {
    name: 'PolkadotXcm.VersionChangeNotified',
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    v1: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.tuple([v1.V1MultiLocation, sts.number()])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    v7: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.tuple([v7.V3MultiLocation, sts.number(), sts.array(() => v7.V3MultiAsset)])
    ),
}

export const supportedVersionChanged =  {
    name: 'PolkadotXcm.SupportedVersionChanged',
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    v1: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.tuple([v1.V1MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    v7: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.tuple([v7.V3MultiLocation, sts.number()])
    ),
}

export const notifyTargetSendFail =  {
    name: 'PolkadotXcm.NotifyTargetSendFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    v1: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.tuple([v1.V1MultiLocation, sts.bigint(), v1.V2Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    v7: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.tuple([v7.V3MultiLocation, sts.bigint(), v7.V3Error])
    ),
}

export const notifyTargetMigrationFail =  {
    name: 'PolkadotXcm.NotifyTargetMigrationFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    v1: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.tuple([v1.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    v7: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.tuple([v7.VersionedMultiLocation, sts.bigint()])
    ),
}

export const invalidQuerierVersion =  {
    name: 'PolkadotXcm.InvalidQuerierVersion',
    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    v7: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.tuple([v7.V3MultiLocation, sts.bigint()])
    ),
}

export const invalidQuerier =  {
    name: 'PolkadotXcm.InvalidQuerier',
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    v7: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.tuple([v7.V3MultiLocation, sts.bigint(), v7.V3MultiLocation, sts.option(() => v7.V3MultiLocation)])
    ),
}

export const versionNotifyStarted =  {
    name: 'PolkadotXcm.VersionNotifyStarted',
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     * 
     * \[ destination location, cost \]
     */
    v7: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.tuple([v7.V3MultiLocation, sts.array(() => v7.V3MultiAsset)])
    ),
}

export const versionNotifyRequested =  {
    name: 'PolkadotXcm.VersionNotifyRequested',
    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    v7: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.tuple([v7.V3MultiLocation, sts.array(() => v7.V3MultiAsset)])
    ),
}

export const versionNotifyUnrequested =  {
    name: 'PolkadotXcm.VersionNotifyUnrequested',
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    v7: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.tuple([v7.V3MultiLocation, sts.array(() => v7.V3MultiAsset)])
    ),
}

export const feesPaid =  {
    name: 'PolkadotXcm.FeesPaid',
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     * 
     * \[ paying location, fees \]
     */
    v7: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.tuple([v7.V3MultiLocation, sts.array(() => v7.V3MultiAsset)])
    ),
}

export const assetsClaimed =  {
    name: 'PolkadotXcm.AssetsClaimed',
    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    v7: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.tuple([v7.H256, v7.V3MultiLocation, v7.VersionedMultiAssets])
    ),
}
