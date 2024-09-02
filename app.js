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
// // Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// // Firebase app initialize karen
// const app = firebase.initializeApp(firebaseConfig);
// // Firestore instance ko initialize karen
// const db = firebase.firestore();
// ==================================================================== variabls =======================
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const age = document.getElementById("age");
const courses = document.getElementById("courses");

// console.log(name.value, email.value, number.value, age.value, courses.value, db);

// ==================================      adding data in firestore       =====================================

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  // Loader ko dikhana aur submit button ko hide karna
  document.getElementById("btn").style.display = "none";
  document.getElementById("loader").style.display = "inline-block";

  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name.value,
      email: email.value,
      number: number.value,
      age: age.value,
      course: courses.value,
    });
    console.log("User ID: ", docRef.id);
  } catch (e) {
    console.error("Error : ", e);
  }
  // -----------------
  // Loader ko hide karna aur submit button ko wapas dikhana
  document.getElementById("btn").style.display = "inline-block";
  document.getElementById("loader").style.display = "none";
  // for alert
  Toastify({
    text: "Your Data has been saved !!",
    duration: 3000,
    position: "center",
    style: {
      background: "linear-gradient(to  top, #357068, #a8d0e0)",
      borderRadius: "8px",
    },
  }).showToast();
  // for  empty fields
  document.getElementById("form").reset();
});

// ==================================      getting data in firestore       =====================================
