import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Customnavbar from './components/homepage';
import Login from './components/login';
import Test from './components/test.jsx';
import Test1 from './assets/componen/test1';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Test1 />
    <Test />
    <Login />
  </React.StrictMode>,
);
