import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from '../screens/auth/LoginScreen'
import SignupScreen from '../screens/auth/SignupScreen'
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen'


const AuthStack = createStackNavigator();



export default class AuthNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <NavigationContainer >
            <AuthStack.Navigator>
                <AuthStack.Screen name='LoginScreen' component={LoginScreen} />
                <AuthStack.Screen name='SignupScreen' component={SignupScreen} />
                <AuthStack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
            </AuthStack.Navigator>
</NavigationContainer >
        );
    }
}