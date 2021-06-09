import React from 'react';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
