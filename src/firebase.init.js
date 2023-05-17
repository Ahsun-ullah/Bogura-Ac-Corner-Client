// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDlAAHhCYRPpyooPMcZdgGwbeTNXjbTUpQ',
  authDomain: 'bogura-ac-corner.firebaseapp.com',
  projectId: 'bogura-ac-corner',
  storageBucket: 'bogura-ac-corner.appspot.com',
  messagingSenderId: '749218020840',
  appId: '1:749218020840:web:5c2a9e69a0c480d0feb85d',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
