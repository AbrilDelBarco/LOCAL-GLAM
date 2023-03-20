// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCMbNVMGKDWAtA9HHEevaQat_SYZZZt2cE",
  authDomain: "tienda-glam.firebaseapp.com",
  projectId: "tienda-glam",
  storageBucket: "tienda-glam.appspot.com",
  messagingSenderId: "69684464054",
  appId: "1:69684464054:web:743ceae197c7e6d05b9917"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = ( )=> app