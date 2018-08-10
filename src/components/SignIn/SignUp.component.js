import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import styles from './Common.style';

const SignUp = props => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Sign Up Screen
    </Text>
    <Button
      onPress={() => props.navigation.goBack()}
      title="Back to Sign in"
    />
  </View>
);

SignUp.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUp;
