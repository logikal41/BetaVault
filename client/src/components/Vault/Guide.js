import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import AreaList from '../Lists/AreaList';
import VaultDetails from './Details';
import NewAreaForm from '../Forms/NewAreaForm';
import Comments from './Comments';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';


class Guide extends Component {
    state = { vault_id: '', update: false, create: false }

    componentDidMount() {
        const { dispatch, match } = this.props;

        axios.get(`/api/vaults/${match.params.id}`)
        .then( res => {
            dispatch({ type: 'GET_ACTIVE_LIST', payload: res.data.areas })
            dispatch({ type: 'GET_ACTIVE_SELECTION', payload: res.data.vault })
            this.setState({ vault_id: res.data.vault.id })
            dispatch(setHeaders(res.headers));
        })
        .catch( err => {
            dispatch(setFlash('Failed to get vault information', 'red'));
        })
    }

    toggleCreate = () => {
        this.setState({create: !this.state.create})
    }

    renderComponents = () => {
        const { vault_id, create } = this.state;

        if ( create==true ) {
            return (
                <Grid.Column width={12}>
                    <NewAreaForm
                        vault_id= {vault_id}
                        toggleCreate= {this.toggleCreate}
                    />
                </Grid.Column>
            );
        } else {
            return (
                <Grid.Column width={12}>
                    <VaultDetails />
                    <Comments />
                </Grid.Column>
            )
        };
    }

    render() {
      
        return (
            <Container className='jumbotron'>
                <Grid>
                    {this.renderComponents()}
                    <Grid.Column width={4}>
                        <AreaList
                            vault_id= {this.state.vault_id}
                            toggleCreate= {this.toggleCreate} 
                        />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default connect()(Guide);