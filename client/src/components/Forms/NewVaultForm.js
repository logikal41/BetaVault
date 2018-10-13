import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { createVault } from '../../actions/vaults';
import { connect } from 'react-redux';

class NewVaultForm extends React.Component {

    renderField = (field) => {
        return (
            <Container className='field-styling'>
                <label>{field.label}</label>
                <Form.Input
                    type='text'
                    placeholder={field.placeholder} 
                    {...field.input}
                />
                <div className="form-error"> { field.meta.touched ? field.meta.error : '' } </div>
            </Container>
        );
    }

    onSubmit = (values) => {
        const { dispatch, history } = this.props;
        dispatch(createVault(values, () => history.push('/') ));
    }

    render() {
        const { handleSubmit, history } = this.props;

        return (
            <Container className='make-form-container'>
                <Header className='details-header' textAlign='left'>Make Vault</Header>
                <Form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        label='NAME OF VAULT'
                        name='name'
                        component={this.renderField}
                        placeholder='name'
                    />
                    <Field
                        label='VAULT DESCRIPTION'
                        name='description'
                        component={this.renderField}
                        placeholder='description'
                    />
                    
                    <div>
                        <Button color='black' floated='left'>CREATE VAULT</Button>
                        <Button color='black' floated='left' basic={true} onClick={() => history.push('/')}>CANCEL</Button>
                    </div>
                </Form>
            </Container>
        )
    } 
}

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Enter an area name";
    }
    if (!values.description) {
        errors.description = "Enter an area description";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'NewVaultForm'
})(connect()(NewVaultForm));