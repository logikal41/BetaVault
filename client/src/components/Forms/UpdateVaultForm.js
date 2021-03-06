import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { updateVault } from '../../actions/vaults';
import { connect } from 'react-redux';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';

class UpdateVaultForm extends Component {

    componentDidMount() {
        const { dispatch, initialize } = this.props;
        const { id } = this.props.match.params;

        axios.get(`/api/vaults/${id}`)
        .then( res => {
            initialize(res.data.vault);
            dispatch(setHeaders(res.headers));
        })
        .catch( err => {
            dispatch(setFlash('Failed to get vault information!', 'red'));
        })
    }

    renderField = (field) => {
        return (
            <Container className='field-styling'>
                <label>{field.label}</label>
                <Form.Input
                    type='text'
                    {...field.input} 
                />
                <div className="form-error"> { field.meta.touched ? field.meta.error : '' } </div>
            </Container>
        );
    }

    onSubmit = (values) => {
        const { dispatch, history } = this.props;
        const { id } = this.props.match.params;
        dispatch(updateVault(values, () => history.push(`/vault/${id}`) ));
    }

    render() {
        const { handleSubmit, history } = this.props;
        const { id } = this.props.match.params;

        return (
            <Container className='make-form-container'>
                <Header className='details-header' textAlign='left'>Update Vault Details</Header>
                <Form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        label='NAME OF VAULT'
                        name='name'
                        component={this.renderField}
                    />
                    <Field
                        label='VAULT DESCRIPTION'
                        name='description'
                        component={this.renderField}
                    />
                    <Button color='black' floated='left'>UPDATE VAULT</Button>
                    <Button color='black' floated='left' basic={true} 
                        onClick={() => history.push(`/vault/${id}`)}>
                        CANCEL
                    </Button>
                </Form>
            </Container>
        )
    } 
}

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Enter a vault name";
    }
    if (!values.description) {
        errors.description = "Enter a vault description";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'UpdateVaultForm'
})(connect()(UpdateVaultForm));