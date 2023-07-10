import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVaDhxs7SEbo7WzBCMxTQyEdKoO7up1c8",
  authDomain: "libs-ec7e5.firebaseapp.com",
  projectId: "libs-ec7e5",
  storageBucket: "libs-ec7e5.appspot.com",
  messagingSenderId: "961683355176",
  appId: "1:961683355176:web:a5066292eb1c67b60ce71d",
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const storage = getStorage(app);

export { storage };
