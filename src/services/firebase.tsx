import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCd-qzrPftiyQX9xPwGuHRQ4M6eD2axmEg",
  authDomain: "compara-3318a.firebaseapp.com",
  projectId: "compara-3318a",
  storageBucket: "compara-3318a.appspot.com",
  messagingSenderId: "668480443137",
  appId: "1:668480443137:web:8bf1b35b6c0256cc750100",
  measurementId: "G-4QVHG6D891",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

export { auth, database };
