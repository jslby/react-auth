import * as firebase from 'firebase/app';
//import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCFzq60YVxhrk8pdbIwZ3cQZLymXqcb_ls",
  authDomain: "books-81f17.firebaseapp.com",
  databaseURL: "https://books-81f17.firebaseio.com",
  projectId: "books-81f17",
  storageBucket: "books-81f17.appspot.com",
  messagingSenderId: "11885440122",
  appId: "1:11885440122:web:78b3d5a7b4ceee33"
});

// class Firebase{
//   constructor() {
//     app.initializeApp(firebaseConfig);
//     this.auth = app.auth();

//   }
//   doCreateUserWithEmailAndPassword(email, password){
//     this.auth.createUserWithEmailAndPassword(email, password);
//   }

//   doSignInWithEmailAndPassword(email, password){
//     this.auth.signInWithEmailAndPassword(email, password);
//   }
//   doSignOut(){
//     this.auth.signOut();
//   }
// }
export default app;