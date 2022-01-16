"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDb = void 0;
const typeorm_1 = require("typeorm");
const Board_db_1 = require("./entities/Board_db");
const Columns_db_1 = require("./entities/Columns_db");
const Tasks_db_1 = require("./entities/Tasks_db");
const User_db_1 = require("./entities/User_db");
const connectToDb = async () => {
    const connection = await (0, typeorm_1.createConnection)({
        type: "postgres",
        host: "db-postgres",
        port: 5432,
        username: "postgres",
        password: "docker",
        database: "test",
        entities: [User_db_1.User_db, Board_db_1.Board_db, Tasks_db_1.Tasks_db, Columns_db_1.Columns_db]
    });
    try {
        await connection.synchronize().then(() => { console.log("Connected To db"); });
    }
    catch (error) {
    }
};
exports.connectToDb = connectToDb;
//# sourceMappingURL=index.js.map