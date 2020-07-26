import React from 'react';
import {View, Text} from 'react-native';
import ProfileScreenTitle from '../ProfileScreenTitle';

import styles from '../DateComponent/styles';
const TextComponent = ({item}) => {
  return (
    <View >
      <ProfileScreenTitle title={item.title} />
      <View style={styles.box}>
        <Text>{item.data}</Text>
      </View>
    </View>
  );
};

export default TextComponent;
