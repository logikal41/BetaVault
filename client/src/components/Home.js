import React from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';


class Home extends React.Component {


    render() {
        return <Header as="h3">Welcome home!</Header>
    }
}


export default connect()(Home);