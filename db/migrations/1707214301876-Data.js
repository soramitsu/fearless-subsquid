module.exports = class Data1707214301876 {
    name = 'Data1707214301876'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_e3635f3b99a361a3bca4e123e1"`)
        await db.query(`DROP INDEX "public"."IDX_5efbff445643ab2a44563d40af"`)
        await db.query(`DROP INDEX "public"."IDX_5016ee8c1a40ad844bd4d430d3"`)
        await db.query(`DROP INDEX "public"."IDX_8c8b662ca41ca4d3af055c3a8d"`)
        await db.query(`DROP INDEX "public"."IDX_d6296b368ab6f659bdc412d2cf"`)
        await db.query(`DROP INDEX "public"."IDX_503ada649fbdf91665248633e8"`)
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "name"`)
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "module"`)
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "method"`)
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "address"`)
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "network_fee"`)
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "data_to"`)
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "data_from"`)
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "data_receivers"`)
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "call_names"`)
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "updated_at_block"`)
    }

    async down(db) {
        await db.query(`CREATE INDEX "IDX_e3635f3b99a361a3bca4e123e1" ON "history_element" ("module") `)
        await db.query(`CREATE INDEX "IDX_5efbff445643ab2a44563d40af" ON "history_element" ("method") `)
        await db.query(`CREATE INDEX "IDX_5016ee8c1a40ad844bd4d430d3" ON "history_element" ("address") `)
        await db.query(`CREATE INDEX "IDX_8c8b662ca41ca4d3af055c3a8d" ON "history_element" ("data_to") `)
        await db.query(`CREATE INDEX "IDX_d6296b368ab6f659bdc412d2cf" ON "history_element" ("data_from") `)
        await db.query(`CREATE INDEX "IDX_503ada649fbdf91665248633e8" ON "history_element" ("updated_at_block") `)
        await db.query(`ALTER TABLE "history_element" ADD "name" text NOT NULL`)
        await db.query(`ALTER TABLE "history_element" ADD "module" text NOT NULL`)
        await db.query(`ALTER TABLE "history_element" ADD "method" text NOT NULL`)
        await db.query(`ALTER TABLE "history_element" ADD "address" text NOT NULL`)
        await db.query(`ALTER TABLE "history_element" ADD "network_fee" text`)
        await db.query(`ALTER TABLE "history_element" ADD "data_to" text`)
        await db.query(`ALTER TABLE "history_element" ADD "data_from" text`)
        await db.query(`ALTER TABLE "history_element" ADD "data_receivers" text array NOT NULL`)
        await db.query(`ALTER TABLE "history_element" ADD "call_names" text array NOT NULL`)
        await db.query(`ALTER TABLE "history_element" ADD "updated_at_block" integer NOT NULL`)
    }
}
