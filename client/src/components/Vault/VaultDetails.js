import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Image, Segment, Button, Dimmer, Loader} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import MesaArch from '../../images/mesa arch.jpg';
import { deleteVault } from '../../actions/vaults';

class GroupDetails extends Component {

    render() {
        const { activeSelection, history, dispatch } = this.props;

        if ( !activeSelection ) {
            return (
                <Container className='comments-container'>
                    <Segment basic> 
                        <Dimmer active inverted>
                            <Loader>loading vault details...</Loader>
                        </Dimmer>
                    </Segment>
                </Container>
            )
        }

        return (
            <Container className='comments-container'>
                <Header className='details-header'> {activeSelection.name}
                    <Button negative floated='right' 
                        onClick={() => dispatch(deleteVault(activeSelection.id, () => history.push('/')))}>
                        Delete
                    </Button>
                    <Button floated='right' basic={true} color='black' 
                        onClick={() => history.push(`/vault/update/${activeSelection.id}`)}>
                        Update
                    </Button>
                </Header>
                <div>
                    <Image centered={true} src={MesaArch} />
                </div>
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