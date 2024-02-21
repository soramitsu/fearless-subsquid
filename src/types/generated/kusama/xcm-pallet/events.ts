import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v9010 from '../v9010'
import * as v9100 from '../v9100'
import * as v9111 from '../v9111'
import * as v9160 from '../v9160'
import * as v9291 from '../v9291'
import * as v9320 from '../v9320'
import * as v9370 from '../v9370'
import * as v9381 from '../v9381'
import * as v1000000 from '../v1000000'

export const attempted =  {
    name: 'XcmPallet.Attempted',
    v9010: new EventType(
        'XcmPallet.Attempted',
        v9010.Outcome
    ),
    v9100: new EventType(
        'XcmPallet.Attempted',
        v9100.Outcome
    ),
    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    v9111: new EventType(
        'XcmPallet.Attempted',
        v9111.V2Outcome
    ),
    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    v9160: new EventType(
        'XcmPallet.Attempted',
        v9160.V2Outcome
    ),
    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    v9381: new EventType(
        'XcmPallet.Attempted',
        v9381.V3Outcome
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    v1000000: new EventType(
        'XcmPallet.Attempted',
        sts.struct({
            outcome: v1000000.V3Outcome,
        })
    ),
}

export const sent =  {
    name: 'XcmPallet.Sent',
    v9010: new EventType(
        'XcmPallet.Sent',
        sts.tuple([v9010.MultiLocation, v9010.MultiLocation, v9010.Xcm])
    ),
    v9100: new EventType(
        'XcmPallet.Sent',
        sts.tuple([v9100.MultiLocation, v9100.MultiLocation, v9100.Xcm])
    ),
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    v9111: new EventType(
        'XcmPallet.Sent',
        sts.tuple([v9111.V1MultiLocation, v9111.V1MultiLocation, sts.array(() => v9111.V2Instruction)])
    ),
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    v9160: new EventType(
        'XcmPallet.Sent',
        sts.tuple([v9160.V1MultiLocation, v9160.V1MultiLocation, sts.array(() => v9160.V2Instruction)])
    ),
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    v9370: new EventType(
        'XcmPallet.Sent',
        sts.tuple([v9370.V1MultiLocation, v9370.V1MultiLocation, sts.array(() => v9370.V2Instruction)])
    ),
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    v9381: new EventType(
        'XcmPallet.Sent',
        sts.tuple([v9381.V3MultiLocation, v9381.V3MultiLocation, sts.array(() => v9381.V3Instruction)])
    ),
    /**
     * A XCM message was sent.
     */
    v1000000: new EventType(
        'XcmPallet.Sent',
        sts.struct({
            origin: v1000000.V3MultiLocation,
            destination: v1000000.V3MultiLocation,
            message: sts.array(() => v1000000.V3Instruction),
            messageId: sts.bytes(),
        })
    ),
}

export const unexpectedResponse =  {
    name: 'XcmPallet.UnexpectedResponse',
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    v9111: new EventType(
        'XcmPallet.UnexpectedResponse',
        sts.tuple([v9111.V1MultiLocation, sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    v9370: new EventType(
        'XcmPallet.UnexpectedResponse',
        sts.tuple([v9370.V1MultiLocation, sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    v9381: new EventType(
        'XcmPallet.UnexpectedResponse',
        sts.tuple([v9381.V3MultiLocation, sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    v1000000: new EventType(
        'XcmPallet.UnexpectedResponse',
        sts.struct({
            origin: v1000000.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
}

export const responseReady =  {
    name: 'XcmPallet.ResponseReady',
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    v9111: new EventType(
        'XcmPallet.ResponseReady',
        sts.tuple([sts.bigint(), v9111.V2Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    v9160: new EventType(
        'XcmPallet.ResponseReady',
        sts.tuple([sts.bigint(), v9160.V2Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    v9370: new EventType(
        'XcmPallet.ResponseReady',
        sts.tuple([sts.bigint(), v9370.V2Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    v9381: new EventType(
        'XcmPallet.ResponseReady',
        sts.tuple([sts.bigint(), v9381.V3Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    v1000000: new EventType(
        'XcmPallet.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: v1000000.V3Response,
        })
    ),
}

export const notified =  {
    name: 'XcmPallet.Notified',
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    v9111: new EventType(
        'XcmPallet.Notified',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    v1000000: new EventType(
        'XcmPallet.Notified',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const notifyOverweight =  {
    name: 'XcmPallet.NotifyOverweight',
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    v9111: new EventType(
        'XcmPallet.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), sts.bigint(), sts.bigint()])
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    v9291: new EventType(
        'XcmPallet.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), v9291.Weight, v9291.Weight])
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    v9320: new EventType(
        'XcmPallet.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), v9320.Weight, v9320.Weight])
    ),
    /**
     * Query response has been received and query is removed. The registered notification
     * could not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    v1000000: new EventType(
        'XcmPallet.NotifyOverweight',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
            actualWeight: v1000000.Weight,
            maxBudgetedWeight: v1000000.Weight,
        })
    ),
}

export const notifyDispatchError =  {
    name: 'XcmPallet.NotifyDispatchError',
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    v9111: new EventType(
        'XcmPallet.NotifyDispatchError',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    v1000000: new EventType(
        'XcmPallet.NotifyDispatchError',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const notifyDecodeFailed =  {
    name: 'XcmPallet.NotifyDecodeFailed',
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     * 
     * \[ id, pallet index, call index \]
     */
    v9111: new EventType(
        'XcmPallet.NotifyDecodeFailed',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    v1000000: new EventType(
        'XcmPallet.NotifyDecodeFailed',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const invalidResponder =  {
    name: 'XcmPallet.InvalidResponder',
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    v9111: new EventType(
        'XcmPallet.InvalidResponder',
        sts.tuple([v9111.V1MultiLocation, sts.bigint(), sts.option(() => v9111.V1MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    v9370: new EventType(
        'XcmPallet.InvalidResponder',
        sts.tuple([v9370.V1MultiLocation, sts.bigint(), sts.option(() => v9370.V1MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    v9381: new EventType(
        'XcmPallet.InvalidResponder',
        sts.tuple([v9381.V3MultiLocation, sts.bigint(), sts.option(() => v9381.V3MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1000000: new EventType(
        'XcmPallet.InvalidResponder',
        sts.struct({
            origin: v1000000.V3MultiLocation,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => v1000000.V3MultiLocation),
        })
    ),
}

export const invalidResponderVersion =  {
    name: 'XcmPallet.InvalidResponderVersion',
    /**
     * Expected query response has been received but the expected origin location placed in
     * storate by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    v9111: new EventType(
        'XcmPallet.InvalidResponderVersion',
        sts.tuple([v9111.V1MultiLocation, sts.bigint()])
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
    v9370: new EventType(
        'XcmPallet.InvalidResponderVersion',
        sts.tuple([v9370.V1MultiLocation, sts.bigint()])
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
    v9381: new EventType(
        'XcmPallet.InvalidResponderVersion',
        sts.tuple([v9381.V3MultiLocation, sts.bigint()])
    ),
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    v1000000: new EventType(
        'XcmPallet.InvalidResponderVersion',
        sts.struct({
            origin: v1000000.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
}

export const responseTaken =  {
    name: 'XcmPallet.ResponseTaken',
    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    v9111: new EventType(
        'XcmPallet.ResponseTaken',
        sts.bigint()
    ),
    /**
     * Received query response has been read and removed.
     */
    v1000000: new EventType(
        'XcmPallet.ResponseTaken',
        sts.struct({
            queryId: sts.bigint(),
        })
    ),
}

export const assetsTrapped =  {
    name: 'XcmPallet.AssetsTrapped',
    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    v9111: new EventType(
        'XcmPallet.AssetsTrapped',
        sts.tuple([v9111.H256, v9111.V1MultiLocation, v9111.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    v9370: new EventType(
        'XcmPallet.AssetsTrapped',
        sts.tuple([v9370.H256, v9370.V1MultiLocation, v9370.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    v9381: new EventType(
        'XcmPallet.AssetsTrapped',
        sts.tuple([v9381.H256, v9381.V3MultiLocation, v9381.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    v1000000: new EventType(
        'XcmPallet.AssetsTrapped',
        sts.struct({
            hash: v1000000.H256,
            origin: v1000000.V3MultiLocation,
            assets: v1000000.VersionedMultiAssets,
        })
    ),
}

export const versionChangeNotified =  {
    name: 'XcmPallet.VersionChangeNotified',
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    v9111: new EventType(
        'XcmPallet.VersionChangeNotified',
        sts.tuple([v9111.V1MultiLocation, sts.number()])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * \[ destination, result \]
     */
    v9370: new EventType(
        'XcmPallet.VersionChangeNotified',
        sts.tuple([v9370.V1MultiLocation, sts.number()])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    v9381: new EventType(
        'XcmPallet.VersionChangeNotified',
        sts.tuple([v9381.V3MultiLocation, sts.number(), sts.array(() => v9381.V3MultiAsset)])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    v1000000: new EventType(
        'XcmPallet.VersionChangeNotified',
        sts.struct({
            destination: v1000000.V3MultiLocation,
            result: sts.number(),
            cost: sts.array(() => v1000000.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
}

export const supportedVersionChanged =  {
    name: 'XcmPallet.SupportedVersionChanged',
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    v9111: new EventType(
        'XcmPallet.SupportedVersionChanged',
        sts.tuple([v9111.V1MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    v9370: new EventType(
        'XcmPallet.SupportedVersionChanged',
        sts.tuple([v9370.V1MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    v9381: new EventType(
        'XcmPallet.SupportedVersionChanged',
        sts.tuple([v9381.V3MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    v1000000: new EventType(
        'XcmPallet.SupportedVersionChanged',
        sts.struct({
            location: v1000000.V3MultiLocation,
            version: sts.number(),
        })
    ),
}

export const notifyTargetSendFail =  {
    name: 'XcmPallet.NotifyTargetSendFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    v9111: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.tuple([v9111.V1MultiLocation, sts.bigint(), v9111.V2Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    v9160: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.tuple([v9160.V1MultiLocation, sts.bigint(), v9160.V2Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    v9370: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.tuple([v9370.V1MultiLocation, sts.bigint(), v9370.V2Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    v9381: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.tuple([v9381.V3MultiLocation, sts.bigint(), v9381.V3Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    v1000000: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.struct({
            location: v1000000.V3MultiLocation,
            queryId: sts.bigint(),
            error: v1000000.V3Error,
        })
    ),
}

export const notifyTargetMigrationFail =  {
    name: 'XcmPallet.NotifyTargetMigrationFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    v9111: new EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        sts.tuple([v9111.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    v9370: new EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        sts.tuple([v9370.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    v9381: new EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        sts.tuple([v9381.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    v1000000: new EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        sts.struct({
            location: v1000000.VersionedMultiLocation,
            queryId: sts.bigint(),
        })
    ),
}

export const assetsClaimed =  {
    name: 'XcmPallet.AssetsClaimed',
    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    v9320: new EventType(
        'XcmPallet.AssetsClaimed',
        sts.tuple([v9320.H256, v9320.V1MultiLocation, v9320.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    v9370: new EventType(
        'XcmPallet.AssetsClaimed',
        sts.tuple([v9370.H256, v9370.V1MultiLocation, v9370.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    v9381: new EventType(
        'XcmPallet.AssetsClaimed',
        sts.tuple([v9381.H256, v9381.V3MultiLocation, v9381.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    v1000000: new EventType(
        'XcmPallet.AssetsClaimed',
        sts.struct({
            hash: v1000000.H256,
            origin: v1000000.V3MultiLocation,
            assets: v1000000.VersionedMultiAssets,
        })
    ),
}

export const invalidQuerierVersion =  {
    name: 'XcmPallet.InvalidQuerierVersion',
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
    v9381: new EventType(
        'XcmPallet.InvalidQuerierVersion',
        sts.tuple([v9381.V3MultiLocation, sts.bigint()])
    ),
    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    v1000000: new EventType(
        'XcmPallet.InvalidQuerierVersion',
        sts.struct({
            origin: v1000000.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
}

export const invalidQuerier =  {
    name: 'XcmPallet.InvalidQuerier',
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    v9381: new EventType(
        'XcmPallet.InvalidQuerier',
        sts.tuple([v9381.V3MultiLocation, sts.bigint(), v9381.V3MultiLocation, sts.option(() => v9381.V3MultiLocation)])
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1000000: new EventType(
        'XcmPallet.InvalidQuerier',
        sts.struct({
            origin: v1000000.V3MultiLocation,
            queryId: sts.bigint(),
            expectedQuerier: v1000000.V3MultiLocation,
            maybeActualQuerier: sts.option(() => v1000000.V3MultiLocation),
        })
    ),
}

export const versionNotifyStarted =  {
    name: 'XcmPallet.VersionNotifyStarted',
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     * 
     * \[ destination location, cost \]
     */
    v9381: new EventType(
        'XcmPallet.VersionNotifyStarted',
        sts.tuple([v9381.V3MultiLocation, sts.array(() => v9381.V3MultiAsset)])
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    v1000000: new EventType(
        'XcmPallet.VersionNotifyStarted',
        sts.struct({
            destination: v1000000.V3MultiLocation,
            cost: sts.array(() => v1000000.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
}

export const versionNotifyRequested =  {
    name: 'XcmPallet.VersionNotifyRequested',
    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    v9381: new EventType(
        'XcmPallet.VersionNotifyRequested',
        sts.tuple([v9381.V3MultiLocation, sts.array(() => v9381.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    v1000000: new EventType(
        'XcmPallet.VersionNotifyRequested',
        sts.struct({
            destination: v1000000.V3MultiLocation,
            cost: sts.array(() => v1000000.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
}

export const versionNotifyUnrequested =  {
    name: 'XcmPallet.VersionNotifyUnrequested',
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    v9381: new EventType(
        'XcmPallet.VersionNotifyUnrequested',
        sts.tuple([v9381.V3MultiLocation, sts.array(() => v9381.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    v1000000: new EventType(
        'XcmPallet.VersionNotifyUnrequested',
        sts.struct({
            destination: v1000000.V3MultiLocation,
            cost: sts.array(() => v1000000.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
}

export const feesPaid =  {
    name: 'XcmPallet.FeesPaid',
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     * 
     * \[ paying location, fees \]
     */
    v9381: new EventType(
        'XcmPallet.FeesPaid',
        sts.tuple([v9381.V3MultiLocation, sts.array(() => v9381.V3MultiAsset)])
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    v1000000: new EventType(
        'XcmPallet.FeesPaid',
        sts.struct({
            paying: v1000000.V3MultiLocation,
            fees: sts.array(() => v1000000.V3MultiAsset),
        })
    ),
}
