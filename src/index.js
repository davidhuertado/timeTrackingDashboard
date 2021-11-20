import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import data from './data.json';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

console.log(data);
