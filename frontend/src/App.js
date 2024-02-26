import logo from './logo.svg';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className='bg-gray-50  flex flex-col'>
      <Navbar />

      <div className='flex-grow min-h-screen h-screen'>
    
      </div>

      <Footer />
    </div>
  );
}

export default App;
