import form from "../app/form.js";
import { fade } from "./effects.js";

const modal = () => {

    const modalWindow = document.querySelector(".j_modal");
    const btnClose = modalWindow.querySelector(".close");

    fade("in", modalWindow, "flex");

    btnClose.addEventListener("click", () => {
        fade("out", modalWindow);
        setTimeout(() => {
            modalWindow.innerHTML = "";
        }, 600);
    })
    
    form();
}

export default modal;