import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';
import Map from '../components/Map';

const EventScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState(null);

  const handleSaveEvent = () => {
    console.log('Evento salvo:', {
      title: title,
      description: description,
      location: location,
    });
    setTitle('');
    setDescription('');
    setLocation(null);
  };

  const handlePickLocation = (pickedLocation) => {
    setLocation(pickedLocation);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Input
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <Input
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
          multiline={true}
          numberOfLines={4}
        />
        <Map
          location={location}
          style={styles.map}
          onLocationPicked={handlePickLocation}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Salvar"
            onPress={handleSaveEvent}
            disabled={!title || !description || !location}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  input: {
    width: '80%',
  },
  map: {
    marginVertical: 20,
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
  },
});

export default EventScreen;
