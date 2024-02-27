import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {HistoryElementType} from "./_historyElementType"
import {Reward} from "./_reward"
import {Transfer} from "./_transfer"

@Entity_()
export class HistoryElement {
    constructor(props?: Partial<HistoryElement>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("varchar", {length: 5, nullable: false})
    entityType!: HistoryElementType

    @Index_()
    @Column_("int4", {nullable: false})
    blockHeight!: number

    @Index_()
    @Column_("text", {nullable: false})
    blockHash!: string

    @Index_()
    @Column_("text", {nullable: true})
    address!: string | undefined | null

    @Index_()
    @Column_("int4", {nullable: false})
    timestamp!: number

    @Index_()
    @Column_("int4", {nullable: true})
    extrinsicIdx!: number | undefined | null

    @Index_()
    @Column_("text", {nullable: true})
    extrinsicHash!: string | undefined | null

    @Index_()
    @Column_("text", {nullable: false})
    module!: string

    @Index_()
    @Column_("text", {nullable: false})
    method!: string

    @Index_()
    @Column_("text", {nullable: false})
    type!: string

    @Index_()
    @Column_("jsonb", {nullable: true})
    data!: unknown | undefined | null

    @Column_("bool", {nullable: false})
    success!: boolean

    @Column_("text", {nullable: false})
    name!: string

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new Reward(undefined, obj)}, nullable: true})
    reward!: Reward | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new Transfer(undefined, obj)}, nullable: true})
    transfer!: Transfer | undefined | null
}
