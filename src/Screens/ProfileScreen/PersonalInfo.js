import React from 'react'
import { View, Text, } from 'react-native'

import {PersonalInfoData} from '../../DummyData'

import {DynamicTileRender} from '../../components/DynamicTileRender'
import styles from './styles'
const PersonalInfo = () => {
    return (
        <View style={styles.PersonalInfoContainer}>
            {PersonalInfoData.map((item,index)=><ProfileInfoTile key={index} item={item} index={index}/>)}
        </View>
    )
}


const ProfileInfoTile=({item,index})=>{
    let isRightMrgnRequired=index>0?PersonalInfoData[index-1]["type"]!="dropdown":false
    return(
        <View style={{width:item.type=="dropdown"?"48%":"100%",marginRight:isRightMrgnRequired?10:0}}> 
            {DynamicTileRender[item.type](item)}
        </View>
    )
}


export default PersonalInfo
