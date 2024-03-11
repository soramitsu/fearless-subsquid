import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import {HistoryElementType} from "./_historyElementType"

@Entity_()
export class HistoryElement {
    constructor(props?: Partial<HistoryElement>) {
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

    @Column_("bool", {nullable: false})
    success!: boolean

    @Column_("text", {nullable: false})
    name!: string

    @Index_()
    @Column_("text", {nullable: false})
    module!: string

    @Index_()
    @Column_("text", {nullable: false})
    method!: string

    @Index_()
    @Column_("jsonb", {nullable: true})
    data!: unknown | undefined | null
}
