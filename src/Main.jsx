import React, { useState } from 'react';
import { View } from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function Main() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <View>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </View>
  );
}

export default Main;
