import form from "../app/form.js";
import formArea from "./form-area.js";
import modal from "./modal.js";

const createUser = () => {
    const modalArea = document.querySelector(".j_modal");

    modalArea.append(formArea("create", "Novo usuário"));
    modal();
    form();
}

export default createUser;