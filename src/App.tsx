import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer';
import NavbarMain from './Pages/Shared/Navbar/Navbar';
import ScrollToTop from './Pages/Shared/ScrollToTop/ScrollToTop';
import Notfound from './Pages/Shared/Notfound/Notfound';
import Dashboard from './Pages/Dashboard/Dashboard';
import Reporting from './Pages/Dashboard/Reporting/Reporting';
import CompletedTasks from './Pages/Dashboard/Reporting/CompletedTasks';
import IncompleteTasks from './Pages/Dashboard/Reporting/IncompleteTasks';
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
import { MessengerCustomerChat } from "typescript-react-facebook-messenger";
import 'aos/dist/aos.css';
import SelectedMeeting from './Pages/Dashboard/Meeting/SelectedMeeting';
import Meeting from './Pages/Dashboard/Meeting/Meeting';
import MyProject from './Pages/Dashboard/Projects/MyProject/MyProject';
import Overview from './Pages/Dashboard/Projects/MyProject/Overview';
import Summary from './Pages/Dashboard/Projects/MyProject/Summary';
import Messages from './Pages/Dashboard/Projects/MyProject/Messages';
import ProjectCalendar from './Pages/Dashboard/Projects/MyProject/ProjectCalendar';
import Pricing from './Pages/Home/Pricing/Pricing';
import Payment from './Pages/Home/Pricing/Payment';
import List from './Pages/Dashboard/Projects/MyProject/List/List';
import NavDashBoard from './Pages/Shared/Navbar/NavDashBoard';
import TotalUsers from './Pages/Dashboard/Reporting/TotalUsers';
import Admin from './Pages/Dashboard/Admin/Admin';

import Board from './components/firstScreen/Board';
import HomeScreen from './components/firstScreen/HomeScreen';
import Workspace from './components/Workspace/Workspace';
import Boards from './components/Workspace/Boards';
import Members from './components/Workspace/Members';
import WorkspaceMembers from './components/Workspace/Member/WorkspaceMembers';
import Guests from './components/Workspace/Member/Guests';
import Pending from './components/Workspace/Member/Pending';
import Account from './components/Workspace/Account';
import BoardDetails from './components/boardDetails/BoardDetails';
import auth from './firebase.init';
import Bar from './components/modalInfo/Bar';
import { useAuthState } from 'react-firebase-hooks/auth';
import ViewProfile from './Pages/ViewProfile/ViewProfile';




type stateProps = {
  lists: any
}

function App() {
  const { pathname } = useLocation()

  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      {!pathname.includes('dashboard') && <NavbarMain />}

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

        <Route path="/allTask" element={<Board />}></Route>
        <Route path="/createTask" element={<HomeScreen />}></Route>



        <Route path="/:shortname" element={<Workspace />}>
          <Route path="/:shortname/" element={<Boards />}></Route>
          <Route path="/:shortname/members" element={<Members />}>
            <Route
              path="/:shortname/members"
              element={<WorkspaceMembers></WorkspaceMembers>}
            ></Route>
            <Route
              path="/:shortname/members/guests"
              element={<Guests></Guests>}
            ></Route>
            <Route
              path="/:shortname/members/pending"
              element={<Pending></Pending>}
            ></Route>
          </Route>
          <Route path="/:shortname/account" element={<Account />}></Route>
          <Route
            path="/:shortname/:id"
            element={<BoardDetails></BoardDetails>}
          ></Route>
        </Route>

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
        <Route path="*" element={<Notfound />} />
      </Routes>
      {user && <Bar />}
      {!pathname.includes('dashboard') && <Footer />}

      <ScrollToTop />
      <MessengerCustomerChat pageId="100457816122808" appId="553013519763702" />
    </div>
  );
}


const mapStateToProps = (state: stateProps) => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
