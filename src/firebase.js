import firebase from "firebase/app";
import "firebase/firestore"
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA3aNuHskGNBSfFffQTlvkY4PF-D1aaJSs",
	authDomain: "craftshop-aedce.firebaseapp.com",
	projectId: "craftshop-aedce",
	storageBucket: "craftshop-aedce.appspot.com",
	messagingSenderId: "763337087343",
	appId: "1:763337087343:web:1fc859b086cd7a4c63f09a",
	measurementId: "G-2ECE57N171"
  };

firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();
const auth = firebase.auth();

export {storage,provider,firebase,auth}