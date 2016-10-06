import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

export default class LoginPage extends Component {

  handleBtnPress() {
    const { navigator } = this.props;
    navigator.push({
        id: 'MainPage',
    });
  }

  handleLoginFinished(error, result) {
    if (error) {
      alert("login has error: " + result.error);
    } else if (result.isCancelled) {
      alert("login is cancelled.");
    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          this.handleBtnPress();
          //alert(data.accessToken.toString())
        }
      )
    }
  }

  componentDidMount(){
    if(AccessToken){
      this.handleBtnPress()
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={(error, result) => {
            this.handleLoginFinished(error,result)
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});