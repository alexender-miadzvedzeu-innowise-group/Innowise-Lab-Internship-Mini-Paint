import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyApar0IRJfh8xAjc1HSiI03nLexS_awh6E',
//   authDomain: 'tets-8be4b.firebaseapp.com',
//   projectId: 'tets-8be4b',
//   storageBucket: 'tets-8be4b.appspot.com',
//   messagingSenderId: '670959739286',
//   appId: '1:670959739286:web:a97fd22ce32d8dd702bdb7',
//   measurementId: 'G-0P0XWCSR9T'
// };

export const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
export const storageRef = storage.ref();

export default firebase;