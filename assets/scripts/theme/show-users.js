import { read } from "../app/model.js";
import userList from "../app/user-list.js";
import formArea from "./form-area.js";
import modal from "./modal.js";
import triggerArea from "./trigger-area.js";

const usersListArea = document.querySelector(".j_list");
const modalArea = document.querySelector(".j_modal");
const createBtn = document.querySelector(".j_create");

const createUserElement = (data) => {
    let user = document.createElement("div");
    user.className = "main_users_content_list_user";

    let user_level = data.user_level === "admin" ? "Admin" : "Editor";
    let user_status = data.user_status === "active" ? "Ativo" : "Inativo";
    let userStatusClass = data.user_status === "active" ? "main_users_content_list_user_status active" : "main_users_content_list_user_status";

    user.innerHTML = `
        <p class="main_users_content_list_user_select"><input type="checkbox" name="select_${data.user_id}" id="select" title="Selecionar este usuário"></p>
        <p class="main_users_content_list_user_photo"><img src="assets/images/upload/user.png" alt="user"></p>
        <div class="main_users_content_list_user_info"><p class="main_users_content_list_user_info_name">${data.user_name}</p><p class="main_users_content_list_user_info_email">${data.user_email}</p></div>
        <p class="main_users_content_list_user_level">${user_level}</p>
        <p class="${userStatusClass}"><button><i class="fa-solid fa-circle"></i> ${user_status}</button></p>
        <p class="main_users_content_list_user_actions"><button class="edit" title="Editar este usuário"><i class="fa-solid fa-pencil"></i></button><button class="delete" title="Excluir este usuário"><i class="fa-solid fa-trash-can"></i></button></p>
    `;

    return user;
}

async function showUsers() {
    createBtn.addEventListener("click", () => {
        modalArea.append(formArea("Cadastrar"));
        modal();
    });

    let emptyArea = document.querySelector(".j_empty");

    usersListArea.innerHTML = "";

    while (userList.length) {
        userList.pop();
    }

    await read().then((data) => {
        data.forEach((item) => {
            userList.push(item);
        })
    })

    if (userList.length) {
        if (emptyArea) {
            emptyArea.remove();
        }

        userList.forEach((user) => {
            usersListArea.appendChild(createUserElement(user));
        })
    } else {
        usersListArea.appendChild(triggerArea("Não há usuários cadastrados."));
    }
}

export default showUsers;