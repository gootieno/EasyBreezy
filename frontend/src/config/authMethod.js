import firebase from "../config/firebase";

export const googleProvider = () => new firebase.auth.GoogleAuthProvider();
