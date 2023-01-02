import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


function Home() {
    let navigate = useNavigate();
    const servicespage = () => {
        let path = `/contact`;
        navigate(path);
    }

    const Navbar = {
        textDecoration: 'none'
    }

    const Logo = {
        color: "purple",
        fontWeight: 'bold'
    }

    const purpletext = {
        color: "purple",
    }

    const team1 = {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: "40px",
        paddingLeft: "40px",
        paddingBottom: "40px",
        paddingRight: "90px"
    }

    const Titletextbar = {
        paddingTop: "50px",
        textAlign: "center"
    }

    const Headers = {
        color: "purple",
        fontWeight: "Bold",
        backgroundColor: "#F7F7F7",
        padding: "30px",
        fontFamily: "Arial",
        textAlign: "center"
    };


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <br></br><br></br><br></br>
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

            <div className="Titletext" style={Titletextbar}>
                <h2><b style={purpletext}>Discover</b> your New Home!</h2>
                <h5>Serving the Cities, Suburbs and Shores of Massachusetts</h5>
                <br></br>
                <a href="/services">
                    <button className="button mainheaderbtn" type="button">Explore Services!</button></a><br></br><br></br>

                <img src={process.env.PUBLIC_URL + "/Assets/mainimages.jpg"} class="mainimage" alt="" width="100%" height="300%"></img>
            </div>





            <div className="ExploreServices">

                <h3 style={Headers}>Featured Properties</h3>

                <div className="servicescards">
                    <Card className="bg-light text-white servicescard">
                        <Card.Img src={process.env.PUBLIC_URL + "/Assets/house1.jpg"} className="cardimg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Boston, MA</Card.Title>
                            <Card.Text>
                                3 🛏 | 2 🛁
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>

                <div className="servicescards">
                    <Card className="bg-light text-white servicescard">
                        <Card.Img src={process.env.PUBLIC_URL + "/Assets/house2.jpg"} className="cardimg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Lexington, MA</Card.Title>
                            <Card.Text>
                                5 🛏 | 5 🛁
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>

                <div className="servicescards">
                    <Card className="bg-light text-white servicescard">
                        <Card.Img src={process.env.PUBLIC_URL + "/Assets/house3.jpg"} className="cardimg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>CapeCod, MA</Card.Title>
                            <Card.Text>
                                4 🛏 | 2.5 🛁
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>

            </div>



            <div className="Details">
                <h3 style={Headers}>Discover New Developments</h3>
                <div className="explain">
                    <br></br><br></br>
                    <h5>From small boutique buildings to large scale residential towers,</h5><br></br>
                    <h5>our team partners with developers to elevate their sales strategy and</h5><br></br>
                    <h5>exclusively bring these projects to life.<br></br></h5><br></br>
                    <h5>Explore the location and make yourself comfortable with comfy housing</h5>
                </div>

                <div className="detailsimg">
                    <img src={process.env.PUBLIC_URL + "/Assets/holdhouse.jpg"} alt="" className="rounded-circle detailsimage"></img>
                </div>
                <br></br><br></br>
            </div>


            <div className="customerreviews">

                <h3 style={Headers}>Customer Reviews</h3>
                <Carousel fade className="carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 reviewimg"
                            src={process.env.PUBLIC_URL + "/Assets/carousel2.jpg"}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="carouselh3" >Hermoine Granger</h3>
                            <p className="carouselp">Great Experience with DreamHome! Found my Happy Place!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 reviewimg"
                            src={process.env.PUBLIC_URL + "/Assets/carousel3.jpg"}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className="carouselh3" >Harry Potter</h3>
                            <p className="carouselp">You won't be dissapointed with DreamHome, they'll give the best home!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 reviewimg"
                            src={process.env.PUBLIC_URL + "/Assets/carousel1.jpg"}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="carouselh3" >Hagrid</h3>
                            <p className="carouselp">
                                I finally found a huge house where I can fit in easily.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>





            <div className="team">

                <h3 style={Headers}>Our Team</h3>
                <div className="col-sm-6 col-md-4 team1">
                    <img src={process.env.PUBLIC_URL + "/Assets/teamguy1.jpg"} className="rounded-circle" alt="Cinque Terre"></img>
                    <h4 className="team-text" >Daniel</h4>
                    <p className="team-text">Head of Operations</p>
                </div>

                <div className="col-sm-6 col-md-4 team1">
                    <img src={process.env.PUBLIC_URL + "/Assets/teamguy2.jpg"} className="rounded-circle" alt="Cinque Terre"></img>
                    <h4 className="team-text">Samantha</h4>
                    <p className="team-text">HR Manager</p>
                </div>

                <div className="col-sm-6 col-md-4 team1">
                    <img src={process.env.PUBLIC_URL + "/Assets/teamguy3.jpg"} className="rounded-circle" alt="Cinque Terre"></img>
                    <h4 className="team-text">Hamadh</h4>
                    <p className="team-text">Customer Service Executive</p>
                </div>
            </div>



            <div className="divupfooter">
                <h1>Service That's As Elevated As Your Standards.</h1>
                <div className="btndivupfooter">
                    <a href="/services">
                        <button className="button" type="button">Explore Services!</button></a>
                </div>
            </div>
            <br></br><br></br>


            <div className="footer">
                <h2>DreamHome</h2>

                <p>@ Copyright DreamHome 2022 - All Right Reserved.</p>
                <br></br>

            </div>


        </>
    );
}

export default Home;
