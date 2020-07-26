import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderleftWidth:1,
    // borderLeftWidth:10,
    // borderRadius: 4,
    marginLeft: 10,
    backgroundColor:"#fff",
    padding: 10,

  },
  box: {
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    flex: 1,

    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  separtor: {
    borderRightColor: 'red',
    height: '100%',
  },
  button: {
    // padding: 10,
    // border: 1,
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
