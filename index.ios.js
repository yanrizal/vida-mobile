/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class vida extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.cell}>Menu</Text>
          <Text style={styles.cell}>
            Personal Details
          </Text>
          <Text style={styles.cell}>Plus</Text>      
        </View>
        <View style={styles.body}>
          <Text>Name</Text>
          <Text>Ted Chua</Text>
        </View>
        <View style={styles.body}>
          <Text>Date of birth</Text>
          <Text>2 July 1987</Text>
        </View>
        <View style={styles.body}>
          <Text>Gender</Text>
          <Text>Male</Text>
        </View>
        <View style={styles.body}>
          <Text>Smoking</Text>
          <Text>No</Text>
        </View>
        <View style={styles.body}>
          <Text>Drinking</Text>
          <Text>1-2 times/wk</Text>
        </View>
        <View style={styles.body}>
          <Text>Medical history</Text>
          <Text>-</Text>
        </View>
        <View style={styles.body}>
          <Text>Latest medical report</Text>
          <Text>2015</Text>
        </View>
        <View style={styles.body}>
          <Text>Fitness trackers</Text>
          <Text>FitBit</Text>
        </View>
        <View style={styles.body}>
          <Text>Dependants</Text>
          <Text>...</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    height:50,
    padding:10
  },
  body:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:20
  },
  cell:{
    
  }
});

AppRegistry.registerComponent('vida', () => vida);
