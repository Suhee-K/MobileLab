import React from 'react';
import {View} from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function Main() {
  return (
    <View>
      <ToDoList />
      <ToDoForm />
    </View>
  );
}

export default Main;
