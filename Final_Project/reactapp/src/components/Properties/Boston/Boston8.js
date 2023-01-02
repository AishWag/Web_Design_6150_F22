import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const center = { lat: 42.322290, lng: -71.103690}


function Food1Desc  () {

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

      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hjv9t8l",
        "template_5z0l2di",
        form.current,
        "OQkU8VAooVQFNSmR8"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const {isLoaded} = useJsApiLoader ({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  if(!isLoaded) {
    return <div><h1>Loading Map..</h1></div>
  }
      

      return (
        //Navbar
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
              <a className="nav-link active" aria-current="page" href="#"> Home </a>
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
              <a className="nav-link" href="#"> Meet Us </a>
            </li></Link>
            
            <a href="/user/login">
            <button class="logoutbtn" type="button">Logout</button></a>
            
            
          </ul>
        </div>
      </div>
      <br></br><br></br>
    </nav>

    
    <div className="desc">
    <Card className="desccard">
        <Card.Img className="descimg" variant="top" src={process.env.PUBLIC_URL + "/Assets/house401.jpg"} />
        <Card.Body>
          <Card.Text>
          A 2000sqft spacious house with all amenities included.
          </Card.Text>
        </Card.Body>
    </Card>
    </div>


       

        <div className="contactform">
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control name="user_name" type="text" placeholder="Enter your full name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control name="user_email" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control name="user_city" type="text" placeholder="City you live in" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control name="user_message" type="text" placeholder="Let us know your queries" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

{/* <form onSubmit={submitHandler}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input value="" onChange={changeHandler} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Full Name</label>
    <input value="" type="text" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <button value="Send Email" type="submit" class="btn btn-primary">Submit</button>
</form> */}
    </div>

    <div className="mapcontainer">
            <GoogleMap center={center} zoom={18} mapContainerStyle={{width:"80%", height:"80%"}}>
                <Marker position={center} />
            </GoogleMap>
    </div>

        <div className="footerservices">
    
    <h2>DreamHome</h2>

    <p>@ Copyright DreamHome 2022 - All Right Reserved.</p> <br></br>

  </div>

</>    
  )
}


export default Food1Desc