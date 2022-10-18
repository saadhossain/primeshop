// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZq7FXabiY7ghkbiKTgQVGdgISEDHJg1Y",
  authDomain: "primeshop-ed00b.firebaseapp.com",
  projectId: "primeshop-ed00b",
  storageBucket: "primeshop-ed00b.appspot.com",
  messagingSenderId: "184763473079",
  appId: "1:184763473079:web:d9b5d157b67c0981700132"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app