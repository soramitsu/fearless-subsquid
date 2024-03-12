import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class StakeChange {
    constructor(props?: Partial<StakeChange>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: false})
    blockHeight!: number

    @Index_()
    @Column_("text", {nullable: false})
    blockHash!: string

    @Index_()
    @Column_("int4", {nullable: false})
    timestamp!: number

    @Column_("bool", {nullable: false})
    success!: boolean

    @Index_()
    @Column_("text", {nullable: false})
    address!: string

    @Column_("text", {nullable: false})
    amount!: string

    @Column_("text", {nullable: false})
    name!: string

    @Column_("text", {nullable: false})
    type!: string

    @Index_()
    @Column_("text", {nullable: false})
    module!: string

    @Index_()
    @Column_("text", {nullable: false})
    method!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    accumulatedAmount!: bigint
}
