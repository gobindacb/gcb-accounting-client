// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


// apiKey: "AIzaSyBR6sREI3Gi5ZLPMhG6iLX1Nv4puVs_8QI",
// authDomain: "gcb-accounting.firebaseapp.com",
// projectId: "gcb-accounting",
// storageBucket: "gcb-accounting.appspot.com",
// messagingSenderId: "61915509316",
// appId: "1:61915509316:web:7a1661fdf5376ef9918211"