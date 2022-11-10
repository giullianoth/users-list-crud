import { child, get, ref, set, database } from "../firebase/connect.js";

// CREATE
const create = (data) => {
    set(ref(database, `users/${data.user_id}`), data)
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

async function findById(id) {
    let data = null;
    let dbRef = ref(database);

    await get(child(dbRef, `users/${id}`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                data = snapshot.val();
            }
        })
        .catch((error) => {
            data = error;
        })

    return data;
}

// UPDATE
const update = (data) => {
    set(ref(database, `users/${data.user_id}`), data)
        .then(() => { console.log("Success"); })
        .catch((error) => { console.log(error); })
}

// DELETE

export { create, read, findById, update };