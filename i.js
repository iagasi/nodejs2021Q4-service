
// const User=require("./src/resources/users/user.model")

// const y=new User({name:"gell"})
// console.log(y);

// let TASKS=[  {
//      id: 'fa39a339-2840-4bb6-83a6-6cb9bd18845b',
//       title: 'Autotest task',
//         order: 0,
//       description: 'Lorem ipsum',
//         userId: null,
//        boardId: 'c5a623d4-b06d-426a-ab64-53bdc5aa29c5',
//        columnId: null
//     },{name:"asasa"}]
// const BOARDID='c5a623d4-b06d-426a-ab64-53bdc5aa29c5'
//     TASKS=TASKS.filter(el=>el.boardId!==BOARDID)
// // else{console.log("not found");}
// // console.log(i);
// // console.log(db);
// console.log(TASKS);


const users=[{id:1},{id:1}]
const id=1

const newCreatedUser =  users.find((user) => user.id === id);
console.log(newCreatedUser);