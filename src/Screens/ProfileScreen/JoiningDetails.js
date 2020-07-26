import React from 'react'
import { View, Text } from 'react-native'
import {JoiningDetailsData} from '../../DummyData'
import {DynamicTileRender} from '../../components/DynamicTileRender'
import styles from './styles'

const JoiningDetails = () => {
    return (
        <View style={styles.PersonalInfoContainer}>
            {JoiningDetailsData.map((item,index)=><JoiningDetailsTile key={index} item={item} index={index}/>)}
           
        </View>
    )
}
const JoiningDetailsTile=({item,index})=>{
   let  isRightMrgnRequired= index%2==0
    return(
        <View style={{width:"48%",marginRight:isRightMrgnRequired?10:0}}> 
        {DynamicTileRender[item.type](item)}
    </View>
    )
}
export default JoiningDetails
