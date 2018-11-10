import React from "react";

class ClientInfo extends React.Component { 
  state = {
    client: JSON.parse(localStorage.getItem('client'))
  }

  render() {
    if (!this.state.client) {
      return <p>No Client found</p>
    }
    return (
      <div>
      <h3>My Profile</h3>
      First Name: 
      <br></br>
      Last Name: 
      <br></br>
      Username: {this.state.client.username}
      <br></br>
    </div>
    )  
  }
}
export default ClientInfo;