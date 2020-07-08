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
        const { dispatch, history, user_id } = this.props;
        dispatch(createVault(values, user_id, () => history.push('/') ));
    }

    render() {
        const { handleSubmit, history } = this.props;

        return (
            <Container className='make-form-container'>
                <Header className='details-header' textAlign='left'>Create New Vault</Header>
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
                    <Button color='black' floated='left'>CREATE VAULT</Button>
                    <Button color='black' floated='left' basic={true} 
                        onClick={() => history.push('/')}>
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

const mapStateToProps = ( { user } ) => {
    return { user_id: user.id }
}

export default reduxForm({
    validate,
    form: 'NewVaultForm'
})(connect(mapStateToProps)(NewVaultForm));