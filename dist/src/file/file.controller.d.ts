import { FileService } from './file.service';
export declare class FileController {
    private fileService;
    constructor(fileService: FileService);
    create(files: any): Promise<any>;
    getByName(name: string): Promise<import("@nestjs/common").StreamableFile | "file with THIS name not exists">;
}
