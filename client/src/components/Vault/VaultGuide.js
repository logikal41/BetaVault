import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import AreaList from '../Lists/AreaList';
import VaultDetails from './VaultDetails';
import NewAreaForm from '../Forms/NewAreaForm';
import Comments from './Comments';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';


class VaultGuide extends Component {
    state = { create: false, edit: false };

    // Get all the areas within this vault and check user authorization
    componentDidMount() {
        const { dispatch, match, history, user } = this.props;
        
        // check if site admin
        if( user.role === 'god' || user.role === 'admin'){
            // set user permissions (edit privileges)
            this.setState({edit: !this.state.edit})
            // pull information from database
            axios.get(`/api/vaults/${match.params.id}`)
            .then( res => {
                dispatch({ type: 'SET_ACTIVE_SELECTION', payload: res.data.vault })
                dispatch({ type: 'SET_ACTIVE_LIST', payload: res.data.areas })
                dispatch(setHeaders(res.headers));
            })
            .catch( err => {
                dispatch(setFlash('Failed to get vault information', 'red'));
                // push the user back to the vault list
                history.push('/');
            })
        } else {

            axios.get(`/api/privileges/${match.params.id}`)
            .then( res => {
    
                if(res.data) {
                    axios.get(`/api/vaults/${match.params.id}`)
                    .then( res => {
                        dispatch({ type: 'SET_ACTIVE_SELECTION', payload: res.data.vault })
                        dispatch({ type: 'SET_ACTIVE_LIST', payload: res.data.areas })
                        dispatch(setHeaders(res.headers));
                    })
                    .catch( err => {
                        dispatch(setFlash('Failed to get vault information', 'red'));
                        // push the user back to the vault list
                        history.push('/');
                    })
                } else {
                    dispatch(setFlash('You do not have access to this vault.', 'red'));
                    history.push('/');
                }
            })
            .catch ( err => {
                dispatch(setFlash('Failed to check user privliges', 'red'));
            })
            
        }
    }

    toggleCreate = () => {
        this.setState({create: !this.state.create})
    }
    
    renderComponents = () => {
        const { create } = this.state;
        const { id } = this.props.activeSelection;

        // render the new area form if create is true
        if ( create ) {
            return (
                <Grid.Column width={12}>
                    <NewAreaForm
                        vault_id= {id}
                        toggleCreate= {this.toggleCreate}
                    />
                </Grid.Column>
            );
        // otherwise render the vault information
        } else {
            return (
                <Grid.Column width={12}>
                    <VaultDetails />
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
                        <AreaList
                            toggleCreate= {this.toggleCreate} 
                        />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = ({ activeSelection, user }) => {
    return {activeSelection, user}
}

export default connect(mapStateToProps)(VaultGuide);