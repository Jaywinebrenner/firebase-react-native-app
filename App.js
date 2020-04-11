import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiKeys from './constants/ApiKeys'
import * as firebase from 'firebase'
import RootNavigation from './navigation/RootNavigation'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/auth/LoginScreen'
import SignupScreen from './screens/auth/SignupScreen'
import ForgotPasswordScreen from './screens/auth/ForgotPasswordScreen'
import HomeScreen from './screens/HomeScreen'

const AuthStack = createStackNavigator();
const RootStack = createStackNavigator();
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      isAuthenticationReady: false,
      isAuthenticated: false
    };

    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
  }

  render() {
    return (

      <NavigationContainer>
      {(this.isAuthenticated) ? (
        
          <AuthStack.Navigator>
            <AuthStack.Screen name='LoginScreen' component={LoginScreen} />
            <AuthStack.Screen name='SignupScreen' component={SignupScreen} />
            <AuthStack.Screen name='ForgotPasswordScreen'component={ForgotPasswordScreen}/>
          </AuthStack.Navigator>
        ) : (

           <RootStack.Navigator>
          <RootStack.Screen name='HomeScreen' component={HomeScreen} />
          </RootStack.Navigator>


        )
      }

            </NavigationContainer>
      


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
