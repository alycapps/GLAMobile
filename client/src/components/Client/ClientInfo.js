import React from "react";

this.state = {
  client: JSON.parse(localStorage.getItem('client'))
}
const ClientInfo = (props) => {
  return (
    <div>
    <h3>My Profile</h3>
    First Name: {this.state.client.firstName}
    <br></br>
    Last Name: {this.state.client.lastName}
    <br></br>
    Username: {this.state.client.username}
    <br></br>
    Adress: {this.state.client.address}
    <br></br>
    Apt: {this.state.client.apt}
    <br></br>
    City: {this.state.client.city}
    <br></br>
    State: {this.state.client.state}
    <br></br>
  </div>
  )
};

export default ClientInfo;
