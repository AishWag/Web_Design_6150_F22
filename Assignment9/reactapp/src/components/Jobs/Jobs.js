import React from "react";
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Jobs() {
    const Headers = {
        color: "#100F0F",
        backgroundColor: "#F7F7F7",
        padding: "30px",
        fontFamily: "Arial",
        textAlign: "center"
      };

    const jobcard = {
        padding: "20px",
        width: '76rem',
        margin: "10px"
    };

    const Jobopenings = {
      padding: "0",
      margin: "0",
    }

    const availablejobtitles = {
      padding: "20px",
      margin: "0",
      textAlign: "center",
      fontFamily: "Arial",
      color: "#F1F1F1",
      backgroundColor: "#100F0F"
    }
    const jobtitles = ["Wedding Photgrapher", "Video Editor", "Chef", "Interior Designer", "photos"]
  return (
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
              <a className="nav-link" href="#"> Home </a>
            </li></Link>
            <Link to="/about">
            <li className="nav-item">
              <a className="nav-link" href="#"> About </a>
            </li></Link>
            <Link to="/jobs">
            <li className="nav-item">
              <a className="nav-link active" href="#" aria-current="page"> Jobs </a>
            </li></Link>
            <Link to="/contact">
            <li className="nav-item">
              <a className="nav-link" href="#"> Contact Us </a>
            </li></Link>
          </ul>
        </div>
      </div>
    </nav>
    <h3 style={Headers}>Jobs that are currently available!</h3>

    <div className="Jobopenings" style={Jobopenings}>
        <h3 style={availablejobtitles}>Available Job Titles!</h3>
        {jobtitles.map((jobs) => (
            <h5 style={jobcard}> {jobs} </h5>
        ))}
    </div>
    <h3 style={Headers}>Job Openings!</h3>
    <Card style={jobcard}>
      <Card.Body>
        <Card.Title>Wedding Photographer</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Bride and Bridegroom Photography</Card.Subtitle>
        <Card.Text>
          Make the wedding memorable with your photgraphy skills.
        </Card.Text>
        <Card.Link href="#">Job Link</Card.Link>
      </Card.Body>
    </Card>
    <Card style={jobcard}>
      <Card.Body>
        <Card.Title>Video Editor</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Design the wedding videos and pre-wedding videos</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Job Link</Card.Link>
      </Card.Body>
    </Card>
    <Card style={jobcard}>
      <Card.Body>
        <Card.Title>Chef</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Chef required at a three star hotel in city.</Card.Subtitle>
        <Card.Text>
          Able to cook all kinds of dishes from different cuisines.
        </Card.Text>
        <Card.Link href="#">Job Link</Card.Link>
      </Card.Body>
    </Card>
    <Card style={jobcard}>
      <Card.Body>
        <Card.Title>Interior Designer</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Design a office space!</Card.Subtitle>
        <Card.Text>
          Need a person who can aesthitically design our corporate office space.
        </Card.Text>
        <Card.Link href="#">Job Link</Card.Link>
      </Card.Body>
    </Card>

    </>
  );
}

export default Jobs;