// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGYUdUuyBcaty7lqsy2OKDg8un6Hv76rU",
  authDomain: "the-news-dragon-12687.firebaseapp.com",
  projectId: "the-news-dragon-12687",
  storageBucket: "the-news-dragon-12687.appspot.com",
  messagingSenderId: "795568158658",
  appId: "1:795568158658:web:a78629d2042fd051c8485b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app