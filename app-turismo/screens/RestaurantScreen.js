import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';

const RestaurantScreen = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numPeople, setNumPeople] = useState('');

  const handleSearchRestaurants = () => {
    console.log('Buscando restaurantes:', {
      date: date,
      time: time,
      numPeople: numPeople,
    });
    setDate('');
    setTime('');
    setNumPeople('');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Input
          placeholder="Data"
          value={date}
          onChangeText={setDate}
          style={styles.input}
        />
        <Input
          placeholder="Hora"
          value={time}
          onChangeText={setTime}
          style={styles.input}
        />
        <Input
          placeholder="Número de pessoas"
          value={numPeople}
          onChangeText={setNumPeople}
          style={styles.input}
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Buscar restaurantes"
            onPress={handleSearchRestaurants}
            disabled={!date || !time || !numPeople}
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
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
  },
});

export default RestaurantScreen;
