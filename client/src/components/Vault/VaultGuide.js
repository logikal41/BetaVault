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
    state = { create: false };

    // Get all the areas within this vault
    componentDidMount() {
        const { dispatch, match, history } = this.props;

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

const mapStateToProps = ({ activeSelection }) => {
    return {activeSelection}
}

export default connect(mapStateToProps)(VaultGuide);