const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const create=(data)=>usersRepo.create(data)
const modify=(id,options)=>usersRepo.modify(id,options)
const deleteUser=(id)=>usersRepo.deleteUser(id)
module.exports = { getAll,create ,modify,deleteUser};
