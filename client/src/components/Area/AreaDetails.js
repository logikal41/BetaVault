import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Header, Button } from 'semantic-ui-react';
import { deleteArea } from '../../actions/areas';

class AreaDetails extends Component {

    render() {
        const { dispatch, history, activeSelection } = this.props;

        if (!activeSelection) {
            return <div> Loading... </div>
        }

        return (
            <Container className='comments-container'>

                <Header className='details-header'> {activeSelection.name}
                    <Button floated='right' basic={true} 
                        onClick={() => dispatch(deleteArea(activeSelection.id, () => history.push('/guide')))}>
                        Delete
                    </Button>
                    <Button floated='right' basic={true} onClick={() => history.push(`/area/update/${activeSelection.id}`)}>Update</Button>
                </Header>

                <Container className='black-container'>
                    <Link className='nav-text-color-selected' to='/guide'>San Rafael Swell - North</Link>
                </Container>

                <Container>
                    <Header className='description-header'>DESCRIPTION </Header>
                    <Header className='description-body'> {activeSelection.description} </Header>
                </Container>
                
            </Container>
        )
    }
}

const mapStateToProps = ({ activeSelection }) => {
    return { activeSelection }
}

export default withRouter(connect(mapStateToProps)(AreaDetails));