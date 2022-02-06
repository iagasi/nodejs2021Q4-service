"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
let FileService = class FileService {
    async create(files) {
        try {
            fs.mkdir("dist/static/", (err) => {
                console.log(err);
            });
            const fileName = `dist/static/${files[0].originalname}`;
            if (!fs.existsSync(fileName)) {
                fs.writeFileSync(fileName, files[0].buffer);
                return { filename: files[0].originalname };
            }
            else {
                return `the file with name ${files[0].originalname} already exists`;
            }
        }
        catch (error) {
            return error;
        }
    }
    async getByName(name) {
        if (fs.existsSync(`dist/static/${name}`)) {
            const file = fs.createReadStream(`dist/static/${name}`);
            return new common_1.StreamableFile(file);
        }
        else {
            return "file with THIS name not exists";
        }
    }
};
FileService = __decorate([
    (0, common_1.Injectable)()
], FileService);
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map