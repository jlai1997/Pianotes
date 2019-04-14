import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import Footer from './footer';

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
      <div className="landing-page">
        <div className="pdf-page">
          <Document
            file='scale.pdf'
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default Pdf;
