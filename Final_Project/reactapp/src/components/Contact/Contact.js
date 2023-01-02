import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import styled from "styled-components";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Contact() {
    const Headers = {
        color: "#100F0F",
        backgroundColor: "#F7F7F7",
        padding: "30px",
        fontFamily: "Arial",
        textAlign: "center"
    };

    const Navbar = {
        textDecoration: 'none'
    }

    const Logo = {
        color: "purple",
        fontWeight: 'bold'
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_hjv9t8l",
                "template_9fnt38l",
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
                                    <a className="nav-link " aria-current="page" href="#"> Home </a>
                                </li></Link>
                            <Link style={Navbar} to="/services">
                                <li className="nav-item">
                                    <a className="nav-link" href="/services"> Services </a>
                                </li></Link>
                            <Link style={Navbar} to="/contact">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#"> Contact Us </a>
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

            <h3 className="Servicesheader">Give us your details. We will get in touch with you!</h3>

            <Form ref={form} onSubmit={sendEmail} className="contactusform">
                <Form.Group className="mb-3 contact" controlId="formBasicPassword">
                    <Form.Label className="contact">Full Name</Form.Label>
                    <Form.Control className="contact" name="user_name" type="text" placeholder="Enter your Full Name" />
                </Form.Group>
                <Form.Group className="mb-3 contact" controlId="formBasicEmail">
                    <Form.Label className="contact">Email address</Form.Label>
                    <Form.Control className="contact" name="user_email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 contact" controlId="formBasicPassword">
                    <Form.Label className="contact">Mobile Number</Form.Label>
                    <Form.Control className="contact" type="text" placeholder="Enter Mobile Number" />
                </Form.Group><br />
                <Button className="contactbtn" variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default Contact;