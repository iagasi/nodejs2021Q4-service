"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDb = void 0;
const typeorm_1 = require("typeorm");
const connectToDb = async () => {
    const connection = await (0, typeorm_1.createConnection)();
    try {
        await connection.runMigrations().then(() => { console.log("Connected To db"); });
    }
    catch (error) {
        console.log(error);
    }
};
exports.connectToDb = connectToDb;
//# sourceMappingURL=index.js.map