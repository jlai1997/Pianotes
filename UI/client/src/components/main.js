import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Account from './account';
import Legal from './legal';
import About from './about';
import Register from './register';
import Upload from './upload';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/login" component={Account}/>
    <Route path="/legal" component={Legal}/>
    <Route path="/about" component={About}/>
    <Route path="/register" component={Register}/>
    <Route path="/upload" component={Upload}/>
  </Switch>
)

export default Main;
