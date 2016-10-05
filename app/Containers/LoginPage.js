import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Button from 'react-native-button';

export default class LoginPage extends Component {

  handleBtnPress() {
    const { navigator } = this.props;
    navigator.push({
        id: 'MainPage',
    });
  }
  
  render() {
    return (
      <Button
        containerStyle={styles.buttonContainer}
        style={styles.button}
        onPress={() => this.handleBtnPress()}>
        Sign in with Facebook
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer:{
    padding:10, 
    height:45, 
    overflow:'hidden',
    backgroundColor: '#3b5998',
    marginTop:20
  },
  button:{
    fontSize: 11, 
    color: 'white'
  }
});