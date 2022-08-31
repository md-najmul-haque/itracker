import { Route, Routes, useLocation } from "react-router-dom";
import RequireAuth from "./components/Authentication/RequireAuth/RequireAuth";
import SingIn from "./components/Authentication/SignIn/SingIn";
import SignUp from "./components/Authentication/SignUp/SignUp";
import AddReviews from "./components/Dashboard/AddReviews/AddReviews";
import Admin from "./components/Dashboard/Admin/Admin";
import Calendar from "./components/Dashboard/Calendar/Calendar";
import Meeting from "./components/Dashboard/Meeting/Meeting";
import SelectedMeeting from "./components/Dashboard/Meeting/SelectedMeeting";
import List from "./components/Dashboard/Projects/MyProject/List/List";
import Messages from "./components/Dashboard/Projects/MyProject/Messages";
import MyProject from "./components/Dashboard/Projects/MyProject/MyProject";
import Overview from "./components/Dashboard/Projects/MyProject/Overview";
import ProjectCalendar from "./components/Dashboard/Projects/MyProject/ProjectCalendar";
import Summary from "./components/Dashboard/Projects/MyProject/Summary";
import Projects from "./components/Dashboard/Projects/Projects";
import CompletedTasks from "./components/Dashboard/Reporting/CompletedTasks";
import IncompleteTasks from "./components/Dashboard/Reporting/IncompleteTasks";
import Reporting from "./components/Dashboard/Reporting/Reporting";
import TotalTasks from "./components/Dashboard/Reporting/TotalTasks";
import TotalUsers from "./components/Dashboard/Reporting/TotalUsers";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";
import NavDashBoard from "./components/Shared/Navbar/NavDashBoard";
import NotFound from "./components/Shared/NotFound/NotFound";
import ScrollToTop from "./components/Shared/ScrollToTop/ScrollToTop";
import ViewProfile from "./components/Shared/ViewProfile/ViewProfile";
import About from "./Pages/About/About";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Features from "./Pages/Features/Features/Features";
import Home from "./Pages/Home/Home";
import Payment from "./Pages/Pricing/Payment";
import Pricing from "./Pages/Pricing/Pricing";



function App() {
  const { pathname } = useLocation()

  return (
    <div>
      {!pathname.includes('dashboard') && <Navbar />}

      {pathname.includes('dashboard') && <NavDashBoard />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/about" element={<About />} />
        <Route path="/viewProfile" element={<ViewProfile />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>

          <Route path='repoting' element={<Reporting />} />
          <Route path='add-reviews' element={<AddReviews />} />
          <Route path='completedTasks' element={<CompletedTasks />} />
          <Route path='incompleteTasks' element={<IncompleteTasks />} />
          <Route path='totalUser' element={<TotalUsers />} />
          <Route path='totalTasks' element={<TotalTasks />} />
          <Route path='project' element={<Projects />} />
          <Route path='meeting' element={<Meeting />} />
          <Route path='meeting/:id' element={<SelectedMeeting />} />
          <Route path='calendar' element={<Calendar />} />

          <Route path='admin' element={<Admin />} />
          <Route path='myProject' element={<MyProject />} >
            <Route path='overview' element={<Overview />} />
            <Route path='projectCalendar' element={<ProjectCalendar />} />
            <Route path='list/:id' element={<List />} />
            <Route path='summary' element={<Summary />} />
            <Route path='messages' element={<Messages />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!pathname.includes('dashboard') && <Footer />}

      <ScrollToTop />
      {/* <MessengerCustomerChat pageId="100457816122808" appId="553013519763702" /> */}
    </div>
  );
}

export default App;
