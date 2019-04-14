import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';

import LandingPage from './landingpage';
import Account from './account';
import Legal from './legal';
import About from './about';
import Register from './register';
import Upload from './upload';
import Contents from './contents';
import Profile from './profile';
import Pdf from './pdf';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/login" component={Account}/>
    <Route path="/terms" component={Legal}/>
    <Route path="/about" component={About}/>
    <Route path="/register" component={Register}/>
    <PrivateRoute exact path="/upload" component={Upload} />
    <PrivateRoute exact path="/contents" component={Contents} />
    <PrivateRoute exact path="/profile" component={Profile} />
    <PrivateRoute exact path="/pdf" component={Pdf} />
  </Switch>
)

export default Main;
