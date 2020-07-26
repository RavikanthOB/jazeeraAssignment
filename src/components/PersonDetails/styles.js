import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex:1,
    backgroundColor: '#101D26',
    flexDirection: 'row',
    alignItems:"center",
    padding: 10,
    paddingBottom:6
  },
  outerCircle: {
    width: 170,
    height: 170,
    borderRadius: 180,
    backgroundColor: '#101D26',
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 145,
    height: 145,
    borderRadius: 160,
    overflow: 'hidden',
  },
  dateTimeContainer: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusContainer: {
    backgroundColor: '#FBC02D',
    flex: 1,
    // justifyContent:"center",
    alignItems: 'center',
  },
  DetailsContainer: {
    // color:"#fff",
    // margin:10,
    // marginLeft:20,
    justifyContent: 'flex-end',
    paddingBottom: 4,
    // borderBottomWidth:0.5,
    // borderColor:"#EEE",
  },
  WhiteText: {
    color: '#fff',
  },

  RightSideContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent:"center",
    margin: 10,
    marginBottom:0,
    padding:10,
    paddingTop: 20,
    paddingRight:0
  },
  LocationButton: {
    flexDirection: 'row',
    backgroundColor: '#FBC02D',
    padding: 6,
    paddingHorizontal:12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;
