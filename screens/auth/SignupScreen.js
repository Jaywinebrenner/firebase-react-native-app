import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class SignupScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
    };
  }

  onSignupPress = () => {

  }



render () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up screen</Text>

      <TextInput
        style={styles.input}
        value={this.state.email}
        onChangeText={(text) => this.setState({ email: text })}
      ></TextInput>

      <TextInput
        style={styles.input}
        value={this.state.password}
        onChangeText={(text) => this.setState({ password: text })}
      ></TextInput>

      <TextInput
        style={styles.input}
        value={this.state.passwordConfirm}
        onChangeText={(text) => this.setState({ passwordConfirm: text })}
      ></TextInput>

      <Button title='Signup' onPress={this.onSignupPress} />


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
