import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
// import "./stylistCalendar.css";
import Calendar from "../Calendar/stylistCalendar";

const styles = {
  primaryColor: {
    background: `#fbe9e7`,
  },
  secondaryColor: {
    background: `#c8b7b5`,
  },
  anotherColor: {
    background: `#ffffff`,
  }
}

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
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
            <Jumbotron style = {[styles.primaryColor]}>
              <h1>STYLIST PAGE</h1>
            </Jumbotron>
            <form>
            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Stylist Pricing
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">$25 - $50</a>
              <a class="dropdown-item" href="#">$50 - $75</a>
              <a class="dropdown-item" href="#">$75 - 100</a>
              <a class="dropdown-item" href="#">$100 - $150</a>
            </div>
          </div>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron style = {[styles.primaryColor]}>
            <Link to="/Calendar">
                <button className="btn btn-success"> 
                  View My Scheduled Appointments
                </button>
              </Link>
            </Jumbotron>
            <div class="card">
            <div class="form-group">
              <label for="inputPassword6">License Number</label>
              <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
              <small id="passwordHelpInline" class="text-muted">
                Must be 8-20 characters long.
              </small>
              </input>
              </div>
              </div>
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
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
