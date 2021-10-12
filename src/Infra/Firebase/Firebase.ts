import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { getStorage, ref } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const auth = getAuth()
const signWithGoogle = new GoogleAuthProvider()

const storage = getStorage()
const imagesRef = ref(storage, process.env.FIREBASE_IMAGES_STORAGE)
const audiosRef = ref(storage, process.env.FIREBASE_AUDIOS_STORAGE)

export {
  db,
  auth,
  signWithGoogle,
  signInWithEmailAndPassword,
  imagesRef,
  audiosRef
}
