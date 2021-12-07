// import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './Components/Header';

export default function App() {
  const [todo, setTodo]=useState([
    {text:"Daily Text", key :"1"},
    {text:"Coding Execises", key :"2"},
    {text:"Start working On Projext", key :"3"},
    {text:"Tutorial class", key :"4"},
    {text:"Arabic Tuts", key :"5"}
    

  ])
  return (
    <View style={styles.container}>
      {/* Header component goes in here */}
      <Header/>
     <View style={styles.content}></View>
     <View style= {styles.list}>
       {/* This is to introduce the Todo list on the content */}
       <FlatList 
       data={todo}
       renderItem={({item})=>(
         <Text>{item.text}</Text>
       )}
      
       />
       
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    padding:40,

  },
  list:{
    marginTop:50,
    textAlign :"center",

  }

});
