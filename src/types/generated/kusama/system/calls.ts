import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1020 from '../v1020'
import * as v1042 from '../v1042'
import * as v1050 from '../v1050'
import * as v1054 from '../v1054'
import * as v2005 from '../v2005'

export const fillBlock =  {
    name: 'System.fill_block',
    /**
     *  A big dispatch that will disallow any other transaction to be included.
     */
    v1020: new CallType(
        'System.fill_block',
        sts.unit()
    ),
    /**
     *  A dispatch that will fill the block weight up to the given ratio.
     */
    v1050: new CallType(
        'System.fill_block',
        sts.struct({
            ratio: v1050.Perbill,
        })
    ),
}

export const remark =  {
    name: 'System.remark',
    /**
     *  Make some on-chain remark.
     */
    v1020: new CallType(
        'System.remark',
        sts.struct({
            remark: sts.bytes(),
        })
    ),
}

export const setHeapPages =  {
    name: 'System.set_heap_pages',
    /**
     *  Set the number of pages in the WebAssembly environment's heap.
     */
    v1020: new CallType(
        'System.set_heap_pages',
        sts.struct({
            pages: sts.bigint(),
        })
    ),
}

export const setCode =  {
    name: 'System.set_code',
    /**
     *  Set the new code.
     */
    v1020: new CallType(
        'System.set_code',
        sts.struct({
            new: sts.bytes(),
        })
    ),
    /**
     *  Set the new runtime code.
     */
    v1042: new CallType(
        'System.set_code',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}

export const setStorage =  {
    name: 'System.set_storage',
    /**
     *  Set some items of storage.
     */
    v1020: new CallType(
        'System.set_storage',
        sts.struct({
            items: sts.array(() => v1020.KeyValue),
        })
    ),
}

export const killStorage =  {
    name: 'System.kill_storage',
    /**
     *  Kill some items from storage.
     */
    v1020: new CallType(
        'System.kill_storage',
        sts.struct({
            keys: sts.array(() => v1020.Key),
        })
    ),
}

export const killPrefix =  {
    name: 'System.kill_prefix',
    /**
     *  Kill all storage items with a key that starts with the given prefix.
     */
    v1020: new CallType(
        'System.kill_prefix',
        sts.struct({
            prefix: v1020.Key,
        })
    ),
    /**
     *  Kill all storage items with a key that starts with the given prefix.
     * 
     *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     *  the prefix we are removing to accurately calculate the weight of this function.
     * 
     *  # <weight>
     *  - `O(P)` where `P` amount of keys with prefix `prefix`
     *  - `P` storage deletions.
     *  - Base Weight: 0.834 * P µs
     *  - Writes: Number of subkeys + 1
     *  # </weight>
     */
    v2005: new CallType(
        'System.kill_prefix',
        sts.struct({
            prefix: v2005.Key,
            subkeys: sts.number(),
        })
    ),
}

export const setCodeWithoutChecks =  {
    name: 'System.set_code_without_checks',
    /**
     *  Set the new runtime code without doing any checks of the given `code`.
     */
    v1042: new CallType(
        'System.set_code_without_checks',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}

export const setChangesTrieConfig =  {
    name: 'System.set_changes_trie_config',
    /**
     *  Set the new changes trie configuration.
     */
    v1042: new CallType(
        'System.set_changes_trie_config',
        sts.struct({
            changesTrieConfig: sts.option(() => v1042.ChangesTrieConfiguration),
        })
    ),
}

export const suicide =  {
    name: 'System.suicide',
    /**
     *  Kill the sending account, assuming there are no references outstanding and the composite
     *  data is equal to its default value.
     */
    v1050: new CallType(
        'System.suicide',
        sts.unit()
    ),
}

export const migrateAccounts =  {
    name: 'System.migrate_accounts',
    v1054: new CallType(
        'System.migrate_accounts',
        sts.struct({
            accounts: sts.array(() => v1054.AccountId),
        })
    ),
}

export const remarkWithEvent =  {
    name: 'System.remark_with_event',
    /**
     *  Make some on-chain remark and emit event.
     * 
     *  # <weight>
     *  - `O(b)` where b is the length of the remark.
     *  - 1 event.
     *  # </weight>
     */
    v2030: new CallType(
        'System.remark_with_event',
        sts.struct({
            remark: sts.bytes(),
        })
    ),
}
