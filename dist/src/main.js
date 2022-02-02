"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_pipe_1 = require("./pipes/validation.pipe");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const user_entity_1 = require("./users/user.entity");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    await app.listen(3001);
    const hash = "$2b$10$pQGCi1Fu3Yo5EOGOnTbXluGZaSti4jT3XDyiYlR..z0JtfFYQMNga";
    await user_entity_1.User_db.create({ id: "123456", login: "admin", password: hash, name: "admin" }).save();
}
bootstrap();
//# sourceMappingURL=main.js.map