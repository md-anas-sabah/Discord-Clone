import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWYhZbqAgR_j0Z1V0HXiO-qHuVCD4SAeQ",
  authDomain: "discord-clone-c9673.firebaseapp.com",
  projectId: "discord-clone-c9673",
  storageBucket: "discord-clone-c9673.appspot.com",
  messagingSenderId: "695475224177",
  appId: "1:695475224177:web:135dd8c97457aad9ee25d0",
  measurementId: "G-XLBR77Z5N6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
