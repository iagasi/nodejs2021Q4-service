import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateDateColumn } from 'typeorm';
import { BoardDto } from './boards.dto';
import { Board_db } from './boards.entity';
import { BoardModel } from './boards.model';
import { Columns_db } from './columns.entity';
import { ObjectID } from "typeorm";
import { Tasks_db } from 'src/tasks/tasks.entity';
@Injectable()
export class BoardsService {

    constructor(@InjectRepository(Board_db) public boardRepository: typeof Board_db,
    @InjectRepository(Columns_db) public columnRepository: typeof Columns_db,
    @InjectRepository(Tasks_db) public taskRepository: typeof Tasks_db,
                   private boardModel: BoardModel
                  ) { }
    async getAll() {
        return await this.boardRepository.find({relations:["columns"]})
    }
    async getById(id: string) {
        const board = await this.boardRepository.findOne({ id: id },{relations:["columns"]})
        if (board) { return board }

        else {
            throw new HttpException(" Board not foud", HttpStatus.NOT_FOUND)
        }
    }
   async create(body: BoardDto) {
        let data:BoardDto
        if (typeof body === "string") { data = JSON.parse(body) }
        else { data = body }
        
       
        const modelOfBoard=this.boardModel.generateBoard(data)
        const createdBoard=await this.boardRepository.create(modelOfBoard).save()
        const columns=createdBoard.columns
   for await ( const  iterator of columns) {const column= await Columns_db.create({ title:iterator.title,order:iterator.order,board:createdBoard}).save()}
        if(!createdBoard){throw new HttpException("",500)}
        else{return await this.boardRepository.findOne({id:modelOfBoard.id},{relations:["columns"]})}
    }
   async update(id:string,board:BoardDto) {
        const updateBoard=this.boardModel.generateBoard({id:id,...board})
      
        
        

       await this.boardRepository.update({id:id},{title:updateBoard.title})
        return this.boardRepository.findOne(id)
    }
    async delete(id:string) {
        const candidate=await this.boardRepository.findOne(id)
        if (candidate){
           await this.taskRepository.delete({boardId:candidate.id})
            await this.columnRepository.delete({board:candidate})
            await this.boardRepository.delete(id)
            return candidate
        }
        else{
           return undefined
        }
    }

}
