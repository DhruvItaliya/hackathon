import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';
import Error from './components/NotFound/error';
import Popup from './components/Layout/popup';
import Loading from './components/Layout/loading';
import ContactUs from './components/contactus';
import AboutUs from './components/AboutUs';
import Login from './components/login';
import { Routes, Route, Link } from 'react-router-dom';
import Signup from './components/signup';
import LeaderBoard from './components/leaderboard';
import PageNotFound from './components/NotFound/NotFound';
import VolunteerReport from './components/volunteer/getreportforcustomer';
import SidebarVol from './components/volunteer/sideVolunteer';
import SideHotel from './components/hotel/sideHotel';
import SideAdmin from './components/Layout/sideAdmin';
import UserProfile from './components/userprofile';
import GetReport from './components/hotel/getreport';
import AddDrive from './components/hotel/adddrive';
import Bubbles from './components/Layout/bubbles';
 let userTypeFromSession="hotel";
 function App() {
  return (
    <div id="MainContent" className='bg-gray-50  flex flex-col'>
      <div>
        <Navbar />
      </div>
      <Bubbles/>
      <div className='flex-grow flex-row mt-16 min-h-screen  max-h-full' style={{zIndex:4}}>
       
        <div className='flex w-full'>
          <div>
            {userTypeFromSession === "volunteer" ? <SidebarVol /> : userTypeFromSession === "hotel" ? <SideHotel /> : userTypeFromSession === "admin" ? <SideAdmin /> : null}
          </div>
          <div className='w-full' >
            
        <Routes>
        <Route path='/UserProfile' element={<UserProfile/>}></Route>
        <Route path="/LeaderBoard" element={<LeaderBoard/>}></Route>
        <Route path="/ContactUs" element={<ContactUs/>}></Route>
        <Route path='/Home'  element={<Home/>}></Route>
        <Route path="/" exact render element={<Home/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
        <Route path="/GetReport" render element={<GetReport/>}></Route>
        <Route path='/adddrive' element={<AddDrive/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path="/VolunteerReport" element={<VolunteerReport/>}
       ></Route>
       
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
