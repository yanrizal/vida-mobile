import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import styles from './Styles/profileStyle';

const data = [
  {title:'Annual Premium', value:'$1,815'},
  {title:'Annual Premium2', value:'$1,815'}
]

class CoveragePage extends Component {

  render() {
  	const rowsNode = data.map((item) => {
  		console.log(item)
  		return (
	        <View key={item.title} style={styles.rowContainer}>
	          <View style={styles.rowLabelContainer}>
	            <Text style={styles.rowLabel}>{item.title}</Text>
	          </View>
	          <View style={styles.rowInfoContainer}>
	            <Text style={styles.rowInfo}>{item.value}</Text>
	          </View>
	        </View>
	    )
  	})

    return (
      <View style={styles.mainContainer}>
      	<Text style={styles.rowLabel}>Premiums</Text>
      	<ScrollView style={styles.container}>
      	{rowsNode}
      	</ScrollView>
      </View>
    );
  }
}

export default CoveragePage;



