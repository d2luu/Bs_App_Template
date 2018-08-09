import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SignInStack from './signin.navigation';
import HomeScreen from '../screens/Home.screen';
import ProfileScreen from '../screens/Profile.screen';
import SettingScreen from '../screens/Setting.screen';
import TicketScreen from '../screens/Ticket.screen';

export const BottomBar = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'ホーム',
      tabBarIcon: ({tintColor}) => (<Icon name="home" size={30} color={tintColor} />),
    },
  },
  TicketScreen: {
    screen: TicketScreen,
    navigationOptions: {
      tabBarLabel: 'チケット',
      tabBarIcon: ({tintColor}) => (<Icon name="date-range" size={30} color={tintColor} />),
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'マイページ',
      tabBarIcon: ({tintColor}) => (<Icon name="person" size={30} color={tintColor} />),
    },
  },
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarLabel: '設定',
      tabBarIcon: ({tintColor}) => (<Icon name="settings" size={30} color={tintColor} />),
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
