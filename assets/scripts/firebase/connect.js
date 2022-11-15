// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getDatabase, ref, set, get, child, update, remove } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

let database;

try {
    (function () {
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
    
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "",
            authDomain: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: ""
        };
    
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
    })()
    database = getDatabase();
} catch (error) {
    console.error(error);
}

export { database, ref, set, get, child, update, remove };