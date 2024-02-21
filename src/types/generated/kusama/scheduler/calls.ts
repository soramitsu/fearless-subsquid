import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v2005 from '../v2005'
import * as v2007 from '../v2007'
import * as v2011 from '../v2011'
import * as v2013 from '../v2013'
import * as v2015 from '../v2015'
import * as v2022 from '../v2022'
import * as v2023 from '../v2023'
import * as v2024 from '../v2024'
import * as v2025 from '../v2025'
import * as v2026 from '../v2026'
import * as v2028 from '../v2028'
import * as v2029 from '../v2029'
import * as v2030 from '../v2030'
import * as v9010 from '../v9010'
import * as v9030 from '../v9030'
import * as v9040 from '../v9040'
import * as v9050 from '../v9050'
import * as v9080 from '../v9080'
import * as v9090 from '../v9090'
import * as v9100 from '../v9100'
import * as v9111 from '../v9111'
import * as v9122 from '../v9122'
import * as v9130 from '../v9130'
import * as v9160 from '../v9160'
import * as v9170 from '../v9170'
import * as v9180 from '../v9180'
import * as v9190 from '../v9190'
import * as v9220 from '../v9220'
import * as v9230 from '../v9230'
import * as v9250 from '../v9250'
import * as v9271 from '../v9271'
import * as v9291 from '../v9291'
import * as v9300 from '../v9300'
import * as v9320 from '../v9320'
import * as v9340 from '../v9340'
import * as v9350 from '../v9350'
import * as v9370 from '../v9370'
import * as v9381 from '../v9381'
import * as v9420 from '../v9420'
import * as v9430 from '../v9430'
import * as v1000000 from '../v1000000'
import * as v1001000 from '../v1001000'

