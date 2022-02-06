import { Controller, Get, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
    constructor(private fileService:FileService){}

@Post()
@UseInterceptors(AnyFilesInterceptor())
create(@UploadedFiles() files:Array<Express.Multer.File>){


 return this.fileService.create(files)
}

@Get("/:name")
getByName(@Param("name") name:string){
 return this.fileService.getByName(name)
}
}



