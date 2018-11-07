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

       {/* ROW ONE CONTAINING LICENSE NUMBER H MU & N STYLIST INPUT*/}
       <Row>
       <div className="container">
       <div style="text-align:center">
         <h2>Stylist Information</h2>
         <p>Swing by for a cup of coffee, or leave us a message:</p>
       </div>
       <div className="row">
         <div className="column">
           <img src="/w3images/map.jpg" style="width:100%">
           </img>
         </div>
         <div className="column">
           <form action="/action_page.php">
             <label for="fname">First Name</label>
             <input type="text" id="fname" name="firstname" placeholder="Your name..">
             <label for="lname">Last Name</label>
             <input type="text" id="lname" name="lastname" placeholder="Your last name..">
             <label for="country">Country</label>
             <select id="country" name="country">
               <option value="australia">Australia</option>
               <option value="canada">Canada</option>
               <option value="usa">USA</option>
             </select>
             <label for="subject">Subject</label>
             <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
             <input type="submit" value="Submit">
             </input>
             </input>
             </input>
           </form>
         </div>
       </div>
     </div>

      </Row>
           
        {/* END OF ROW ONE */}

         {/* ROW TWO CONTAINING GOOGLE MAPS*/}     
         <Col size="md-6 sm-12">
            <Container id="mapbox">
              <text textAlign="right">Google</text>
              <Container height="200" width="300px" position="absolute">
              <form>
                <Col size="sm-2">
                  <text>Hair</text>
                  <div classname="input-group mb-3">
                  <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                      <span className="input-group-text">0.00</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)">
                    </input>
                  </div>
                </Col>
                </form>
                  <br/>
            {/*MU MENU*/}
            <Col size="sm-2">
                  <Container>
                  <text>Full Face Makeup</text>
                  <div className="input-group mb-3">
                  <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                      <span className="input-group-text">0.00</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)">
                    </input>
                  </div>
                  <br/>
                  </Container>
            </Col>
            {/*NAILS  MENU*/}
            <Col size="sm-2">
                <text>Nails</text>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                    <span className="input-group-text">0.00</span>
                  </div>
                  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)">
                  </input>
                </div>
                <br/>
                <br/>
            </Col>
            </Container>
              
            </Container>
         </Col>
         </div>
      );
    }
}

export default Books;