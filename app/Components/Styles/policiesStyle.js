import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    marginTop: 10,
    backgroundColor: '#FFF',
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
  },
  bottomCont:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  },
  row: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 3,
    borderWidth:0.5,
    borderColor:'rgb(81,189,138)'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#666',
    textAlign: 'center',
    marginBottom: 3
  },
  label: {
    alignSelf: 'center',
    color: '#888',
    textAlign: 'center'
  },
  listContent: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default styles;
