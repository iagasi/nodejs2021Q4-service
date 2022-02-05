import { IsString, IsInt } from "class-validator"

export class TaskDto {

  public id: string
  @IsString({ message: "name must be string" })
  public title: string
  @IsInt({ message: "Order must be int" })
  public order: number
  @IsString({ message: "name must be string" })
  public description: string

  public userId: string | null
  public boardId: string | null
  
  public columnId: string
}
