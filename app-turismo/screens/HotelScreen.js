import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';

const HotelScreen = () => {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [numAdults, setNumAdults] = useState('');
  const [numChildren, setNumChildren] = useState('');

  const handleSearchHotels = () => {
    console.log('Buscando hotéis:', {
      checkin: checkin,
      checkout: checkout,
      numAdults: numAdults,
      numChildren: numChildren,
    });
    setCheckin('');
    setCheckout('');
    setNumAdults('');
    setNumChildren('');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Input
          placeholder="Check-in"
          value={checkin}
          onChangeText={setCheckin}
          style={styles.input}
        />
        <Input
          placeholder="Check-out"
          value={checkout}
          onChangeText={setCheckout}
          style={styles.input}
        />
        <Input
          placeholder="Número de adultos"
          value={numAdults}
          onChangeText={setNumAdults}
          style={styles.input}
          keyboardType="numeric"
        />
        <Input
          placeholder="Número de crianças"
          value={numChildren}
          onChangeText={setNumChildren}
          style={styles.input}
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Buscar hotéis"
            onPress={handleSearchHotels}
            disabled={!checkin || !checkout || !numAdults}
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

export default HotelScreen;
