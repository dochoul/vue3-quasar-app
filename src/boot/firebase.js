import { boot } from 'quasar/wrappers';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
});
