import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCTeauUXyIt6Gdh4WA9I2epV4BWdiPGS-OE",
  authDomain: "solve-js.firebaseapp.com",
  projectId: "solve-js",
  storageBucket: "solve-js.firebasestorage.app",
  messagingSenderId: "1047135592813",
  appId: "1:1047135592813:web:b46839a74c37eb6987fa64",
};

const app = initializeApp(firebaseConfig);

export default app;