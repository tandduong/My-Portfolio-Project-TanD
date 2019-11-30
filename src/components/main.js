import React from 'react';
import {Switch, Route} from 'react-router-dom';

import MainPage from './mainpage';
import Resume from './resume';
import Projects from './projects';
import Contacts from './contacts'
import About from './about';

const Main = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/about" component={About} />
  </Switch>
)

export default Main;