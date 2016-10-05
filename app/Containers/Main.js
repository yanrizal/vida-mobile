import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TabViewAnimated, TabViewPage, TabBarTop, TabBar } from 'react-native-tab-view';
import ProfilePage from '../Components/ProfilePage';
import CoveragePage from '../Components/CoveragePage';

export default class Main extends Component {
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
    return <TabBar style={styles.tabContainer} tabStyle={styles.tabs} {...props} />;
  };

  renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <ProfilePage />;
    case '2':
      return <CoveragePage />;
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabs: {
    backgroundColor:'rgb(81,189,138)',
    borderRadius:1
  },
  tabContainer: {
    marginTop:20,
    padding:10,
    backgroundColor:'white',
    borderRadius:5
  }
});