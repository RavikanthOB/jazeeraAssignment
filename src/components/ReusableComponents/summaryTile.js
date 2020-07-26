import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const SummaryTile = ({item,enableSepartor,rowReverse,isTimeTextEnable}) => {
    const {name, count,hours} = item;
    const borderStyle=enableSepartor?{
      borderRightWidth:0.5
    }:{}
    const col={flexDirection:rowReverse?"column-reverse":"column"}
    return (
      <View style={[styles.box,borderStyle,col]}>
        {isTimeTextEnable?<Text style={{fontSize:10,color:"#aaa"}}>{hours} hrs</Text>:null}
        <Text style={{fontSize: 28,color:"#000"}}>{count}</Text>
        <Text style={{color:"#1565C0",fontSize:14}}>{name}</Text>
      </View>
    );
}

export default SummaryTile
