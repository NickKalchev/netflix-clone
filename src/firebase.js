import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAla3xqfVAWqwx4EIYmo6pBNHUL18KAB8Y",
  authDomain: "netflix-nick.firebaseapp.com",
  projectId: "netflix-nick",
  storageBucket: "netflix-nick.appspot.com",
  messagingSenderId: "622869663352",
  appId: "1:622869663352:web:2c4ef80c1af222e0ed678d",
  measurementId: "G-GL5WC2CKLL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
