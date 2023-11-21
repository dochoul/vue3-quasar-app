import { boot } from 'quasar/wrappers';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuthStore } from 'src/stores/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCGpCyKxhXD4sQSH023gq7RZmC2jE2Za78',
  authDomain: 'vue3-firebase-app-c7c28.firebaseapp.com',
  projectId: 'vue3-firebase-app-c7c28',
  storageBucket: 'vue3-firebase-app-c7c28.appspot.com',
  messagingSenderId: '918022345238',
  appId: '1:918022345238:web:e987f09f8d49ea06c75b37',
  measurementId: 'G-BD7QVV7WQS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

export default boot(async (/* { app, router, ... } */) => {
  const authStore = useAuthStore();
  onAuthStateChanged(auth, user => {
    console.log(user);
    authStore.setUser(user);
  });
});
