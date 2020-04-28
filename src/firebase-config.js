import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwXTCUNJ9bkjRUGIMURzk--kBdIWlecTw",
  authDomain: "redsocial-makeup.firebaseapp.com",
  databaseURL: "https://redsocial-makeup.firebaseio.com",
  projectId: "redsocial-makeup",
  storageBucket: "redsocial-makeup.appspot.com",
  messagingSenderId: "193009260546",
  appId: "1:193009260546:web:4e28f6c320edc86239af1b",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); 
const auth = firebase.auth();
export { db, firebase, auth };
