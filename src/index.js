// import React from 'react';
import ReactDOM from 'react-dom/client';
// Importing Header & Footer CSS files
import './components/Header/header.css';
// Importing pages CSS files
import './pages/HomePage/homepage.css';
import './pages/Contact/contact.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();