export const schedule =  {
    name: 'Scheduler.schedule',
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v2005: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v2005.BlockNumber,
            maybePeriodic: sts.option(() => v2005.Period),
            priority: v2005.Priority,
            call: v2005.Type_188,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v2007: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v2007.BlockNumber,
            maybePeriodic: sts.option(() => v2007.Period),
            priority: v2007.Priority,
            call: v2007.Type_189,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v2011: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v2011.BlockNumber,
            maybePeriodic: sts.option(() => v2011.Period),
            priority: v2011.Priority,
            call: v2011.Type_190,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v2013: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v2013.BlockNumber,
            maybePeriodic: sts.option(() => v2013.Period),
            priority: v2013.Priority,
            call: v2013.Type_190,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v2015: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v2015.BlockNumber,
            maybePeriodic: sts.option(() => v2015.Period),
            priority: v2015.Priority,
            call: v2015.Type_192,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v2022: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v2022.BlockNumber,
            maybePeriodic: sts.option(() => v2022.Period),
            priority: v2022.Priority,
            call: v2022.Type_192,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v2023: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v2023.BlockNumber,
            maybePeriodic: sts.option(() => v2023.Period),
            priority: v2023.Priority,
            call: v2023.Type_194,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v2024: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v2024.BlockNumber,
            maybePeriodic: sts.option(() => v2024.Period),
            priority: v2024.Priority,
            call: v2024.Type_194,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v2025: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v2025.BlockNumber,
            maybePeriodic: sts.option(() => v2025.Period),
            priority: v2025.Priority,
            call: v2025.Type_195,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v2026: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v2026.BlockNumber,
            maybePeriodic: sts.option(() => v2026.Period),
            priority: v2026.Priority,
            call: v2026.Type_194,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v2028: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v2028.BlockNumber,
            maybePeriodic: sts.option(() => v2028.Period),
            priority: v2028.Priority,
            call: v2028.Type_199,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v2029: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v2029.BlockNumber,
            maybePeriodic: sts.option(() => v2029.Period),
            priority: v2029.Priority,
            call: v2029.Type_199,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v2030: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v2030.BlockNumber,
            maybePeriodic: sts.option(() => v2030.Period),
            priority: v2030.Priority,
            call: v2030.Type_138,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v9010: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v9010.BlockNumber,
            maybePeriodic: sts.option(() => v9010.Period),
            priority: v9010.Priority,
            call: v9010.Type_138,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v9030: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v9030.BlockNumber,
            maybePeriodic: sts.option(() => v9030.Period),
            priority: v9030.Priority,
            call: v9030.Type_138,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v9040: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v9040.BlockNumber,
            maybePeriodic: sts.option(() => v9040.Period),
            priority: v9040.Priority,
            call: v9040.Type_138,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v9050: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v9050.BlockNumber,
            maybePeriodic: sts.option(() => v9050.Period),
            priority: v9050.Priority,
            call: v9050.Type_139,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v9080: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v9080.BlockNumber,
            maybePeriodic: sts.option(() => v9080.Period),
            priority: v9080.Priority,
            call: v9080.Type_138,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v9090: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v9090.BlockNumber,
            maybePeriodic: sts.option(() => v9090.Period),
            priority: v9090.Priority,
            call: v9090.Type_138,
        })
    ),
    /**
     *  Anonymously schedule a task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.29 + .126 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda
     *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v9100: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: v9100.BlockNumber,
            maybePeriodic: sts.option(() => v9100.Period),
            priority: v9100.Priority,
            call: v9100.Type_138,
        })
    ),
    /**
     * Anonymously schedule a task.
     * 
     * # <weight>
     * - S = Number of already scheduled calls
     * - Base Weight: 22.29 + .126 * S µs
     * - DB Weight:
     *     - Read: Agenda
     *     - Write: Agenda
     * - Will use base weight of 25 which should be good for up to 30 scheduled calls
     * # </weight>
     */
    v9111: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9111.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     * 
     * # <weight>
     * - S = Number of already scheduled calls
     * - Base Weight: 22.29 + .126 * S µs
     * - DB Weight:
     *     - Read: Agenda
     *     - Write: Agenda
     * - Will use base weight of 25 which should be good for up to 30 scheduled calls
     * # </weight>
     */
    v9122: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9122.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9130: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9130.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9160: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9160.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9170: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9170.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9180: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9180.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9190: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9190.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9220: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9220.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9230: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9230.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9250: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9250.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9271: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9271.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9291: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9291.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9300: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9300.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9320: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9320.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9340: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9340.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9350: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9350.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9370: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9370.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9381: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9381.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9420: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9420.Call,
        })
    ),
    /**
     * Anonymously schedule a task.
     */
    v9430: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v1000000: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1000000.Call,
        })
    ),
    /**
     * See [`Pallet::schedule`].
     */
    v1001000: new CallType(
        'Scheduler.schedule',
        sts.struct({
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1001000.Call,
        })
    ),
}

