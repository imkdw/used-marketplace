import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/config";

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
