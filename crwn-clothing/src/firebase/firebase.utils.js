import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyA9OuVKJNWaUvlqZnBxpB_jnNZIkPLN-Yg",
    authDomain: "crw-db-4bb8a.firebaseapp.com",
    databaseURL: "https://crw-db-4bb8a.firebaseio.com",
    projectId: "crw-db-4bb8a",
    storageBucket: "crw-db-4bb8a.appspot.com",
    messagingSenderId: "722271357045",
    appId: "1:722271357045:web:f39e1fb2e29d264219503c",
    measurementId: "G-XD2T964D3S"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;