"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./common/config"));
const app_1 = __importDefault(require("./app"));
const typeorm_1 = require("typeorm");
const PORT = config_1.default.PORT || 4000;
const start = async () => {
    const connection = await (0, typeorm_1.createConnection)({
        type: "postgres",
        host: "db-postgres",
        port: 5432,
        username: "postgres",
        password: "docker",
        database: "test",
    });
    await connection.synchronize().then(() => { console.log("connected to db"); });
    app_1.default.listen(PORT, "0.0.0.0", () => console.log(`App is running on http://localhost:${PORT}`));
};
start();
exports.default = app_1.default;
