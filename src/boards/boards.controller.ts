import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { BoardsService } from './boards.service';
import route from "../lib";
import { BoardDto } from './boards.dto';
import { JwtAuthGuard } from 'src/auth/jw-auth.guard';

@Controller()
@UseGuards(JwtAuthGuard)
export class BoardsController {

constructor(private boardService:BoardsService){}


@Get(route.boards.getAll)
getAll(){
return this.boardService.getAll()
}


@Get(route.boards.getById(":id"))
getById(@Param("id") id: string){
return this.boardService.getById(id)
}


@Post(route.boards.create)
create(@Body() body:BoardDto){
 return this.boardService.create(body)
}


@Put(route.boards.update(":id"))
update(@Param("id")id:string ,@Body() body:BoardDto){
return this.boardService.update(id,body)
}


@Delete(route.boards.delete(":id"))
delete(@Param("id") id: string){
   return this.boardService.delete(id)
}
}
