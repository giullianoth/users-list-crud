const triggerArea = (content) => {
    let area = document.createElement("div");
    area.className = "main_users_content_list_empty j_empty";
    area.innerHTML = `<p>${content}</p>`;

    return area;
}

export default triggerArea;