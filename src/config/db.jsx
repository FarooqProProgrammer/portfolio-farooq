
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBscaJPeSlBD07NwCkV8DXd1xP-xP4LL9E",
    authDomain: "fir-d3ed8.firebaseapp.com",
    projectId: "fir-d3ed8",
    storageBucket: "fir-d3ed8.appspot.com",
    messagingSenderId: "468709646026",
    appId: "1:468709646026:web:112095ed71a9b95f28de33"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);