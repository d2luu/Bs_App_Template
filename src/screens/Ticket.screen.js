import React, { Component } from 'react';
import TicketComponent from '../components/Ticket/Ticket.component';

class TicketScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TicketComponent />
    );
  }
}

export default TicketScreen;
