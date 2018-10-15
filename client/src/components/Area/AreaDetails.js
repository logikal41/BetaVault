import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Header, Button, Image, Dimmer, Loader, Segment } from 'semantic-ui-react';
import { deleteArea } from '../../actions/areas';
import MesaArch from '../../images/mesa arch.jpg';

class AreaDetails extends Component {

    render() {
        const { dispatch, history, activeSelection } = this.props;

        if (!activeSelection) {
            return (
                <Container className='comments-container'>
                    <Segment basic> 
                        <Dimmer active inverted>
                            <Loader>loading area details...</Loader>
                        </Dimmer>
                    </Segment>
                </Container>
            )
        }

        return (
            <Container className='comments-container'>

                <Header className='details-header'> {activeSelection.name}
                    <Button floated='right' negative
                        onClick={() => dispatch(deleteArea(activeSelection.id, () => history.push(`/vault/${activeSelection.vault_id}`)))}>
                        Delete
                    </Button>
                    <Button floated='right' basic={true} color='black' 
                        onClick={() => history.push(`/area/update/${activeSelection.id}`)}>
                        Update
                    </Button>
                </Header>

                <Container className='black-container'>
                    <Link className='nav-text-color-selected' to={`/vault/${activeSelection.vault_id}`}>NAME OF VAULT</Link>
                </Container>

                <div>
                    <Image centered={true} src={MesaArch} />
                </div>

                <Header className='description-header'>DESCRIPTION </Header>
                <Header className='description-body'> {activeSelection.description} </Header>

                
            </Container>
        )
    }
}

const mapStateToProps = ({ activeSelection }) => {
    return { activeSelection }
}

export default withRouter(connect(mapStateToProps)(AreaDetails));