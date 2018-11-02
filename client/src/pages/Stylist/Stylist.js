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
      <ul className="nav nav-pills nav justify-content-center"  margin-top="20px">
        <li className="nav-item">
          <a className="nav-link active" href="/Calendar">View My Scheduled Appointments</a>
        </li>
      </ul>
        <Row>
          <Col size="md-6">
          </Col>
          <Col size="md-6 sm-12">
           <Container>
           <text textAlign="right">Google Maps Goes Here</text>
           </Container>

          </Col>
        </Row>
        <Row>
        <Col size="md-6 sm-12">
        <Container>
        <div className="card">
        <form>
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="License Number">
            </input>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="State">
            </input>
          </div>
          </div>
        </form>
        </div>
        </Container>
        <Container>
        <row>
        <form>
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hair
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">$25 - $50</a>
          <a className="dropdown-item" href="#">$50 - $75</a>
          <a className="dropdown-item" href="#">$75 - 100</a>
          <a className="dropdown-item" href="#">$100 - $150</a>
        </div>
      </div>
        </form>
        <br/>
        <form>
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Makeup
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">$25 - $50</a>
          <a className="dropdown-item" href="#">$50 - $75</a>
          <a className="dropdown-item" href="#">$75 - 100</a>
          <a className="dropdown-item" href="#">$100 - $150</a>
        </div>
      </div>
        </form>
        <br/>
        <form>
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Nails
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">$25 - $50</a>
          <a className="dropdown-item" href="#">$50 - $75</a>
          <a className="dropdown-item" href="#">$75 - 100</a>
          <a className="dropdown-item" href="#">$100 - $150</a>
        </div>
      </div>
        </form>
        <Row/>
        <br/>
        </row>
      </Container>
        </Col>
        </Row>
      </Container>

    );
  }
}

export default Books;
