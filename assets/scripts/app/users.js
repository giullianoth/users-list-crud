import { create, read } from "./model.js";

const usersList = [];

const loadUsers = (data) => {
    // usersList.push(data);
}

const createUser = (data) => {
    create(data, data.user_id);
}

const users = () => {
    // loadUsers();
    // return usersList;
    console.log(read());;
}

export default users;

// {
//     user_id: !usersList.length ? 1 : usersList.length + 1,
//     user_name: "Jane Cooper",
//     user_email: "janecooper@email.com",
//     user_level: "admin",
//     user_status: "active"
// }