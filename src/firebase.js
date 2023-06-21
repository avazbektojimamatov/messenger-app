import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCtJQNRaVWk-VUgoIslbzY6veftztg3L80",
  authDomain: "chat-d9483.firebaseapp.com",
  projectId: "chat-d9483",
  storageBucket: "chat-d9483.appspot.com",
  messagingSenderId: "742395240228",
  appId: "1:742395240228:web:78fa6d206976c7a329ddb1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
