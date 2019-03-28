import React, { Component } from "react";
import { Link } from "react-router-dom";
import SelectListGroup from "./common/SelectListGroup";
import Footer from "./footer";
import classnames from "classnames";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      composer: "",
      title: "",
      tempo: "",
      time_signature: "",
      key_signature: "",
      clef: "",
      instrument: "",
      pdf: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const uploadData = {
      composer: this.state.composer,
      title: this.state.title,
      tempo: this.state.tempo,
      time_signature: this.state.time_signature,
      key_signature: this.state.key_signature,
      clef: this.state.clef,
      instrument: this.state.instrument,
      pdf: this.state.pdf
    };
  }

  render() {
    const { errors } = this.state;

    // Select options for time
    const time = [
      { label: "select time signature", value: 0 },
      { label: "4/4", value: "4/4" },
      { label: "3/4", value: "3/4" },
      { label: "2/4", value: "2/4" },
      { label: "2/2", value: "2/2" },
      { label: "3/8", value: "3/8" },
      { label: "6/8", value: "6/8" },
      { label: "9/8", value: "9/8" },
      { label: "12/8", value: "12/8" },
      { label: "5/4", value: "5/4" },
      { label: "6/4", value: "6/4" },
      { label: "3/2", value: "3/2" }
    ];

    // Select options for key
    const key = [
      { label: "select key signature", value: 0 },
      { label: "C Major", value: "c \\major" },
      { label: "G Major", value: "g \\major" },
      { label: "D Major", value: "d \\major" },
      { label: "A Major", value: "a \\major" },
      { label: "E Major", value: "e \\major" },
      { label: "B Major", value: "b \\major" },
      { label: "F# Major", value: "fis \\major" },
      { label: "C# Major", value: "cis \\major" },
      { label: "F Major", value: "f \\major" },
      { label: "Bb Major", value: "bes \\major" },
      { label: "Eb Major", value: "ees \\major" },
      { label: "Ab Major", value: "aes \\major" },
      { label: "Db Major", value: "des \\major" },
      { label: "Gb Major", value: "ges \\major" },
      { label: "Cb Major", value: "ces \\major" }
    ];

    // Select options for clef
    const clef = [
      { label: "select clef", value: 0 },
      { label: "Treble", value: "treble" },
      { label: "Bass", value: "bass" }
    ];

    return (
      <div className="landing-page">
        <div className="texts">
          <p1>Create Sheet Music</p1>
          <p>Convert your sound files to sheet music</p>
        </div>

        <div className="outer-box">
          <div className="banner-text">
            <div className="social-links">
              <img class="icon" src="music-file.png" />
            </div>
            <p>Upload music file here</p>
            <form id="upload">
              <input
                className="file-upload"
                type="file"
                multiple="false"
                accept=".mp3, .wav, .aac, .flac, "
              />
            </form>
          </div>
        </div>

        <div className="upload-page">
          <div className="col-md-8 mt5 mx-auto">
            <div className="text-data">
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="upload-text"> Please Fill:</h1>
                <div className="form-group">
                  <label htmlFor="composer">Composer's Name</label>
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errors.composer
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
                      "is-invalid": errors.title
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
                      "is-invalid": errors.tempo
                    })}
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
                  <label htmlFor="time-signature">Time Signature</label>
                  <SelectListGroup
                    placeholder="time signature"
                    name="time-signature"
                    value={this.state.time_signature}
                    onChange={this.onChange}
                    options={time}
                    error={errors.time_signature}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="key-signature">Key Signature</label>
                  <SelectListGroup
                    placeholder="key signature"
                    name="key-signature"
                    value={this.state.key_signature}
                    onChange={this.onChange}
                    options={key}
                    error={errors.key_signature}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password2">Clef</label>
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
                      "is-invalid": errors.instrument
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
                      "is-invalid": errors.pdf
                    })}
                    name="pdf"
                    placeholder="enter name for pdf"
                    value={this.state.pdf}
                    onChange={this.onChange}
                  />
                  {errors.pdf && (
                    <div className="invalid-feedback">{errors.pdf}</div>
                  )}
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

      //<Footer />
      //</div>
    );
  }
}

export default Landing;
