import { child, get, ref, set, update, remove, database } from "../firebase/connect.js";

// CREATE
const create = (data) => {
    set(ref(database, `users/${data.user_id}`), data)
        .then(() => { console.log("Success"); })
        .catch((error) => { console.log(error); })
}

// READ
const read = async () => {
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

const findById = async (id) => {
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
const updt = (data) => {
    update(ref(database, `users/${data.user_id}`), data)
        .then(() => { console.log("Success"); })
        .catch((error) => { console.log(error); })
}

// DELETE
const del = (data) => {
    remove(ref(database, `users/${data.user_id}`))
        .then(() => { console.log("Success"); })
        .catch((error) => { console.log(error); })
}

export { create, read, findById, updt, del };