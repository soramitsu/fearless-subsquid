module.exports = class Data1708526940260 {
    name = 'Data1708526940260'

    async up(db) {
        await db.query(`CREATE TABLE "stake_change" ("id" character varying NOT NULL, "type" character varying(5) NOT NULL, "block_height" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" integer NOT NULL, "execution" jsonb NOT NULL, "name" text NOT NULL, "module" text NOT NULL, "method" text NOT NULL, "accumulated_amount" numeric NOT NULL, CONSTRAINT "PK_c8caa97569762773f19cf127103" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_6d6406a87d5f1bf807b53fd8df" ON "stake_change" ("block_height") `)
        await db.query(`CREATE INDEX "IDX_951fb5610606ecb37bf2fe35d8" ON "stake_change" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_2997b20e37e04627447d4b0766" ON "stake_change" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_6390d5284d0b0cb148caf9e4cc" ON "stake_change" ("module") `)
        await db.query(`CREATE INDEX "IDX_15d3cd621e76f6a29f7269363b" ON "stake_change" ("method") `)
        await db.query(`CREATE TABLE "accumulated_stake" ("id" character varying NOT NULL, "amount" numeric NOT NULL, CONSTRAINT "PK_b8067048d2065bcf1c7dd1a6ae0" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "history_element" ("id" character varying NOT NULL, "type" character varying(5) NOT NULL, "block_height" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" integer NOT NULL, "execution" jsonb NOT NULL, "name" text NOT NULL, "module" text NOT NULL, "method" text NOT NULL, "data" jsonb, "reward" jsonb, "transfer" jsonb, CONSTRAINT "PK_b10b09ee684b794e1ca6dc2470c" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_1e20194d81a1b3745e74305903" ON "history_element" ("block_height") `)
        await db.query(`CREATE INDEX "IDX_a3a82e778d9710e7594003348d" ON "history_element" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_3c504866f0a2d7387691e3ac14" ON "history_element" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_e3635f3b99a361a3bca4e123e1" ON "history_element" ("module") `)
        await db.query(`CREATE INDEX "IDX_5efbff445643ab2a44563d40af" ON "history_element" ("method") `)
        await db.query(`CREATE INDEX "IDX_1ba28b188c45fa806f1cb9c039" ON "history_element" ("data") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "stake_change"`)
        await db.query(`DROP INDEX "public"."IDX_6d6406a87d5f1bf807b53fd8df"`)
        await db.query(`DROP INDEX "public"."IDX_951fb5610606ecb37bf2fe35d8"`)
        await db.query(`DROP INDEX "public"."IDX_2997b20e37e04627447d4b0766"`)
        await db.query(`DROP INDEX "public"."IDX_6390d5284d0b0cb148caf9e4cc"`)
        await db.query(`DROP INDEX "public"."IDX_15d3cd621e76f6a29f7269363b"`)
        await db.query(`DROP TABLE "accumulated_stake"`)
        await db.query(`DROP TABLE "history_element"`)
        await db.query(`DROP INDEX "public"."IDX_1e20194d81a1b3745e74305903"`)
        await db.query(`DROP INDEX "public"."IDX_a3a82e778d9710e7594003348d"`)
        await db.query(`DROP INDEX "public"."IDX_3c504866f0a2d7387691e3ac14"`)
        await db.query(`DROP INDEX "public"."IDX_e3635f3b99a361a3bca4e123e1"`)
        await db.query(`DROP INDEX "public"."IDX_5efbff445643ab2a44563d40af"`)
        await db.query(`DROP INDEX "public"."IDX_1ba28b188c45fa806f1cb9c039"`)
    }
}
