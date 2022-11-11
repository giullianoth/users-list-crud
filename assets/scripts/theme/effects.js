const timeAnimation = 400;
const timeResp = 100;

const transition = () => `all ${timeAnimation / 1000}s ease 0s`;

const fade = (mode, element, displayElement = "block") => {

    element.style.transition = transition();

    if (mode === "in") {

        element.style.display = displayElement;
        element.style.opacity = "0";

        setTimeout(() => {

            element.style.opacity = "";

            setTimeout(() => {
                element.style.transition = "";
            }, timeResp * 2);

        }, timeResp);

    } else if (mode === "out") {

        element.style.opacity = "0";

        setTimeout(() => {
            element.style.transition = "";
            element.style.display = "";
            element.style.opacity = "";
        }, timeAnimation);

    } else {
        element.style.transition = "";
        console.error(`Error: Mode ${mode} is not compatible to fade.`);
    }
}

const slide = (mode, element, displayElement = "block") => {

    element.style.transition = transition();

    if (mode === "down") {

        element.style.display = displayElement;
        element.style.maxHeight = "0";
        element.style.paddingTop = "0";
        element.style.paddingBottom = "0";

        setTimeout(() => {

            element.style.maxHeight = "";
            element.style.paddingTop = "";
            element.style.paddingBottom = "";

            setTimeout(() => {
                element.style.transition = "";
            }, timeResp * 2);

        }, timeResp);

    } else if (mode === "up") {

        element.style.maxHeight = "0";
        element.style.paddingTop = "0";
        element.style.paddingBottom = "0";

        setTimeout(() => {
            element.style.transition = "";
            element.style.display = "";
            element.style.maxHeight = "";
            element.style.paddingTop = "";
            element.style.paddingBottom = "";
        }, timeAnimation);

    } else {
        element.style.transition = "";
        console.error(`Error: Mode ${mode} is not compatible to slide.`);
    }
}

export { fade, slide };