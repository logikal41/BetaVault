import React, { Component } from 'react';
import { Header, Segment, Form, Button, Image, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { handleLogin } from '../actions/auth';
import BetaVaultBox from '../images/BetaVault_Box.png';

class Home extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
    dispatch(handleLogin(email, password, history));
  }

  render() {
    const { email, password } = this.state;
    const { history } = this.props;

    return (
      <Grid centered="true">
        <Grid.Row>
          <Segment basic>
            <Image src={BetaVaultBox} centered="true" size="small"/>
            <Header as='h1' textAlign='center'>Welcome to The Beta Vault!</Header>
          </Segment>
        </Grid.Row>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label htmlFor='email'>Email</label>
            <input
              required
              id='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='password'>Password</label>
            <input
              required
              id='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Grid.Row className="home-buttons">
            <Button primary type='submit'>Submit</Button>
          </Grid.Row>
          <Grid.Row className="home-buttons">
            <Button secondary onClick={() => history.push("/register")}>Register</Button>
          </Grid.Row>
        </Form>
      </Grid>
    );
  }
}

const mapStateToProps = ({history}) => {
  return { history }
};


export default withRouter(connect()(Home));
