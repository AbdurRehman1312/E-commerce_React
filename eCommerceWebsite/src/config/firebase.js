import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import {} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0qHLyX8R_xiQ9Y8z11L7W9RMJQwTfT9c",
  authDomain: "ecommerce-react-d8e2a.firebaseapp.com",
  projectId: "ecommerce-react-d8e2a",
  storageBucket: "ecommerce-react-d8e2a.appspot.com",
  messagingSenderId: "461926236604",
  appId: "1:461926236604:web:97174f823775e7f0762bb9",
  measurementId: "G-FFSSHR77XG",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
