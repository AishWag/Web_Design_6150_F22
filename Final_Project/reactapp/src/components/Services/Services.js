import React from "react";
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function About() {

  

  
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
            
            <a className="showalllink" href="/user/login">
            <button class="logoutbtn" type="button">Logout</button></a>
            
            
          </ul>
        </div>
      </div>
      <br></br><br></br>
    </nav>

    <div className="Servicesheader">
    <h1>Find Your Next Home in The City</h1>
        <p>Explore Properties in each neighbourhood!</p>
  </div>

  <div className="team_meals_header">
        <h3>Boston</h3>
        
        <a className="showalllink" href="/Boston">Show all</a>
    </div>



    <Carousel fade>
      <Carousel.Item>
        <div className="cardwrapper">
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house11.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house121.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house801.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>

      
      
      </Carousel.Item>

      <Carousel.Item>
        <div className="cardwrapper">
          <div>
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house101.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>

          <div></div>
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house111.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <div></div>
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house201.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>

      
      
      </Carousel.Item>

      <Carousel.Item>
        <div className="cardwrapper">
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house301.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house401.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house501.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>

      
      
      </Carousel.Item>
    </Carousel>


    <div className="team_meals_header">
        <h3>CapeCod</h3>
        <a className="showalllink" href="/Capecod">Show all</a>
    </div>



    <Carousel fade>
      <Carousel.Item>
        <div className="cardwrapper">
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house901.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house801.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house701.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>

      
      
      </Carousel.Item>

      <Carousel.Item>
        <div className="cardwrapper">
          <div>
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house601.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>

          <div></div>
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house501.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <div></div>
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house401.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>

      
      
      </Carousel.Item>

      <Carousel.Item>
        <div className="cardwrapper">
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house301.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house201.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house11.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>

      
      
      </Carousel.Item>
    </Carousel>



    <div className="team_meals_header">
        <h3>Lexington</h3>
        <a className="showalllink" href="/Lexington">Show all</a>
    </div>



    <Carousel fade>
      <Carousel.Item>
        <div className="cardwrapper">
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house111.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house1.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house901.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>

      
      
      </Carousel.Item>

      <Carousel.Item>
        <div className="cardwrapper">
          <div>
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house801.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>

          <div></div>
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house701.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <div></div>
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house601.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>

      
      
      </Carousel.Item>

      <Carousel.Item>
        <div className="cardwrapper">
          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house201.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house301.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Assets/house401.jpg"} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>

      
      
      </Carousel.Item>
    </Carousel><br></br><br></br>

    <div className="footerservices">
    
    <h2>DreamHome</h2>

    <p>@ Copyright DreamHome 2022 - All Right Reserved.</p> <br></br>

  </div>
        
    </>

    );
}

export default About;
