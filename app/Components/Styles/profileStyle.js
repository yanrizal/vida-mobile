import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centerContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  loading: {
    width: 30,
    height: 30,
    marginTop: 50
  },
  fbImage: {
    width: 100,
    height: 100,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'rgb(81,189,138)'
  },
  container: {
    flex: 1,
    paddingTop: 10,
    marginBottom: 10
  },
  mainContainer: {  	
    marginTop: 10,
  	backgroundColor: '#FFF'
  },
  fbContainer: {
    marginTop: 10,
    backgroundColor: '#FFF',
    flexDirection:'row'
  },
  cardTitle: {
    alignSelf: 'center',
    fontSize: 11,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000'
  },
  cardContainer: {
    backgroundColor: '#FFF',
    shadowRadius: 2,
  },
  image: {
  	borderWidth: 1,
  	borderColor: 'rgb(81,189,138)',
  	marginLeft:10
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  rowContainer: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#ccc',
    marginHorizontal: 10
  },
  rowLabelContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRightWidth: 0.5,
    borderColor: '#ccc',
  },
  rowLabel: {
    fontWeight: 'bold',
    fontSize: 12,
    marginVertical: 10,
    marginLeft: 10,
  },
  rowInfoContainer: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  rowInfo: {
    fontSize: 11,
    margin: 10
  }
});

export default styles;
