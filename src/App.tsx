import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import Features from './Pages/Features/Features/Features';
import AddReviews from './Pages/Dashboard/AddReviews/AddReviews';
import SingIn from './Pages/Authentication/SignIn/SingIn';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import About from './Pages/About/About';
import { connect } from 'react-redux'
import Projects from './Pages/Dashboard/Projects/Projects';
import Calendar from './Pages/Dashboard/Calendar/Calendar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Pricing from './Pages/Home/Pricing/Pricing';
import Payment from './Pages/Home/Pricing/Payment';
import MyProject from './Pages/Dashboard/Projects/MyProject';
import SelectedMeeting from './Pages/Dashboard/Meeting/SelectedMeeting';
import Meeting from './Pages/Dashboard/Meeting/Meeting';
import MyProjects from './Pages/Dashboard/MyProjects/MyProjects';
import AAA from './Pages/Dashboard/MyProjects/AAA';
import BBB from './Pages/Dashboard/MyProjects/BBB';


type stateProps = {
  lists: any
}


function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    AOS.init();
  })
  return (
    <div>
      {!pathname.includes('dashboard') && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/payment" element={<Payment />} />

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route path='repoting' element={<Reporting />} />
          <Route path='add-reviews' element={<AddReviews />} />
          <Route path='completedTasks' element={<CompletedTasks />} />
          <Route path='incompleteTasks' element={<IncompleteTasks />} />
          <Route path='overdueTasks' element={<OverdueTasks />} />
          <Route path='totalTasks' element={<TotalTasks />} />
          <Route path='project' element={<Projects />} />
          <Route path='meeting' element={<Meeting />} />
          <Route path='selectedMeeting/:id' element={<SelectedMeeting />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='myProject' element={<MyProject />} />

          {/*   nested project route */}
          <Route path='Projects' element={<MyProjects />} >
            <Route path='aaa' element={<AAA />} />
            <Route path='bbb' element={<BBB />} />



          </Route>
        </Route>


        <Route path="*" element={<Notfound />} />
      </Routes>
      {!pathname.includes('dashboard') && <Footer />}

      <ScrollToTop />
    </div>
  );
}


const mapStateToProps = (state: stateProps) => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
