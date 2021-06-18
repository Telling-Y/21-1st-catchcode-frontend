import React from 'react';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import FilterPage from './Pages/FilterPage/FilterPage';
// import Nav from './Component/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/Login" component={Login} /> */}
          <Route exact path="/products/serach/" component={FilterPage} />
          {/* 아직 백엔드에서 RESTfull API조건에 맞는 값을 받은게 아니라서 할 수 없음 */}
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
