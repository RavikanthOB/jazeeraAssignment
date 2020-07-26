import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  box: {

    margin: 10,

    backgroundColor: "#FBC02D",
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
  },
  innerBox:{
    minWidth: 100,
    flex: 1,
    minHeight: 100,
    marginLeft: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    

    backgroundColor: 'white',
  }
// marginRight:-10
});

export default styles;
