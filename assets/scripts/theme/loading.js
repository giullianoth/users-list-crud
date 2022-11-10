const loadingScreen = () => {

    let loadScreen = document.createElement("div");
    loadScreen.className = "loading";

    loadScreen.innerHTML = `
        <div class="loading_bar bar_1"></div>
        <div class="loading_bar bar_2"></div>
        <div class="loading_bar bar_3"></div>
    `;


    return loadScreen;
}

export default loadingScreen;