// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa0bsJ1oS2ssQNavO9fm1_k1RRJarZ2Oc",
  authDomain: "netflix-gpt-95028.firebaseapp.com",
  projectId: "netflix-gpt-95028",
  storageBucket: "netflix-gpt-95028.appspot.com",
  messagingSenderId: "807706004854",
  appId: "1:807706004854:web:2f57ebab3e534e211f3e57",
  measurementId: "G-H0C3GFJMB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); // can also be written within the components
