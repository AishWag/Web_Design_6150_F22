import React, { Component } from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";

// import "./App.css";
// import {Navigate} from 'react-router-dom';
// const navigate = useNavigate()
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isAuthenticated: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:3000/user/login", {
      // mode: "no-cors",
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");

        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          // window.location.href = "./userDetails";
          this.setState({ isAuthenticated: true });
        } else {
          alert("login unsuccessful! Either of your email or password is incorrect!");
        }
        // <Navigate to="/home"/>
      });
  }

  render() {
    const { isAuthenticated } = this.state;
    if (isAuthenticated) {
      console.log("srujan");
      return (
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      );
    }
    return (
      <>
      <div className="logincontainer">
        <h2 className="logintitle">Login</h2>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => this.setState({ email: e.target.value })}
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => this.setState({ password: e.target.value })}
              required
            />
          </div>
          <br></br>
          <button type="submit" className="btn loginbtn btn-light">
            Login
          </button>
          <br></br><br></br>
          <p className="signupredirect">Don't have an account? <a className="registerlinklogin" href="/register">Register here!</a></p>
        </form>
      </div>
      </>
    );
  }
}