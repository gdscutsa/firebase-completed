// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'gdscutsa-firebase-example.firebaseapp.com',
  projectId: 'gdscutsa-firebase-example',
  storageBucket: 'gdscutsa-firebase-example.appspot.com',
  messagingSenderId: '261925426821',
  appId: '1:261925426821:web:e9fe02d22963c2fe1ebbec',
  measurementId: 'G-DPJR6K0VQT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const signInWithGoogle = async () => {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY);
  try {
    const res = await signInWithPopup(auth, googleProvider);
    let user = res.user;
    console.log(user);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = () => {
  signOut(auth);
};
