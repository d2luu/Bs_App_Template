import React, {Component} from 'react';
import SignInStack from '../navigation/signin.navigation';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SignInStack />
    );
  }
}

export default SignInScreen;
