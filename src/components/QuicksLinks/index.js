import React from 'react';
import {View, Text} from 'react-native';
import Title from '../ReusableComponents/Title';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import styles from './styles'
const dummyData = [
  {
    icon: 'newspaper-variant-multiple-outline',
    name: 'PaySlips',
  },
  {
    icon: 'note-outline',
    name: 'Request',
  },
  {
    icon: 'file-outline',
    name: 'Documents',
  },
  {
    icon: 'cash-usd-outline',
    name: 'Reimbursement',
  },
  {
    icon: 'tent',
    name: 'Vactions',
  },
  {
    icon: 'checkbox-blank-outline',
    name: 'Timesheet',
  },
];

const QuicksLinks = () => {
  return (
    <View>
      <Title title={'QuicksLinks'} />
      <View style={{flex:1,flexDirection:"row",flexWrap:"wrap"}} >

      {dummyData.map((item, index) => (
          <LinksTile key={index} item={item} />
          ))}
          </View>
    </View>
  );
};

const LinksTile = ({item}) => {
  const {name, icon} = item;
  return (
    <View  style={[styles.box,]}>

    <View style={[styles.innerBox,]}> 
      <Icon name={icon} size={60} color="#1565C0" />
      <Text style={{color: '#1565C0',fontSize:12}}>{name}</Text>
    </View>
   </View>
  );
};
export default QuicksLinks;
