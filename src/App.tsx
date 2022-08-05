import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import ScrollToTop from './Pages/Shared/ScrollToTop/ScrollToTop';

import Notfound from './Pages/Shared/Notfound/Notfound';

import Dashboard from './Pages/Dashboard/Dashboard';
import Reporting from './Pages/Dashboard/Reporting/Reporting';
import CompletedTasks from './Pages/Dashboard/Reporting/CompletedTasks';
import IncompleteTasks from './Pages/Dashboard/Reporting/IncompleteTasks';
import OverdueTasks from './Pages/Dashboard/Reporting/OverdueTasks';
import TotalTasks from './Pages/Dashboard/Reporting/TotalTasks';
import ContactUs from './Pages/ContactUs/ContactUs';
import { ToastContainer } from 'react-toastify';

import Features from './Pages/Features/Features/Features';
import SingIn from './Pages/Authentication/SignIn/SingIn';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Abouts from './Pages/Abouts/Abouts';




function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/about' element={<Abouts/>}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          
          <Route path='repoting' element={<Reporting />} />
          <Route path='completedTasks' element={<CompletedTasks />} />
          <Route path='incompleteTasks' element={<IncompleteTasks />} />
          <Route path='overdueTasks' element={<OverdueTasks />} />
          <Route path='totalTasks' element={<TotalTasks />} />


        </Route>
      </Routes>
      <Footer />
      <ScrollToTop />
      <ToastContainer />
    </div>
  );
}

export default App;
