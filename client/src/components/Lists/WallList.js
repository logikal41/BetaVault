import React, { Component } from 'react';
import { List, Header, Container, Button, Image, Loader, Dimmer, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Map from '../../images/googlemaps.jpg';

class WallList extends Component {
    
  render() {
    const { activeList, activeSelection, toggleCreate } = this.props;

    if ( activeList.length === 0) {
      return (
        <Container className='comments-container'>
          <Image src={Map} size='medium' />
          <Button className='list-button-creation' fluid={true} onClick={() => toggleCreate()}>Add Wall</Button>
            <Segment padded basic> 
              <Dimmer active inverted>
                <Loader>loading walls...</Loader>
              </Dimmer>
            </Segment>
        </Container>
      )
    } else {
      return (
        <Container className='list-container'>
          <Image src={Map} size='medium' />
          <Button className='list-button-creation' fluid={true} onClick={() => toggleCreate()}>Add Wall</Button>
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

export default connect(mapStateToProps)(WallList);
