import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './style';

const UserTile = ({user}) => {
  let userFullName = user.name.first + ' ' + user.name.last;
  return (
    <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
      <Image
        source={{uri: user.picture.thumbnail}}
        style={styles.profileImage}
      />
      <View style={{marginLeft: 10}}>
        <Text>{userFullName}</Text>
        <Text>{user.cell}</Text>
      </View>
    </View>
  );
};

export default UserTile;
