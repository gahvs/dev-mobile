import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TaskList;
