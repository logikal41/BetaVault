import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Header, Container, Button } from 'semantic-ui-react';
import { deleteRoute } from '../../actions/routes';
import { Link, withRouter } from 'react-router-dom';

class RouteDetails extends Component {

    removeRoute = (id) => {
        const { dispatch, toggleWallDetails } = this.props;
        dispatch(deleteRoute(id));
        toggleWallDetails();
    }


    renderNavLinks = () => {
        const { activeSelection, area_name, area_id, wall_name, toggleWallDetails } = this.props;
     
        return (
            <Container>
                <Link className='nav-text-color' to='/guide'>San Rafael Swell - North > </Link>
                <Link className='nav-text-color' to={`/area/${area_id}`}>
                    {area_name} > </Link> 
                <Link className='nav-text-color-selected' to={`/wall/${activeSelection.wall_id}`} 
                onClick={() => toggleWallDetails()}>
                    {wall_name}
                </Link>
            </Container>
        )
    }

    render() {
        
        const { activeSelection, history } = this.props;

        return (
            <Container className='comments-container'>

                <Header className='details-header'> {activeSelection.name} 
                    <Button floated='right' basic={true} 
                        onClick={() => this.removeRoute(activeSelection.id)}>
                        Delete
                    </Button>
                    <Button floated='right' basic={true}
                        onClick={() => history.push(`/route/update/${activeSelection.id}`)}>
                        Update
                    </Button> 
                </Header>

                <Container className='black-container'>
                    {this.renderNavLinks()}
                </Container>

                <Container>  
                    <List>
                        <List.Item>Difficulty: {activeSelection.difficulty}</List.Item>
                        <List.Item>Pitch Count: {activeSelection.pitch}</List.Item>
                        <List.Item>Route length: {activeSelection.length}</List.Item>
                        <List.Item>First Ascent: {activeSelection.first_ascent}</List.Item>
                        <List.Item>Description: {activeSelection.description}</List.Item>
                        <List.Item>Required Gear: {activeSelection.gear}</List.Item>
                        <List.Item>Descent: {activeSelection.descent}</List.Item>
                    </List>
                </Container>
            </Container>
        )
    }
}

const mapStateToProps = ({ activeSelection }) => {
    return { activeSelection }
}

export default withRouter(connect(mapStateToProps)(RouteDetails));