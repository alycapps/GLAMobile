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
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron style = {[styles.primaryColor]}>
              <h1>STYLIST</h1>
            </Jumbotron>
            <form>
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Stylist Pricing
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">$25 - $50</a>
              <a className="dropdown-item" href="#">$50 - $75</a>
              <a className="dropdown-item" href="#">$75 - 100</a>
              <a className="dropdown-item" href="#">$100 - $150</a>
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
          </Col>
        </Row>
        <Row>
        <Col size="md-6 sm-12">
        <Container>
       
        </Container>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
