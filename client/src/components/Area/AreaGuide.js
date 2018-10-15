import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import WallList from '../Lists/WallList';
import AreaDetails from './AreaDetails';
import Comments from './Comments';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';
import NewWallForm from '../Forms/NewWallForm';


class AreaGuide extends Component {
    state = { create: false };

    componentDidMount() {
        const { dispatch, match } = this.props;

        axios.get(`/api/areas/${match.params.id}`)
        .then( res => {
            dispatch({ type: 'SET_ACTIVE_SELECTION', payload: res.data.area })
            dispatch({ type: 'SET_ACTIVE_LIST', payload: res.data.walls })
            dispatch(setHeaders(res.headers));
        })
        .catch( err => {
            dispatch(setFlash('Failed to get area information!', 'red'));
        })
    }

    toggleCreate = () => {
        this.setState({create: !this.state.create})
    }

    renderComponents = () => {
        const { create } = this.state;
        const { id } = this.props.activeSelection;

        // render the new wall form if create is true
        if ( create ) {
            return (
                <Grid.Column width={12}>
                    <NewWallForm
                        area_id= {id}
                        toggleCreate= {this.toggleCreate}
                    />
                </Grid.Column>
            );
        // otherwise render the area information
        } else {
            return (
                <Grid.Column width={12}>
                    <AreaDetails />
                    <Comments />
                </Grid.Column>
            )
        }
    }

    render() {
      
        return (
            <Container>
                <Grid>
                    {this.renderComponents()}
                    <Grid.Column width={4}>
                        <WallList 
                            toggleCreate={this.toggleCreate}
                        />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = ({ activeSelection }) => {
    return {activeSelection}
}

export default connect(mapStateToProps)(AreaGuide);