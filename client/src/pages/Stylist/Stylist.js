import React, { Component } from "react";
import {Card} from "../../components/Card";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import "./stylistCalendar.css";
import { Input, FormBtn } from "../../components/Form";
// import Calendar from "../Calendar/stylistCalendar";


class Books extends Component {
  state = {
    stylist: this.props.user,
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    username: this.props.user.username,
    emailAddress: this.props.user.emailAddress,
    // city: this.props.user.city,
    // zipcode: this.props.user.zipcode,
    licNum: this.props.user.licNum
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };
  
  editProfile = id => {
    let data = {
      '_id': id,
      'firstName': this.state.firstName,
      'lastName': this.state.lastName,
      'username': this.state.username,
      'emailAddress':this.state.emailAddress,
      'licNum': this.state.licNum
    }
    API.updateUser(id, data)
    .then(
      res => console.log(res),
      console.log("res"),
      console.log(this.state.client),
      console.log("user")
    )
    .catch(err => console.log(err));
  };

  render() {
      return(
      <Container>
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-6">
            <Card>
              <Link to="/Calendar">
                <button>
                  View My Scheduled Appointments
                </button>
              </Link>
            </Card>
          </Col>
          <Col size="md-3"></Col>
          <br/>
        </Row>
        <br></br>

        <Row>
          <div className="row">  
            <Col size="md-6">
              <Card title="Service Pricing">
                <form>
                  <label>Hair:</label>
                    <br></br>
                    <input 
                      type='text' 
                      id='hair' 
                      name='hair' 
                      placeholder='$0.00'
                    >
                    </input>
                  <br></br>
                  <label>Makeup:</label>
                  <br></br>
                    <input 
                      type='text' 
                      id='hair' 
                      name='hair' 
                      placeholder='$0.00'
                    >
                    </input>
                  <br></br>
                  <label>Nails:</label>
                  <br></br>
                    <input 
                      type='text' 
                      id='hair' 
                      name='hair' 
                      placeholder='$0.00'
                    >
                    </input>
                  <br/>
                  <br/>
                  <FormBtn>
                    Submit
                  </FormBtn>
                </form>
              </Card>
            </Col>

            <Col size="md-6">
              <Card title="My Information">
                First Name: {this.state.firstName ? 
                  (this.state.firstName): 
                  (<span style={{color:"red"}}>Unknown -- Please Add</span>)}
                <br></br>
                Last Name: {this.state.lastName ? 
                  (this.state.lastName): 
                  (<span style={{color:"red"}}>Unknown -- Please Add</span>)}
                <br></br>
                Username: {this.state.username ? 
                  (this.state.username): 
                  (<span style={{color:"red"}}>Unknown -- Please Add</span>)}
                <br></br>
                Email: {this.state.emailAddress ? 
                  (this.state.emailAddress): 
                  (<span style={{color:"red"}}>Unknown -- Please Add</span>)}
                <br></br>
                License Number: {this.state.licNum ? 
                  (this.state.licNum): 
                  (<span style={{color:"red"}}>Unknown -- Please Add</span>)}
                <br></br>
                <FormBtn data-toggle="modal" data-target="#exampleModal">
                  Edit Profile
                </FormBtn>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">My Profile</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form>
                        <label htmlFor="firstName">First Name: </label>
                        <Input
                          type="text"
                          name="firstName"
                          onChange={this.handleInputChange}
                          placeholder= {this.state.stylist.firstName}
                        />
                        <label htmlFor="lastName">Last Name: </label>
                        <Input
                          type="text"
                          name="lastName"
                          placeholder={this.state.stylist.lastName}
                          onChange={this.handleInputChange}
                        />
                        <label htmlFor="username">Username: </label>
                        <Input
                          type="text"
                          name="username"
                          placeholder={this.state.stylist.username}
                          onChange={this.handleInputChange}
                        />
                        <label htmlFor="emailAddress">Email: </label>
                        <Input
                          type="text"
                          name="emailAddress"
                          placeholder={this.state.stylist.emailAddress}
                          onChange={this.handleInputChange}
                        />
                        <label htmlFor="licNum">License Number: </label>
                        <Input
                          type="text"
                          name="licNum"
                          placeholder={this.state.stylist.licNum}
                          onChange={this.handleInputChange}
                        />
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <FormBtn data-dismiss="modal" onClick={() => this.editProfile(this.state.stylist._id)}>Save changes</FormBtn>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>  
          </div>
        </Row>
      </Container> 
    );
  }
}

export default Books;