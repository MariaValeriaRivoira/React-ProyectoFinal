import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAAnRt_G6bv8T3Ewny34wvhvpgE5SkiNHw",
  authDomain: "perfumeria-hoy.firebaseapp.com",
  projectId: "perfumeria-hoy",
  storageBucket: "perfumeria-hoy.appspot.com",
  messagingSenderId: "464195232969",
  appId: "1:464195232969:web:36690d9f20c531840d5918"
};



const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseConnection = () => app
const auth = getAuth()

export {firebaseConnection, auth}