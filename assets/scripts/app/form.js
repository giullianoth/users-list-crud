import { fade } from "../theme/effects.js";
import formArea from "../theme/form-area.js";
import showUsers from "../theme/show-users.js";
import { create, updt } from "./model.js";
import userList from "./user-list.js";

async function form() {

    const formCreate = document.querySelector(".j_form") ?? null;
    
    if (formCreate) {
        formCreate.addEventListener("submit", async (event) => {
            event.preventDefault();
    
            let valid = true;
            let data = {};
    
            let action = formCreate.querySelector("button").dataset.action;
            
            let nameValue = formCreate.querySelector("#user_name");
            let emailValue = formCreate.querySelector("#user_email");
            let levelValue = formCreate.querySelector("#user_level");
            let statusValue = formCreate.querySelector("#user_status");
    
            let nameMessage = nameValue.parentNode.querySelector(".message");
            let emailMessage = emailValue.parentNode.querySelector(".message");
            let levelMessage = levelValue.parentNode.querySelector(".message");
            let statusMessage = statusValue.parentNode.querySelector(".message");
    
            nameValue.classList.remove("error");
            emailValue.classList.remove("error");
            levelValue.classList.remove("error");
            statusValue.classList.remove("error");
    
            nameMessage.innerText = "";
            emailMessage.innerText = "";
            levelMessage.innerText = "";
            statusMessage.innerText = "";
    
            if (nameValue.value === "") {
                nameMessage.innerText = "Digite o nome.";
                nameValue.classList.add("error");
                valid = false;
            }
    
            if (emailValue.value === "") {
                emailMessage.innerText = "Digite o e-mail.";
                emailValue.classList.add("error");
                valid = false;
            }
    
            if (levelValue.value === "" || (levelValue.value !== "admin" && levelValue.value !== "editor")) {
                levelMessage.innerText = "Opção inválida.";
                levelValue.classList.add("error");
                valid = false;
            }
    
            if (statusValue.value === "" || (statusValue.value !== "active" && statusValue.value !== "inactive")) {
                statusMessage.innerText = "Opção inválida.";
                statusValue.classList.add("error");
                valid = false;
            }
    
            if (valid) {
    
                data.user_name = nameValue.value;
                data.user_email = emailValue.value;
                data.user_level = levelValue.value;
                data.user_status = statusValue.value;
    
                nameValue.value = "";
                emailValue.value = "";
                levelValue.value = "Editor";
                statusValue.value = "Inativo";
    
                nameValue.classList.remove("error");
                emailValue.classList.remove("error");
                levelValue.classList.remove("error");
                statusValue.classList.remove("error");
    
                if (action === "create") {
                    data.user_id = userList.length ? userList.length : 0;
                    create(data);
                } else if (action === "update") {
                    data.user_id = formCreate.querySelector("#user_id").value;
                    updt(data);
                }

                let modalWindow = document.querySelector(".j_modal");
    
                fade("out", modalWindow);
                setTimeout(() => {
                    modalWindow.innerHTML = "";
                }, 400);
    
                showUsers();
            }
        })
    }
}

export default form;