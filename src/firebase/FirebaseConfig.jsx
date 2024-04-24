import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC9wW-KNJzhWHhvMFqTTIpcOKgL99NZrtw",
    authDomain: "cosmic-blacksale.firebaseapp.com",
    databaseURL: "https://cosmic-blacksale-default-rtdb.firebaseio.com",
    projectId: "cosmic-blacksale",
    storageBucket: "cosmic-blacksale.appspot.com",
    messagingSenderId: "934057014053",
    appId: "1:934057014053:web:af40b8a41f5ced393c20cc",
    measurementId: "G-ZCL2LYJNLV"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const fireDB = getFirestore(app);
  const auth = getAuth(app)
  export {fireDB,auth } ;