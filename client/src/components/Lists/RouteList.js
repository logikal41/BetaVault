import React, { Component } from 'react';
import { List, Header, Container, Button, Image, Segment, Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Map from '../../images/googlemaps.jpg';


class RouteList extends Component {

  createRoute = () => {
    const { wall, dispatch } = this.props;
    dispatch({ type: 'SET_ACTIVE_SELECTION', payload: wall });
  }

  render() {
    const { activeList, toggleCreate } = this.props;

    if ( activeList.length === 0) {
      return (
        <Container className='comments-container'>
          <Image src={Map} size='medium' />
          <Button className='list-button-creation' fluid={true} onClick={() => toggleCreate()}>Add Route</Button>
            <Segment basic> 
              <Dimmer active inverted>
                <Loader>loading routes...</Loader>
              </Dimmer>
            </Segment>
        </Container>
      )
    } else {
      return (
        <Container className='list-container'>
          <Image src={Map} size='medium' />
          <Button className='list-button-creation' fluid={true} onClick={() => toggleCreate()}>Add Route</Button>
          <Header className='list-header' textAlign='left'>ROUTES</Header>
          <List>
            { activeList.map( route => {
              return (
                <List.Item
                  className='guide-list route-list' 
                  key={route.id} 
                  onClick={() => this.props.dispatch({ type: 'SET_ACTIVE_SELECTION', payload: route })}
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

export default connect(mapStateToProps)(RouteList);
