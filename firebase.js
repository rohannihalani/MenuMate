// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AsyncStorage } from "react-native";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABwIKheRUiSWg4GB87eIebKaSBBE2HN9Y",
  authDomain: "fir-auth-7827e.firebaseapp.com",
  projectId: "fir-auth-7827e",
  storageBucket: "fir-auth-7827e.appspot.com",
  messagingSenderId: "212810889783",
  appId: "1:212810889783:web:79742620a83231249a1db2",
};

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// const auth = firebase.auth();

export { auth };
