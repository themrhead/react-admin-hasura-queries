import React from 'react';
import './index.css';
import getApp from './get-app';
import ReactDOM from 'react-dom';

getApp().then((App: React.FC) =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
);
