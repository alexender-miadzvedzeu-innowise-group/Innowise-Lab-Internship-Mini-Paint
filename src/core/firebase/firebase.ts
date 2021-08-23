import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoLqxNBQknN7yi-XySmAjMju9AC8Lm4f4",
  authDomain: "mini-paint-f6330.firebaseapp.com",
  projectId: "mini-paint-f6330",
  storageBucket: "mini-paint-f6330.appspot.com",
  messagingSenderId: "119099483352",
  appId: "1:119099483352:web:a0f462457e4b521adf63ad"
};
console.log(process.env);
firebase.initializeApp(firebaseConfig);

export default firebase;