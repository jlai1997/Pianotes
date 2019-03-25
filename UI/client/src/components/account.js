import React, { Component } from 'react';
import Footer from './footer';
import axios from 'axios';
import classnames from 'classnames';
import './account.css';

class Account extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange= this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    axios
      .post('/api/users/login', user)
      .then(res => {
        localStorage.setItem('usertoken', res.data)
        this.props.history.push('/')
      })
      .catch(err => this.setState({errors: err.response.data}));

  }

  render() {
    const { errors } = this.state;

    return(
      <div className="background">
        <div className="container">
        <div className="container1">
          <div style={{width: '100%', margin: 'auto'}}>
              <div className="account-logo">
              <img
                src="user.png"
                alt="logo"
                className="logo-img-account"
              />
              </div>
          </div>
          <div className="row">
            <div className="col-md-8 mt5 mx-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3"> Welcome Back!</h1>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    className={classnames("form-control", {
                      'is-invalid': errors.email
                    })}
                    name="email"
                    placeholder="your@email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className={classnames("form-control", {
                      'is-invalid': errors.password
                    })}
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="register">
                  <a href="/register" target="_top" class="cannot-login">Don't have an account? Register here</a>
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
  }
}

export default Account;
