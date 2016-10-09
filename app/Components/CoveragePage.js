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
      <ScrollView style={styles.mainContainer}>
      	<Text style={[styles.rowLabel,{marginBottom:0,marginTop:0}]}>Premiums</Text>
      	<View style={styles.container}>
      	{rowsNode}
      	</View>
        <Text style={[styles.rowLabel,{marginBottom:0}]}>Life</Text>
        <View style={styles.container}>
        {rowsNode}
        </View>
        <Text style={[styles.rowLabel,{marginBottom:0}]}>Dependants</Text>
        <View style={styles.container}>
        {rowsNode}
        </View>
        <Text style={[styles.rowLabel,{marginBottom:0}]}>Health</Text>
        <View style={styles.container}>
        {rowsNode}
        </View>
        <Text style={[styles.rowLabel,{marginBottom:0}]}>General</Text>
        <View style={styles.container}>
        {rowsNode}
        </View>
      </ScrollView>
    );
  }
}

export default CoveragePage;



