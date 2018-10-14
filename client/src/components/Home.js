import React from 'react';
import { Container } from 'semantic-ui-react';
import VaultList from './Lists/VaultList';


const Home = () => {

    return (
        <Container className='jumbotron'>
            <VaultList />
        </Container>
    );
}


export default Home;