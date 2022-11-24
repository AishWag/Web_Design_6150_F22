import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Jobs from './components/Jobs/Jobs';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>

          <Route exact={true} path="/" element={<App />} />

          <Route exact={true} path="/home" element={<Home/>} />

          <Route exact={true} path="/about" element={<About />} />

          <Route exact={true} path="/jobs" element={< Jobs/>} />

          <Route exact={true} path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
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
