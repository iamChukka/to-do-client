import axios from "axios";
import { Routes, Route } from "react-router-dom";

import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
    };
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const login = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(login);

    axios
      .post("https://chukkabuilds-to-do.herokuapp.com/api/auth", login)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data);
        window.location = "/";
      })
      .catch((err) => console.log(err.response));
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-md-center">
            <h3>Login</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Email: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label>Password: </label>
                <input
                  type="password"
                  required
                  className="form-control"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  required
                  className="btn btn-primary"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
