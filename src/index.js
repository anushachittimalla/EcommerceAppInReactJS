import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
      <App />
      </CartProvider>
    );
reportWebVitals();
