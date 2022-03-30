import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPAiPmmldMvuKLf6LcQp0Zo43Y1diN8Fw",
  authDomain: "monkeyminers-4e09f.firebaseapp.com",
  projectId: "monkeyminers-4e09f",
  storageBucket: "monkeyminers-4e09f.appspot.com",
  messagingSenderId: "357419341183",
  appId: "1:357419341183:web:405ded1c3645303e94364a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
