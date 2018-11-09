import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
// import ClientInfo from "../../components/Client";
import { Input, FormBtn } from '../../components/Form';

class Books extends Component {
  state = {
    stylists: [],
    appointments: [],
    client: this.props.user,
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    emailAddress: this.props.user.emailAddress,
    username: this.props.user.username
    // user: JSON.parse(localStorage.getItem('client'))
  };

  componentDidMount() {
    this.loadAppts();
  };

  loadAppts = () => {
    API.getStylists()
      .then(res =>
        this.setState({ stylists: res.data })
        )
      .catch(err => console.log(err));
  };
  
  editProfile = id => {
    let data = {
      '_id': id,
      'firstName': this.state.firstName,
      'lastName': this.state.lastName,
      'username': this.state.username,
      'emailAddress':this.state.emailAddress
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

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-7">
            <form>
              <h3>Upcoming Appointments</h3>
              {this.state.appointments.length ? (
              <List>
                {this.state.appointments.map(appointment => (
                  <ListItem key={appointment._id}>
                    <Link to={"/appoinment/" + appointment._id}>
                      {/* <strong>
                        {book.title} by {book.author}
                      </strong> */}
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Appointments Scheduled</h3>
            )}
              <Link to="/search">
                <FormBtn>
                  Book a New Appointment
                </FormBtn>
              </Link>
            </form>
          </Col>
          <Col size="md-5 sm-12">
          <div>
            <h3>My Profile</h3>
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
                      placeholder= {this.state.client.firstName}
                    />
                    <label htmlFor="lastName">Last Name: </label>
                    <Input
                      type="text"
                      name="lastName"
                      placeholder={this.state.client.lastName}
                      onChange={this.handleInputChange}
                    />
                    <label htmlFor="username">Username: </label>
                    <Input
                      type="text"
                      name="username"
                      placeholder={this.state.client.username}
                      onChange={this.handleInputChange}
                    />
                    <label htmlFor="emailAddress">Email: </label>
                    <Input
                      type="text"
                      name="emailAddress"
                      placeholder={this.state.client.emailAddress}
                      onChange={this.handleInputChange}
                    />
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    {/* <button type="button" className="btn btn-dark" data-dismiss="modal" onClick={() => this.editProfile(this.state.client._id)}>Save changes</button> */}
                    <FormBtn data-dismiss="modal" onClick={() => this.editProfile(this.state.client._id)}>Save changes</FormBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
