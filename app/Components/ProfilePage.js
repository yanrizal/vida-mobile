import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import styles from './Styles/profileStyle';
import { connect } from 'react-redux';

const data = [
  {title:'Graduation', date:'June 2011'},
  {title:'Started work', date:'July 2011'},
  {title:'Bought a car', date:'July 2011'},
  {title:'Marriage', date:'-'},
  {title:'Child', date:'-'},
]

class ProfilePage extends Component {

  render() {
    const { profile, message } = this.props
  	const rowsNode = data.map((item) => {
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
    console.log(profile.picture.data.url)
    return (
      <View>
      {message == 'fetch' &&<View style={styles.centerContainer}>
        <Image style={styles.loading} source={require('../Images/rolling.gif')} />
      </View>}
      {message == 'success' &&
      <View>
        <View style={styles.fbContainer}>
        	<Image style={styles.fbImage} source={{uri:profile.picture.data.url}}/>
          <View>
          	<Text style={[styles.rowLabel, {marginTop:0}]}>{profile.name}</Text>
            <Text style={[styles.rowLabel, {marginTop:-5}]}>Email: {profile.email}</Text>
          </View>
        </View>
        <View style={styles.mainContainer}>
        	<ScrollView style={styles.container}>
        	{rowsNode}
        	</ScrollView>
        </View>
      </View>
      }
      </View>
    );
  }
}


function mapStateToProps(state) {
  const { message, profile } = state.account
  return {
    message:message,
    profile:profile
  }
}

export default connect(mapStateToProps)(ProfilePage)

