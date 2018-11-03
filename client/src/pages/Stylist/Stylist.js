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
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="licenseNumber">License Number</label>
                    <input type="text" class="form-control" id="licenseNumber">
                    </input>
                  </div>
                  <div class="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                </div>
                <div class="form-row" textAlign="center">
                  <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip">
                    </input>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
          </form>
            </div>
            <br/>

         <Row>
         
         </Row>   

         <Row>
         {/*HAIR MENU*/}
          <Row>
            <Container height="200" width="300px" position="absolute">
            <form>
              <Col size="sm-2">
                <text>Womens Haircut</text>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">0.00</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                  </input>
                </div>
              </Col>
                <br/>
              <Col size="sm-2">
                <text>Mens Haircut</text>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">0.00</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                  </input>
                </div>
              </Col>  
                <br/>
              <Col size="sm-2">  
                <text>Kids Haircut</text>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">0.00</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                  </input>
                </div>
              </Col>  
                <br/>
              <Col size="sm-2">  
                <text>Blowout</text>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">0.00</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                  </input>
                </div>
              </Col>  
                <br/>
              <Col size="sm-2">  
                <text>Updo</text>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">0.00</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                  </input>
                </div>
              </Col>  
                <br/>
            </form>
            </Container>
          </Row>
          {/*MU MENU*/}
          <Col size="sm-2">
                <Container>
                <text>Full Face Makeup</text>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">0.00</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                  </input>
                </div>
                <br/>
                <text>Bridal Makeup</text>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">0.00</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                  </input>
                </div>
                <br/>
                <text>Costume Makeup</text>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">0.00</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                  </input>
                </div>
                <br/>
                <text>Kids Makeup</text>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">0.00</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                  </input>
                </div>
                <br/>
                <text>Airbrush Makeup</text>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">0.00</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                  </input>
                </div>
                <br/>
                </Container>
          </Col>
          {/*NAILS  MENU*/}
          <Col size="sm-2">
              <text>Manicure</text>
              <div class="input-group mb-3">
              <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                  <span class="input-group-text">0.00</span>
                </div>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                </input>
              </div>
              <br/>
              <text>Pedicure</text>
              <div class="input-group mb-3">
              <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                  <span class="input-group-text">0.00</span>
                </div>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                </input>
              </div>
              <br/>
              <text>Gel Polish Manicure</text>
              <div class="input-group mb-3">
              <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                  <span class="input-group-text">0.00</span>
                </div>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                </input>
              </div>
              <br/>
              <text>Gel Polish Pedicure</text>
              <div class="input-group mb-3">
              <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                  <span class="input-group-text">0.00</span>
                </div>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                </input>
              </div>
              <br/>
              <text>Acrylic Fill In</text>
              <div class="input-group mb-3">
              <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                  <span class="input-group-text">0.00</span>
                </div>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                </input>
              </div>
              <br/>
              <text>Kids Manicure/Pedicure</text>
              <div class="input-group mb-3">
              <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                  <span class="input-group-text">0.00</span>
                </div>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                </input>
              </div>
              <br/>
          </Col>
         </Row>
         </Col>
        {/* END OF ROW ONE */}

         {/* ROW TWO CONTAINING GOOGLE MAPS*/}     
         <Col size="md-6 sm-12">
            <Container id="mapbox">
              <text textAlign="right">Google Maps Goes Here</text>
            </Container>
         </Col>
       </Row>
       {/* END OF ROW TWO */}
       </div>
      );
    }
}

export default Books;