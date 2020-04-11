import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from '../screens/auth/LoginScreen'
import SignupScreen from '../screens/auth/SignupScreen'
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';






export default class RootNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

render () {
  return (
<View><Text>Root Nav</Text></View>

  );
}
}