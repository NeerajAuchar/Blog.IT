import{initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD34Q32WVE_QapR6PH9dYXkZ8LXiHzocE8",
    authDomain: "blogit-4bbbc.firebaseapp.com",
    projectId: "blogit-4bbbc",
    storageBucket: "blogit-4bbbc.appspot.com",
    messagingSenderId: "126936428513",
    appId: "1:126936428513:web:8b579fc2e092a513c02ca0"
  };

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
