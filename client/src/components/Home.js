import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Header, Container, Button, Image, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';
import BetaVaultBox from '../images/BetaVault_Box.png';

class Home extends React.Component {

    renderField = (field) => {
        return (
            <Container>
                <label>{field.label}</label>
                <Form.Input
                    type={field.type}
                    placeholder={field.placeholder} 
                    {...field.input}
                />
                <div className="form-error"> { field.meta.touched ? field.meta.error : '' } </div>
            </Container>
        );
    }

    onSubmit = ({email, password}) => {
      const { dispatch, history } = this.props;
      dispatch(handleLogin(email, password, history));
    }

    render() {
        const { handleSubmit, history } = this.props;

        return (
            <Container className='home-container'>
                <Segment basic>
                    <Image src={BetaVaultBox} centered="true" size="small"/>
                </Segment>
                <Container textAlign='center' lassName='make-form-container'>
                    <Header className='details-header' textAlign='center'>Welcome to the Beta Vault!</Header>
                    <div className='home-form'>
                        <Form onSubmit={ handleSubmit(this.onSubmit) }>
                            <Field
                                label='Email'
                                name='email'
                                component={this.renderField}
                                placeholder='user@gmail.com'
                                type='text'
                            />
                            <Field
                                label='Password'
                                name='password'
                                component={this.renderField}
                                placeholder='password'
                                type='password'
                            />
                            <Button fluid='true' color='green' className='home-button'>Login</Button>
                            <Button fluid='true' type="button" color='black' className='home-button' basic={true} onClick={() => history.push('/register')}>Register</Button>
                        </Form>
                    </div>
                </Container>
            </Container>
        )
    } 
}

const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = "Enter an email address";
    }
    if (!values.password) {
        errors.password = "Enter your password";
    }

    return errors;
}


export default reduxForm({
    validate,
    form: 'homeForm'
})(connect()(Home));