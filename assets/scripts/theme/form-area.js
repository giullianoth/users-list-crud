const formArea = (action, title, data = null) => {

    let btnAction = action;
    let form = document.createElement("div");
    form.className = "main_modal_content";

    form.innerHTML = `
        <div class="close" title="Fechar"><i class="fa-solid fa-xmark"></i></div>
        <header class="main_modal_content_title"><h2>${title}</h2></header>
        <form action="" class="main_modal_content_form j_form">
        <label for="user_name">Nome:<input type="text" name="user_name" id="user_name" autocomplete="off" value="${data ? data.user_name : ""}"><span class="message"></span></label>
        <label for="user_email">E-mail:<input type="email" name="user_email" id="user_email" autocomplete="off" value="${data ? data.user_email : ""}"><span class="message"></span></label>
        <label for="user_level">Nível:<select name="user_level" id="user_level"><option value="editor"${data && data.user_level === "editor" ? " selected" : ""}>Editor</option><option value="admin"${data && data.user_level === "admin" ? " selected" : ""}>Admin</option></select><span class="message"></span></label>
        <label for="user_status">Status:<select name="user_status" id="user_status"><option value="inactive"${data && data.user_status === "inactive" ? " selected" : ""}>Inativo</option><option value="active"${data && data.user_status === "active" ? " selected" : ""}>Ativo</option></select><span class="message"></span></label>
        <button type="submit">${btnAction}</button>
        </form>
    `;

    return form;
}

export default formArea;