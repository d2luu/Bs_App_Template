import { StyleSheet, Dimensions } from 'react-native';

const { with: WIDTH } = Dimensions.get('window');

export default StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    backgroundColor: 'transparent',
    opacity: 0.8,
    borderRadius: 60,
    marginTop: 80,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    marginTop: 10,
    fontFamily: 'Cochin',
  },
  formContainer: {
    width: '100%',
    marginTop: 80,
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: WIDTH - 25,
    height: 45,
    borderRadius: 25,
    fontSize: 20,
    paddingLeft: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  button: {
    backgroundColor: 'rgba(92, 99,216, 1)',
    width: 200,
    height: 45,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 20,
    marginTop: 10,
  },
});
