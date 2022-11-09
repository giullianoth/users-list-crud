import modal from "./theme/modal.js";
import showUsers from "./theme/show-users.js";
import switchTheme from "./theme/switch-theme.js";

const createBtn = document.querySelector(".j_create");

window.onload = showUsers;
switchTheme();
createBtn.addEventListener("click", modal);