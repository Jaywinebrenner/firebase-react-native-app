import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class ForgotPasswordScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      email: '',

    };
  
  }

  onResetPasswordPress = () => {

  }

render () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forgot Password</Text>

      <TextInput
        style={styles.input}
        value={this.state.email}
        onChangeText={(text) => this.setState({ email: text })}
      ></TextInput>

      <Button style={styles.resetPasswordButton} title='Reset Password' onPress={this.onResetPasswordPress} />


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
});
