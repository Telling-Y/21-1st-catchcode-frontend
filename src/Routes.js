import React from 'react';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Sign from './Pages/Sign/Sign';

import Nav from './Components/Nav/Nav';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Sign" component={Sign} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
