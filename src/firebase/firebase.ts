import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCPsUmd306CPH1ob07F7YWVoTQpsy0yuAM",
  authDomain: "radha-govind-dham.firebaseapp.com",
  projectId: "radha-govind-dham",
  storageBucket: "radha-govind-dham.firebasestorage.app",
  messagingSenderId: "593924517596",
  appId: "1:593924517596:web:bc95b192730d32d9d60e19"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;