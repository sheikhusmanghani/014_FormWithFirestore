import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
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
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// ==================================================================== variabls =======================
const btn = document.getElementById("btn");
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const age = document.getElementById("age");

console.log(btn, name, email, number, age);

// ========================================================================  ===================


async function setUserData() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
