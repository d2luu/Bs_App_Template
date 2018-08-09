import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './Common.style';

const SignIn = props => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Sign In Screen
    </Text>
    <Button
      onPress={() => props.navigation.navigate('SignUp')}
      title="Go to Sign up"
      buttonStyle={styles.button}
    />
    <Button
      onPress={() => props.navigation.navigate('Main')}
      title="Go to Home"
      buttonStyle={styles.button}
    />
  </View>
);

export default SignIn;
