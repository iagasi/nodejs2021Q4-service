"use strict";
const User_db_1 = require("../../database/entities/User_db");
let db = [];
const getAll = async () => await User_db_1.User_db.find();
const getById = async (id) => {
    const user = await User_db_1.User_db.findOne(id);
    return user;
};
const create = async (data_of_User) => {
    const newUser = User_db_1.User_db.create(data_of_User);
    await newUser.save();
    return newUser;
};
const modify = async (id, options) => {
    let user = await User_db_1.User_db.update({ id: id }, options);
    return await User_db_1.User_db.findOneOrFail(id);
};
const deleteUser = async (id) => {
    await User_db_1.User_db.delete({ id: id });
};
module.exports = { getAll, create, modify, deleteUser, getById };
//# sourceMappingURL=user.memory.repository.js.map