import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//Initialize firebase
var Config = {
  apiKey: "AIzaSyAu7U6sRw6JzBa_P-KkSntB4_9fRyDY2dw",
  authDomain: "redux-market-34962.firebaseapp.com",
  databaseURL: "https://redux-market-34962.firebaseio.com",
  projectId: "redux-market-34962",
  storageBucket: "redux-market-34962.appspot.com",
  messagingSenderId: "814624506446",
  appId: "1:814624506446:web:0855085e41a1ff0d96f91f",
  measurementId: "G-YQZ7VQ8L28",
};
// Initialize Firebase
firebase.initializeApp(Config);

firebase.firestore();

export default firebase;
