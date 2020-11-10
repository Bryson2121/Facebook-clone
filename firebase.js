import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDfLGSVtbJwaTAI343ePtsIWb-q_mS2f0I",
  authDomain: "fb-clone2-cbe1c.firebaseapp.com",
  databaseURL: "https://fb-clone2-cbe1c.firebaseio.com",
  projectId: "fb-clone2-cbe1c",
  storageBucket: "fb-clone2-cbe1c.appspot.com",
  messagingSenderId: "804174760270",
  appId: "1:804174760270:web:5ca05ff1ff55bd521d361f"
};



  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  // Tells Firebase we want Google login Provider
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;