import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { updateRoute } from '../../actions/routes';
import { connect } from 'react-redux';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';

class UpdateRouteForm extends React.Component {
    state={ route: {} };

    componentDidMount() {
        const { dispatch, initialize } = this.props;
        const { id } = this.props.match.params;

        axios.get(`/api/routes/${id}`)
        .then( res => {
            this.setState({ route: res.data});
            initialize(res.data);
            dispatch(setHeaders(res.headers));
        })
        .catch( err => {
            dispatch(setFlash('Failed to get route information', 'red'));
        })
    }

    renderField = (field) => {
        return (
            <Container>
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
        console.log(values)
        const { dispatch, history } = this.props;
        const { wall_id, id } = this.state.route;
        dispatch(updateRoute( { id: id, wall_id: wall_id, ...values }, () => history.push(`/wall/${wall_id}`) ));
    }

    render() {
        const { handleSubmit, history } = this.props;
        const { wall_id } = this.state.route;

        return (
            <Container className='make-form-container'>
                <Header className='details-header' textAlign='left'>Update Route Details</Header>
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
                    <Button color='black' floated='left' className='welcome-button'>UPDATE ROUTE</Button>
                    <Button color='black' floated='left' basic={true} className='welcome-button'
                        onClick={() => history.push(`/wall/${wall_id}`)}>
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

export default reduxForm({
    validate,
    form: 'UpdateRouteForm'
})(connect()(UpdateRouteForm));