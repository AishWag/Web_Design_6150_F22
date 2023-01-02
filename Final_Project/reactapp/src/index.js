import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App1 from './App1';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Login from './components/login';
import Boston from './components/Locations/Boston';
import Boston1 from './components/Properties/Boston/Boston1';
import Boston2 from './components/Properties/Boston/Boston2';
import Boston3 from './components/Properties/Boston/Boston3';
import Boston4 from './components/Properties/Boston/Boston4';

import Capecod1 from './components/Properties/Capecod/Capecod1';
import Capecod2 from './components/Properties/Capecod/Capecod2';
import Capecod3 from './components/Properties/Capecod/Capecod3';
import Capecod4 from './components/Properties/Capecod/Capecod4';

import Lexington1 from './components/Properties/Lexington/Lexington1';
import Lexington2 from './components/Properties/Lexington/Lexington2';
import Lexington3 from './components/Properties/Lexington/Lexington3';
import Lexington4 from './components/Properties/Lexington/Lexington4';

import Capecod from './components/Locations/Capecod';
import Lexington from './components/Locations/Lexington';
import SignUp from './components/signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App1/>
    {/* <BrowserRouter>

      <Routes>

          <Route exact={true} path="/" element={<App />} />

          <Route exact={true} path="/user/login" element={<Login />} />

          <Route exact={true} path="/home" element={<Home/>} />

          <Route exact={true} path="/services" element={<Services />} />


          <Route exact={true} path="/contact" element={<Contact />} />

          <Route exact={true} path="/Boston" element={<Boston />} />

          <Route exact={true} path="/Capecod" element={<Capecod />} />

          <Route exact={true} path="/Lexington" element={<Lexington />} />

          <Route exact={true} path="/Boston1" element={<Boston1 />} />

          <Route exact={true} path="/Boston2" element={<Boston2 />} />

          <Route exact={true} path="/Boston3" element={<Boston3 />} />

          <Route exact={true} path="/Boston4" element={<Boston4 />} />

          <Route exact={true} path="/Capecod1" element={<Capecod1 />} />

          <Route exact={true} path="/Capecod2" element={<Capecod2 />} />

          <Route exact={true} path="/Capecod3" element={<Capecod3 />} />

          <Route exact={true} path="/Capecod4" element={<Capecod4 />} />

          <Route exact={true} path="/Lexington1" element={<Lexington1 />} />

          <Route exact={true} path="/Lexington2" element={<Lexington2 />} />

          <Route exact={true} path="/Lexington3" element={<Lexington3 />} />

          <Route exact={true} path="/Lexington4" element={<Lexington4 />} />

          <Route exact={true} path="/register" element={<SignUp />} />

          <Route path="/:house" element={<Boston1 house={house} />} />

      </Routes>

    </BrowserRouter> */}
    {/* <App />
    <BrowserRouter>
      <nav>
        <Link to = '/home'>Home</Link> {"   "}
        <Link to = '/about'>About</Link> {"   "}
        <Link to = '/contact'>Contact</Link> {"   "}
        <Link to = '/jobs'>Jobs</Link> {"   "}
      </nav>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
      </Routes>

      <h1>Footer</h1>
    </BrowserRouter> */}
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import './index.css';
// import App from "./App";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./components/login";
// import Home from "./components/Home/Home";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route index element={<App />} />
//         <Route path="user/login" element={<Login />} />
//         <Route path="home" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();