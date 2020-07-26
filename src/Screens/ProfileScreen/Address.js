import React from 'react'
import { View, Text } from 'react-native'
import {AddressData} from '../../DummyData'
import {DynamicTileRender} from '../../components/DynamicTileRender'
import styles from './styles'

const Address = () => {
    return (
        <View style={styles.PersonalInfoContainer}>
            {AddressData.map((item,index)=><AddressTile key={index} item={item} index={index}/>)}
           {/* <TextComponent title="Present" item={"data":"King saudh District"}/> */}
        </View>
    )
}

const AddressTile=({item})=>{
    return (
     <View style={{width:"100%"}}> 
        {DynamicTileRender[item.type](item)}
    </View>
    )
}

export default Address
