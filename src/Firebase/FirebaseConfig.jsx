// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALpLTUCqPzw9US9URneLSV6Wpnfj8xMMU",
  authDomain: "myshowz.firebaseapp.com",
  projectId: "myshowz",
  storageBucket: "myshowz.appspot.com",
  messagingSenderId: "489563530356",
  appId: "1:489563530356:web:cc582604133be2eaa25d21"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export {db,auth}