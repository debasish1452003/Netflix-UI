import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcxZnscB1MdqS75AZ6h1tmXLqZ6Lm2ttE",
  authDomain: "react-netflix-c6ba3.firebaseapp.com",
  projectId: "react-netflix-c6ba3",
  storageBucket: "react-netflix-c6ba3.appspot.com",
  messagingSenderId: "352908878950",
  appId: "1:352908878950:web:38077f51ab6d49d343b9a7",
  measurementId: "G-DD8NKWLJXE",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
