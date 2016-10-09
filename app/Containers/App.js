import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Navigator } from 'react-native';
import LoginPage from './LoginPage';
import Main from './Main';

class App extends Component {

  renderScene(route, navigator) {
    const { dispatch } = this.props
    switch (route.id) {
    case 'LoginPage':
      return (
          <LoginPage navigator={navigator} />
        );
    case 'MainPage':
      return (
          <Main navigator={navigator} />
        );
    default:
      return null;
    }
  }
  
  render() {
    return (
      <Navigator
            initialRoute={{id: 'LoginPage', name: 'Index'}}
            renderScene={this.renderScene.bind(this)}
            configureScene={(route) => {
        if (route.sceneConfig) {
          return route.sceneConfig;
        }
        return Navigator.SceneConfigs.HorizontalSwipeJump;
      }}/>
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

function mapStateToProps(state) {
  console.log(state);
  const { message, profile } = state.account
  return {
    message:message,
    profile:profile
  }
}

export default connect(mapStateToProps)(App)