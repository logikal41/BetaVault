import React from 'react';
import { Container, Segment, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VaultList from './Lists/VaultList';


class Home extends React.Component {


    render() {
        const { history } = this.props;

        return (
            <Container className='jumbotron'>
                <Segment className='vault-list-buttons'>
                    <Button className='list-button-creation' fluid={true} onClick={() => history.push('/vault/new')}>New Vault</Button>
                </Segment>
                <VaultList />
            </Container>
        );
    }
}


export default withRouter(connect()(Home));