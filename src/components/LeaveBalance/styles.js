import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:10,
    backgroundColor:"#fff",
    padding:10
  },
  box: {
    flex: 1,
    marginLeft:-10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  separtor: {
    borderRightColor: 'red',
    height: '100%',
  },
  button: {
    minWidth: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2B545',
    color: '#fff',
    borderRadius: 10,
    elevation: 10,
  },

});

export default styles;
