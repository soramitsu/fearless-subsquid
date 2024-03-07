import assert from "assert"
import * as marshal from "./marshal"

export class Transfer {
    private _amount!: string | undefined | null
    private _to!: string | undefined | null
    private _from!: string | undefined | null
    private _fee!: string | undefined | null

    constructor(props?: Partial<Omit<Transfer, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._amount = json.amount == null ? undefined : marshal.string.fromJSON(json.amount)
            this._to = json.to == null ? undefined : marshal.string.fromJSON(json.to)
            this._from = json.from == null ? undefined : marshal.string.fromJSON(json.from)
            this._fee = json.fee == null ? undefined : marshal.string.fromJSON(json.fee)
        }
    }

    get amount(): string | undefined | null {
        return this._amount
    }

    set amount(value: string | undefined | null) {
        this._amount = value
    }

    get to(): string | undefined | null {
        return this._to
    }

    set to(value: string | undefined | null) {
        this._to = value
    }

    get from(): string | undefined | null {
        return this._from
    }

    set from(value: string | undefined | null) {
        this._from = value
    }

    get fee(): string | undefined | null {
        return this._fee
    }

    set fee(value: string | undefined | null) {
        this._fee = value
    }

    toJSON(): object {
        return {
            amount: this.amount,
            to: this.to,
            from: this.from,
            fee: this.fee,
        }
    }
}
