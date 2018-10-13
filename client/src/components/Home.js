import React from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import VaultList from './Lists/VaultList';


class Home extends React.Component {


    render() {

        return (
            <Container className='jumbotron'>
                <VaultList />
            </Container>
        );
    }
}


export default connect()(Home);