import React, { Component } from 'react';
import { Card, Image, Icon, Container, Grid, Segment, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';
import SwellImage from '../../images/San Rafael Swell.jpg';

class VaultList extends Component {

    // Retrieve all the vaults from the database
    componentDidMount() {
        const { dispatch } = this.props;

        axios.get('/api/vaults')
        .then( res => {
          // clear out the active selection every time you go to the vault list
          dispatch({ type: 'SET_ACTIVE_SELECTION', payload: {} });
          dispatch({ type: 'SET_ACTIVE_LIST', payload: res.data });
          dispatch(setHeaders(res.headers));
        })
        .catch( err => {
          dispatch(setFlash('Failed to get vault list', 'red'));
        })
    }

  render() {
      const { history, activeList } = this.props;

      return (
        <Container>
            <Segment basic>
                <Button className='list-button-creation' fluid={true} 
                    onClick={() => history.push('/vault/new')}>
                    New Vault
                </Button>
            </Segment>
            <Container className='comments-container'>
            {/* List out all vaults in the database as cards */}
                <Grid columns={4}>
                { activeList.map( vault =>
                    <Grid.Column key={vault.id}>
                        <Card onClick={() => history.push(`/vault/${vault.id}`)}>

                            {/* Hard coded image for now */}
                            <Image src={SwellImage} />

                            <Card.Content>
                                <Card.Header>{vault.name}</Card.Header>
                                <Card.Meta>

                                    {/* Hard coded creation date */}
                                    <span className='date'>Created: 2018</span>

                                </Card.Meta>
                                <Card.Description>{vault.description}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>

                                {/* Hard coded member count */}
                                <Icon name='user' />
                                22 Members
                                
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )}
                </Grid>
            </Container>
        </Container>
      )
  }
}

const mapStateToProps = ({ activeList }) => {
    return ({ activeList });
}

export default withRouter(connect(mapStateToProps)(VaultList));
