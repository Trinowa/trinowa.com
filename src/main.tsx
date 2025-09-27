import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

// Get the base URL from the document
const baseUrl = document.getElementsByTagName('base')[0]?.getAttribute('href') || './';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// Log the base URL for debugging
console.log('Base URL:', baseUrl);
