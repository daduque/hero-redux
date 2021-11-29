import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {

    apiKey: "AIzaSyBNun5b_wQ_r4dE57z4qq5rvpg05faCEog",
  
    authDomain: "react-auth-firebase-f6ebf.firebaseapp.com",
  
    projectId: "react-auth-firebase-f6ebf",
  
    storageBucket: "react-auth-firebase-f6ebf.appspot.com",
  
    messagingSenderId: "754356365094",
  
    appId: "1:754356365094:web:d3dc60d7f496d1ab32c3e7"
  
  };
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export{
      firebase,
      db,
      googleAuthProvider
  }