"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationName1642333038795 = void 0;
class migrationName1642333038795 {
    constructor() {
        this.name = 'migrationName1642333038795';
    }
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE "columns_db" (
                "id" SERIAL NOT NULL,
                "title" character varying NOT NULL,
                "order" integer NOT NULL,
                "boardId" character varying,
                CONSTRAINT "PK_44238e3b259a346f32a83e9f747" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "board_db" (
                "id" character varying NOT NULL,
                "title" character varying NOT NULL,
                CONSTRAINT "PK_4c321d14eda57430d5ed7016395" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "user_db" (
                "id" character varying NOT NULL,
                "name" character varying NOT NULL,
                "login" character varying NOT NULL,
                "password" character varying NOT NULL,
                CONSTRAINT "PK_3a30f4ab478851bfcd2d028105a" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "tasks_db" (
                "id" character varying NOT NULL,
                "title" character varying NOT NULL,
                "order" integer NOT NULL,
                "description" character varying NOT NULL,
                "columnId" character varying,
                "userIdId" character varying,
                "boardIdId" character varying,
                CONSTRAINT "PK_e866bdd6934144fb7245449656d" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "columns_db"
            ADD CONSTRAINT "FK_236317142de8ef07f7cee90f13c" FOREIGN KEY ("boardId") REFERENCES "board_db"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "tasks_db"
            ADD CONSTRAINT "FK_bd4f1729e21012a2ce8fe8f307e" FOREIGN KEY ("userIdId") REFERENCES "user_db"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "tasks_db"
            ADD CONSTRAINT "FK_fac7a594f22da38b32e3f115209" FOREIGN KEY ("boardIdId") REFERENCES "board_db"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "tasks_db" DROP CONSTRAINT "FK_fac7a594f22da38b32e3f115209"
        `);
        await queryRunner.query(`
            ALTER TABLE "tasks_db" DROP CONSTRAINT "FK_bd4f1729e21012a2ce8fe8f307e"
        `);
        await queryRunner.query(`
            ALTER TABLE "columns_db" DROP CONSTRAINT "FK_236317142de8ef07f7cee90f13c"
        `);
        await queryRunner.query(`
            DROP TABLE "tasks_db"
        `);
        await queryRunner.query(`
            DROP TABLE "user_db"
        `);
        await queryRunner.query(`
            DROP TABLE "board_db"
        `);
        await queryRunner.query(`
            DROP TABLE "columns_db"
        `);
    }
}
exports.migrationName1642333038795 = migrationName1642333038795;
//# sourceMappingURL=1642333038795-migrationName.js.map