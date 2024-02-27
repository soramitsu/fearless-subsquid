import assert from "assert"
import * as marshal from "./marshal"

export class Reward {
    private _amount!: string
    private _era!: number | undefined | null
    private _stash!: string | undefined | null

    constructor(props?: Partial<Omit<Reward, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._amount = marshal.string.fromJSON(json.amount)
            this._era = json.era == null ? undefined : marshal.int.fromJSON(json.era)
            this._stash = json.stash == null ? undefined : marshal.string.fromJSON(json.stash)
        }
    }

    get amount(): string {
        assert(this._amount != null, 'uninitialized access')
        return this._amount
    }

    set amount(value: string) {
        this._amount = value
    }

    get era(): number | undefined | null {
        return this._era
    }

    set era(value: number | undefined | null) {
        this._era = value
    }

    get stash(): string | undefined | null {
        return this._stash
    }

    set stash(value: string | undefined | null) {
        this._stash = value
    }

    toJSON(): object {
        return {
            amount: this.amount,
            era: this.era,
            stash: this.stash,
        }
    }
}
