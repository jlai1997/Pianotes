import React, { Component } from 'react';
import SelectListGroup from './common/SelectListGroup';
import Footer from './footer';
import File from './file';
import { Redirect } from 'react-router';
import classnames from 'classnames';
import axios from 'axios';

class Upload extends Component {
  constructor() {
    super()
    this.state = {
      file: '',
      fireRedirect: false,
      errors: {},
      soundFilePath: ''
    }

    this.uploadFile = this.uploadFile.bind(this);
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  uploadFile(event) {
        this.file = event.target.files[0];
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    if (this.file) {
      let data = new FormData();
      data.append('file', this.file);
      data.append('name', this.file.name);

      axios
        .post('/api/upload/music', data)
        .then(res => this.setState({soundFilePath: res.data, fireRedirect: true }, () => {console.log(this.state)}))
        .catch(err => this.setState({errors: err.response.data}))

    }
    else{
      alert("empty input file");
    }

  }

  render() {

    const { errors } = this.state;

    if(this.state.fireRedirect) {
        return <Redirect to={{
          pathname: '/contents',
          state: {soundFilePath: this.state.soundFilePath}
        }}/>
    }

    return(
      <div className ="landing-page">
        <div className="texts">

          <p1>Create Sheet Music</p1>
          <p>Convert your sound files to sheet music</p>
        </div>


        <form noValidate onSubmit={this.onSubmit}>

          <div className="outer-box">
            <div>
            <div className="banner-text">
                <div className="social-links">
                  <img
                    id= "upload"
                    class= "icon"
                    src="music-file.png"
                  />
                </div>
                <File/>

                <input
                  class="file"
                  id="file"
                  type="file"
                  name="filetoupload"
                  multiple="false"
                  accept="audio/*"
                  onChange={this.uploadFile}
                />
                {errors.file && (
                  <div className="invalid-feedback">{errors.file}</div>
                )}
              </div>
            </div>
          </div>

          <div className="upload-page">
            <div className="col-md-8 mt5 mx-auto">
              <div className="text-data">

                    <button
                      type="submit"
                      className="btn btn-lg btn-primary btn-block"
                    >
                      Done
                    </button>
                </div>
              </div>
            </div>

        </form>
        <Footer />
      </div>
    )
  }
}

export default Upload;
