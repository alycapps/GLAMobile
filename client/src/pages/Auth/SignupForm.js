import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';
import AUTH from '../../utils/AUTH';

class SignupForm extends Component {

	constructor() {
    super();
    
		this.state = {
      // firstName: '',
      // lastName: '',
      username: '',
      emailAddress: '',
      password: '',
      confirmPassword: '',
      userType: '',
			redirectTo: null
		};
  }
  
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
  }
  
	handleSubmit = (event) => {
		event.preventDefault();
    // TODO - validate!
    console.log(this.state)
		AUTH.signup({
      // firstName: this.state.firstName,
      // lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
      emailAddress: this.state.emailAddress,
      userType: this.state.userType
    }).then(response => {
      console.log(response);
      if (!response.data.errmsg) {
        console.log('youre good');
        this.setState({
          redirectTo: '/'
        });
      } else {
        console.log('duplicate');
      }
    });
  }
  
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    
		return (
      <Container>
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-6">
            <Card title="Register for GLAMoblie">
              <form style={{marginTop: 10}}>
                {/* <label htmlFor="username">First name: </label>
                <Input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
                <label htmlFor="username">Last name: </label>
                <Input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                /> */}
                <label htmlFor="username">Username: </label>
                <Input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <label htmlFor="emailAddress">Email: </label>
                <Input
                  type="text"
                  name="emailAddress"
                  value={this.state.emailAddress}
                  onChange={this.handleChange}
                />
                <label htmlFor="password">Password: </label>
                <Input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
                <label htmlFor="userType">Profile Type: </label>
                <br></br>
                <Input
                  type="text"
                  name="userType"
                  value={this.state.userType}
                  onChange={this.handleChange}
                />
                {/* <select name="userType">
                  <option value="client">Client</option>
                  <option value="stylist">Stylist</option>
                </select>
                <br></br> */}
                <Link to="/">Login</Link>
                <FormBtn onClick={this.handleSubmit}>Register</FormBtn>
              </form>
            </Card>
          </Col>
          <Col size="md-3"></Col>
        </Row>
      </Container>
		)
	}
}

export default SignupForm;
