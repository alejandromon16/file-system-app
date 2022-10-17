import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.React_App_apiKey,
//   authDomain: process.env.React_App_authDomain,
//   projectId: process.env.React_App_projectId,
//   storageBucket: process.env.React_App_storageBucket,
//   messagingSenderId: process.env.React_App_messagingSenderId,
//   appId: process.env.React_App_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAk20JGpDbOIXYLFrlwEZYEefkq7jeo8yc",
  authDomain: "file-a8e88.firebaseapp.com",
  projectId: "file-a8e88",
  storageBucket: "file-a8e88.appspot.com",
  messagingSenderId: "601796542045",
  appId: "1:601796542045:web:95c3966d141ef9e87557b4",
  measurementId: "G-VG9LRLE033"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  docs: firestore.collection("docs"),
  files: firestore.collection("files"),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();
