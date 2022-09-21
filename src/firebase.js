import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEGfKD_W46qz-jCLaOADLuLXp_50M2-w0",
  authDomain: "v2calc.firebaseapp.com",
  databaseURL: "https://v2calc.firebaseio.com",
  projectId: "v2calc",
  storageBucket: "v2calc.appspot.com",
  messagingSenderId: "454016571644",
  appId: "1:454016571644:web:ac396bb4a3e9da14e75f79",
  measurementId: "G-5JGW2SKJW0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fs_db = getFirestore(app); //firestore db
const db = getDatabase(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(fs_db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log("user = " + JSON.stringify(user));
    await updateProfile(auth.currentUser, { displayName: name }).catch(
        (err) => console.log(err)
    );

    console.log("currentUser = "+ JSON.stringify(auth.currentUser.displayName))

    await addDoc(collection(fs_db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};


export {
  auth,
  db,
  fs_db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout
};