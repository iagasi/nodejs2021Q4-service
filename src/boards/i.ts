import { BoardModel } from "./boards.model";

const c=new BoardModel()

const y=c.generateBoard({id:"123",title:"sdsd",columns:[]})
console.log(y);
