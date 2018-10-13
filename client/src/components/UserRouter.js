import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import Welcome from './Welcome';

class UserRouter extends Component {

  render() {
    const { user } = this.props;

    if (user.id) {
        return <Home />
    }
    else {
        return <Welcome />
    }
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
}
export default connect(mapStateToProps)(UserRouter);