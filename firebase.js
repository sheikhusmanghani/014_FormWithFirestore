import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUtz5awB6XDshCTzKUw_PWnc8ePw0pjhw",
  authDomain: "signup-in-form.firebaseapp.com",
  projectId: "signup-in-form",
  storageBucket: "signup-in-form.appspot.com",
  messagingSenderId: "433404649375",
  appId: "1:433404649375:web:ce4a6fd684b408bc0567aa",
  measurementId: "G-FFB80YSSZG",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// // Initialize Cloud Firestore
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, getDoc, app , doc};
