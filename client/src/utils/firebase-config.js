// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyC1Hf0_rdWLBzDPJPcO9CJN4y6M6-EgKH4",
//   authDomain: "react-auth-6788d.firebaseapp.com",
//   projectId: "react-auth-6788d",
//   storageBucket: "react-auth-6788d.appspot.com",
//   messagingSenderId: "131797845021",
//   appId: "1:131797845021:web:3f7ff4766e2b89ca5d32f4",
//   measurementId: "G-VWPBR1NSLL",
// };

// const app = initializeApp(firebaseConfig);
// export const firebaseAuth = getAuth(app);


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC4q5vlO1oixxCwysCFA_S-NZx6Aaagf-s",
    authDomain: "netflix---clone-67534.firebaseapp.com",
    projectId: "netflix---clone-67534",
    storageBucket: "netflix---clone-67534.appspot.com",
    messagingSenderId: "218357432182",
    appId: "1:218357432182:web:3e2ec76174cf5c26db4457",
    measurementId: "G-L21QK5CFZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);