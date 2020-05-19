import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyB--7j6vKP6DRF0sJxPSgcFFmAtPyma6b8",
    authDomain: "mario-94e4b.firebaseapp.com",
    databaseURL: "https://mario-94e4b.firebaseio.com",
    projectId: "mario-94e4b",
    storageBucket: "mario-94e4b.appspot.com",
    messagingSenderId: "508101553369",
    appId: "1:508101553369:web:469b70de8b0ba2565e62c8",
    measurementId: "G-GSLDFWSLQD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;