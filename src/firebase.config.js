import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyDlVEgWxAjU4WZQc2aCKDM9M4gqcw1-dU4",
  authDomain: "posh-chat-2c1d9.firebaseapp.com",
  projectId: "posh-chat-2c1d9",
  storageBucket: "posh-chat-2c1d9.appspot.com",
  messagingSenderId: "74907343514",
  appId: "1:74907343514:web:0465c78408ca107ee05d23",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}

initializeApp(config);
