import React from 'react';
import './App.css';
import {HashRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Help from './components/help/Help';

import Add from './components/users/Add';
import Edit from './components/users/Edit';
import Details from './components/users/Details';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <HashRouter>
      <Header />

      <div className="App">
        <Routes>
          {/* routes go here, as children */}
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />

          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/details" element={<Details />} />
        </Routes>     
      </div>

      <hr />

      <Footer />
    </HashRouter>
  );
}

export default App;
