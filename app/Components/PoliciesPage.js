import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ListView } from 'react-native';
import styles from './Styles/policiesStyle';
import Button from 'react-native-button';

class PoliciesPage extends Component {

  state = {
    data: [{img: '../Images/search.png', title: 'MyLifeChoice'}]
  }

  render() {
    const rowsNode = this.state.data.map((item) => {
      const img = item.img
      return (
      <View key={item.title} style={styles.row}>
        <Image source={require('../Images/search.png')} />
        <Text style={styles.label}>{item.title}</Text>
      </View>
      )
    })

    return (
      <View style={styles.bottomCont}>
        <View style={styles.container}>
          {rowsNode}
          <View style={styles.row}>
            <Text style={styles.label}>+</Text>
          </View>
        </View>
        <View style={{alignSelf:'center'}}>
          <Button
            containerStyle={{padding:10, backgroundColor:'rgb(81,189,138)',width:230,marginBottom:15}}
            style={{color:'white',fontSize:13}}
          >Enter policy details</Button> 
          <Button
            containerStyle={{padding:10, backgroundColor:'rgb(81,189,138)',width:230,marginBottom:20}}
            style={{color:'white',fontSize:13}}
          >Upload a file</Button> 
        </View>
      </View>
    );
  }
}

export default PoliciesPage;



