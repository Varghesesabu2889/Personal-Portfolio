// Importing React library
import React from 'react';

// Importing ReactDOM client for client-side rendering
import ReactDOM from 'react-dom/client';

// Importing the main App component
import App from './App.jsx';

// Importing styles from 'index.css'
import './index.css';

// Creating a root for concurrent mode rendering and rendering the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrapping the App component with React Strict Mode
  <React.StrictMode>
    {/* Rendering the main App component */}
    <App />
  </React.StrictMode>,
);
