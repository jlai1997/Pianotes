import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';
import classnames from 'classnames';
import Footer from './footer';
import { Link } from 'react-router-dom';

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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/profile');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="background">
        <div className="container">
        <div className="container1">
          <div className="account-logo">
            <img
              src="user.png"
              alt="logo"
              className="logo-img-account"
            />
          </div>
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
                    id="agree" /> I have read and agree to the <Link to="/terms" target='_blank'> Terms and Conditions</Link>
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
