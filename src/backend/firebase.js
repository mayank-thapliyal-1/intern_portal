import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "charity-442c8.firebaseapp.com",
  projectId: "charity-442c8",
  storageBucket: "charity-442c8.firebasestorage.app",
  messagingSenderId: "274809083854",
  appId: "1:274809083854:web:9a4dbe5defb566c5307d9f",
  measurementId: "G-FDLPZ27JQ3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
