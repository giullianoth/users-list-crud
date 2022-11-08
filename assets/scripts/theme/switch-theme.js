const switchArea = document.querySelector(".j_switch");
const switchBtn = switchArea.querySelector(".switch");
const switchIcon = switchBtn.querySelector("i");

const switchCard = document.querySelector(".j_card");
const switchCardImage = switchCard.querySelector(".img");

const body = document.body;

const changeImage = () => {
    let imageCard = body.classList.contains("dark_theme") ? "cant-see.gif" : "my-eyes.gif";
    let titleCard = body.classList.contains("dark_theme") ? "Muito escuro? Mude para o tema claro." : "Muito claro? Mude para o tema escuro.";

    switchArea.setAttribute("title", titleCard);
    switchCardImage.style.backgroundImage = `url("assets/images/${imageCard}")`;
}

const switchTheme = () => {

    switchArea.addEventListener("mouseenter", () => {
        switchCard.style.display = "block";
        changeImage();
    });

    switchArea.addEventListener("click", () => {
        body.classList.toggle("dark_theme");
        switchBtn.classList.toggle("active");

        if (body.classList.contains("dark_theme")) {
            switchIcon.classList.remove("fa-moon");
            switchIcon.classList.add("fa-sun");
        } else {
            switchIcon.classList.remove("fa-sun");
            switchIcon.classList.add("fa-moon");
        }

        changeImage();
    })

    switchArea.addEventListener("mouseleave", () => {
        switchCard.style.display = "";
    })
}

export default switchTheme;