export const cancel =  {
    name: 'Scheduler.cancel',
    /**
     *  Cancel an anonymously scheduled task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 22.15 + 2.869 * S µs
     *  - DB Weight:
     *      - Read: Agenda
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v2005: new CallType(
        'Scheduler.cancel',
        sts.struct({
            when: v2005.BlockNumber,
            index: sts.number(),
        })
    ),
}

export const scheduleNamed =  {
    name: 'Scheduler.schedule_named',
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v2005: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v2005.BlockNumber,
            maybePeriodic: sts.option(() => v2005.Period),
            priority: v2005.Priority,
            call: v2005.Type_188,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v2007: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v2007.BlockNumber,
            maybePeriodic: sts.option(() => v2007.Period),
            priority: v2007.Priority,
            call: v2007.Type_189,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v2011: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v2011.BlockNumber,
            maybePeriodic: sts.option(() => v2011.Period),
            priority: v2011.Priority,
            call: v2011.Type_190,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v2013: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v2013.BlockNumber,
            maybePeriodic: sts.option(() => v2013.Period),
            priority: v2013.Priority,
            call: v2013.Type_190,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v2015: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v2015.BlockNumber,
            maybePeriodic: sts.option(() => v2015.Period),
            priority: v2015.Priority,
            call: v2015.Type_192,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v2022: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v2022.BlockNumber,
            maybePeriodic: sts.option(() => v2022.Period),
            priority: v2022.Priority,
            call: v2022.Type_192,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v2023: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v2023.BlockNumber,
            maybePeriodic: sts.option(() => v2023.Period),
            priority: v2023.Priority,
            call: v2023.Type_194,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v2024: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v2024.BlockNumber,
            maybePeriodic: sts.option(() => v2024.Period),
            priority: v2024.Priority,
            call: v2024.Type_194,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v2025: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v2025.BlockNumber,
            maybePeriodic: sts.option(() => v2025.Period),
            priority: v2025.Priority,
            call: v2025.Type_195,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v2026: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v2026.BlockNumber,
            maybePeriodic: sts.option(() => v2026.Period),
            priority: v2026.Priority,
            call: v2026.Type_194,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v2028: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v2028.BlockNumber,
            maybePeriodic: sts.option(() => v2028.Period),
            priority: v2028.Priority,
            call: v2028.Type_199,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v2029: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v2029.BlockNumber,
            maybePeriodic: sts.option(() => v2029.Period),
            priority: v2029.Priority,
            call: v2029.Type_199,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v2030: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v2030.BlockNumber,
            maybePeriodic: sts.option(() => v2030.Period),
            priority: v2030.Priority,
            call: v2030.Type_138,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v9010: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v9010.BlockNumber,
            maybePeriodic: sts.option(() => v9010.Period),
            priority: v9010.Priority,
            call: v9010.Type_138,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v9030: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v9030.BlockNumber,
            maybePeriodic: sts.option(() => v9030.Period),
            priority: v9030.Priority,
            call: v9030.Type_138,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v9040: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v9040.BlockNumber,
            maybePeriodic: sts.option(() => v9040.Period),
            priority: v9040.Priority,
            call: v9040.Type_138,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v9050: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v9050.BlockNumber,
            maybePeriodic: sts.option(() => v9050.Period),
            priority: v9050.Priority,
            call: v9050.Type_139,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v9080: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v9080.BlockNumber,
            maybePeriodic: sts.option(() => v9080.Period),
            priority: v9080.Priority,
            call: v9080.Type_138,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v9090: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v9090.BlockNumber,
            maybePeriodic: sts.option(() => v9090.Period),
            priority: v9090.Priority,
            call: v9090.Type_138,
        })
    ),
    /**
     *  Schedule a named task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 29.6 + .159 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
     *  # </weight>
     */
    v9100: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: v9100.BlockNumber,
            maybePeriodic: sts.option(() => v9100.Period),
            priority: v9100.Priority,
            call: v9100.Type_138,
        })
    ),
    /**
     * Schedule a named task.
     * 
     * # <weight>
     * - S = Number of already scheduled calls
     * - Base Weight: 29.6 + .159 * S µs
     * - DB Weight:
     *     - Read: Agenda, Lookup
     *     - Write: Agenda, Lookup
     * - Will use base weight of 35 which should be good for more than 30 scheduled calls
     * # </weight>
     */
    v9111: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9111.Call,
        })
    ),
    /**
     * Schedule a named task.
     * 
     * # <weight>
     * - S = Number of already scheduled calls
     * - Base Weight: 29.6 + .159 * S µs
     * - DB Weight:
     *     - Read: Agenda, Lookup
     *     - Write: Agenda, Lookup
     * - Will use base weight of 35 which should be good for more than 30 scheduled calls
     * # </weight>
     */
    v9122: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9122.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9130: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9130.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9160: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9160.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9170: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9170.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9180: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9180.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9190: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9190.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9220: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9220.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9230: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9230.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9250: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9250.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9271: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9271.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9291: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9291.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9300: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9300.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9320: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9320.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9340: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9340.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9350: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9350.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9370: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9370.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9381: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9381.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9420: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9420.Call,
        })
    ),
    /**
     * Schedule a named task.
     */
    v9430: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v1000000: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1000000.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named`].
     */
    v1001000: new CallType(
        'Scheduler.schedule_named',
        sts.struct({
            id: sts.bytes(),
            when: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1001000.Call,
        })
    ),
}

export const cancelNamed =  {
    name: 'Scheduler.cancel_named',
    /**
     *  Cancel a named scheduled task.
     * 
     *  # <weight>
     *  - S = Number of already scheduled calls
     *  - Base Weight: 24.91 + 2.907 * S µs
     *  - DB Weight:
     *      - Read: Agenda, Lookup
     *      - Write: Agenda, Lookup
     *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
     *  # </weight>
     */
    v2005: new CallType(
        'Scheduler.cancel_named',
        sts.struct({
            id: sts.bytes(),
        })
    ),
}

export const scheduleAfter =  {
    name: 'Scheduler.schedule_after',
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v2015: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v2015.BlockNumber,
            maybePeriodic: sts.option(() => v2015.Period),
            priority: v2015.Priority,
            call: v2015.Type_192,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v2022: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v2022.BlockNumber,
            maybePeriodic: sts.option(() => v2022.Period),
            priority: v2022.Priority,
            call: v2022.Type_192,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v2023: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v2023.BlockNumber,
            maybePeriodic: sts.option(() => v2023.Period),
            priority: v2023.Priority,
            call: v2023.Type_194,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v2024: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v2024.BlockNumber,
            maybePeriodic: sts.option(() => v2024.Period),
            priority: v2024.Priority,
            call: v2024.Type_194,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v2025: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v2025.BlockNumber,
            maybePeriodic: sts.option(() => v2025.Period),
            priority: v2025.Priority,
            call: v2025.Type_195,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v2026: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v2026.BlockNumber,
            maybePeriodic: sts.option(() => v2026.Period),
            priority: v2026.Priority,
            call: v2026.Type_194,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v2028: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v2028.BlockNumber,
            maybePeriodic: sts.option(() => v2028.Period),
            priority: v2028.Priority,
            call: v2028.Type_199,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v2029: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v2029.BlockNumber,
            maybePeriodic: sts.option(() => v2029.Period),
            priority: v2029.Priority,
            call: v2029.Type_199,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v2030: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v2030.BlockNumber,
            maybePeriodic: sts.option(() => v2030.Period),
            priority: v2030.Priority,
            call: v2030.Type_138,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v9010: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v9010.BlockNumber,
            maybePeriodic: sts.option(() => v9010.Period),
            priority: v9010.Priority,
            call: v9010.Type_138,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v9030: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v9030.BlockNumber,
            maybePeriodic: sts.option(() => v9030.Period),
            priority: v9030.Priority,
            call: v9030.Type_138,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v9040: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v9040.BlockNumber,
            maybePeriodic: sts.option(() => v9040.Period),
            priority: v9040.Priority,
            call: v9040.Type_138,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v9050: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v9050.BlockNumber,
            maybePeriodic: sts.option(() => v9050.Period),
            priority: v9050.Priority,
            call: v9050.Type_139,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v9080: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v9080.BlockNumber,
            maybePeriodic: sts.option(() => v9080.Period),
            priority: v9080.Priority,
            call: v9080.Type_138,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v9090: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v9090.BlockNumber,
            maybePeriodic: sts.option(() => v9090.Period),
            priority: v9090.Priority,
            call: v9090.Type_138,
        })
    ),
    /**
     *  Anonymously schedule a task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule`].
     *  # </weight>
     */
    v9100: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: v9100.BlockNumber,
            maybePeriodic: sts.option(() => v9100.Period),
            priority: v9100.Priority,
            call: v9100.Type_138,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9111: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9111.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9122: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9122.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9130: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9130.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9160: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9160.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9170: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9170.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9180: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9180.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9190: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9190.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9220: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9220.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9230: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9230.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9250: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9250.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9271: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9271.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9291: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9291.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9300: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9300.MaybeHashed,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9320: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9320.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9340: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9340.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9350: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9350.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9370: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9370.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    v9381: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9381.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v9420: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9420.Call,
        })
    ),
    /**
     * Anonymously schedule a task after a delay.
     */
    v9430: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v1000000: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1000000.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_after`].
     */
    v1001000: new CallType(
        'Scheduler.schedule_after',
        sts.struct({
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1001000.Call,
        })
    ),
}

export const scheduleNamedAfter =  {
    name: 'Scheduler.schedule_named_after',
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v2015: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v2015.BlockNumber,
            maybePeriodic: sts.option(() => v2015.Period),
            priority: v2015.Priority,
            call: v2015.Type_192,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v2022: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v2022.BlockNumber,
            maybePeriodic: sts.option(() => v2022.Period),
            priority: v2022.Priority,
            call: v2022.Type_192,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v2023: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v2023.BlockNumber,
            maybePeriodic: sts.option(() => v2023.Period),
            priority: v2023.Priority,
            call: v2023.Type_194,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v2024: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v2024.BlockNumber,
            maybePeriodic: sts.option(() => v2024.Period),
            priority: v2024.Priority,
            call: v2024.Type_194,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v2025: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v2025.BlockNumber,
            maybePeriodic: sts.option(() => v2025.Period),
            priority: v2025.Priority,
            call: v2025.Type_195,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v2026: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v2026.BlockNumber,
            maybePeriodic: sts.option(() => v2026.Period),
            priority: v2026.Priority,
            call: v2026.Type_194,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v2028: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v2028.BlockNumber,
            maybePeriodic: sts.option(() => v2028.Period),
            priority: v2028.Priority,
            call: v2028.Type_199,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v2029: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v2029.BlockNumber,
            maybePeriodic: sts.option(() => v2029.Period),
            priority: v2029.Priority,
            call: v2029.Type_199,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v2030: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v2030.BlockNumber,
            maybePeriodic: sts.option(() => v2030.Period),
            priority: v2030.Priority,
            call: v2030.Type_138,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v9010: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v9010.BlockNumber,
            maybePeriodic: sts.option(() => v9010.Period),
            priority: v9010.Priority,
            call: v9010.Type_138,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v9030: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v9030.BlockNumber,
            maybePeriodic: sts.option(() => v9030.Period),
            priority: v9030.Priority,
            call: v9030.Type_138,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v9040: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v9040.BlockNumber,
            maybePeriodic: sts.option(() => v9040.Period),
            priority: v9040.Priority,
            call: v9040.Type_138,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v9050: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v9050.BlockNumber,
            maybePeriodic: sts.option(() => v9050.Period),
            priority: v9050.Priority,
            call: v9050.Type_139,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`].
     *  # </weight>
     */
    v9080: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v9080.BlockNumber,
            maybePeriodic: sts.option(() => v9080.Period),
            priority: v9080.Priority,
            call: v9080.Type_138,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`](Self::schedule_named).
     *  # </weight>
     */
    v9090: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v9090.BlockNumber,
            maybePeriodic: sts.option(() => v9090.Period),
            priority: v9090.Priority,
            call: v9090.Type_138,
        })
    ),
    /**
     *  Schedule a named task after a delay.
     * 
     *  # <weight>
     *  Same as [`schedule_named`](Self::schedule_named).
     *  # </weight>
     */
    v9100: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: v9100.BlockNumber,
            maybePeriodic: sts.option(() => v9100.Period),
            priority: v9100.Priority,
            call: v9100.Type_138,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9111: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9111.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9122: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9122.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9130: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9130.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9160: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9160.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9170: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9170.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9180: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9180.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9190: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9190.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9220: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9220.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9230: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9230.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9250: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9250.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9271: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9271.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9291: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9291.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9300: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9300.MaybeHashed,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9320: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9320.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9340: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9340.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9350: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9350.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9370: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9370.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    v9381: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9381.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v9420: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9420.Call,
        })
    ),
    /**
     * Schedule a named task after a delay.
     */
    v9430: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v9430.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v1000000: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1000000.Call,
        })
    ),
    /**
     * See [`Pallet::schedule_named_after`].
     */
    v1001000: new CallType(
        'Scheduler.schedule_named_after',
        sts.struct({
            id: sts.bytes(),
            after: sts.number(),
            maybePeriodic: sts.option(() => sts.tuple(() => [sts.number(), sts.number()])),
            priority: sts.number(),
            call: v1001000.Call,
        })
    ),
}
