import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDrPPrxNdo-LItM79Rz6MNWmeJbsQ2fxbw",
  authDomain: "anime-aac6e.firebaseapp.com",
  projectId: "anime-aac6e",
  storageBucket: "anime-aac6e.appspot.com",
  messagingSenderId: "398506808340",
  appId: "1:398506808340:web:ef164bd12bd7ea254e4301",
  measurementId: "G-R6WV5VLXZ1"
});

export const Context = createContext(null); //Создание контекста с помощью хука

const auth = firebase.auth(); 
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider  // Прокидываем значения в Контекст
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
