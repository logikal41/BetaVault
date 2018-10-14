import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Image, Segment, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import MesaArch from '../../images/mesa arch.jpg';
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
                    <Button negative floated='right' onClick={() => dispatch(deleteVault(activeSelection.id, () => history.push('/')))}>
                        Delete
                    </Button>
                    <Button floated='right' basic={true} color='black' onClick={() => history.push(`/vault/update/${activeSelection.id}`)}>Update</Button>
                </Header>
                <div>
                    <Image centered={true} src={MesaArch} />
                </div>
                <Segment textAlign='center' basic>
                    <Button color='black' size='large'>Add Area</Button>
                    <Button color='black' size='large'>Add Wall</Button>
                    <Button color='black' size='large'>Add Route</Button>
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