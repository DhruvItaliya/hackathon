import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Error from './components/NotFound/error';
import Popup from './components/Layout/popup';
import Loading from './components/Layout/loading';
import ContactUs from './components/contactus';
import Login from './components/login';
import Signup from './components/signup';
function App() {

  return (
    <div className='bg-gray-50  flex flex-col'>
      <div>
      <Navbar />
      </div>
      <div className='flex-grow  mt-16 min-h-screen  max-h-full'>
        <div className='bg-purple-400/30 absolute  animate-circle h-80 w-80 rounded-full top-80 filter blur-md right-10 opacity-40 mix-blend-multiply'></div>
        <div className='bg-yellow-200 absolute  mix-blend-multiply animate-circle h-72 w-72 rounded-full top-72 filter blur-md right-12 opacity-40 '></div>
        <ContactUs/>


      </div>
      <div>
      <Footer />
      </div>
    </div>
    
    

  );
}

export default App;
