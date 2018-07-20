import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
// import AreaList from './Lists/AreaList';
import VaultDetails from './Details';
import Comments from './Comments';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';


class Guide extends Component {

    componentDidMount() {
        const { dispatch } = this.props;

        axios.get('/api/vaults/2') // group 1 is hardcoded since we are only doing this for the san rafael swell at this time
        .then( res => {
        //   dispatch({ type: 'GET_ACTIVE_LIST', payload: res.data.areas })
          dispatch({ type: 'GET_ACTIVE_SELECTION', payload: res.data })
          dispatch(setHeaders(res.headers));
        })
        .catch( err => {
          dispatch(setFlash('Failed to get vault information', 'red'));
        })
    }

    render() {
      
        return (
            <Container>
                <Grid>
                    <Grid.Column width={4}>
                        {/* <AreaList /> */}
                        Area List
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <VaultDetails />
                        <Comments />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default connect()(Guide);