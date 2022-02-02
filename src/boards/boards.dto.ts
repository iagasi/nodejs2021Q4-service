export class BoardDto{
    readonly id:string;
    readonly title:string
    readonly columns:Array<{title:string,order:number}> 
}