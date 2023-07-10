import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'todo_app_tasks';

export const saveTask = async (task) => {
  try {
    const existingTasks = await getTasks();
    const updatedTasks = [...existingTasks, task];
    const serializedTasks = JSON.stringify(updatedTasks);
    await AsyncStorage.setItem(STORAGE_KEY, serializedTasks);
  } catch (error) {
    console.log('Error saving task:', error);
  }
};

export const getTasks = async () => {
  try {
    const tasks = await AsyncStorage.getItem(STORAGE_KEY);
    return tasks ? JSON.parse(tasks) : [];
  } catch (error) {
    console.log('Error retrieving tasks:', error);
    return [];
  }
};

export const updateTask = async (taskId, updatedTask) => {
  try {
    const existingTasks = await getTasks();
    const updatedTasks = existingTasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    const serializedTasks = JSON.stringify(updatedTasks);
    await AsyncStorage.setItem(STORAGE_KEY, serializedTasks);
  } catch (error) {
    console.log('Error updating task:', error);
  }
};

export const deleteTask = async (taskId) => {
  try {
    const existingTasks = await getTasks();
    const updatedTasks = existingTasks.filter((task) => task.id !== taskId);
    const serializedTasks = JSON.stringify(updatedTasks);
    await AsyncStorage.setItem(STORAGE_KEY, serializedTasks);
  } catch (error) {
    console.log('Error deleting task:', error);
  }
};
