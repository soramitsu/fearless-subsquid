module.exports = class Data1710232086673 {
    name = 'Data1710232086673'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_d77a8d971ed41b9b1fdca81286"`)
        await db.query(`ALTER TABLE "stake_change" DROP COLUMN "data"`)
    }

    async down(db) {
        await db.query(`CREATE INDEX "IDX_d77a8d971ed41b9b1fdca81286" ON "stake_change" ("data") `)
        await db.query(`ALTER TABLE "stake_change" ADD "data" jsonb`)
    }
}
