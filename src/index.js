import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet';
import {Logo} from './assets/images/logo/themagilogo1.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <Helmet>
      <title>The Magi Foundation</title>
      <link rel="icon" type="image/png" href='./assets/images/logo/themagilogo1.png' />
    </Helmet>
    <App />
  </React.StrictMode>
);


