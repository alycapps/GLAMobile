import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import "./stylistCalendar.css";
// import Calendar from "../Calendar/stylistCalendar";


class Books extends Component {
    render() {
        return(
          <div>
            <Container fluid>
            <ul className="nav nav-pills nav justify-content-center" margin-top="20px">
                <li className="nav-items">
                    <a className="nav-link active" href="/Calendar"> View My Scheduled Appointments</a>
                </li>
            </ul>
        </Container>
        <br/>
       {/* END OF HEADER*/}

       {/* ROW ONE CONTAINING LICENSE NUMBER H MU & N PRICING INPUT*/}
       <Row>
         <Col size="md-6 sm-12">
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
            <br/>

         <Row>
         {/*HAIR DROPDOWN MENU*/}
          <Col size="sm-2">
            <form>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        HAIR
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
          {/*MU DROPDOWN MENU*/}
          <Col size="sm-2">
                <form>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        MAKEUP
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
          {/*NAILS DROPDOWN MENU*/}
          <Col size="sm-2">
               <form>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        NAILS
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
         </Row>
         </Col>
        {/* END OF ROW ONE */}

         {/* ROW TWO CONTAINING GOOGLE MAPS*/}     
         <Col size="md-6 sm-12">
            <Container>
             <text textAlign="right"> GOOGLE MAPS GOES HERE</text>
            </Container>
         </Col>
       </Row>
       {/* END OF ROW TWO */}
       </div>
      );
    }
}

export default Books;