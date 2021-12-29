import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBLEv_WoICs8Jj1Uy1B_RbBd3OvpmEmSEo",
  authDomain: "curso-react-native-b0523.firebaseapp.com",
  databaseURL: "https://curso-react-native-b0523-default-rtdb.firebaseio.com",
  projectId: "curso-react-native-b0523",
  storageBucket: "curso-react-native-b0523.appspot.com",
  messagingSenderId: "467019056644",
  appId: "1:467019056644:web:9e5b0996d4222f84e25751",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
