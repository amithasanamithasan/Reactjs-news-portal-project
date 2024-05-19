// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMdErCNWu2YbXW2LG41Fi0NzsXbSVALws",
  authDomain: "reactjs-news-portal-project.firebaseapp.com",
  projectId: "reactjs-news-portal-project",
  storageBucket: "reactjs-news-portal-project.appspot.com",
  messagingSenderId: "460670219809",
  appId: "1:460670219809:web:5871d666a870182b991560"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export default app;