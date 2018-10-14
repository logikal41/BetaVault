import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { updateWall } from '../../actions/walls';
import { connect } from 'react-redux';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';

class UpdateWallForm extends React.Component {

    componentDidMount() {
        const { dispatch, initialize } = this.props;
        const { id } = this.props.match.params;

        axios.get(`/api/walls/${id}`)
        .then( res => {
            initialize(res.data);
            dispatch(setHeaders(res.headers));
        })
        .catch( err => {
            dispatch(setFlash('Failed to get wall', 'red'));
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
        const { dispatch, history } = this.props;
        const { id } = this.props.match.params;
        dispatch(updateWall(values, () => history.push(`/wall/${id}`) ));
    }

    render() {
        const { handleSubmit, history } = this.props;
        const { id } = this.props.match.params;

        return (
            <Container className='make-form-container'>
                <Header className='details-header' textAlign='left'>Update Wall Form</Header>
                <Form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        label='NAME OF WALL'
                        name='name'
                        component={this.renderField}
                    />
                    <Field
                        label='WALL DESCRIPTION'
                        name='description'
                        component={this.renderField}
                    />
                    <Form.Button positive>UPDATE WALL</Form.Button>
                    <Button negative onClick={() => history.push(`/wall/${id}`)}>CANCEL</Button>
                </Form>
            </Container>
        )
    } 
}

const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Enter the wall name";
    }
    if (!values.description) {
        errors.description = "Enter the wall description";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'UpdateWallForm'
})(connect()(UpdateWallForm));