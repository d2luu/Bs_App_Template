import React from 'react';
import { View, Text } from 'react-native';
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

export default SignUp;
