import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import Header from './components/header'
import Main from './components/main'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page">
          <Header />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
