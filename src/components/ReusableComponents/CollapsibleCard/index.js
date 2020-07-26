import React ,{useState} from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CollapsibleCard = (props) => {
    const [isVisble,toggle]=useState(true)
    return (
        <View>
            <TitleWithIcons toggle={toggle} title={props.title} isVisble={isVisble} icon={props.icon}/>
            {isVisble?props.children:null}

        </View>
    )
}

const TitleWithIcons=({icon,title,isVisble,toggle})=>{
    return (
        <TouchableOpacity  onPress={()=>toggle(!isVisble)} style={{marginTop:10, flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}> 
            <View style={{width:40,height:40,borderRadius:60,backgroundColor:"#E2B545",justifyContent:"center",alignItems:"center"}}>
            <Icon name={icon} color="#fff" size={24}/>
            </View>
            <Text>{title}</Text>
            <TouchableOpacity  onPress={()=>toggle(!isVisble)}>

            <Icon name={isVisble?"arrow-up-drop-circle":"arrow-down-drop-circle"} color="#1565C0" size={24}  />
            </TouchableOpacity>

        </TouchableOpacity>
    )
}

export default CollapsibleCard
