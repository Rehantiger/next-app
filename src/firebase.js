





import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBHw-QUemplUD_ugi-jtAskfrjchkKkGs0",
    authDomain: "next-app-ec1dd.firebaseapp.com",
    projectId: "next-app-ec1dd",
    storageBucket: "next-app-ec1dd.appspot.com",
    messagingSenderId: "854451583301",
    appId: "1:854451583301:web:6d667b97d588ec5d30262c",
    measurementId: "G-54YS9Z4BG8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
