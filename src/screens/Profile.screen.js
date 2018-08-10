import React, { Component } from 'react';
import ProfileComponent from '../components/Profile/Profile.component';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ProfileComponent />
    );
  }
}

export default ProfileScreen;
