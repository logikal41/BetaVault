import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { createArea } from '../../actions/areas';
import { connect } from 'react-redux';
//might not actually need to push the user anywhere if we are just toggling the create form
import { withRouter } from 'react-router-dom';

class NewAreaForm extends React.Component {

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
        const { dispatch, history, vault_id, toggleCreate } = this.props;
        // need to push the user anywhere with this action????
        // toggle create may be enough
        dispatch(createArea(values, vault_id, () => history.push(`/vault/${vault_id}`) ));
        toggleCreate();
    }

    render() {
        const { handleSubmit, toggleCreate } = this.props;

        return (
            <Container className='make-form-container'>
                <Header className='details-header' textAlign='left'>Create New Area</Header>
                <Form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        label='NAME OF AREA'
                        name='name'
                        component={this.renderField}
                        placeholder='name'
                    />
                    <Field
                        label='AREA DESCRIPTION'
                        name='description'
                        component={this.renderField}
                        placeholder='description'
                    />
                    <Button color='black' floated='left'>CREATE AREA</Button>
                    <Button color='black' floated='left' basic={true} 
                        onClick={() => toggleCreate()}>
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
        errors.name = "Enter an area name";
    }
    if (!values.description) {
        errors.description = "Enter an area description";
    }

    return errors;
}

export default withRouter(reduxForm({
    validate,
    form: 'NewAreaForm'
})(connect()(NewAreaForm)));