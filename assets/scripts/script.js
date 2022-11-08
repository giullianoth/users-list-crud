import modal from "./theme/modal.js";
import showUsers from "./theme/show-users.js";
import switchTheme from "./theme/switch-theme.js";

window.addEventListener("load", showUsers);

switchTheme();

document.querySelector(".j_create").addEventListener("click", modal);