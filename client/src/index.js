import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/App'
import NavBar from './components/NavBar';
import './index.css';
import '@fontsource/roboto'


ReactDOM.render(
  <BrowserRouter>
    <NavBar/>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);