import axios from "axios";
import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);
    this.state = {
      user: null,
    };
  }

  getUser() {
    const accessToken = localStorage.getItem("token");
    console.log("This is the access token: " + accessToken);
    axios
      .get("http://localhost:3001/api/users/me", {
        headers: {
          "x-auth-token": accessToken,
        },
      })
      .then((res) => {
        console.log(res);
        this.setState({
          user: res.data,
        });
      })
      .catch((error) => console.log(error.response));
  }

  componentDidMount() {
    this.getUser();
  }
  // componentDidUpdate(){
  //   if(this.user.){

  //   }
  // }
  render() {
    console.log("my user " + this.state.user);

    return (
      <>
        {this.state.user ? (
          <div>
            <h2>Welcome Home {this.state.user.name}</h2>
          </div>
        ) : (
          <>
            <div>
              <h2>Please Log in </h2>
            </div>
          </>
        )}
      </>
    );
  }
}
