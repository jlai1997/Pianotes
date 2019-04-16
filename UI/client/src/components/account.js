import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/pianotes/profile');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/pianotes/upload');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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

    this.props.loginUser(user);
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
                  <Link to="/pianotes/register" target="_top" class="cannot-login">Don't have an account? Register here</Link>
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

Account.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Account);
