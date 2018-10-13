import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class GroupDetails extends Component {

    render() {
        const { activeSelection } = this.props;

        if ( !activeSelection ) {
            return <div> Loading... </div>
        }

        return (
            <Container className='comments-container'>
                <Header className='details-header'> {activeSelection.name}
                    {/* <Button floated='right' basic={true} onClick={() => history.push(`/group/update/${activeSelection.id}`)}>Update</Button> */}
                </Header>
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