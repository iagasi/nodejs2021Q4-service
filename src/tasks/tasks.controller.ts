import { Body, Controller, Delete, Get, Param, Post, Put,HttpCode, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jw-auth.guard';
import route from "../lib";
import { TaskDto } from './tasks.dto';
import { TasksService } from './tasks.service';


@Controller()
 @UseGuards(JwtAuthGuard)
export class TasksController {
    constructor(public taskService: TasksService) { }

    
    @Get(route.tasks.getAll(":boardId"))
    getAllByBoardId(@Param("boardId") boardId: string) {
    return this.taskService.getAll()
    }
    
    @Get(route.tasks.getById(":boardId", ":taskId"))
   
    getById(@Param("boardId") boardId: string,@Param("taskId") taskId: string) {
  
        
        
    return this.taskService.getById(boardId,taskId)
    }

    @Post(route.tasks.create(":boardId"))
    create(@Body() task:TaskDto,@Param("boardId") boardId:string){


    return this.taskService.create(task,boardId)
    }

    @Put(route.tasks.update(":boardId",":taskId"))
    update(@Param("boardId") boardId:string,@Param("taskId") taskId:string,@Body() task:TaskDto){
    return this.taskService.update(boardId,taskId,task)
    }

    @Delete(route.tasks.delete(":boardId",":taskId"))
    delete(@Param("boardId") boardId:string,@Param("taskId") taskId:string ){
    return this.taskService.delete(boardId,taskId)
    }


}
