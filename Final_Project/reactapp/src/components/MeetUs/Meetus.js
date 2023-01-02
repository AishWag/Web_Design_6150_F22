import Table from 'react-bootstrap/Table';
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const center1 = { lat: 42.265960, lng: -71.116050}

const center2 = { lat: 45.801680, lng: -67.717409}

function Meetus() {

    const Headers = {
        color: "#100F0F",
        backgroundColor: "#F7F7F7",
        padding: "30px",
        fontFamily: "Arial",
        textAlign: "center"
      }
    
      const Navbar = {
        textDecoration: 'none'
      }
    
      const Logo = {
        color: "purple",
        fontWeight: 'bold'
      }
    
      const paragraph = {
        color: "#100F0F",
        padding: "30px",
        fontFamily: "Arial",
    
      }

      const {isLoaded} = useJsApiLoader ({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      })
    
      if(!isLoaded) {
        return <div><h1>Loading Map..</h1></div>
      }

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
      <br></br><br></br>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={Logo}>
          DreamHome
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <Link style={Navbar} to="/home">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#"> Home </a>
            </li></Link>
            <Link style={Navbar} to="/services">
            <li className="nav-item">
              <a className="nav-link" href="/services"> Services </a>
            </li></Link>
            <Link style={Navbar} to="/contact">
            <li className="nav-item">
              <a className="nav-link" href="#"> Contact Us </a>
            </li></Link>
            
            <Link style={Navbar} to="/meet">
            <li className="nav-item">
              <a className="nav-link active" href="/meet"> Meet Us </a>
            </li></Link>
            <a href="/user/login">
            <button class="logoutbtn" type="button">Logout</button></a>
            
            
          </ul>
        </div>
      </div>
      <br></br><br></br>
    </nav>

    <div className="Servicesheader">
        <h1>Come meet us!</h1>
        <p>At one of our Business Locations.</p>
    </div><br></br><br></br>

<div className='meetustable'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Address</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>DreamHome</td>
          <td>39, Boston, MA</td>
          <td>Unites States of America</td>
        </tr>
        <tr>
          <td>2</td>
          <td>DreamHome</td>
          <td>12, Capecod, MA</td>
          <td>Unites States of America</td>
        </tr>
      </tbody>
    </Table>
    </div>


    <div className="mapcontainer meetusmap">
            <GoogleMap center={center1} zoom={18} mapContainerStyle={{width:"80%", height:"80%"}}>
                <Marker position={center1} />
            </GoogleMap>
    </div>


    <div className="mapcontainer meetusmap">
            <GoogleMap center={center2} zoom={18} mapContainerStyle={{width:"80%", height:"80%"}}>
                <Marker position={center2} />
            </GoogleMap>
    </div>


    <div className="footerservices">
    
        <h2>DreamHome</h2>

        <p>@ Copyright DreamHome 2022 - All Right Reserved.</p> <br></br>

    </div>


    </>
  )
}

export default Meetus