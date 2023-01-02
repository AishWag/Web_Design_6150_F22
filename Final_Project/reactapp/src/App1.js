import React, { useState, useEffect } from 'react';
import {BrowserRouter, Router, Routes, Route, Link} from 'react-router-dom';

// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import App1 from './App1';
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Login from './components/login';
import Boston from './components/Locations/Boston';
import Boston1 from './components/Properties/Boston/Boston1';
import Boston2 from './components/Properties/Boston/Boston2';
import Boston3 from './components/Properties/Boston/Boston3';
import Boston4 from './components/Properties/Boston/Boston4';
import Boston5 from './components/Properties/Boston/Boston5';
import Boston6 from './components/Properties/Boston/Boston6';
import Boston7 from './components/Properties/Boston/Boston7';
import Boston8 from './components/Properties/Boston/Boston8';
import Boston9 from './components/Properties/Boston/Boston9';
import Boston10 from './components/Properties/Boston/Boston10';
import Boston11 from './components/Properties/Boston/Boston11';
import Boston12 from './components/Properties/Boston/Boston12';
import Boston13 from './components/Properties/Boston/Boston13';
import Boston14 from './components/Properties/Boston/Boston14';



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
import Meetus from './components/MeetUs/Meetus';

function App1() {
    const [house, setHouse] = useState("");

    const path = '/'+ window.localStorage.getItem('housename')
    console.log(path)
    
    const handleDayChange = (value) => {
      setHouse(value);
    }

    console.log(window.localStorage.getItem('housename'))
    
    return (
        <BrowserRouter>

        <Routes>
  
            <Route exact={true} path="/" element={<App />} />
  
            <Route exact={true} path="/user/login" element={<Login />} />
  
            <Route exact={true} path="/home" element={<Home/>} />
  
            <Route exact={true} path="/services" element={<Services />} />
  
  
            <Route exact={true} path="/contact" element={<Contact />} />
  
            <Route exact={true} path="/Boston" element={<Boston />} />
  
            <Route exact={true} path="/Capecod" element={<Capecod />} />
  
            <Route exact={true} path="/Lexington" element={<Lexington />} />
  
            <Route exact={true} path="/Washington" element={<Boston1 />} />
  
            <Route exact={true} path="/Acorn%20Street" element={<Boston2 />} />
  
            <Route exact={true} path="/Charles" element={<Boston3 />} />
  
            <Route exact={true} path="/Cambridge" element={<Boston4 />} />

            <Route exact={true} path="/Downtown" element={<Boston5 />} />
  
            <Route exact={true} path="/ChinaTown" element={<Boston6 />} />

            <Route exact={true} path="/Massachusetts%20Avenue" element={<Boston7 />} />

            <Route exact={true} path="/Jamaica%20Plain" element={<Boston8 />} />

            <Route exact={true} path="/Roxbury" element={<Boston9 />} />
            
            <Route exact={true} path="/SouthBay" element={<Boston10 />} />

            <Route exact={true} path="/Carson" element={<Boston11 />} />

            <Route exact={true} path="/Huntington" element={<Boston12 />} />

            <Route exact={true} path="/Banglore" element={<Boston13 />} />

            <Route exact={true} path="/Mumbai" element={<Boston14 />} />
  
            <Route exact={true} path="/Capecod1" element={<Capecod1 />} />
  
            <Route exact={true} path="/Capecod2" element={<Capecod2 />} />
  
            <Route exact={true} path="/Capecod3" element={<Capecod3 />} />
  
            <Route exact={true} path="/Capecod4" element={<Capecod4 />} />
  
            <Route exact={true} path="/Lexington1" element={<Lexington1 />} />
  
            <Route exact={true} path="/Lexington2" element={<Lexington2 />} />
  
            <Route exact={true} path="/Lexington3" element={<Lexington3 />} />
  
            <Route exact={true} path="/Lexington4" element={<Lexington4 />} />
  
            <Route exact={true} path="/register" element={<SignUp />} />

            <Route exact={true} path="/meet" element={<Meetus />} />
  
            <Route path= {path} element={<Boston1 house={path}/>} />
  
        </Routes>
  
      </BrowserRouter>
    );
  }
  
  export default App1