import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer';

import Navbar from './Pages/Shared/Navbar/Navbar';
import SingIn from './Pages/SignIn/SingIn';
import TestRoute from './Pages/TestRoute/TestRoute';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/singin" element={<SingIn />} />
      </Routes>



      
      <Routes>
        <Route path='/test' element={<TestRoute/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
