
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "...",
  authDomain: "examnotes-e4f82.firebaseapp.com",
  projectId: "examnotes-e4f82",
  storageBucket: "examnotes-e4f82.firebasestorage.app",
  messagingSenderId: "925341590102",
  appId: "1:925341590102:web:925d9a427e10e25c2d11f7",
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}
