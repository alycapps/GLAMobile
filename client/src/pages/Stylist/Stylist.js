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


class Books extends Component {
  render() {
    return (
      <Container fluid>
      <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Stylist</span>
      </nav>
        <Row>
          <Col size="md-6">
            <Jumbotron>
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
          </Jumbotron>
          
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
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
