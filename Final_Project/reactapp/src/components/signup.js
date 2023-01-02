import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:3000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        alert("User registration successful");
        alert("Click on Login now!");
      });
  }
  render() {
    return (
      <form className="signin" onSubmit={this.handleSubmit}>
        <h2 className="signintitle">DREAMHOME</h2><br></br>
        <h3 className="signuptitle">Sign Up</h3><br></br>

        <div className="mb-3">
          <label className="signinlabel">First name</label>
          <input
            type="text"
            className="form-control signinform"
            placeholder="First name"
            onChange={(e) => this.setState({ fname: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="signinlabel">Last name</label>
          <input
            type="text"
            className="form-control signinform"
            placeholder="Last name"
            onChange={(e) => this.setState({ lname: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="signinlabel">Email address</label>
          <input
            type="email"
            className="form-control signinform"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="signinlabel">Password</label>
          <input
            type="password"
            className="form-control signinform"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div><br></br>
        <p className="forgot-password text-right">
          Already registered <a className="registerlinklogin" href="/user/login">Login?</a>
        </p>
      </form>
    );
  }
}
