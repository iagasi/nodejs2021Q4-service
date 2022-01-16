interface IBoard {
    
id:string
title:string
columns:Array<{title:string,order:number}>
    }
    
interface IReceivedRequestBody{
    id:string|undefined
    title:string
    columns:Array<{title:string,order:number}>
}
   


    export {IBoard,IReceivedRequestBody}