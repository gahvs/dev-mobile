import * as FileSystem from 'expo-file-system';

export async function savePhoto(photoUri) {
  try {
    const { uri } = await FileSystem.downloadAsync(photoUri, FileSystem.documentDirectory + 'photo.jpg');
    console.log('Photo saved:', uri);
    return uri;
  } catch (error) {
    console.error('Error saving photo:', error);
    return null;
  }
}
