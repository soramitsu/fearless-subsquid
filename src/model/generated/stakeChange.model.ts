import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {HistoryElementType} from "./_historyElementType"
import {ExecutionResult} from "./_executionResult"

@Entity_()
export class StakeChange {
    constructor(props?: Partial<StakeChange>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("varchar", {length: 5, nullable: false})
    type!: HistoryElementType

    @Index_()
    @Column_("int4", {nullable: false})
    blockHeight!: number

    @Index_()
    @Column_("text", {nullable: false})
    blockHash!: string

    @Index_()
    @Column_("int4", {nullable: false})
    timestamp!: number

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new ExecutionResult(undefined, obj)}, nullable: false})
    execution!: ExecutionResult

    @Column_("text", {nullable: false})
    name!: string

    @Index_()
    @Column_("text", {nullable: false})
    module!: string

    @Index_()
    @Column_("text", {nullable: false})
    method!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    accumulatedAmount!: bigint
}
