import React from 'react';
import { Container, Segment, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import VaultList from './Lists/VaultList';


class Home extends React.Component {


    render() {
        return (
            <Container className='jumbotron'>
                <Segment className='vault-list-buttons'>
                    <Button>Create Vault</Button>
                </Segment>
                <VaultList />
            </Container>
        );
    }
}


export default connect()(Home);