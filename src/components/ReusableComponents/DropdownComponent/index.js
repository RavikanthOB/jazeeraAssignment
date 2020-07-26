import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ProfileScreenTitle from '../ProfileScreenTitle';
import styles from '../DateComponent/styles';

const DropdownComponet = ({item}) => {
    let firstElement=item.data[Object.keys(item.data)[0]] // taking 1st element of of object for displaying UI
  return (
    < View >
      <ProfileScreenTitle title={item.title} />
      <View style={[styles.box,{marginRight:10}]}>
        <Text>{firstElement}</Text>
        <Icon name="arrow-down-drop-circle" color={"#1565C0"} size={18}/>
      </View>
    </View>
  );
};

export default DropdownComponet;
