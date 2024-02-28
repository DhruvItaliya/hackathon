import logo from './logo.svg';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='bg-gray-50  flex flex-col'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
