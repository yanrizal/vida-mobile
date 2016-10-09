import React, { Component } from 'react';
import { StyleSheet, View, TabBarIOS, Text } from 'react-native';
import { connect } from 'react-redux';
import { TabViewAnimated, TabViewPage, TabBarTop, TabBar } from 'react-native-tab-view';
import ProfilePage from '../Components/ProfilePage';
import CoveragePage from '../Components/CoveragePage';
import PoliciesPage from '../Components/PoliciesPage';

class Main extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Profile' },
      { key: '2', title: 'Coverage' },
      { key: '3', title: 'Policies' },
    ],
    selectedTab: 'you',
    notifCount: 0,
    presses: 0,
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
      return <PoliciesPage />;
    default:
      return null;
    }
  };

  renderPage = (props) => {
    return (
      <TabViewPage {...props} renderScene={this.renderScene} />

    );
  };

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="black"
        tintColor="#CCC"
        barTintColor="white">
        <TabBarIOS.Item
          icon={require('../Images/Contacts-32.png')}
          title="You"
          selected={this.state.selectedTab === 'you'}
          onPress={() => {
            this.setState({
              selectedTab: 'you',
            });
          }}>
          <TabViewAnimated
            style={styles.container}
            navigationState={this.state}
            renderScene={this.renderPage}
            renderHeader={this.renderHeader}
            onRequestChangeTab={this.handleChangeTab}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('../Images/cart-32.png')}
          title="Purchase"
          selected={this.state.selectedTab === 'cart'}
          onPress={() => {
            this.setState({
              selectedTab: 'cart',
            });
          }}>
          <Text style={{marginTop:50}}></Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('../Images/Help-32.png')}
           title="Consult"
          selected={this.state.selectedTab === 'consult'}
          onPress={() => {
            this.setState({
              selectedTab: 'consult',
            });
          }}>
          <Text style={{marginTop:50}}></Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('../Images/User-32.png')}
           title="Share"
          selected={this.state.selectedTab === 'share'}
          onPress={() => {
            this.setState({
              selectedTab: 'share',
            });
          }}>
          <Text style={{marginTop:50}}></Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === 'more'}
          onPress={() => {
            this.setState({
              selectedTab: 'more',
            });
          }}>
          <Text style={{marginTop:50}}></Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

function mapStateToProps(state) {
  const { message, profile } = state.account
  return {
    message:message,
    profile:profile
  }
}

export default connect(mapStateToProps)(Main)