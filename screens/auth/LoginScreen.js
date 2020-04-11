import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class LoginScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {};
  
  }

render () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Log in screen</Text>
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
  }
});
