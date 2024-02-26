module.exports = class Data1708952471402 {
    name = 'Data1708952471402'

    async up(db) {
        await db.query(`ALTER TABLE "stake_change" DROP COLUMN "accumulated_amount1"`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "stake_change" ADD "accumulated_amount1" numeric NOT NULL`)
    }
}
