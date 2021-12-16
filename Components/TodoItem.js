import React from 'react';
import {StyleSheet, Text,TouchableOpacity} from 'react-native';

export default function TodoItem ({item, pressHandler}) {//item and function must be passesd in destructured form
    return (
        //passing also a touchable Opacity to the function
        <TouchableOpacity onPress={()=>pressHandler(item.id)}>
        <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>


    )
        
    
    
}
const styles= StyleSheet.create ({
    text :{
        padding:6,
        margin :10,
        backgroundColor :'#EDEDEF',
        borderStyle : 'dashed',
        borderWidth :1,
        borderRadius: 10

    }

})
        