import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPSh3eQjMYLzjS0bH9DQF-sbSs1_Wz-xM",
  authDomain: "rotport-d7a39.firebaseapp.com",
  projectId: "rotport-d7a39",
  storageBucket: "rotport-d7a39.appspot.com",
  messagingSenderId: "57768781647",
  appId: "1:57768781647:web:de41634012efcffaf0873a",
  measurementId: "G-W5G14S2GN5"
};

let firebaseApp;

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(firebaseConfig)
} else {
  firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };