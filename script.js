import { app, doc, getDoc, getDocs, collection, db } from "./firebase.js";

const box = document.querySelector(".box");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const age = document.querySelector("#age");
const course = document.querySelector("#course");

// console.log(name, course, age, email, number);
// ======================================      on click fetching data      ==============================

// Function to get all documents from a collection
// document.querySelector(".btn").addEventListener("click", async () => {
//   console.log("click hogya");
//   const querySnapshot = await getDocs(collection(db, "users"));

//   const data = querySnapshot.docs.map((doc) => ({
//     age: doc.age,
//     id: doc.id,
//     ...doc.data(),
//   }));
//   // console.log(...data);
//   // box.innerHTML = data[1].name;
//   return data;
// });

// ======
//   const querySnapshot
//   const docRef = doc(db, "users");
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data : ", docSnap.data());
//   } else {
//     // docSnap.data() will be undefined in this case
//     console.log("No such document ! ");
//   }
//
// Function to get all documents from a collection
// async function getCollectionData(users) {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   const data = querySnapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
//   return data;
// }
//  // console.log(data);

// Function to get a single document by its ID

// async function getDocumentData(collectionName, docId) {
//   const docRef = doc(db, collectionName, docId);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     return { id: docSnap.id, ...docSnap.data() };
//   } else {
//     console.log("No such document!");
//     return null;
//   }
// }
