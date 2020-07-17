import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBO1Czdbjth-MuLN5q_bSjjRil-Mmv5fDU",
  authDomain: "clone-98559.firebaseapp.com",
  databaseURL: "https://clone-98559.firebaseio.com",
  projectId: "clone-98559",
  storageBucket: "clone-98559.appspot.com",
  messagingSenderId: "532047412523",
  appId: "1:532047412523:web:7d1e785453dd51e669d96e",
  measurementId: "G-67X19ZL1YB"
});

const auth = firebase.auth();

export { auth }