import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';



const firebaseConfig = {
  apiKey: "AIzaSyCX8V3BGxmKFLxgkGaiuELww76ftxwKC9M",
  authDomain: "crudproject-7d9b1.firebaseapp.com",
  projectId: "crudproject-7d9b1",
  storageBucket: "crudproject-7d9b1.appspot.com",
  messagingSenderId: "393065443482",
  appId: "1:393065443482:web:ec9cc75674c67d7fe46f23",
  measurementId: "G-4X34Z8R30R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
