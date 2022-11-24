import React from "react";
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import "./components/About/About.css" 
import Table from 'react-bootstrap/Table';

function About() {
  const Headers = {
    color: "#100F0F",
    backgroundColor: "#F7F7F7",
    padding: "30px",
    fontFamily: "Arial",
    textAlign: "center"
  };

  const paragraph = {
    color: "#100F0F",
    padding: "30px",
    fontFamily: "Arial",

  };
  return (
    //Navbar
    <>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        DreamJob
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/home">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#"> Home </a>
            </li></Link>
            <Link to="/about">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"> About </a>
            </li></Link>
            <Link to="/jobs">
            <li className="nav-item">
              <a className="nav-link" href="#"> Jobs </a>
            </li></Link>
            <Link to="/contact">
            <li className="nav-item">
              <a className="nav-link" href="#"> Contact Us </a>
            </li></Link>
          </ul>
        </div>
      </div>
    </nav><br/>

    <h3 style={Headers}>About our Comapany!</h3><br />
    <div>
          <p style={paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          </p>
    </div>
    <br/>

    <h3 style={Headers}>We are Located at!</h3><br />
    <div style={paragraph}>
    <Table striped bordered hover variant="dark" >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>City</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>DreamJob</td>
          <td>Mumbai</td>
          <td>India</td>
        </tr>
        <tr>
          <td>2</td>
          <td>DreamJob</td>
          <td>Boston</td>
          <td>USA</td>
        </tr>
        <tr>
          <td>3</td>
          <td>DreamJob</td>
          <td>Edmonton</td>
          <td>Canada</td>
        </tr>
      </tbody>
    </Table><br/></div><br/>
    <h3 style={Headers}>Our Accomplishments!</h3><br />
      <Card>
        <Card.Img variant="top" src="https://mdbcdn.b-cdn.net/img/new/slides/010.webp" style={{height:"80vh"}} />
        <Card.Body>
          <Card.Text>
            Our organization helped 548 Photography skilled aspirants to find their dream job!
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
      <Card.Img variant="bottom" src="https://mdbcdn.b-cdn.net/img/new/slides/026.webp" style={{height:"90vh"}}/>
        <Card.Body>
          <Card.Text>
          Our organization helped 1123 Cullinary skilled aspirants to find their dream job!
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
      <Card.Img variant="bottom" src="https://mdbcdn.b-cdn.net/img/new/slides/036.webp" style={{height:"90vh"}}/>
        <Card.Body>
          <Card.Text>
          Our organization helped 663 Interior Designing skilled aspirants to find their dream job!
          </Card.Text>
        </Card.Body>
      </Card>
    
    </>
    // <div><h1>About Page</h1></div>  
    );
}

export default About;
