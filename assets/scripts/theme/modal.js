import { fade } from "./effects.js";

const modal = () => {

    const modalWindow = document.querySelector(".j_modal");
    const btnClose = modalWindow.querySelector(".close") ?? null;

    fade("in", modalWindow, "flex");

    if (btnClose) {
        btnClose.addEventListener("click", () => {
            fade("out", modalWindow);
            setTimeout(() => {
                modalWindow.innerHTML = "";
            }, 400);
        })
    }
}

export default modal;