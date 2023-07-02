import React from 'react';
import { StyleSheet, View } from 'react-native';
import CameraScreen from '../components/CameraScreen';
import SavePhotoButton from '../components/SavePhotoButton';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CameraScreen />
      <View style={styles.buttonContainer}>
        <SavePhotoButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
});
