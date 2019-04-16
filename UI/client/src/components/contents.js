import React, { Component } from 'react';
import SelectListGroup from './common/SelectListGroup';
import Footer from './footer';
import File from './file';
import classnames from 'classnames';
import { uploadFile } from '../actions/authActions';
import Dropzone from 'react-dropzone-uploader';
import { Redirect } from 'react-router';
import axios from 'axios';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      composer: '',
      title: '',
      tempo: '',
      timeSignature: '',
      keySignature: '',
      clef: '',
      instrument: '',
      pdfName: '',
      soundFilePath:'',
      pdfFilePath:'',
      errors: {},
      fireRedirect: false
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const uploadData = {
      composer: this.state.composer,
      title: this.state.title,
      tempo: this.state.tempo,
      timeSignature: this.state.timeSignature,
      keySignature: this.state.keySignature,
      clef: this.state.clef,
      instrument: this.state.instrument,
      pdfName: this.state.pdfName,
      soundFilePath: this.props.location.state.soundFilePath
    }

    // axios
    //   .post('http://pianotes.azurewebsites.net/api/Pianotes/Create', uploadData)
    //   .then(res => console.log("hello"))
    //   .catch(err => this.setState({errors: err.response.data}))
    console.log(uploadData);

    this.setState({fireRedirect: true})
  }


  render() {

    const { errors } = this.state;

    if(this.state.fireRedirect) {
        return <Redirect to={{
          pathname: '/pianotes/pdf',
          state: {pdfFilePath: this.state.pdfFilePath}
        }}/>
    }

    // Select options for timeSignature
    const timeSignature = [
      { label: 'select time signature', value: 0 },
      { label: '4/4', value: '4/4' },
      { label: '3/4', value: '3/4' },
      { label: '2/4', value: '2/4' },
      { label: '2/2', value: '2/2' },
      { label: '3/8', value: '3/8' },
      { label: '6/8', value: '6/8' },
      { label: '9/8', value: '9/8' },
      { label: '12/8', value: '12/8' },
      { label: '5/4', value: '5/4' },
      { label: '6/4', value: '6/4' },
      { label: '3/2', value: '3/2' }
    ];

    // Select options for keySignature
    const keySignature = [
      { label: 'select key signature', value: 0 },
      { label: 'C Major', value: 'c \\major' },
      { label: 'G Major', value: 'g \\major' },
      { label: 'D Major', value: 'd \\major' },
      { label: 'A Major', value: 'a \\major' },
      { label: 'E Major', value: 'e \\major' },
      { label: 'B Major', value: 'b \\major' },
      { label: 'F# Major', value: 'fis \\major' },
      { label: 'C# Major', value: 'cis \\major' },
      { label: 'F Major', value: 'f \\major' },
      { label: 'Bb Major', value: 'bes \\major' },
      { label: 'Eb Major', value: 'ees \\major' },
      { label: 'Ab Major', value: 'aes \\major' },
      { label: 'Db Major', value: 'des \\major' },
      { label: 'Gb Major', value: 'ges \\major' },
      { label: 'Cb Major', value: 'ces \\major' }
    ];

    // Select options for clef
    const clef = [
      { label: 'select clef', value: 0 },
      { label: 'Treble', value: 'treble' },
      { label: 'Bass', value: 'bass' }
    ];

    return(
      <div className ="landing-page">
        <div className="texts">

          <p1>Create Sheet Music</p1>
          <p>Convert your sound files to sheet music</p>
        </div>


        <form noValidate onSubmit={this.onSubmit}>

          <div className="upload-page">
            <div className="col-md-8 mt5 mx-auto">
              <div className="text-data">
                  <h1 className="upload-text"> Please Fill:</h1>
                    <div className="form-group">
                      <label htmlFor="composer">Composer's Name</label>
                      <input
                        type="text"
                        className={classnames("form-control", {
                          'is-invalid': errors.composer
                        })}
                        name="composer"
                        placeholder="enter name"
                        value={this.state.composer}
                        onChange={this.onChange}
                      />
                      {errors.composer && (
                        <div className="invalid-feedback">{errors.composer}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        className={classnames("form-control", {
                          'is-invalid': errors.title
                        })}
                        name="title"
                        placeholder="enter title"
                        value={this.state.title}
                        onChange={this.onChange}
                      />
                      {errors.title && (
                        <div className="invalid-feedback">{errors.title}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="tempo">Tempo</label>
                      <input
                        type="text"
                        className={classnames("form-control", {
                          'is-invalid': errors.tempo
                        })}
                        pattern="[0-9]*"
                        name="tempo"
                        placeholder="enter tempo"
                        value={this.state.tempo}
                        onChange={this.onChange}
                      />
                      {errors.tempo && (
                        <div className="invalid-feedback">{errors.tempo}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="time">Time Signature</label>
                      <SelectListGroup
                      placeholder="time signature"
                      name="timeSignature"
                      value={this.state.timeSignature}
                      onChange={this.onChange}
                      options={timeSignature}
                      error={errors.timeSignature}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="key">Key Signature</label>
                      <SelectListGroup
                      placeholder="key signature"
                      name="keySignature"
                      value={this.state.keySignature}
                      onChange={this.onChange}
                      options={keySignature}
                      error={errors.keySignature}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="clef">Clef</label>
                      <SelectListGroup
                      placeholder="clef"
                      name="clef"
                      value={this.state.clef}
                      onChange={this.onChange}
                      options={clef}
                      error={errors.clef}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="instrument">Instrument</label>
                      <input
                        type="text"
                        className={classnames("form-control", {
                          'is-invalid': errors.instrument
                        })}
                        name="instrument"
                        placeholder="enter instrument used"
                        value={this.state.instrument}
                        onChange={this.onChange}
                      />
                      {errors.instrument && (
                        <div className="invalid-feedback">{errors.instrument}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="pdf">PDF Name</label>
                      <input
                        type="text"
                        className={classnames("form-control", {
                          'is-invalid': errors.pdfName
                        })}
                        name="pdfName"
                        placeholder="enter name for pdf"
                        value={this.state.pdfName}
                        onChange={this.onChange}
                      />
                      {errors.pdfName && (
                        <div className="invalid-feedback">{errors.pdfName}</div>
                      )}
                    </div>
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
