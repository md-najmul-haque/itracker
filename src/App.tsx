import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import ScrollToTop from './Pages/Shared/ScrollToTop/ScrollToTop';
import SingIn from './Pages/SignIn/SingIn';
import Notfound from './Pages/Shared/Notfound/Notfound';
import SignUp from './Pages/SignUp/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='*' element={<Notfound />} />

        <Route path='/dashboard' element={<Dashboard />}>
          

        </Route>
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
