import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
 //placeholder for firebase config
});

const db = firebaseApp.firestore();

export default db;
