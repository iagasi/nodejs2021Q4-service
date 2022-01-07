"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./common/config"));
const app_1 = __importDefault(require("./app"));
const typeorm_1 = require("typeorm");
const Client_1 = require("./entities/Client");
const Banker_1 = require("./entities/Banker");
const Transaction_1 = require("./entities/Transaction");
const PORT = config_1.default.PORT || 4000;
const start = async () => {
    const connection = await (0, typeorm_1.createConnection)({
        type: "postgres",
        host: "db-postgres",
        port: 5432,
        username: "postgres",
        password: "docker",
        database: "test",
        entities: [Client_1.User, Banker_1.Banker, Transaction_1.Transaction]
    });
    await connection.synchronize().then(() => { console.log("connected to db"); });
    app_1.default.listen(PORT, "0.0.0.0", () => console.log(`App is running on http://localhost:${PORT}`));
    const user = Client_1.User.create({
        name: "aaaa",
        last_name: "lastname",
        balance: 123
    });
    await user.save();
};
start();
exports.default = app_1.default;
