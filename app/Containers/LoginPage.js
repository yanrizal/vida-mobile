import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Navigator } from 'react-native';
import { LoginManager, LoginButton, AccessToken, 
  GraphRequest, GraphRequestManager, } from 'react-native-fbsdk';
import { getProfile, fetchProfile } from '../Actions'

class LoginPage extends Component {

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
          this.getInfoRequest();
        }
      )
    }
  }

  getInfoRequest(){
    const { dispatch } = this.props;
    dispatch(fetchProfile())
    const infoRequest = new GraphRequest(
      '/me?fields=id,first_name,last_name,name,picture.type(large),email,gender',
      null,
      function(error: ?Object, result: ?Object){
        if (error) {
          console.log(error)
        } else {
          console.log(result)
          dispatch(getProfile(result))
        }
      },
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  }

  componentDidMount(){
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        if(data.accessToken.toString() || null){
          this.handleBtnPress();
          this.getInfoRequest();
        }
      }
    ).catch((err) => {
      console.log(err)
    })
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

function mapStateToProps(state) {
  const { message, profile } = state.account
  return {
    message:message,
    profile:profile
  }
}

export default connect(mapStateToProps)(LoginPage)