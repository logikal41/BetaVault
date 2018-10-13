import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Image, Segment, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import SwellImage from '../../images/San Rafael Swell.jpg';
import { deleteVault } from '../../actions/vaults';

class GroupDetails extends Component {

    render() {
        const { activeSelection, history, dispatch } = this.props;

        if ( !activeSelection ) {
            return <div> Loading... </div>
        }

        return (
            <Container className='comments-container'>
                <Header className='details-header'> {activeSelection.name}
                    {/* <Button floated='right' basic={true} onClick={() => history.push(`/group/update/${activeSelection.id}`)}>Update</Button> */}
                </Header>
                <div className='vault-image'>
                    <Image centered={true} size='medium' src={SwellImage} />
                </div>
                <Segment basic>
                    <Button color='black'>Add Area</Button>
                    <Button color='black'>Add Wall</Button>
                    <Button color='black'>Add Route</Button>
                    <Button negative floated='right' onClick={() => dispatch(deleteVault(activeSelection.id, () => history.push('/')))}>
                        Delete
                    </Button>
                    <Button floated='right' basic={true} color='black' onClick={() => history.push(`/vault/update/${activeSelection.id}`)}>Update</Button>
                </Segment>
                <Header className='description-header'>DESCRIPTION </Header>
                <Header className='description-body'>{activeSelection.description} </Header>
            </Container>
        )
    }
}

const mapStateToProps = ({ activeSelection }) => {
    return { activeSelection }
}
    

export default withRouter(connect(mapStateToProps)(GroupDetails));