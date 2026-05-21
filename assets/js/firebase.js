 // Firebase Grundmodule importieren
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCxfnauuLeiCTdMja-I1URsWIjg-boXRdo",
    authDomain: "darkworld-39289.firebaseapp.com",
    projectId: "darkworld-39289",
    storageBucket: "darkworld-39289.firebasestorage.app",
    messagingSenderId: "418903434311",
    appId: "1:418903434311:web:9f56fa96471b6548427d62"
  };

 // Firebase initialisieren
export const app = initializeApp(firebaseConfig);

// Module exportieren, damit login.js, world.js, chat.js usw. sie nutzen können
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
