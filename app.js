import { addDoc, collection, db } from "./firebase.js";

// ==================================================================== variabls =======================
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const age = document.getElementById("age");
const courses = document.getElementById("courses");

// ==================================      adding data in firestore       =====================================

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  // Loader ko daikhana aur submit button ko hide karna
  document.getElementById("btn").style.disply = "none";
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

  // Loader ko hide karna aur submit button ko wapas dikhana
  document.getElementById("btn").style.display = "inline-block";
  document.getElementById("loader").style.display = "none";
  // for alerting the msg
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
