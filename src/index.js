import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Home from './routes/Home';
import Random from './routes/Random';
import Favorites from './routes/Favorites';
import NavBar from './utils/NavbarWL';

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <NavBar/>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/random" element={<Random />}/>
    <Route path="/favorites" element={<Favorites />}/>
  </Routes>
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
