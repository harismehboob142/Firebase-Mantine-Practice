import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAvV-XIekJ1XvnuhgU40lhsjP7-uLpwRS8",
    authDomain: "office-7b254.firebaseapp.com",
    projectId: "office-7b254",
    storageBucket: "office-7b254.appspot.com",
    messagingSenderId: "550079742474",
    appId: "1:550079742474:web:3806132494f267cf1e55f3",
    measurementId: "G-4YD5BX1SZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// initialize firestore
export const db = getFirestore(app)