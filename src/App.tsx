import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer';

import Navbar from './Pages/Shared/Navbar/Navbar';
import SingIn from './Pages/SignIn/SingIn';
import Notfound from './Pages/Shared/Notfound/Notfound';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
