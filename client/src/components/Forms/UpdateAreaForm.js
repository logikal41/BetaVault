import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container, Button } from 'semantic-ui-react';
import { updateArea } from '../../actions/areas';
import { connect } from 'react-redux';
import axios from 'axios';
import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';

class UpdateAreaForm extends React.Component {

    componentDidMount() {
        const { dispatch, initialize } = this.props;
        const { id } = this.props.match.params;

        axios.get(`/api/areas/${id}`)
        .then( res => {
            initialize(res.data);
            dispatch(setHeaders(res.headers));
        })
        .catch( err => {
            dispatch(setFlash('Failed to get area', 'red'));
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
        dispatch(updateArea(values, () => history.push(`/area/${id}`) ));
    }

    render() {
        const { handleSubmit, history } = this.props;
        const { id } = this.props.match.params;

        return (
            <Container className='make-form-container'>
                <Header className='details-header' textAlign='left'>Update Area Form</Header>
                <Form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field
                        label='NAME OF AREA'
                        name='name'
                        component={this.renderField}
                    />
                    <Field
                        label='AREA DESCRIPTION'
                        name='description'
                        component={this.renderField}
                    />
                    <Button color='black' floated='left'>UPDATE AREA</Button>
                    <Button color='black' floated='left' basic={true} onClick={() => history.push(`/area/${id}`)}>CANCEL</Button>
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
    form: 'UpdateAreaForm'
})(connect()(UpdateAreaForm));