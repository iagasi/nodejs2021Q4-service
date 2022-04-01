/// <reference types="multer" />
import { FileService } from './file.service';
export declare class FileController {
    private fileService;
    constructor(fileService: FileService);
    create(files: Array<Express.Multer.File>): Promise<any>;
    getByName(name: string): Promise<import("@nestjs/common").StreamableFile | "file with THIS name not exists">;
}
