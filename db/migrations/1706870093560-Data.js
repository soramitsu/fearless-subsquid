module.exports = class Data1706870093560 {
    name = 'Data1706870093560'

    async up(db) {
        await db.query(`CREATE TABLE "history_element" ("id" character varying NOT NULL, "type" character varying(5) NOT NULL, "block_height" integer NOT NULL, "block_hash" text NOT NULL, "name" text NOT NULL, "module" text NOT NULL, "method" text NOT NULL, "address" text NOT NULL, "network_fee" text, "execution" jsonb NOT NULL, "timestamp" integer NOT NULL, "data" jsonb, "data_to" text, "data_from" text, "data_receivers" text array NOT NULL, "call_names" text array NOT NULL, "updated_at_block" integer NOT NULL, CONSTRAINT "PK_b10b09ee684b794e1ca6dc2470c" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_1e20194d81a1b3745e74305903" ON "history_element" ("block_height") `)
        await db.query(`CREATE INDEX "IDX_a3a82e778d9710e7594003348d" ON "history_element" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_e3635f3b99a361a3bca4e123e1" ON "history_element" ("module") `)
        await db.query(`CREATE INDEX "IDX_5efbff445643ab2a44563d40af" ON "history_element" ("method") `)
        await db.query(`CREATE INDEX "IDX_5016ee8c1a40ad844bd4d430d3" ON "history_element" ("address") `)
        await db.query(`CREATE INDEX "IDX_3c504866f0a2d7387691e3ac14" ON "history_element" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_1ba28b188c45fa806f1cb9c039" ON "history_element" ("data") `)
        await db.query(`CREATE INDEX "IDX_8c8b662ca41ca4d3af055c3a8d" ON "history_element" ("data_to") `)
        await db.query(`CREATE INDEX "IDX_d6296b368ab6f659bdc412d2cf" ON "history_element" ("data_from") `)
        await db.query(`CREATE INDEX "IDX_503ada649fbdf91665248633e8" ON "history_element" ("updated_at_block") `)
        await db.query(`CREATE TABLE "history_element_call" ("id" character varying NOT NULL, "module" text NOT NULL, "method" text NOT NULL, "data" jsonb NOT NULL, "updated_at_block" integer NOT NULL, "history_element_id" character varying, CONSTRAINT "PK_6cd85a528bf4c7caf94b2425b85" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e39508832989706565bce9ee5c" ON "history_element_call" ("history_element_id") `)
        await db.query(`CREATE INDEX "IDX_726ee78085268396a633201746" ON "history_element_call" ("updated_at_block") `)
        await db.query(`ALTER TABLE "history_element_call" ADD CONSTRAINT "FK_e39508832989706565bce9ee5c4" FOREIGN KEY ("history_element_id") REFERENCES "history_element"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "history_element"`)
        await db.query(`DROP INDEX "public"."IDX_1e20194d81a1b3745e74305903"`)
        await db.query(`DROP INDEX "public"."IDX_a3a82e778d9710e7594003348d"`)
        await db.query(`DROP INDEX "public"."IDX_e3635f3b99a361a3bca4e123e1"`)
        await db.query(`DROP INDEX "public"."IDX_5efbff445643ab2a44563d40af"`)
        await db.query(`DROP INDEX "public"."IDX_5016ee8c1a40ad844bd4d430d3"`)
        await db.query(`DROP INDEX "public"."IDX_3c504866f0a2d7387691e3ac14"`)
        await db.query(`DROP INDEX "public"."IDX_1ba28b188c45fa806f1cb9c039"`)
        await db.query(`DROP INDEX "public"."IDX_8c8b662ca41ca4d3af055c3a8d"`)
        await db.query(`DROP INDEX "public"."IDX_d6296b368ab6f659bdc412d2cf"`)
        await db.query(`DROP INDEX "public"."IDX_503ada649fbdf91665248633e8"`)
        await db.query(`DROP TABLE "history_element_call"`)
        await db.query(`DROP INDEX "public"."IDX_e39508832989706565bce9ee5c"`)
        await db.query(`DROP INDEX "public"."IDX_726ee78085268396a633201746"`)
        await db.query(`ALTER TABLE "history_element_call" DROP CONSTRAINT "FK_e39508832989706565bce9ee5c4"`)
    }
}
