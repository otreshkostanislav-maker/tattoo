import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const element = document.getElementById('root');
if (!element) {
  throw new Error('Не найден элемент #root в index.html');
}

const root = ReactDOM.createRoot(element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

