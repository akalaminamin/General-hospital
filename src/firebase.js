import { initializeApp } from "firebase/app";

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// });
const app = initializeApp({
    apiKey: "AIzaSyCABziRJkzWI8kf2Zt2p8lfEYZ2181hIN4",
    authDomain: "genera-hospital.firebaseapp.com",
    projectId: "genera-hospital",
    storageBucket: "genera-hospital.appspot.com",
    messagingSenderId: "8828250368",
    appId: "1:8828250368:web:e89b4875051cf621a96be5"
  });

export default app;
