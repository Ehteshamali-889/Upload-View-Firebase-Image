// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1UOQcmCocdRZ35nQ9kpvC6TNKkBATZSc",
  authDomain: "upload-image-and-view-react.firebaseapp.com",
  projectId: "upload-image-and-view-react",
  storageBucket: "upload-image-and-view-react.appspot.com",
  messagingSenderId: "652510793426",
  appId: "1:652510793426:web:b4f3b1a08387e69cf9670b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);