//require("dotenv").config();

import axios from "axios";
import { Routes, Route } from "react-router-dom";

import React, { Component } from "react";
type LoginState = {
  email: string;
  password: string;
};
export default class Login extends Component<any, LoginState> {
  constructor(props: any) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
    };
  }

  onChangePassword(e: any) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeEmail(e: any) {
    this.setState({
      email: e.target.value,
    });
  }
  onSubmit(e: any) {
    e.preventDefault();

    const login = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(login);

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/auth", login)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        window.location.href = "/";
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
