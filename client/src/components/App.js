import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Register from './Register';
import Flash from './Flash';
import UserRouter from './UserRouter';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import VaultGuide from './Vault/Guide';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={UserRouter} />
            <AuthRoute exact path='/register' component={Register} />
            <ProtectedRoute exact path='/vault/:id' component={VaultGuide} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;