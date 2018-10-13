import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import BetaVaultWord from '../images/BetaVault_Word.png';

class NavBar extends Component {

  render() {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <div>
            <Menu inverted={true} borderless={true}>
              <Link to='/'>
                <Image src={BetaVaultWord} className='welcome-button' size='small' inline={true} spaced='left' />
              </Link>
              <Menu.Menu position='right'>
                <Menu.Item
                  name='Admin'
                />
                <Menu.Item
                  name='Guide'
                />
                <Menu.Item
                  name='Profile'
                />
                <Menu.Item
                  name='Logout'
                  onClick={() => dispatch(handleLogout(history))}
                />
              </Menu.Menu>
            </Menu>
        </div>
      );
    }
    else {
        return <div></div>
    }
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
