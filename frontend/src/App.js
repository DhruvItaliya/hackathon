import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Error from './components/NotFound/error';
import Popup from './components/Layout/popup';

function App() {

  return (
    <div className='bg-gray-50  flex flex-col'>
      <Navbar />

      <div className='flex-grow mt-16 min-h-screen h-screen'>
        <Error title="hello" description="this s sd ds "/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
