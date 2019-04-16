import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import Footer from './footer';
import './pdf.css';

class Pdf extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="pdf-page">
        <div className="pdf-container">
          <Document
            className=""
            file='scale.pdf'
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
          <Page pageNumber={pageNumber} />
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
        </div>

        <div className="pdf-container">
          <a href="scale.pdf" download>
            <button
              type="submit"
              className="btn btn-lg btn-primary btn-block"
            >
              Download
            </button>
          </a>

        </div>

        <Footer/>
      </div>
    );
  }
}

export default Pdf;
