import React, { Component } from 'react';
import { List, Header, Container, Button, Image, Segment, Dimmer, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Map from '../../images/googlemaps.jpg';

class AreaList extends Component {

  render() {
    const { activeList, toggleCreate } = this.props;

    if ( activeList.length === 0) {
      return (
        <Container className='comments-container'>
          <Image src={Map} size='medium' />
          <Button className='list-button-creation' fluid={true} onClick={() => toggleCreate()}>Add Area</Button>
            <Segment padded basic> 
              <Dimmer active inverted>
                <Loader>loading areas...</Loader>
              </Dimmer>
            </Segment>
        </Container>
      )
    } else {
      return (
        <Container className='list-container'>
          <Image src={Map} size='medium' />
          <Button className='list-button-creation' fluid={true} onClick={() => toggleCreate()}>Add Area</Button>
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

export default connect(mapStateToProps)(AreaList);
