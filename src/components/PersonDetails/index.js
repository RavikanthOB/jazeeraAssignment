import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const PersonDetails = () => {
  return (
    <View style={styles.container}>
      <CircleTile />
      <DetailsTile />
    </View>
  );
};

const CircleTile = () => {
  return (
    <View style={styles.outerCircle}>
      <View style={styles.innerCircle}>
        <View style={styles.dateTimeContainer}>
          <Text >17-12-2019</Text>
          <Text >9:41 am</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={[styles.WhiteText,{ fontSize: 24}]}>Inactive</Text>
          <Text style={[styles.WhiteText,]}>Reach loaction</Text>
        </View>
      </View>
    </View>
  );
};

const DetailsTile = () => {
  return (
      <View style={styles.RightSideContainer}>
    <View style={styles.DetailsContainer}>
      <Text style={[styles.WhiteText,{fontSize:10}]}>
        you are 2.3kms away from
      </Text>
      <Text style={[styles.WhiteText]}>Jazeera Paints</Text>
      <Text style={[styles.WhiteText]}>Sumayra, Riyadh, SA,12361.</Text>
      <View style={{flexDirection:"row",alignItems:"center"}}> 
        <Icon name="home" color="#FBC02D"  size={24}/>
        <Text style={[styles.WhiteText,{fontSize:12,color:"#eee",marginLeft:10}]}>Pirmary Office Location</Text>
      </View>
    </View>
    <View style={{width:"100%",borderTopColor:"#eee",borderTopWidth:0.5,marginVertical:5}}/>

    <View style={styles.LocationButton}>
        <Text style={{marginRight:10}}>My Accessible location</Text>
        <Icon name="google-maps" color="#fff"  size={24}/>

    </View>
    </View>
  );
};
export default PersonDetails;
