import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  
        apiKey: "AIzaSyDzbMfdxATFVU7ub3kD0wIbmUsic4lihGQ",
        authDomain: "messenger-clone-e88cd.firebaseapp.com",
        databaseURL: "https://messenger-clone-e88cd.firebaseio.com",
        projectId: "messenger-clone-e88cd",
        storageBucket: "messenger-clone-e88cd.appspot.com",
        messagingSenderId: "136614703128",
        appId: "1:136614703128:web:5ecb2ebe2033739ce6536d",
        measurementId: "G-YMW2PLY2R3"
      
});

const db =firebaseApp.firestore();

export default db;