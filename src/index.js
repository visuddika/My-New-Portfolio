import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Ensure there's an HTML element with id 'root' in your public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
