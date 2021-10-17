import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

export class Firebase {
  static app = initializeApp(firebaseConfig)
  static auth = getAuth(this.app)
  static GoogleAuthProvider = GoogleAuthProvider
  static createUserWithEmailAndPassword = createUserWithEmailAndPassword
  static signInWithEmailAndPassword = signInWithEmailAndPassword
  static signInWithPopup = signInWithPopup
}
