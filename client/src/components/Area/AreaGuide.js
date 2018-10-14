import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import WallList from '../Lists/WallList';
import AreaDetails from './AreaDetails';
import Comments from './Comments';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';


class Guide extends Component {

    componentDidMount() {
        const { dispatch, match } = this.props;

        axios.get(`/api/areas/${match.params.id}`)
        .then( res => {
            dispatch({ type: 'GET_ACTIVE_LIST', payload: res.data.walls })
            dispatch({ type: 'GET_ACTIVE_SELECTION', payload: res.data.area })
            dispatch(setHeaders(res.headers));
        })
        .catch( err => {
            dispatch(setFlash('Failed to get area information', 'red'));
        })
    }

    render() {
      
        return (
            <Container>
                <Grid>
                    <Grid.Column width={12}>
                        <AreaDetails />
                        <Comments />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <WallList />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default connect()(Guide);