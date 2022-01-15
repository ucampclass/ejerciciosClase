import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyC-guoyGACROrB7MlOF99ZzD2Jrf5djwXk',
  authDomain: 'crud-react-2473b.firebaseapp.com',
  projectId: 'crud-react-2473b',
  storageBucket: 'crud-react-2473b.appspot.com',
  messagingSenderId: '593449731550',
  appId: '1:593449731550:web:f9cadd363abca2efba894f',
};

const app = initializeApp(firebaseConfig);
export const dbConfig = getFirestore(app);
