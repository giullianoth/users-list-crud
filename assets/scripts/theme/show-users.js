import users from "../app/users.js";

const usersListArea = document.querySelector(".j_list");
const createBtn = document.querySelector(".j_create");

const createEmptyArea = () => {
    let empty = document.createElement("div");
    empty.className = "main_users_content_list_empty j_empty";
    empty.innerHTML = "<p>Não há usuários cadastrados.</p>";

    return empty;
}

const createUserElement = (data) => {
    let user = document.createElement("div");
    user.className = "main_users_content_list_user";

    let user_level = data.user_level === "admin" ? "Admin" : "Editor";
    let user_status = data.user_status === "active" ? "Ativo" : "Inativo";

    user.innerHTML = `
        <p class="main_users_content_list_user_select"><input type="checkbox" name="select_${data.user_id}" id="select" title="Selecionar este usuário"></p>
        <p class="main_users_content_list_user_photo"><img src="assets/images/upload/user.png" alt="user"></p>
        <div class="main_users_content_list_user_info"><p class="main_users_content_list_user_info_name">${data.user_name}</p><p class="main_users_content_list_user_info_email">${data.user_email}</p></div>
        <p class="main_users_content_list_user_level">${user_level}</p>
        <p class="main_users_content_list_user_status active"><button><i class="fa-solid fa-circle"></i> ${user_status}</button></p>
        <p class="main_users_content_list_user_actions"><button class="edit" title="Editar este usuário"><i class="fa-solid fa-pencil"></i></button><button class="delete" title="Excluir este usuário"><i class="fa-solid fa-trash-can"></i></button></p>
    `;

    return user;
}

const showUsers = () => {
    let usersList = /*users()*/[];
    let emptyArea = document.querySelector(".j_empty");

    if (usersList.length) {
        if (emptyArea) {
            emptyArea.remove();
        }

        usersList.forEach((user) => {
            usersListArea.appendChild(createUserElement(user));
        })
    } else {
        usersListArea.appendChild(createEmptyArea());
    }

    users();
}

export default showUsers;