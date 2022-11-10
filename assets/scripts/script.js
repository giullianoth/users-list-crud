import showUsers from "./theme/show-users.js";
import switchTheme from "./theme/switch-theme.js";

window.addEventListener("load", (event) => {
    showUsers();
    window.removeEventListener("click", showUsers);
});
switchTheme();