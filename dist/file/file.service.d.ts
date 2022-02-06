/// <reference types="multer" />
import { StreamableFile } from '@nestjs/common';
export declare class FileService {
    create(files: Array<Express.Multer.File>): Promise<any>;
    getByName(name: any): Promise<StreamableFile | "file with THIS name not exists">;
}
