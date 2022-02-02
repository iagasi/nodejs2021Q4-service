import { StreamableFile } from '@nestjs/common';
export declare class FileService {
    create(files: any): Promise<any>;
    getByName(name: any): Promise<StreamableFile | "file with THIS name not exists">;
}
