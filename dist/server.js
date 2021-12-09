"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("./common/config"));
var app_1 = __importDefault(require("./app"));
var PORT = config_1.default.PORT || 4000;
app_1.default.listen(PORT, function () {
    return console.log("App is running on http://localhost:".concat(PORT));
});
//module.exports=app
