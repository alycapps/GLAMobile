import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { Input, FormBtn } from "../../components/Form";
import { Card } from "../../components/Card"

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadStylists();
  }

  loadStylists = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
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
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            {/* <Jumbotron>
              <h1>SEARCH PAGE</h1>
            </Jumbotron> */}
            <Card title="Search Criteria">
              {/* <h3>Search Criteria</h3> */}
              <form title>
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
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="minPrice"
                  placeholder="Minimum Price ($)"
                />
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="maxPrice"
                  placeholder="Maximum Price ($)"
                />
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="zip"
                  placeholder="Zip Code"
                />
                <FormBtn
                  disabled={!(this.state.author && this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Search
                </FormBtn>
              </form>
            </Card>
            
          </Col>
          <Col size="md-6 sm-12">
            <h3>Please select a Stylist to view their profiles and book an appointment.</h3>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Stylists Found - please try again.</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
