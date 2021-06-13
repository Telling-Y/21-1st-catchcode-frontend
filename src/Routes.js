import React from 'react';
// import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Sign from './Pages/Sign/Sign';
// import Nav from './Component/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Sign" component={Sign} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
