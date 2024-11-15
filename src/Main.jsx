import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import AboutScreen from './screns/AboutScreen';
import HomeScreen from './screns/HomeScreen';

const Stack = createNativeStackNavigator();

function Main() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = taskText => {
    setTasks([...tasks, taskText]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>

      {/* <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} /> */}
    </NavigationContainer>
  );
}

export default Main;
