//require("dotenv").config();

import React, { Component } from "react";
import axios from "axios";
type RegisterState = {
  name: string;
  email: string;
  password: string;
};
export default class Register extends Component<any, RegisterState> {
  constructor(props: any) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  onChangeName(e: any) {
    this.setState({
      name: e.target.value,
    });
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

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    console.log(user);
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/users", user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response));
    window.location.href = "/";
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-md-center">
            <h3>Register new user</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Name: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>
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
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
