import React, { Component } from 'react';
import {
  View, Text, ImageBackground, Image, TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './SignIn.style';

import bgImage from '../../assets/images/bg-img.jpg';
import logo from '../../assets/images/logo.png';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowPass: true,
      isPressEye: false,
    };
  }

  handlePressEye = () => {
    this.setState(prevState => ({
      isShowPass: !prevState.isShowPass,
      isPressEye: !prevState.isPressEye,
    }));
  };

  render() {
    const { navigation } = this.props;
    const { isShowPass, isPressEye } = this.state;
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>
            Enjoy Buffaloes!
          </Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Icon
              name="ios-person-outline"
              style={styles.inputIcon}
              size={28}
              color="rgba(255, 255, 255, 0.7)"
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="rgba(255, 255, 255, 0.9)"
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              name="ios-lock-outline"
              style={styles.inputIcon}
              size={28}
              color="rgba(255, 255, 255, 0.7)"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="rgba(255, 255, 255, 0.9)"
              underlineColorAndroid="transparent"
              secureTextEntry={isShowPass}
            />

            <TouchableOpacity
              style={styles.btnEye}
              onPress={this.handlePressEye}
            >
              <Icon
                name={isPressEye === false ? 'ios-eye-outline' : 'ios-eye-off-outline'}
                size={26}
                color="rgba(255, 255, 255, 0.9)"
              />
            </TouchableOpacity>

          </View>

          <Button
            onPress={() => navigation.navigate('Main')}
            title="Sign In"
            buttonStyle={styles.button}
          />
          <Button
            onPress={() => navigation.navigate('SignUp')}
            title="Sign Up"
            buttonStyle={styles.button}
          />
        </View>
      </ImageBackground>
    );
  }
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignIn;
