import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./login.css";

import { Button } from "react-bootstrap";
import Home from '../../Dashboard/HomePage';
import { Redirect } from 'react-router-dom';
import fakeAuth from '../../App';
//import { BrowserRouter as Router, Route, NavLink,Switch,Redirect } from 'react-router-dom';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      redirectToReferrer: false//
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    fakeAuth.authenticate(() => {
        this.setState({
            email: this.refs.portalId.value,
            password: this.refs.password.value,
            redirectToReferrer: true
        })
    })
    e.preventDefault();
}
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

//   onSubmit = e => {
//       console.log("redirect to home page");
//     e.preventDefault();

//   };

  render() {
    const redirectToReferrer = this.state.redirectToReferrer;
    if (redirectToReferrer === true) {
        // <Redirect to="/Home" />
    }
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group">
              {/* <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2 container-login100"> */}
              {/* <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link> */}
              {/* <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div> */}
              <form
                noValidate
                onSubmit={this.onSubmit}
                className="login100-form"
              >
                <div className="card p-4">
                  <div className="card-body">
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <div className="input-field input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-user" />
                        </span>
                      </div>
                      <input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className={classnames("", {
                          invalid: errors.email || errors.emailnotfound
                        })}
                      />

                      {/* <label htmlFor="email">Email</label> */}
                      <span className="red-text">
                        {errors.email}
                        {errors.emailnotfound}
                      </span>
                    </div>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-lock" />
                        </span>
                      </div>
                      <input
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        type="password"
                        className={classnames("", {
                          invalid: errors.password || errors.passwordincorrect
                        })}
                      />
                      {/* <label htmlFor="password">Password</label> */}
                      <span className="red-text">
                        {errors.password}
                        {errors.passwordincorrect}
                      </span>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                      <div className="col-6 text-right">
                        <Button
                          variant="outline-primary"
                          className="btn btn-link px-0"
                          type="button"
                        >
                          Forgot password?
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Login.propTypes = {
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };
// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });
export default Login;
