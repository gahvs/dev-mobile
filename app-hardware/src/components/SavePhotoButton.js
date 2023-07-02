import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { savePhoto } from '../utils/FileStorage';

export default function SavePhotoButton({ photoUri }) {
  const handleSavePhoto = async () => {
    try {
      const savedPhotoUri = await savePhoto(photoUri);
      // Aqui você pode fazer algo com o URI da foto salva, como exibir na tela ou enviá-lo para um servidor
      console.log('Photo saved:', savedPhotoUri);
    } catch (error) {
      console.error('Error saving photo:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleSavePhoto}>
      <Text style={styles.buttonText}>Save Photo</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
});
