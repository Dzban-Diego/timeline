import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { DATABASE_CONFIGURATION } from './config'

// initialize firebase
const firebase = initializeApp(DATABASE_CONFIGURATION);
const analytics = getAnalytics(firebase);
export const firestore = getFirestore(firebase);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);