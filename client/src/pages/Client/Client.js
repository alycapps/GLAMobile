import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

// const styles = {
//   primaryColor: {
//     background: `#fbe9e7`,
//   },
//   secondaryColor: {
//     background: `#c8b7b5`,
//   },
//   anotherColor: {
//     background: `#ffffff`,
//   }
// }

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
            <form>
              <h3>Upcoming Appointments</h3>
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
              <h3>No Appointments Scheduled</h3>
            )}
              <Link to="/search">
                <button className="btn btn-success"> 
                  Book a New Appointment
                </button>
              </Link>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <h3>My Profile</h3>
            First Name:
            <br></br>
            Last Name:
            <br></br>
            Username:
            <br></br>
            Adress:
            <br></br>
            Apt:
            <br></br>
            City:
            <br></br>
            State:
            <br></br>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
