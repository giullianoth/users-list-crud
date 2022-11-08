import { child, get, ref, set, onValue, getDatabase } from "../firebase/connect.js";

const database = getDatabase();

// CREATE
const create = (data, id) => {
    set(ref(database, `users/${id}`), data)
        .then(() => { console.log("Success"); })
        .catch((error) => { console.log(error); })
}

// READ
const read = () => {
    let dbRef = ref(database);

    get(child(dbRef, "users"))
        .then((snapshot) => {
            return snapshot.toJSON();
        })
        .catch((error) => {
            return error;
        })
}
// UPDATE

// DELETE

export { create, read };