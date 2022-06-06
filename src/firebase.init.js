// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain ,
//   projectId: process.env.REACT_APP_projectId ,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };


const firebaseConfig = {
  apiKey: "AIzaSyDlAAHhCYRPpyooPMcZdgGwbeTNXjbTUpQ",
  authDomain: "bogura-ac-corner.firebaseapp.com",
  projectId: "bogura-ac-corner",
  storageBucket: "bogura-ac-corner.appspot.com",
  messagingSenderId: "749218020840",
  appId: "1:749218020840:web:5c2a9e69a0c480d0feb85d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;