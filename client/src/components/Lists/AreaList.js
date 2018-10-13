import React, { Component } from 'react';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Map from '../../images/googlemaps.jpg';

class AreaList extends Component {

  render() {
    const { activeList, history } = this.props;

    if ( activeList.length === 0) {
      return (
        <Container>
          <Header as='h1' textAlign='center'>Loading...</Header>
          <Link to='/'>Main Menu</Link>
        </Container>
      )
    } else {
      return (
        <Container className='list-container'>
          <Map />
          <Button className='list-button-creation' fluid={true} onClick={() => history.push('/area/new')}>Add Area</Button>
          <Header className='list-header' textAlign='left'>AREAS</Header>
          <List>
            { activeList.map( area => {
              return (
                <List.Item key={area.id}>
                  <Link className='guide-list' to={`/area/${area.id}`}> {area.name} </Link>
                </List.Item>
              )
            })}
          </List>
        </Container>
      );
    }
  }
}

const mapStateToProps = ( { activeList }) => { 
  return { activeList }
}

export default withRouter(connect(mapStateToProps)(AreaList));
