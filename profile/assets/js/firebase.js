import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import{
    push,
    child,
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


const firebaseConfig = {
    apiKey: "AIzaSyA77Na3M4wJAl4U6Ai1BcUtqTKHQbeTp4Q",
    authDomain: "my-portfolio-88516.firebaseapp.com",
    projectId: "my-portfolio-88516",
    storageBucket: "my-portfolio-88516.appspot.com",
    messagingSenderId: "418509522565",
    appId: "1:418509522565:web:04c3f8d44463c091324bec"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth=getAuth(app);
  const storage = getStorage();
  
  export{
      initializeApp,
      getFirestore,
      collection,
      addDoc,
      getDocs,
      doc,
      deleteDoc,
      updateDoc,
      getAuth,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      db,
      app,
      auth,
      getDownloadURL,
      ref,
      storage,
      push,
      child,
      serverTimestamp,
      uploadBytesResumable,
  }