import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { createRoute } from '../../actions/routes';
import { connect } from 'react-redux';

class NewRouteForm extends React.Component {

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
        const { dispatch, toggleCreate, user_id } = this.props;
        const { id } = this.props.activeSelection;
        dispatch(createRoute( { wall_id: id , user_id, ...values } ));
        toggleCreate();
    }

    render() {
        const { handleSubmit, toggleCreate} = this.props;

        return (
            <Container className='make-form-container'>
                <Header className='details-header' textAlign='left'>Create New Route</Header>
                <Form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        label='Name of Route'
                        name='name'
                        component={this.renderField}
                    />
                     <Field
                        label='Difficulty of Route'
                        name='difficulty'
                        component={this.renderField}
                    />
                     <Field
                        label='Number of pitches'
                        name='pitch'
                        component={this.renderField}
                    />
                     <Field
                        label='Length of Route'
                        name='length'
                        component={this.renderField}
                    />
                     <Field
                        label='First ascensionist'
                        name='first_ascent'
                        component={this.renderField}
                    />
                    <Field
                        label='Route Description'
                        name='description'
                        component={this.renderField}
                    />
                    <Field
                        label='Gear'
                        name='gear'
                        component={this.renderField}
                    />
                    <Field
                        label='Descent Description'
                        name='descent'
                        component={this.renderField}
                    />
                    <Button color='black' floated='left'>CREATE ROUTE</Button>
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
        errors.name = "Enter a route name";
    }
    if (!values.difficulty) {
        errors.difficulty = "Enter the difficulty";
    }
    if (!values.description) {
        errors.description = "Enter a route description";
    }

    return errors;
}

const mapStateToProps = ({ activeSelection, user }) => {
    return { activeSelection, user_id: user.id }
};

export default reduxForm({
    validate,
    form: 'NewRouteForm'
})(connect(mapStateToProps)(NewRouteForm));