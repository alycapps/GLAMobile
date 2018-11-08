import React, { Component } from "react";
import {Card} from "../../components/Card";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import "./stylistCalendar.css";
import { Input } from "../../components/Form";
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

  render() {
      return(
        <div>
        <Col size="md-3"></Col>
        <Col size="md-6">
        <Card float='left'>
        <Container fluid>
          <ul className="nav nav-pills nav justify-content-center" margin-top="20px">
            <li className="nav-items">
                <a className="nav-link active" href="/Calendar"> View My Scheduled Appointments</a>
            </li>
          </ul>
          </Container>
          </Card>
          </Col>
          <Col size="md-3"></Col>

          <br/>
        {/* END OF HEADER*/} 
          <div className="row">  
          <Col size="md-5">
          <Card>
          <h2 align='center'>Service Pricing</h2>
              <form>
                <Col size="sm-2">
                  <label>Hair</label>
                    <input type='text' id='hair' name='hair' placeholder='$0.00'>
                      </input>
                </Col>
                <Col size="sm-2">
                  <label>Makeup</label>
                    <input type='text' id='hair' name='hair' placeholder='$0.00'>
                      </input>
                </Col>
                <Col size="sm-2">
                  <label>Nails</label>
                    <input type='text' id='hair' name='hair' placeholder='$0.00'>
                      </input>
                      <br/>
                      <br/>
                      <button>Submit</button>
                </Col>
              </form>
              </Card>
          </Col>

          <Col size="md-5">
              <Card>
              <h2 align='center'>Stylist Information</h2>
              <form>
                  <label>First Name</label>
                  <Input 
                    type='text' 
                    name='firstname'
                    placeholder= {this.state.stylist.firstName}
                  >
                  </Input>
                  <label>Last Name</label>
                  <Input 
                    type='text' 
                    name='lastname'
                    placeholder= {this.state.stylist.lastName}
                  >
                  </Input>
                  <label>Username</label>
                  <Input 
                    type='text' 
                    name='username'
                    placeholder= {this.state.stylist.username}
                  >
                  </Input>
                  <label>Email</label>
                  <Input 
                    type='text' 
                    name='emailAddress'
                    placeholder= {this.state.stylist.emailAddress}
                  >
                  </Input>
                  {/* <label>City</label>
                  <Input 
                  type='text' 
                  id='city' 
                  name='city'
                  placeholder= {this.state.stylist.city}
                  >
                  </Input>
                  <label>Zipcode</label>
                  <Input 
                  type='text' 
                  id='zipcode' 
                  name='zipcode'
                  placeholder= {this.state.stylist.zipcode}
                  >
                  </Input> */}
                  <label>License Number</label>
                  <Input 
                  type='text' 
                  id='license' 
                  name='license'
                  placeholder= {this.state.stylist.licNum}
                  >
                  </Input>
                  <br/>
                  <button>Submit</button>
                  <br/>
              </form>
              </Card>
          </Col>
          
          </div>
          <div className='row'>
          <Col size="md-4"></Col>
          <Col size="md-4"></Col>
          <Col size="md-4"></Col>
          </div>

        </div>    
    );
  }
}

export default Books;