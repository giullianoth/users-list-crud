import { del, findById, read } from "../app/model.js";
import modal from "./modal.js";
import { fade } from "./effects.js";
import showUsers from "./show-users.js";

const reorderList = async() => {
    const users = [];

    await read().then((data) => {
        data.forEach((item) => {
            users.push(item);
        })
    }).catch((error) => {
        console.log(error);
    })

    users.forEach((user, i) => {
        let reorder = {
            user_id: i,
            user_name: user.user_name,
            user_email: user.user_email,
            user_level: user.user_level,
            user_status: user.user_status
        }

        console.log(reorder);
    })

    console.log(users);
}

const deleteUser = async () => {
    const btnDeleteList = document.querySelectorAll(".j_delete_user") ?? null;
    const modalArea = document.querySelector(".j_modal");

    btnDeleteList.forEach((btn) => {
        btn.addEventListener("click", async () => {
            
            let user;
            let id = btn.dataset.id;

            await findById(id).then((data) => {
                user = data;
            })

            modalArea.innerHTML = `
                <div class="main_modal_content">
                <p>Excluir usuário ${user.user_name}?</p>
                <p><button class="confirm">Sim</button> <button class="back">Não</button></p>
                </div>
            `;
            modal();

            let btnConfirm = modalArea.querySelector(".confirm");
            let btnBack = modalArea.querySelector(".back");

            console.log(btnConfirm, btnBack);

            btnBack.addEventListener("click", () => {
                fade("out", modalArea);
                setTimeout(() => {
                    modalArea.innerHTML = "";
                }, 600);
            })

            btnConfirm.addEventListener("click", async () => {
                del(user);
                await reorderList();

                showUsers();

                fade("out", modalArea);
                setTimeout(() => {
                    modalArea.innerHTML = "";
                }, 600);
            })
        })
    })
}

export default deleteUser;