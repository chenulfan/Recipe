import firebase from 'firebase'

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBwHuu_yukRXvsBoQt7A5PjbkSZK6ZAU7A",
  authDomain: "recipe-aa9c8.firebaseapp.com",
  databaseURL: "https://recipe-aa9c8.firebaseio.com",
  projectId: "recipe-aa9c8",
  storageBucket: "recipe-aa9c8.appspot.com",
  messagingSenderId: "910179877736",
  appId: "1:910179877736:web:78e33bbe759864f196ccdd"
};


 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const storage = firebase.storage();

 export {
     storage, firebase as default
 }