

type columns =Array<{id:string,title:string,order:number}>
    
type board={id:string,title:string}|undefined

export const mergeBoardsColumns=(board:board,columns:columns)=>{
const plainColumns:object[]=[]
columns.forEach(element => {
    plainColumns.push({
        order:element.order,
        title:element.title})
});
if(board&&columns){
return {
    id:board.id,
    title:board.title,
    columns:plainColumns
}
}
else{return undefined}
}