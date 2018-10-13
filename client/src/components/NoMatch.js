import React, { Component } from 'react';
import { Header, Image, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ClimberFall from '../images/climber fall.jpg'

class NoMatch extends Component {
  render() {
    return (
      <Container className='jumbotron'>
        <Image centered={true} src={ClimberFall} />
        <Header as='h1' textAlign='center'>
          You are off route!
        </Header>
        <Header as='h2' textAlign='center'>
          <Link to='/'> Return Home!</Link>
        </Header>
      </Container>
    );
  }
}

export default NoMatch;
