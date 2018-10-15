import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Header } from 'semantic-ui-react';
import RouteList from '../Lists/RouteList';
import WallDetails from './WallDetails';
import RouteDetails from '../Route/RouteDetails';
import Comments from './Comments';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';
import NewRouteForm from '../Forms/NewRouteForm';


class Guide extends Component {
    state={ wall: {}, area_name: '', create: false };

    componentDidMount() {
        const { dispatch, match } = this.props;

        axios.get(`/api/walls/${match.params.id}`)
        .then( res => {
            dispatch({ type: 'SET_ACTIVE_SELECTION', payload: res.data.wall })
            dispatch({ type: 'SET_ACTIVE_LIST', payload: res.data.routes })
            this.setState({ wall: res.data.wall })
            
            axios.get(`/api/areaname/${res.data.wall.area_id}`)
            .then( res => {
                this.setState({ area_name: res.data });
            })
            .catch( err => {
                dispatch(setFlash('Failed to get the area name', 'red'));
            })

            dispatch(setHeaders(res.headers));
        })
        .catch( err => {
          dispatch(setFlash('Failed to get wall information', 'red'));
        })
    }

    toggleWallDetails = () => {
        const { dispatch } = this.props;
        const { wall } = this.state;
        dispatch({ type: 'SET_ACTIVE_SELECTION', payload: wall })
    }

    toggleCreate = () => {
        this.setState({create: !this.state.create})
    }

    renderComponents = () => {
        const { area_id, create, wall, area_name } = this.state;
        const { activeSelection } = this.props;

        // render the new wall form if create is true
        if ( create ) {
            return (
                <Grid.Column width={12}>
                    <NewRouteForm
                        area_id= {area_id}
                        toggleCreate= {this.toggleCreate}
                    />
                </Grid.Column>
            );
        // otherwise render the area information
        } else {
            return (
                <Grid.Column width={12}>
                    {activeSelection.wall_id ? 
                        <RouteDetails 
                            area_name={area_name} 
                            area_id={wall.area_id} 
                            wall_name={wall.name}
                            toggleWallDetails={this.toggleWallDetails} 
                        /> 
                        : 
                        <WallDetails area_name={area_name} />
                    }
                    <Comments />
                </Grid.Column>
            )
        }
    }

    render() {
        const { activeSelection } = this.props;
        const { wall } = this.state;

        if (!activeSelection) {
            return <Header as='h1' textAlign='center'>Loading...</Header>
        }
      
        return (
            <Container>
                <Grid>
                    {this.renderComponents()}
                    <Grid.Column width={4}>
                        <RouteList 
                            wall={wall}
                            toggleCreate={this.toggleCreate}
                        />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = ({ activeSelection }) => {
    return { activeSelection }
}

export default connect(mapStateToProps)(Guide);