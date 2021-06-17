import React from 'react';
// import Nav from './Component/Nav/Nav';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Sign from './Pages/Sign/Sign';
import Detail from './Pages/Detail/Detail';
import FilterPage from './Pages/FilterPage/FilterPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Sign" component={Sign} />
          <Route exact path="/products" component={FilterPage} />
          <Route exact path="/products/:id" component={Detail} />
          <Route exact path="/*" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
