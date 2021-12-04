
// const User=require("./src/resources/users/user.model")

// const y=new User({name:"gell"})
// console.log(y);

let db=[{name:"asa",id:12}]


//db.filter(user=>user.id===2)
const y=db.filter((user)=>user.id!==12||user.name!=="aa")
console.log(y);