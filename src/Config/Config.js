import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9YUduazvYd414mvPgdBEEEprNFUz3pPo",
  authDomain: "todo-5fe3a.firebaseapp.com",
  projectId: "todo-5fe3a",
  storageBucket: "todo-5fe3a.appspot.com",
  messagingSenderId: "428012725282",
  appId: "1:428012725282:web:0601443a4eed9c19ee967b",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
