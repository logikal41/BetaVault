import React, { Component } from 'react';
import { List, Header, Container, Button, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Map from '../../images/googlemaps.jpg';

class WallList extends Component {
    
  render() {
    const { activeList, activeSelection, history } = this.props;

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
          <Button className='list-button-creation' fluid={true} onClick={() => history.push('/wall/new')}>Add Wall</Button>
          <Header className='list-header' textAlign='left'>WALLS IN {activeSelection.name.toUpperCase()}</Header>
          <List>
            { activeList.map( wall => {
              return (
                <List.Item key={wall.id}>
                  <Link className='guide-list' to={`/wall/${wall.id}`}> {wall.name} </Link>
                </List.Item>
              )
            })}
          </List>
        </Container>
      );
    }
  }
}

const mapStateToProps = ({ activeList, activeSelection }) => {
  return { activeList, activeSelection }
}

export default withRouter(connect(mapStateToProps)(WallList));
