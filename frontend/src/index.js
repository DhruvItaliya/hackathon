import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes ,Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
    <Routes>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/SignUp" element={<Signup/>}></Route>
      <Route path="*" element={<App/>}></Route>
    </Routes>
  
  {/* </React.StrictMode> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
