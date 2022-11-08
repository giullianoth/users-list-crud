import { fade } from "../theme/effects.js";
import { create } from "./model.js";

const formCreate = document.querySelector(".j_form");
const modalWindow = document.querySelector(".j_modal");

const form = () => {
    formCreate.addEventListener("submit", (event) => {
        event.preventDefault();

        let valid = true;
        let data = {};

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
            data.user_id = 2,
            data.user_name = nameValue.value;
            data.user_email = emailValue.value;
            data.user_level = levelValue.value;
            data.user_status = statusValue.value;

            create(data, 2);
            fade("out", modalWindow);
        }

        console.log(data);
    })
}

export default form;