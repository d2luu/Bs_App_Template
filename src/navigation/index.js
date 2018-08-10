import React from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SignInStack from './signin.navigation';
import HomeScreen from '../screens/Home.screen';
import ProfileScreen from '../screens/Profile.screen';
import SettingScreen from '../screens/Setting.screen';
import TicketScreen from '../screens/Ticket.screen';

const HomeTabBarIcon = ({ tintColor }) => (
  <Icon name="home" size={30} color={tintColor} />
);
HomeTabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

const TicketTabBarIcon = ({ tintColor }) => (
  <Icon name="date-range" size={30} color={tintColor} />
);
TicketTabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

const ProfileTabBarIcon = ({ tintColor }) => (
  <Icon name="person" size={30} color={tintColor} />
);
ProfileTabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

const SettingTabBarIcon = ({ tintColor }) => (
  <Icon name="settings" size={30} color={tintColor} />
);
SettingTabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export const BottomBar = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'ホーム',
      tabBarIcon: HomeTabBarIcon,
    },
  },
  TicketScreen: {
    screen: TicketScreen,
    navigationOptions: {
      tabBarLabel: 'チケット',
      tabBarIcon: TicketTabBarIcon,
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'マイページ',
      tabBarIcon: ProfileTabBarIcon,
    },
  },
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarLabel: '設定',
      tabBarIcon: SettingTabBarIcon,
    },
  },
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    style: {
      backgroundColor: 'white',
    },
    activeTintColor: 'red',
    inactiveTintColor: 'black',
  },
  swipeEnabled: true,

});

const Router = createStackNavigator(
  {
    SignIn: {
      screen: SignInStack,
      navigationOptions: {},
    },
    Main: {
      screen: BottomBar,
      navigationOptions: {},
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default Router;
