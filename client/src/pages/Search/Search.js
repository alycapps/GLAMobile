import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { Input, FormBtn } from "../../components/Form";
import { Card } from "../../components/Card"
import { withRouter } from 'react-router-dom';


class Books extends Component {
  state = {
    stylists: [],
    emailAddress: "",
    username: "",
    password: ""
  };

  componentDidMount() {
    this.loadStylists();
  }

  loadStylists = () => {
    API.getStylists()
      .then(res =>
        this.setState({ stylists: res.data, emailAddress: "", username: "", password: "" }),
        console.log(this.state.stylists)
        )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadStylists())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  bookAppt = event => {
    console.log('CLICKED ')
    console.log('props ', this.props)
    this.props.history.push('/calendar')
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadStylists())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Card title="Search Criteria">
              <form title="searchBox">
              <label htmlFor="serviceType">Hair</label>
                <Input 
                  type="checkbox" 
                  name="serviceType" 
                  value="hair"
                />
              <label htmlFor="serviceType">Makeup</label>
                <Input 
                  type="checkbox" 
                  name="serviceType" 
                  value="makeup"
                />
                <label htmlFor="serviceType">Nails</label>
                <Input 
                  type="checkbox" 
                  name="serviceType" 
                  value="nails" 
                />
                {/* <Input
                  name="minPrice"
                  placeholder="Minimum Price ($)"
                />
                <Input
                  name="maxPrice"
                  placeholder="Maximum Price ($)"
                />
                <Input
                  name="zip"
                  placeholder="Zip Code"
                /> */}
                <FormBtn
                  onClick={this.handleFormSubmit}
                >
                  Search
                </FormBtn>
              </form>
            </Card>
            
          </Col>
          <Col size="md-6 sm-12">
            <h3>Please select a Stylist to view their profiles and book an appointment.</h3>
            {this.state.stylists.length ? (
              <div className="accordion" id="accordionExample">
                {this.state.stylists.map( stylist => (
                  <div className="card">
                    <div className="card-header" id="headingOne" style={{backgroundColor:"#c8b7b5"}}>
                      <h5 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          {stylist.username}
                        </button>
                      </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body">
                        {stylist.summary}
                        Description goes here.
                        <FormBtn
                          onClick={this.bookAppt}
                        >
                          Book Appointment
                        </FormBtn>
                      </div>
                    </div>
                  </div>               
                ))}
              </div>
            ) : (
              <h3>No Stylists Found - please try again.</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default export default withRouter(Books);
