import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text} from 'react-native';

function ToDoList({tasks}) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index} style={styles.task}>
          <Text style={styles.taskText}>{task}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
