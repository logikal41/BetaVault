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
import NewVaultForm from './Forms/NewVaultForm';
import UpdateVaultForm from './Forms/UpdateVaultForm';
import NewAreaForm from './Forms/NewAreaForm';
import AreaGuide from './Area/AreaGuide';
import UpdateAreaForm from './Forms/UpdateAreaForm';

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
            <ProtectedRoute exact path='/vault/new' component={NewVaultForm} />
            <ProtectedRoute exact path='/area/new' component={NewAreaForm} />
            <ProtectedRoute exact path='/vault/update/:id' component={UpdateVaultForm} />
            <ProtectedRoute exact path='/vault/:id' component={VaultGuide} />
            <ProtectedRoute exact path='/area/update/:id' component={UpdateAreaForm} />
            <ProtectedRoute exact path='/area/:id' component={AreaGuide} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;