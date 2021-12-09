const db = [];

const getAll =()=>db



const create = (data) => db.push(data);



const modify =  (id, options) => {
  const modifiedUser=db.find((user, index) => {
let moddedUSER
    if (user.id === id) {
      if (options.age) {
        db[index].age =  options.age;
      }
      if (options.name) {
       db[index].name = options.name;
      }
      if (options.password) {
        db[index].password = options.password;
      }
      if (options.login) {
        db[index].login = options.login;
      }
      
 
   moddedUSER=user
    
    }
return moddedUSER


  });
 return modifiedUser

};

const deleteUser=(id)=>{
db.filter(user=>user.id===!id)

}


module.exports = { getAll, create ,modify,deleteUser};


