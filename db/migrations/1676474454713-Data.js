module.exports = class Data1676474454713 {
    name = 'Data1676474454713'

    async up(db) {
        await db.query(`CREATE TABLE "history_element" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "extrinsic_idx" text, "extrinsic_hash" text, "timestamp" numeric NOT NULL, "address" text NOT NULL, "reward" jsonb, "extrinsic" jsonb, "transfer" jsonb, CONSTRAINT "PK_b10b09ee684b794e1ca6dc2470c" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_245d5180298c7bb6faa2aa3377" ON "history_element" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_3c504866f0a2d7387691e3ac14" ON "history_element" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_5016ee8c1a40ad844bd4d430d3" ON "history_element" ("address") `)
        await db.query(`CREATE TABLE "accumulated_reward" ("id" character varying NOT NULL, "amount" numeric NOT NULL, CONSTRAINT "PK_43a34960ffea1cfdf37fb441ed2" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "stake_change" ("id" character varying NOT NULL, "block_number" integer NOT NULL, "extrinsic_hash" text, "event_idx" text NOT NULL, "timestamp" numeric NOT NULL, "address" text NOT NULL, "amount" numeric NOT NULL, "accumulated_amount" numeric NOT NULL, "type" text NOT NULL, CONSTRAINT "PK_c8caa97569762773f19cf127103" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_25e8a42fb491faa7997aec93f7" ON "stake_change" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_2997b20e37e04627447d4b0766" ON "stake_change" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_5e1d6f66bbeaa9800ac1d41559" ON "stake_change" ("address") `)
        await db.query(`CREATE TABLE "accumulated_stake" ("id" character varying NOT NULL, "amount" numeric NOT NULL, CONSTRAINT "PK_b8067048d2065bcf1c7dd1a6ae0" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "era_validator_info" ("id" character varying NOT NULL, "address" text NOT NULL, "era" integer NOT NULL, "total" numeric NOT NULL, "own" numeric NOT NULL, "others" jsonb NOT NULL, CONSTRAINT "PK_8a494e2a4a4400b9297e2a6bec8" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_dfd7ca31da5e222e785d0fbdfb" ON "era_validator_info" ("address") `)
        await db.query(`CREATE INDEX "IDX_b827257aebfcc2d4eb76572d17" ON "era_validator_info" ("era") `)
        await db.query(`CREATE TABLE "error_event" ("id" character varying NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_c2e5dc904a1e06d26e1538544ed" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "history_element"`)
        await db.query(`DROP INDEX "public"."IDX_245d5180298c7bb6faa2aa3377"`)
        await db.query(`DROP INDEX "public"."IDX_3c504866f0a2d7387691e3ac14"`)
        await db.query(`DROP INDEX "public"."IDX_5016ee8c1a40ad844bd4d430d3"`)
        await db.query(`DROP TABLE "accumulated_reward"`)
        await db.query(`DROP TABLE "stake_change"`)
        await db.query(`DROP INDEX "public"."IDX_25e8a42fb491faa7997aec93f7"`)
        await db.query(`DROP INDEX "public"."IDX_2997b20e37e04627447d4b0766"`)
        await db.query(`DROP INDEX "public"."IDX_5e1d6f66bbeaa9800ac1d41559"`)
        await db.query(`DROP TABLE "accumulated_stake"`)
        await db.query(`DROP TABLE "era_validator_info"`)
        await db.query(`DROP INDEX "public"."IDX_dfd7ca31da5e222e785d0fbdfb"`)
        await db.query(`DROP INDEX "public"."IDX_b827257aebfcc2d4eb76572d17"`)
        await db.query(`DROP TABLE "error_event"`)
    }
}
