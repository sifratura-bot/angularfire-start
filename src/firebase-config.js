// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOiLi4XtCP0-Xn4deC-bfznxN5DTm5VOI",
  authDomain: "friendlychat-fd9d3.firebaseapp.com",
  projectId: "friendlychat-fd9d3",
  storageBucket: "friendlychat-fd9d3.firebasestorage.app",
  messagingSenderId: "1052782044517",
  appId: "1:1052782044517:web:5e825560b89936ddb92d8c",
  measurementId: "G-53JT772WQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
