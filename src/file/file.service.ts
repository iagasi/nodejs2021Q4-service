import { Injectable, StreamableFile } from '@nestjs/common';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid'
@Injectable()
export class FileService {

    async create(files:Array<Express.Multer.File>) {
        try {
            fs.mkdir( "dist/static/",(err)=>{console.log(err);
            })
            const fileName = `dist/static/${files[0].originalname}`
            if (!fs.existsSync(fileName)) {
                fs.writeFileSync(fileName, files[0].buffer)
                return { filename: files[0].originalname }
            }
            else { return `the file with name ${files[0].originalname} already exists` }

        }
        catch (error) {
            return error
        }
    }

    async getByName(name) {

        if (fs.existsSync(`dist/static/${name}`)) {
            const file = fs.createReadStream(`dist/static/${name}`)
            return new StreamableFile(file)
        }
        else {
            return "file with THIS name not exists"
        }




    }
}
