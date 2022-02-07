// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvcxvTIv9x8Opr8WXYH2CzKPcs9QqZy7A",
  authDomain: "restaurant-app-react-nat-11e9b.firebaseapp.com",
  projectId: "restaurant-app-react-nat-11e9b",
  storageBucket: "restaurant-app-react-nat-11e9b.appspot.com",
  messagingSenderId: "978393088507",
  appId: "1:978393088507:web:96ff4a4fe7c48b88bd8b5e",
  measurementId: "G-ERQ3C7Q4B8"
};

// Initialize Firebase
 export const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);