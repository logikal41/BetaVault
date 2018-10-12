import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
// import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import VaultGuide from './Vault/Guide';
import { connect } from 'react-redux';

class App extends Component {

  renderNavBar = () => {
    const { user } = this.props;
    if (user.id) {
      return (
        <NavBar />
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderNavBar() }
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <AuthRoute exact path='/vault/:id' component={VaultGuide} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(App);
