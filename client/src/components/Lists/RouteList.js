import React, { Component } from 'react';
import { List, Header, Container, Button, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'; 
import Map from '../../images/googlemaps.jpg';


class RouteList extends Component {

  createRoute = () => {
    const { history, wall, dispatch } = this.props;
    dispatch({ type: 'GET_ACTIVE_SELECTION', payload: wall });
    history.push('/route/new');
  }

  render() {
    const { activeList } = this.props;

    if ( activeList.length === 0) {
      return (
        <Container>
          <Header as='h1' textAlign='center'>Loading...</Header>
          <Link to='/guide'>Main Menu</Link>
        </Container>
      )
    } else {
      return (
        <Container className='list-container'>
          <Image src={Map} size='medium' />
          <Button className='list-button-creation' fluid={true} onClick={() => this.createRoute()}>Add Route</Button>
          <Header className='list-header' textAlign='left'>ROUTES</Header>
          <List>
            { activeList.map( route => {
              return (
                <List.Item
                  className='guide-list route-list' 
                  key={route.id} 
                  onClick={() => this.props.dispatch({ type: 'GET_ACTIVE_SELECTION', payload: route })}
                  >
                {route.name}
                </List.Item>
              )
            })}
          </List>
        </Container>
      );
    }
  }
}

const mapStateToProps = ({ activeList }) => {
  return { activeList };
}

export default withRouter(connect(mapStateToProps)(RouteList));
