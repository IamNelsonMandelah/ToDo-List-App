import React,{useState} from 'react';
import {StyleSheet, TextInput, View,Button } from 'react-native';

export default function AddTodo({submitHandler}){
    const[input, setInput]=useState('')
    //changeHandler function keeps track of the text being typed
     const changeHandler=(val)=>{
         setInput(val)
     }

    return (
        <View>
            <TextInput
            sytle={styles.input}
            placeholder="Type here your new todo list"
            //onchangeText,prop, keeps track of the text Input field
            onChangeText={changeHandler}
            />
            {/* //adding a submit button */}
            <Button
            title="Add To do Item"
            // onPress={()=>console.log(input)} testing if the onpress is working where the output is displayed on
            // console terminal
            onpress={()=>submitHandler(input)}
            />
        </View>
    )

}
const styles= StyleSheet.create({
    input:{
        marginTop: 50,
        backgroundColor:'#EDEDEF',
        paddingVertical:5,
        paddingHorizontal:5,
        width:150,
        textAlign:'center'


        


    }
})