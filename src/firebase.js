import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1eF7oyjhGoZRTLL9DMnnIaLQQRke-drg",
  authDomain: "link-shopee-ku.firebaseapp.com",
  projectId: "link-shopee-ku",
  storageBucket: "link-shopee-ku.firebasestorage.app",
  messagingSenderId: "271595348463",
  appId: "1:271595348463:web:33f1f6e5b8bb1df2f5d61a"
};

// Gunakan getApp jika sudah diinisialisasi untuk mencegah error saat HMR / Build
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);