import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import styles from'./styles'
import Title from '../ReusableComponents/Title';
import SingleSidedShadowBox from '../ReusableComponents/SingleSidedShadowBox'
import OuterBox from '../OuterBox';

const dummyData = [
  {
    name: 'casuals',
    count: 10,
  },
  {
    name: 'sick',
    count: 10,
  },
  {
    name: 'partinity',
    count: 10,
  },
];

const Separtor = () => {
  return <View style={styles.separtor} />;
};
const LeaveTile = ({item, enableSepartor}) => {
  const {name, count} = item;
  const borderStyle=enableSepartor?{
    borderRightWidth:0.5
  }:{}
  return (
    <View style={[styles.box,borderStyle]}>
      <Text style={{fontSize: 28}}>{count}</Text>
      <Text style={{color:"#1565C0",fontSize:14}}>{name}</Text>
    </View>
  );
};

const LeaveBalance = () => {
  return (

    <>
    <Title title={"Leave balance"}/>
    {/* <SingleSidedShadowBox style={{width: '90%', height:100}}> */}
    <OuterBox>
    <View style={styles.container}>
      {dummyData.map((item, index) => {
        return (
          <LeaveTile
            key={item.name + index}
            item={item}
            enableSepartor={index != dummyData.length-1}
          />
        );
      })}
      <View style={styles.button}>
        <Text>Apply</Text>
      </View>

    </View>
    </OuterBox>
    {/* </SingleSidedShadowBox> */}
    </>
  );
};
export default LeaveBalance;

