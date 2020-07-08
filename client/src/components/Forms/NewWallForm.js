import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { createWall } from '../../actions/walls';
import { connect } from 'react-redux';

class NewWallForm extends React.Component {

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
        const { dispatch, toggleCreate, user_id } = this.props;
        const { id } = this.props.activeSelection;
        dispatch(createWall( { id, user_id, ...values} ));
        toggleCreate();
    }

    render() {
        const { handleSubmit, toggleCreate } = this.props;

        return (
            <Container className='make-form-container'>
                <Header className='details-header' textAlign='left'>Create New Wall</Header>
                <Form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        label='NAME OF WALL'
                        name='name'
                        component={this.renderField}
                        placeholder='name'
                    />
                    <Field
                        label='WALL DESCRIPTION'
                        name='description'
                        component={this.renderField}
                        placeholder='description'
                    />
                    <Button color='black' floated='left'>CREATE WALL</Button>
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
        errors.name = "Enter a wall name";
    }
    if (!values.description) {
        errors.description = "Enter a wall description";
    }

    return errors;
}

const mapStateToProps = ({ activeSelection, user }) => {
    return { activeSelection, user_id: user.id }
};

export default reduxForm({
    validate,
    form: 'NewWallForm'
})(connect(mapStateToProps)(NewWallForm));