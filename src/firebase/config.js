import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAugqWqraxcWqsbYJa0Yv9BCrgU2Nw2I2E",
    authDomain: "jaeri-firegram.firebaseapp.com",
    projectId: "jaeri-firegram",
    storageBucket: "jaeri-firegram.appspot.com",
    messagingSenderId: "538355604238",
    appId: "1:538355604238:web:4355d9785b8ac8072bd55f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Initialize the storage and the firebase service
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  // Exporting them to use in the future
  export { projectStorage, projectFirestore, timestamp };
