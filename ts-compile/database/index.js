"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const connectToDb = async () => {
    try {
        const connection = await (0, typeorm_1.createConnection)();
        await connection.runMigrations().then(() => { console.log("Connected To db"); });
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = connectToDb;
//# sourceMappingURL=index.js.map