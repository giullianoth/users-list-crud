const selectCount = (data) => {

    let selectArea = document.querySelector(".j_select_all_area");
    let count = 0;

    data.forEach((item) => {
        if (item.classList.contains("selected")) {
            count += 1;
        }
    })

    if (count >= 1) {
        selectArea.innerText = `${count} ${count > 1 ? "selecionados" : "selecionado"}`;
    } else {
        selectArea.innerText = "Selecionar todos";
    }
}

const selectUser = () => {
    const usersListArea = document.querySelector(".j_list");
    const selectInputs = document.querySelectorAll(".j_select");
    const selectInputAll = document.querySelector(".j_select_all");

    selectInputs.forEach((select, index) => {
        select.addEventListener("click", () => {
            let users = usersListArea.childNodes;
            
            if (select.checked) {
                users[index].classList.add("selected");
            } else {
                users[index].classList.remove("selected");
            }

            selectCount(users);
        })
    })

    selectInputAll.addEventListener("click", () => {
        let users = usersListArea.childNodes;

        users.forEach((user) => {
            if (selectInputAll.checked) {
                user.classList.add("selected");
                user.querySelector(".j_select").checked = true;
            } else {
                user.classList.remove("selected");
                user.querySelector(".j_select").checked = false;
            }
        })

        selectCount(users);
    })
}

export default selectUser;