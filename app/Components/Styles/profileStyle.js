import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 10
    },
  mainContainer: {
	flex: 1,
	marginTop: 10,
	backgroundColor: '#FFF'
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
    borderColor: '#CCC',
    borderWidth: 0.5,
    marginHorizontal: 10
  },
  rowLabelContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#CCC'
  },
  rowLabel: {
    fontWeight: 'bold',
    fontSize: 12,
    marginVertical: 10,
    marginLeft: 10
  },
  rowInfoContainer: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#CCC'
  },
  rowInfo: {
    fontSize: 11,
    margin: 10
  }
});

export default styles;
