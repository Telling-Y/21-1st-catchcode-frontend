import React from 'react';
import Main from './Pages/Main/Main';
// import Login from './Pages/Login/Login';
// import Detail from './Pages/Detail/Detail';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/Login" component={Login} /> */}
          {/* <Route exact path="/products/:id" component={Detail} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
