import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';
import Footer from './footer';

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    axios
      .post('/api/users/register', newUser)
      .then(res => this.props.history.push('/login'))
      .catch(err => this.setState({errors: err.response.data}));

  }

  render() {
    const { errors } = this.state;

    return (
      <div className="background">
        <div className="container">
        <div className="container2">
          <img
            src="user.png"
            alt="logo"
            className="logo-img-account"
          />
          <div className="row">
            <div className="col-md-8 mt5 mx-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3"> Register Here</h1>
                <div className="form-group">
                  <label htmlFor="email">Full Name</label>
                  <input
                    type="text"
                    className={classnames("form-control", {
                      'is-invalid': errors.name
                    })}
                    name="name"
                    placeholder="enter name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
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
                    placeholder="create password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password2">Confirm Password</label>
                  <input
                    type="password"
                    className={classnames("form-control", {
                      'is-invalid': errors.password2
                    })}
                    name="password2"
                    placeholder="re-enter password"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                  {errors.password2 && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
                </div>
                <div className="terms">
                  <input
                    type="checkbox"
                    name="checkbox"
                    value="check"
                    id="agree" /> I have read and agree to the <a href="/legal" target='_blank'> Terms and Conditions</a>
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block"
                >
                  Done
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

export default Register;
