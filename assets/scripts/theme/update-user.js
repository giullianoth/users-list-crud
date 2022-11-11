import form from "../app/form.js";
import { findById } from "../app/model.js";
import formArea from "./form-area.js";
import modal from "./modal.js";

const updateUser = async () => {
    const btnUpdateList = document.querySelectorAll(".j_edit_user") ?? null;
    const modalArea = document.querySelector(".j_modal");

    if (btnUpdateList) {
        btnUpdateList.forEach((btn) => {

            btn.addEventListener("click", async () => {
            
                let user;
                let id = btn.dataset.id;
    
                await findById(id).then((data) => {
                    user = data;
                })

                modalArea.append(formArea("update", `Atualizar perfil de ${user.user_name}`, user));
                modal();
                form();
            })
        })
    }
}

export default updateUser;