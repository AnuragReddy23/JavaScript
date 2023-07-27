import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMDP5HIKpOrs4D-YeWyFeC4hqKtiMN-g0",
  authDomain: "my-react-blog-a8638.firebaseapp.com",
  projectId: "my-react-blog-a8638",
  storageBucket: "my-react-blog-a8638.appspot.com",
  messagingSenderId: "488878358765",
  appId: "1:488878358765:web:34509fa8dbd24762074ce4"
};

const app = initializeApp(firebaseConfig);

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
