import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Assuming you have a CSS file for global styles
import App from './App'; // Assuming you have an App.js component as the root component

// If you're using React Router, BrowserRouter can be wrapped around <App />
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);