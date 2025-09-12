// import React from 'react';
import ReactDOM from 'react-dom/client';
// Importing Header & Footer CSS files
import './components/HeaderFooter/header.css';
import './components/HeaderFooter/footer.css';
// Importing pages CSS files
import './pages/HomePage/homepage.css';
import './pages/Contact/contact.module.css';
import './pages/Blog/blog.module.css';
import './pages/Cart/cart.module.css';
import './pages/Product/product.module.css';
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