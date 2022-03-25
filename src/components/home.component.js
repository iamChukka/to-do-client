import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);
    this.getTable = this.getTable.bind(this);

    this.onLogout = this.onLogout.bind(this);
    this.state = {
      user: null,
      table: null,
    };
  }

  onLogout() {
    const removeToken = null;
    localStorage.setItem("token", removeToken);
    console.log("We have removed Access Token");

    window.location = "/";
  }

  getUser() {
    const accessToken = localStorage.getItem("token");
    //console.log("This is the access token: " + accessToken);
    axios
      .get("http://localhost:3001/api/users/me", {
        headers: {
          "x-auth-token": accessToken,
        },
      })
      .then((res) => {
        //console.log(res);
        this.setState({
          user: res.data,
        });
      })
      .catch((error) => console.log(error.response));
  }

  componentDidMount() {
    this.getUser();
    this.getTable();
  }
  getTable() {
    const accessToken = localStorage.getItem("token");
    axios
      .get("http://localhost:3001/api/todos", {
        headers: {
          "x-auth-token": accessToken,
        },
      })
      .then((res) => {
        // console.log(res.data);
        this.setState({
          table: res.data["todo"],
        });
        //console.log(this.state.table);
      })
      .catch((error) => console.log(error.response));
  }
  render() {
    //console.log("my user " + this.state.user);

    return (
      <>
        {this.state.user ? (
          <div className="container">
            <div className="row justify-content-sm-center">
              <h2>Welcome Home {this.state.user && this.state.user.name}</h2>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Todo</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.table &&
                    this.state.table.map((todo, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{todo.name}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <button
                type="button"
                className="btn btn-link"
                onClick={this.onLogout}
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="container">
              <div className="row justify-content-md-center">
                <h2>Please Log in </h2>
                <Link to="/login">Login</Link>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
