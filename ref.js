import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiKeys from './constants/ApiKeys'
import * as firebase from 'firebase'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/auth/LoginScreen'
import SignupScreen from './screens/auth/SignupScreen'
import ForgotPasswordScreen from './screens/auth/ForgotPasswordScreen'
import HomeScreen from './screens/HomeScreen'
import RootNavigation from './navigation/RootNavigation'
import AuthNavigation from './navigation/AuthNavigation'


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoadingComplete: false,
            isAuthenticationReady: false,
            isAuthenticated: false
        };


        if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
    }

    onAuthStateChanged = (user) => {
        this.setState({ isAuthenticationReady: true });
        this.setState({ isAuthenticated: !!user });
    }


    render() {
        if ((!this.state.isLoadingComplete || !this.state.isAuthenticationReady) && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                    {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
                    {(this.state.isAuthenticated) ? <MainTabNavigator /> : <RootNavigation />}
                </View>
            );
        }
    }

    return(
      
      <NavigationContainer>

{
    this.state.isAuthenticated ? (
        <RootNavigation />
    ) : (
            <AuthNavigation />
        )
}

        </NavigationContainer >
      


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
