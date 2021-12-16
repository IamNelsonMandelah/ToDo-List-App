// import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import AddTodo from './Components/addtodo';

export default function App() {
  const [todo, setTodo]=useState([
    {text:"Daily Text", id :"1"},
    {text:"Coding Execises", id :"2"},
    {text:"Start working On Projext", id :"3"},
    {text:"Tutorial class", id :"4"},
    {text:"Arabic Tuts", id :"5"}
  ])
  // the pressHandler function hs to be here because the state resides in this component
  const pressHandler =(id)=>{
    setTodo((prevtodo)=>{
      return prevtodo.filter(todo=>todo.id !=id);
    })
    // submit new to do list function
    const submitHandler=(input)=>{
      setTodo((prevtodo)=>{
        return [
          {text:input, id:Math.random().toString()},//new todo list befor the array of prev todos
          ...prevtodo //previous todo after new todo list
        ]
      });

    }
    
          //new todo list being parsed into the  array, as well as its id being converted to string
         // the previous todos also being displayed in the list
     

  }
  return (
    <View style={styles.container}>
      {/* Header component goes in here */}
      <Header/>
     <View style={styles.content}>
     <AddTodo submitHandler={submitHandler}/>
       
         <View style= {styles.list}>
            {/* This is to introduce the Todo list on the content */}
           <FlatList 
             keyExtractor={(item)=>item.id}
             data={todo}
             renderItem={({item})=>(
             //pressHandler must be passed to the todoItem
             <TodoItem item={item} pressHandler={pressHandler}/>
                )}
      
            />
          
       
          </View>
          
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
    marginTop:60

  },
  list:{
    marginTop:50,
    textAlign :"center",

  }

});
