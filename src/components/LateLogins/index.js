import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Title from '../ReusableComponents/Title';
import SummaryTile from '../ReusableComponents/summaryTile';
import styles from './styles';
import OuterBox from '../OuterBox';

const dummyLateData = [
  {
    name: 'Today',
    count: 0,
    hours: 0,
  },
  {
    name: 'This week',
    count: 0,
    hours: 2.6,
  },
  {
    name: 'This month',
    count: 0,
    hours: 11,
  },
];

const LateLogins = () => {
  return (
    <View>
      <Title title={'LateLogins'} />
      <OuterBox>
      <View style={[styles.container,{justifyContent:"space-between"}]}>
        {dummyLateData.map((item, index) => (
          <SummaryTile
            key={index}
            item={item}
            enableSepartor={index != dummyLateData.length - 1}
            rowReverse={true}
            isTimeTextEnable={true}
          />
        ))}
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",}}>

        <Text style={{width:40}}>View More</Text>
        <Icon name="chevron-right" size={24}/>
        </View>
      </View>
      </OuterBox>
    </View>
  );
};

export default LateLogins;
