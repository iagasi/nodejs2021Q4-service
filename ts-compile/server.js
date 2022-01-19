"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./common/config"));
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./database"));
const PORT = config_1.default.PORT || 4000;
const start = async () => {
    await (0, database_1.default)();
    app_1.default.listen(PORT, "0.0.0.0", () => console.log(`Appp Is running on http://localhost:${PORT}`));
};
start();
exports.default = app_1.default;
//# sourceMappingURL=server.js.map