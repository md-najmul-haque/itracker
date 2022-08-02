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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardHomePage from './Pages/Dashboard/DashboardHomePage/DashboardHomePage';
import Task from './Pages/Dashboard/MyTask/Task';
import AddTask from './Pages/Dashboard/MyTask/AddTask/AddTask';
import CurrentIssue from './Pages/Dashboard/MyTask/CurrentIssue/CurrentIssue';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} ></Route>
        <Route path="/signin" element={<SingIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='*' element={<Notfound />} />

        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard' element={<DashboardHomePage />} />

          <Route path='myTask' element={<Task/>}>
            <Route path='addTask' element={<AddTask/>} />
            <Route path='currentIssue' element={<CurrentIssue/>} />
          </Route>

        </Route>
      </Routes>
      <Footer />
      <ScrollToTop />
      <ToastContainer />
    </div>
  );
}

export default App;
