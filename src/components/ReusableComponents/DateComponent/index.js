import React from 'react'
import { View, Text } from 'react-native'
import  ProfileScreenTitle from '../ProfileScreenTitle'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles'
const DateComponent = ({item}) => {
    return (
        <View >
            <ProfileScreenTitle title={item.title}/>
            <View style={styles.box}>
                <Text>{item.data}</Text>
                <Icon name="calendar" color={"#1565C0"} size={24}/>
            </View>
        </View>
    )
}

export default DateComponent
