import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const OuterBox = (props) => {
    return (
        <View style={styles.BoxContainer}>
            {props.children}
        </View>
    )
}

export default OuterBox
