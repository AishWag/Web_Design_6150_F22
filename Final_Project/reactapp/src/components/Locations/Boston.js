import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FeaturedProjects from "../../DB/FeaturedProjects";

function TeamMeals() {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
        // house('jamaicaplain')
    }, []);

    const fetchProducts = () => {
        axios
            .get('http://localhost:3000/fetch_property?city=Boston')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data.products);
            })

            .catch((err) => {
                console.log(err);
            })
    }

    const navigate = useNavigate();
    function finddesc(x) {
        console.log(x)
        window.localStorage.setItem('housename', x)
        navigate('/' + x)
        // navigate('/Boston1')
    }



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

    const paragraph = {
        color: "#100F0F",
        padding: "30px",
        fontFamily: "Arial",

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
                                    <a className="nav-link active" href="/services"> Services </a>
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

            <div className="Servicesheader">

                <h1>Boston</h1>
                <p>The Athens of America</p>
            </div><br></br><br></br>

            <div className='item-container'>
                {
                    products.map((product) => {
                        return (
                            <div className='carddiv' id={product.name}>
                                <img className="dbimg" src={process.env.PUBLIC_URL + product.image}></img><br></br>
                                <h5>{product.name}</h5>
                                <p>{product.description}</p>
                                <button onClick={() => finddesc(product.name)} className='dbbutton'> Learn More</button>
                            </div>
                        )
                    })}
            </div><br></br><br></br>
        </>
    )
}

export default TeamMeals