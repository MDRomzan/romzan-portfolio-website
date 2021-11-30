// import firebase from "firebase";

// const firebaseApp= firebase.initializeApp({
   
//     apiKey: "AIzaSyDl8VtvkHppQgK4L0OU_HgpRGtRvrMoEFY",
//     authDomain: "romzan-developer-portfolio.firebaseapp.com",
//     projectId: "romzan-developer-portfolio",
//     storageBucket: "romzan-developer-portfolio.appspot.com",
//     messagingSenderId: "995674577413",
//     appId: "1:995674577413:web:964886bfd29c5ccd0e1a6c"


// // Initialize Firebase

// });
// const db = firebaseApp.firestore();
// export{db};
import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
   apiKey: "AIzaSyDl8VtvkHppQgK4L0OU_HgpRGtRvrMoEFY",
    authDomain: "romzan-developer-portfolio.firebaseapp.com",
    projectId: "romzan-developer-portfolio",
    storageBucket: "romzan-developer-portfolio.appspot.com",
    messagingSenderId: "995674577413",
    appId: "1:995674577413:web:964886bfd29c5ccd0e1a6c"
});

var db = firebaseApp.firestore();

export { db };