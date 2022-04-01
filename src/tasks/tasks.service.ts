import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskDto } from './tasks.dto';
import { Tasks_db } from './tasks.entity';
import model from "./tasks.model"
@Injectable()
export class TasksService {
    constructor(@InjectRepository(Tasks_db) public taskRepository: typeof Tasks_db) { }
    async getAll() {
        return this.taskRepository.find()
    }
    async getById(boardId: string, taskId: string) {
      
        
        let toReturn
        if (taskId) {
            const byTaskId = await this.taskRepository.findOne({ id: taskId })
            toReturn= byTaskId
        }
        else {
            const byBoardId = await this.taskRepository.findOne({ boardId: boardId })
            toReturn = byBoardId
        }
       
        
      if(!toReturn){
throw new HttpException("",HttpStatus.NOT_FOUND)
      }
       else return toReturn
    }

    async create(options:TaskDto,boardId:string) {
         let task
        if (typeof options === 'string') {
            task = JSON.parse(options);
          } else {
            task=options
          }
  
        
          const taskModel = model(task, boardId);
         
         
          
        
        const newTask = this.taskRepository.create(taskModel)
        await newTask.save()
        return newTask
    }


    async update(boardId: string, taskId: string, receivedTask: TaskDto) {
        
        const updated = await Tasks_db.update({ id: taskId }, { title:receivedTask.title, order: receivedTask.order, description: receivedTask.description })
        const task = await Tasks_db.findOne({ id: taskId })
        return task
    }
    async delete(boardId:string,taskId:string) {
        return await Tasks_db.delete({id:taskId})
    }
}
