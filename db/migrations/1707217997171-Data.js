module.exports = class Data1707217997171 {
    name = 'Data1707217997171'

    async up(db) {
        await db.query(`CREATE TABLE "history_element" ("id" character varying NOT NULL, "type" character varying(5) NOT NULL, "block_height" integer NOT NULL, "block_hash" text NOT NULL, "timestamp" integer NOT NULL, "execution" jsonb NOT NULL, "data" jsonb, CONSTRAINT "PK_b10b09ee684b794e1ca6dc2470c" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_1e20194d81a1b3745e74305903" ON "history_element" ("block_height") `)
        await db.query(`CREATE INDEX "IDX_a3a82e778d9710e7594003348d" ON "history_element" ("block_hash") `)
        await db.query(`CREATE INDEX "IDX_3c504866f0a2d7387691e3ac14" ON "history_element" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_1ba28b188c45fa806f1cb9c039" ON "history_element" ("data") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "history_element"`)
        await db.query(`DROP INDEX "public"."IDX_1e20194d81a1b3745e74305903"`)
        await db.query(`DROP INDEX "public"."IDX_a3a82e778d9710e7594003348d"`)
        await db.query(`DROP INDEX "public"."IDX_3c504866f0a2d7387691e3ac14"`)
        await db.query(`DROP INDEX "public"."IDX_1ba28b188c45fa806f1cb9c039"`)
    }
}
