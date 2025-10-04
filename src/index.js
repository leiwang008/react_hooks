import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { TreesContext } from './context/TreeContext';

const trees = [
  {id:1, name:"oak"},
  {id:2, name:"pine"},
  {id:3, name:"redwood"},
  {id:4, name:"maple"},
  {id:5, name:"birch"},
]

// Get your root element
const container = document.getElementById('root');

// Create a root and render
const root = ReactDOM.createRoot(container);
root.render(
  <TreesContext.Provider value={trees}>
    <App />
  </TreesContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
