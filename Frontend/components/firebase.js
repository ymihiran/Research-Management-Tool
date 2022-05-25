import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6FeAaDnZz7_1w5ilvp055aduo_yh-eYk",
  authDomain: "research-management-tool-b408a.firebaseapp.com",
  projectId: "research-management-tool-b408a",
  storageBucket: "research-management-tool-b408a.appspot.com",
  messagingSenderId: "258719151653",
  appId: "1:258719151653:web:33b45d817ac877d24f71cc",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };
