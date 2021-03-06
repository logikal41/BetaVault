import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Container, Button, Image, Segment, Grid, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';
import BetaVaultWord from '../images/BetaVault_Word.png';
import { withRouter } from 'react-router-dom';

class Welcome extends React.Component {

    renderField = (field) => {
        return (
            <Container>
                <label>{field.label}</label>
                <Form.Input
                    fluid
                    iconPosition='left'
                    icon={field.icon}
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
            <div className='welcome-form'>
                <style>{`
                    body > div,
                    body > div > div,
                    body > div > div > div.welcome-form {
                        height: 100%;
                    }
                `}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Image src={BetaVaultWord} centered={true} />
                        <Form size='large' onSubmit={ handleSubmit(this.onSubmit) }>
                            <Segment basic>
                                <Field
                                    icon='user'
                                    label='Email'
                                    name='email'
                                    component={this.renderField}
                                    placeholder='e-mail address'
                                    type='text'
                                />
                                <Field
                                    icon='lock'
                                    label='Password'
                                    name='password'
                                    component={this.renderField}
                                    placeholder='password'
                                    type='password'
                                />
                                <Button fluid={true} size='large' color='green' type='submit' className='welcome-button'>Login</Button>
                                <Button fluid={true} size='large' color='grey' type="button" className='welcome-button' onClick={() => history.push('/register')}>Register</Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us? See the <a href='#'>about</a> page!
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
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


export default withRouter(reduxForm({
    validate,
    form: 'welcomeForm'
})(connect()(Welcome)));