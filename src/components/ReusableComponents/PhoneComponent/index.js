import React from 'react';
import {View, Text} from 'react-native';

import ProfileScreenTitle from '../ProfileScreenTitle';
import styles from '../DateComponent/styles';

const PhoneComponent = ({item}) => {
  return (
    <View>
      <ProfileScreenTitle title={item.title} />
      <View style={{flexDirection:"row"}}>

      <View style={{padding:10,borderWidth:1,borderColor:"#eee",maxWidth:80,backgroundColor:"#FBFBFB",}}>

      <Text>{item.data.countryCode}</Text>
      </View>
      <View style={{padding:10,borderWidth:1,borderColor:"#eee",marginLeft:10,width:"80%",backgroundColor:"#FBFBFB",}}>

      <Text>{item.data.phoneNUmber}</Text>
      </View>
      </View>
    </View>
  );
};

export default PhoneComponent;
