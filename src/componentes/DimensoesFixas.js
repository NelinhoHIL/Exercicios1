import React from 'react'
import { View } from 'react-native'

export default props => {
    return (
        <View style={{width: '100%', height: '100%', 
         flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
            <View style={{flexShinrk: 0, flexBasis: 400, backgroundColor: 'powderblue'}} />
            <View style={{flexShinrk: 1, flexBasis: 400, backgroundColor: 'skyblue'}} />
            <View style={{flexShinrk: 0, flexBasis: 400, backgroundColor: 'steelblue'}} />
        </View>
    )
}
