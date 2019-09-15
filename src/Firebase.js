import firebase from 'firebase'

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "",
  authDomain: "recipe-aa9c8.firebaseapp.com",
  databaseURL: "https://recipe-aa9c8.firebaseio.com",
  projectId: "recipe-aa9c8",
  storageBucket: "",
  messagingSenderId: "910179877736",
  appId: ""
};


 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const storage = firebase.storage();

 export {
     storage, firebase as default
 }