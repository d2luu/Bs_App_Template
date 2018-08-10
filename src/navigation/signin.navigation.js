import { createStackNavigator } from 'react-navigation';
import SignIn from '../components/SignIn/SignIn.component';
import SignUp from '../components/SignIn/SignUp.component';

const SignInStack = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: 'Sign In',
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Sign Up',
      },
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default SignInStack;
