import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header () {
    return (
        
            <View style={styles.header}>
             {/* //My ToDoList Header */}
              <Text style={styles.title}>To Do List App</Text>
           </View>

        
       
    )
}
const styles= StyleSheet.create({
    
    header:{
        height: 100,
        paddingTop:50,
        backgroundColor:'yellow',
        width: 350,
        position: 'relative',
         top:100,
         marginTop: 20, 
         marginBottom:30
         
        
        
    },

    title:{
        fontFamily:"",
        fontSize:16,
        color:"#000",
        fontWeight:"bold",
        textAlign: 'center',
        textAlignVertical:"center",
       
        

    }
    
})

