import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ProfilePage from './App/Components/ProfilePage'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabViewAnimated, TabViewPage, TabBarTop, TabBar } from 'react-native-tab-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class vida extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Profile' },
      { key: '2', title: 'Coverage' },
      { key: '3', title: 'Policies' },
    ],
  };

  handleChangeTab = (index) => {
    this.setState({ index });
  };

  renderHeader = (props) => {
    return <TabBar {...props} />;
  };

  renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <View style={[ styles.page, { backgroundColor: '#ff4081' } ]} />;
    case '2':
      return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]} />;
    case '3':
      return <View style={[ styles.page, { backgroundColor: '#FFF' } ]} />;
    default:
      return null;
    }
  };

  renderPage = (props) => {
    return <TabViewPage {...props} renderScene={this.renderScene} />;
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.renderPage}
        renderHeader={this.renderHeader}
        onRequestChangeTab={this.handleChangeTab}
      />
    );
  }
}

AppRegistry.registerComponent('vida', () => vida);
