import { title } from 'process';
import { Tasks_db } from '../../database/entities/Tasks_db';
import { FindCondition, getManager, getRepository } from 'typeorm';
import { Board_db } from '../../database/entities/Board_db';
import { Columns_db } from '../../database/entities/Columns_db';
import { mergeBoardsColumns } from './functions/mergeBoards.Columns';
import { IBoard } from './interfaces';

const boards: Array<IBoard> = [];
/**
 *
 * @returns ALL Boards
 *  @type {Array<object>}
 */
const getAll = async () => {
  const repo = getRepository(Board_db);
  const allBoards = await repo.find({relations:["columns"]});
  return allBoards
};

/**
 * @params id @type {string}
 * @returns found Board in array @type {object}
 */
const getById = async (id: string) => {
  const foundBoard = await Board_db.findOne(id,{relations:["columns"]});
  //const columns=await Columns_db.find({board:foundBoard})
  // if(foundBoard){
  //    if(Object.keys(foundBoard).length !== 0){return {...foundBoard,columns}}
  // }
 console.log(foundBoard);
 
  return foundBoard
};

/**
 * Creates New Board In Array
 * @param {id:string ,title:string,columns:Array<string>}  board
 * @returns {void}
 *
 */
const createNewBoard = async (board: IBoard) => {
    
  const newboard = Board_db.create(board);
  await newboard.save()
  const columns=board.columns
   for await ( const  iterator of columns) {
    const column=Columns_db.create({ title:iterator.title,order:iterator.order,board:newboard})
    await column.save()
 }

    
    return {...newboard,columns}
   
  
  
};
/**
 * Modifies existing Board by id id remains ame
 * @param {string} id
 * @param {{id:string ,title:string,columns:Array<string>}}options
 * @returns  found  boarts @type {IBoard}
 */
const modifyBoard = async (id: any, options: IBoard) => {

await Board_db.update({id:id},{title:options.title})
//   const columns1=await Columns_db.find({board:id})
//   await Columns_db.remove(columns1)
//   const columns2=await Columns_db.find({board:id})
  
  
//   for await (const iterator of options.columns) {


//    const create= Columns_db.create({title:iterator.title,order:iterator.order,board:board1})
//   await create.save()
 
//   }
  
//    const board=await Board_db.findOne(id)
  
   
//   const boardColumns=await Columns_db.find({board:board1.id})
 
 
 
//  return mergeBoardsColumns(board,boardColumns)
 return {}
};

/**
 * Delete board by id
 * @param id
 * @
 * @returns deleted Board @type {object}
 * or
 * @returns {undefined}
 */
const deleteBoard = async (id: string) => {



const candidate=await Board_db.findOne(id)


 if(candidate){ 
   const {id}=candidate as {id:any}
   await Tasks_db.delete({boardId:id})
  //  for (const iterator of object) {
  //     await Columns_db.delete({board:id})
  //  }
  await Columns_db.delete({board:id})
  await Board_db.delete({ id: id });
return candidate
}
  
else{return undefined}

return undefined

};

export default { getAll, getById, createNewBoard, modifyBoard, deleteBoard };
