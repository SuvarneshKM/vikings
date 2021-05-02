import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAakOa8xvcxb2AY1497XhcxBPeX-5AUiGI",
    authDomain: "vikings-cast.firebaseapp.com",
    projectId: "vikings-cast",
    storageBucket: "vikings-cast.appspot.com",
    messagingSenderId: "1081476155230",
    appId: "1:1081476155230:web:a4c66efbab450d08c7f1cf",
    measurementId: "G-JT7XGMBXWG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;