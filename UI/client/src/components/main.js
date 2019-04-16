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
    <Route exact path="/pianotes" component={LandingPage} />
    <Route path="/pianotes/login" component={Account}/>
    <Route path="/pianotes/terms" component={Legal}/>
    <Route path="/pianotes/about" component={About}/>
    <Route path="/pianotes/register" component={Register}/>
    <PrivateRoute exact path="/pianotes/upload" component={Upload} />
    <PrivateRoute exact path="/pianotes/contents" component={Contents} />
    <PrivateRoute exact path="/pianotes/profile" component={Profile} />
    <PrivateRoute exact path="/pianotes/pdf" component={Pdf} />
  </Switch>
)

export default Main;
