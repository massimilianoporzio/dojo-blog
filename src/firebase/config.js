import firebase from "firebase/app";
import { getFirestore } from "firebase/firestore"



import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA9uLReR5810uHh-Z1RyyeVKOz93inj6aY",
    authDomain: "vue-udemy-firebase-projects.firebaseapp.com",
    projectId: "vue-udemy-firebase-projects",
    storageBucket: "vue-udemy-firebase-projects.appspot.com",
    messagingSenderId: "711673233375",
    appId: "1:711673233375:web:f8bf6ff80fc908a1c30e6a"
};

//init firebase
initializeApp(firebaseConfig)

//init firestore
const projectFirestore = getFirestore(); //my "db"
export {projectFirestore}
