import React from 'react';
import ReactDOM from 'react-dom/client';
// import Home from './screens/home/Home'
import Details from './screens/details/Details';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Details />
  </React.StrictMode>
);