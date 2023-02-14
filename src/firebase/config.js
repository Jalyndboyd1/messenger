import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd8nGJuoCFlg5oIxOwQ7KiOU2HeCRvsvQ",
  authDomain: "imessage-clone-8ed1f.firebaseapp.com",
  projectId: "imessage-clone-8ed1f",
  storageBucket: "imessage-clone-8ed1f.appspot.com",
  messagingSenderId: "69938355385",
  appId: "1:69938355385:web:bff5473772456d956e8f68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)