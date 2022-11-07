import { fade } from "./effects.js";

const modalWindow = document.querySelector(".j_modal");
const btnClose = modalWindow.querySelector(".close");

const modal = () => {

    fade("in", modalWindow, "flex");

    btnClose.addEventListener("click", () => {
        fade("out", modalWindow);
    })
}

export default modal;