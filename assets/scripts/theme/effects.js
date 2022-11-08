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
        }, timeAnimation);
        
    } else {
        element.style.transition = "";
        console.error(`Error: Mode ${mode} is not compatible to fade.`);
    }
}

export { fade };