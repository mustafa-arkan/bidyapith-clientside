// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1t0BV6BbEdviz1FQ3a-YEvKCkUtZQt3g",
  authDomain: "bidyapith-client.firebaseapp.com",
  projectId: "bidyapith-client",
  storageBucket: "bidyapith-client.appspot.com",
  messagingSenderId: "243122234242",
  appId: "1:243122234242:web:d1ae322ec02f007e8f259b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;