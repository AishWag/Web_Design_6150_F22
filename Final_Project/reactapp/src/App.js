import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FeaturedProjects from "./DB/FeaturedProjects";



function App() {

  return (

    <div className="App">

      <Signup />

    </div>

  );

}



export default App;
