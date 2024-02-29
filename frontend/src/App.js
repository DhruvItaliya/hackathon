import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';
import Error from './components/NotFound/error';
import Popup from './components/Layout/popup';
import Loading from './components/Layout/loading';
import ContactUs from './components/contactus';
import Login from './components/login';
import { Routes, Route, Link} from 'react-router-dom';
import Signup from './components/signup';
import LeaderBoard from './components/leaderboard';
import PageNotFound from './components/NotFound/NotFound';
import SidebarVol from './components/Layout/sideVolunteer';
import SideHotel from './components/Layout/sideHotel';
import SideAdmin from './components/Layout/sideAdmin';
import UserProfile from './components/userprofile';
import GetReport from './components/hotel/getreport';
 let userTypeFromSession="hotel";
 function App() {
 
  return (
    <div className='bg-gray-50  flex flex-col'>
      
      <div>
        <Navbar />
      </div>

      <div className='flex-grow flex-row mt-16 min-h-screen  max-h-full'>
        
        <div className='bg-purple-400/30 absolute  animate-circle h-80 w-80 rounded-full top-80 filter blur-md right-40 opacity-40 mix-blend-multiply'></div>
        <div className='bg-yellow-200 absolute animation-delay-4000 mix-blend-multiply animate-circle h-72 w-72 rounded-full top-72 filter blur-md right-40 opacity-40 '></div>
        <div className='flex w-full'>
          <div>
            {userTypeFromSession==="volunteer"?<SidebarVol/>:userTypeFromSession==="hotel"?<SideHotel/>:userTypeFromSession==="admin"?<SideAdmin/>:null}
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

        </Routes>
        {/* <LeaderBoard/>
        <LeaderBoard/> */}
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
