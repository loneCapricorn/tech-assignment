import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCdXvwVo_KAEJj-QV4EvyOJQ3sSwB4ZSs",
  authDomain: "tech-assignment-8c7aa.firebaseapp.com",
  projectId: "tech-assignment-8c7aa",
  storageBucket: "tech-assignment-8c7aa.appspot.com",
  messagingSenderId: "16928893138",
  appId: "1:16928893138:web:3da11385b0e0c6d995650b",
  databaseURL:
    "https://tech-assignment-8c7aa-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };
