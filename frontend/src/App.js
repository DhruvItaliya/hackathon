import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';
import Feed from './components/Feed';
import Error from './components/NotFound/Error';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Popup from './components/Layout/Popup';
import Loading from './components/Layout/Loading';
import ContactUs from './components/Contactus';
import AboutUs from './components/AboutUs';
import Login from './components/login';
import { Routes, Route, Link } from 'react-router-dom';
import Signup from './components/signup';
import LeaderBoard from './components/leaderboard';
import PageNotFound from './components/NotFound/NotFound';
import VolunteerReport from './components/volunteer/getreportforcustomer';
import SidebarVol from './components/volunteer/sideVolunteer';
import SideHotel from './components/hotel/sideHotel';
import SideAdmin from './components/Admin/sideAdmin';
import UserProfile from './components/userprofile';
import GetReport from './components/hotel/getreport';
import AddDrive from './components/hotel/adddrive';
import Bubbles from './components/Layout/bubbles';
import FeedCard from './components/feedCard';
import FeedPage from './components/feedPage';
import AddDriveAdmin from './components/Admin/AddDriveAdmin';
let userTypeFromSession = "volunteer";
function App() {
  return (
    <div id="MainContent" className='bg-gray-50  flex flex-col'>
      <div>
        <Navbar />
      </div>
      <Bubbles />
      <div className='flex-grow flex-row mt-16 min-h-screen  max-h-full' style={{ zIndex: 4 }}>

        <div className='flex w-full'>

          <div>
            {userTypeFromSession === "volunteer" ? <SidebarVol /> : userTypeFromSession === "hotel" ? <SideHotel /> : userTypeFromSession === "admin" ? <SideAdmin /> : null}
          </div>
          <div className='w-full' >
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />

            <Routes>
              <Route path='/UserProfile' element={<UserProfile />}></Route>
              <Route path="/LeaderBoard" element={<LeaderBoard />}></Route>
              <Route path="/ContactUs" element={<ContactUs />}></Route>

              <Route path='/Home' element={<Home />}></Route>
              <Route path="/GetReport" render element={<GetReport />}></Route>
              <Route path='/adddrive' element={<AddDrive />}></Route>
              <Route path="/feed" element={<FeedPage />}></Route>
              <Route path='/aboutus' element={<AboutUs />}></Route>
              <Route path="/VolunteerReport" element={<VolunteerReport />}></Route>
              <Route path="/AddDriveAdmin" element={<AddDriveAdmin />}></Route>
              <Route path="/" exact render element={<Home />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>


            </Routes>

          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
