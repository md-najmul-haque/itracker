import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer';

import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
