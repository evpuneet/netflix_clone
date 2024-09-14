import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './common/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Slidermain from './pages/Slidermain';
import Welcome from './pages/Welcome';
import Whyasha from './pages/Whyasha';
import Projects from './pages/Projects';
import Readyprojects from './pages/Readyprojects';
import Aboutasha from './pages/Aboutasha';
import Events from './pages/Events';
import Footer from './pages/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Slidermain/>
    <Welcome/>
    <Whyasha/>
    <Projects/>
    <Readyprojects/>
    <Aboutasha/>
    <Events/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
