import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import styles from './Styles/profileStyle';

const data = [
  {title:'Graduation', date:'June 2011'},
  {title:'Started work', date:'July 2011'}
]

class ProfilePage extends Component {

  render() {
  	const rowsNode = data.map((item) => {
  		console.log(item)
  		return (
	        <View key={item.title} style={styles.rowContainer}>
	          <View style={styles.rowLabelContainer}>
	            <Text style={styles.rowLabel}>{item.title}</Text>
	          </View>
	          <View style={styles.rowInfoContainer}>
	            <Text style={styles.rowInfo}>{item.date}</Text>
	          </View>
	        </View>
	    )
  	})

    return (
      <View style={styles.mainContainer}>
      	<Image style={styles.image} source={require('../Images/search.png')} />
      	<Text style={styles.rowLabel}>Name, Phone, Email</Text>
      	<ScrollView style={styles.container}>
      	{rowsNode}
      	</ScrollView>
      </View>
    );
  }
}

export default ProfilePage;



