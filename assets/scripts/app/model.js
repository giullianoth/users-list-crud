import { child, get, ref, set, database } from "../firebase/connect.js";

// CREATE
const create = (data, id) => {
    set(ref(database, `users/${id}`), data)
        .then(() => { console.log("Success"); })
        .catch((error) => { console.log(error); })
}

// READ
async function read() {
    let data = null;
    let dbRef = ref(database);

    await get(child(dbRef, "users"))
        .then((snapshot) => {
            data = snapshot.val();
        })
        .catch((error) => {
            data = error;
        })

    return data;
}

// UPDATE

// DELETE

export { create, read };