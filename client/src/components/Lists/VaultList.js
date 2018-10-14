import React, { Component } from 'react';
import { Card, Image, Icon, Container, Grid, Segment, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';
import SwellImage from '../../images/San Rafael Swell.jpg';

class VaultList extends Component {
    state = { vaults: [] };

    // Retrieve all the vaults from the database
    componentDidMount() {
        const { dispatch } = this.props;

        axios.get('/api/vaults')
        .then( res => {
          this.setState({vaults: res.data });
          // clear out the active selection and list every time you go to the home screen
          dispatch({ type: 'GET_ACTIVE_SELECTION', payload: {} });
          dispatch({ type: 'GET_ACTIVE_LIST', payload: [] });
          dispatch(setHeaders(res.headers));
        })
        .catch( err => {
          dispatch(setFlash('Failed to get vault list', 'red'));
        })
    }

  render() {
      const { vaults } = this.state;
      const { history } = this.props;

      return (
        <Container className='vault-list'>
            <Segment basic>
                <Button className='list-button-creation' fluid={true} onClick={() => history.push('/vault/new')}>New Vault</Button>
            </Segment>
            {/* List out all vaults in the database as cards */}
            <Grid columns={4}>
            { vaults.map( vault =>
                <Grid.Column key={vault.id}>
                    <Card onClick={() => history.push(`/vault/${vault.id}`)}>
                        <Image src={SwellImage} />
                        <Card.Content>
                            <Card.Header>{vault.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>Created: 2018</span>
                            </Card.Meta>
                            <Card.Description>{vault.description}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Icon name='user' />
                            22 Members
                        </Card.Content>
                    </Card>
                </Grid.Column>
            )}
            </Grid>
        </Container>
      )
  }
}

export default withRouter(connect()(VaultList));
