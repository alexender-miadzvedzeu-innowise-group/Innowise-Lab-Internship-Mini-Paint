import firebase from "../../firebase/firebase";

export const createUser = (payload:{email:string, password: string}) => firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password);
export const signInUser = (payload:{email:string, password: string}) => firebase.auth().signInWithEmailAndPassword(payload.email, payload.password);
