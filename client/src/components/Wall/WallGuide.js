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


class Guide extends Component {
    state={ wall: {}, area_name: '' };

    componentDidMount() {
        const { dispatch, match } = this.props;

        axios.get(`/api/walls/${match.params.id}`)
        .then( res => {
            dispatch({ type: 'GET_ACTIVE_SELECTION', payload: res.data.wall })
            dispatch({ type: 'GET_ACTIVE_LIST', payload: res.data.routes })
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
        dispatch({ type: 'GET_ACTIVE_SELECTION', payload: wall })
    }

    render() {
        const { activeSelection } = this.props;
        const { area_name, wall } = this.state;

        if (!activeSelection) {
            return <Header as='h1' textAlign='center'>Loading...</Header>
        }
      
        return (
            <Container>
                <Grid>
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
                    <Grid.Column width={4}>
                        <RouteList wall={wall} />
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