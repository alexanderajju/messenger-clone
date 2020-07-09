import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA2a6Fj9YjEJwLQe4iXql1UKCOQJN1HRYs",
  authDomain: "messenger-clone-c7f7d.firebaseapp.com",
  databaseURL: "https://messenger-clone-c7f7d.firebaseio.com",
  projectId: "messenger-clone-c7f7d",
  storageBucket: "messenger-clone-c7f7d.appspot.com",
  messagingSenderId: "110709517127",
  appId: "1:110709517127:web:fc2e66334b525f33863a62",
  measurementId: "G-P64HBXXK1F"
});

const db =firebaseApp.firestore();

export default db;
