import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
export const auth = getAuth(app);
export default app;