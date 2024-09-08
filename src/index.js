import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';

// ReactDOM.render (
//         <App />,document.getElementById('root')
//     );

const rootElement = document.getElementById('root');

// Create a root
const root = createRoot(rootElement);

// Render the App component
root.render(<App />);