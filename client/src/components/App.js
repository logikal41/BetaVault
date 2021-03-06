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
import VaultGuide from './Vault/VaultGuide';
import NewVaultForm from './Forms/NewVaultForm';
import UpdateVaultForm from './Forms/UpdateVaultForm';
import AreaGuide from './Area/AreaGuide';
import UpdateAreaForm from './Forms/UpdateAreaForm';
import WallGuide from './Wall/WallGuide';
import UpdateWallForm from './Forms/UpdateWallForm';
import UpdateRouteForm from './Forms/UpdateRouteForm';

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
            <ProtectedRoute exact path='/vault/new' component={NewVaultForm} authLevel={["god", "admin", "user"]} />
            <ProtectedRoute exact path='/vault/update/:id' component={UpdateVaultForm} authLevel={["god", "admin", "user"]} />
            <ProtectedRoute exact path='/vault/:id' component={VaultGuide} authLevel={["god", "admin", "user"]} />
            <ProtectedRoute exact path='/area/update/:id' component={UpdateAreaForm} authLevel={["god", "admin", "user"]} />
            <ProtectedRoute exact path='/area/:id' component={AreaGuide} authLevel={["god", "admin", "user"]} />
            <ProtectedRoute exact path='/wall/update/:id' component={UpdateWallForm} authLevel={["god", "admin", "user"]} />
            <ProtectedRoute exact path='/wall/:id' component={WallGuide} authLevel={["god", "admin", "user"]} />
            <ProtectedRoute exact path='/route/update/:id' component={UpdateRouteForm} authLevel={["god", "admin", "user"]} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;