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
    Adress: {this.state.client.username}
    <br></br>
    Apt: {this.state.client.username}
    <br></br>
    City: {this.state.client.username}
    <br></br>
    State: {this.state.client.username}
    <br></br>
  </div>
  )
};

export default ClientInfo;