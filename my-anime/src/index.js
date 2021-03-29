import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAYeSMhLw2vsGLtJm4z6aDyg5Pmw9AS7v8",
  authDomain: "myanime-5f2d0.firebaseapp.com",
  databaseURL:
    "https://myanime-5f2d0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myanime-5f2d0",
  storageBucket: "myanime-5f2d0.appspot.com",
  messagingSenderId: "58887361162",
  appId: "1:58887361162:web:232ca4507a23d735009373",
  measurementId: "G-WD4Q61KDJ9",
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
