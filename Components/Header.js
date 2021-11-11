import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'

function Header() {
    return (
       <View style={styles.header}>
           {/* //My ToDoList Header */}
           <Text style={styles.title}>To Do List App</Text>
       </View>
    )
}
const styles= StyleSheet.create({
    header:{
        height: 40,
        backgroundColor:'yellow',
        textAlign:'center'
    },

    title:{
        fontFamily:"Verdana",
        fontSize:16,
        fontColor:"#000",
        fontWeight:"Bold",

    }
})
export default Header
