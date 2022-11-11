import { read } from "../app/model.js";
import userList from "../app/user-list.js";
import deleteUser from "./delete-user.js";
import formArea from "./form-area.js";
import modal from "./modal.js";
import triggerArea from "./trigger-area.js";
import updateUser from "./update-user.js";
import form from "../app/form.js";
import loadingScreen from "./loading.js";
import createUser from "./create-user.js";
import selectUser from "./select-user.js";
import { fade, slide } from "./effects.js";

const usersListArea = document.querySelector(".j_list");
const createBtn = document.querySelector(".j_create");

const createUserElement = (data) => {
    let user = document.createElement("div");
    user.className = "main_users_content_list_user";

    let user_level = data.user_level === "admin" ? "Admin" : "Editor";
    let user_status = data.user_status === "active" ? "Ativo" : "Inativo";
    let userStatusClass = data.user_status === "active" ? "main_users_content_list_user_status active" : "main_users_content_list_user_status";

    user.innerHTML = `
        <p class="main_users_content_list_user_select"><input type="checkbox" name="select_${data.user_id}" id="select_${data.user_id}" data-id="${data.user_id}" title="Selecionar este usuário" class="j_select"></p>
        <p class="main_users_content_list_user_photo"><img src="assets/images/upload/user.png" alt="user"></p>
        <div class="main_users_content_list_user_info"><p class="main_users_content_list_user_info_name">${data.user_name}</p><p class="main_users_content_list_user_info_email">${data.user_email}</p></div>
        <p class="main_users_content_list_user_level">${user_level}</p>
        <p class="${userStatusClass}"><button><i class="fa-solid fa-circle"></i> ${user_status}</button></p>
        <p class="main_users_content_list_user_actions"><button class="edit j_edit_user" title="Editar este usuário" data-id="${data.user_id}"><i class="fa-solid fa-pencil"></i></button><button class="delete j_delete_user" title="Excluir este usuário" data-id="${data.user_id}"><i class="fa-solid fa-trash-can"></i></button></p>
    `;

    return user;
}

const showUsers = async () => {

    let emptyArea = document.querySelector(".j_empty");
    let countArea = document.querySelector(".j_count");

    usersListArea.innerHTML = triggerArea(loadingScreen().outerHTML).outerHTML;

    while (userList.length) {
        userList.pop();
    }

    createBtn.addEventListener("click", createUser);

    await read().then((data) => {
        data.forEach((item) => {
            userList.push(item);
        })
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        fade("out", usersListArea.querySelector(".loading").parentNode)
        setTimeout(() => {
            usersListArea.querySelector(".loading").parentNode.remove();
        }, 400);
    })

    if (userList.length) {
        if (emptyArea) {
            emptyArea.remove();
        }

        userList.forEach((user) => {
            let userElement = createUserElement(user);
            usersListArea.appendChild(userElement);
            slide("down", userElement, "flex");
        })
    } else {
        usersListArea.appendChild(triggerArea("Não há usuários cadastrados."));
    }

    countArea.innerText = userList.length === 0
        ? "Vazio"
        : `${userList.length} ${userList.length > 1 ? "usuários" : "usuário"}`;

    selectUser();
    updateUser();
    deleteUser();
}

export default showUsers;