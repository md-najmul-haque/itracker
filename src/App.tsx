import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
<<<<<<< HEAD
import ScrollToTop from './Pages/Shared/ScrollToTop/ScrollToTop';


=======
import SingIn from './Pages/SignIn/SingIn';
import TestRoute from './Pages/TestRoute/TestRoute';
import Notfound from './Pages/Shared/Notfound/Notfound';
>>>>>>> origin/development

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
<<<<<<< HEAD
    <Footer/>
<ScrollToTop/>
=======
      <Footer />
>>>>>>> origin/development
    </div>
  );
}

export default App;
