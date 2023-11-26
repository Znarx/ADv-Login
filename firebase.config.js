// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6pwzcTD-w3PO7J0Y5jbOPnVB2r9_syJI",
  authDomain: "advp-7b0a2.firebaseapp.com",
  projectId: "advp-7b0a2",
  storageBucket: "advp-7b0a2.appspot.com",
  messagingSenderId: "950959535506",
  appId: "1:950959535506:web:2aa069ea65e78822257d4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});