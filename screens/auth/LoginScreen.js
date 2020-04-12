import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class LoginScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onLoginPress = () => {

  }

  onCreateAccountPress = () => {
    this.props.navigation.navigate("SignupScreen")
  }

  onForgotPasswordPress = () => {
    this.props.navigation.navigate("ForgotPasswordScreen")
  }

render () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Log in screen</Text>

      <TextInput 
      style={styles.input}
      value={this.state.email}
      onChangeText={(text) => this.setState({ email: text}) }
      ></TextInput>

      <TextInput
        style={styles.input}
        value={this.state.password}
        onChangeText={(text) => this.setState({ password: text })}
      ></TextInput>
      <Button style={styles.loginButton} title='login' onPress={this.onLoginPress}/>
      <Button title='Create Account' onPress={this.onCreateAccountPress} />
      <Button title='Forgot Password?' onPress={this.onForgotPasswordPress} />

    </View> 
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
  text: {
    fontSize: 30
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 2
  },
  loginButton: {
    borderWidth: 2,
    backgroundColor: 'lightblue',
    height: 20
  }
});
