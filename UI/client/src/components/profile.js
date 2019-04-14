import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../actions/profileActions';
import Spinner from './common/Spinner';
import Footer from './footer';
import { Table } from 'react-bootstrap';

class Profile extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    }

    const data = [
      {title: 'Song 1', path: 'scale.pdf'},
      {title: 'Song 2', path: 'scale.pdf'},
      {title: 'Song 3', path: 'scale.pdf'}
    ];
    return (

      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="title">Welcome {user.name}</h1>

              <Table striped bordered hover className="account-table">
                <thead>
                  <tr>
                    <th>PDF Name</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                {
                data.map(x => (
                  <tr>
                    <td>
                      <a href="/pdf">
                        {x.title}
                      </a>
                    </td>
                    <td>
                      <a href="scale.pdf" download>
                        <img
                          src="https://image.flaticon.com/icons/svg/138/138601.svg"
                          alt="logo"
                          style={{ width: '25px' }}
                        />
                      </a>
                    </td>
                  </tr>
                ))}
                </tbody>
                </Table>;

              <div style={{ marginBottom: '60px' }} />
                <button
                  onClick={this.onDeleteClick.bind(this)}
                  className="btn btn-danger"
                >
                  Delete My Account
                </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    );
  }
}

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Profile
);
