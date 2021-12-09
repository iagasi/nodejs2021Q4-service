interface IBoard {
    
id:string
title:string
columns:Array <object>
    }
    
interface IReceivedRequestBody{
    id:string|undefined
    title:string
    columns:Array <object>
}
   


    export {IBoard,IReceivedRequestBody}