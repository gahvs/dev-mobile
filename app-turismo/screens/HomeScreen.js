import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => {
  const navigateToTouristSpots = () => {
    navigation.navigate('TouristSpot');
  };

  const navigateToRestaurants = () => {
    navigation.navigate('Restaurant');
  };

  const navigateToHotels = () => {
    navigation.navigate('Hotel');
  };

  const navigateToEvents = () => {
    navigation.navigate('Event');
  };

  return (
    <View style={styles.screen}>
      <Header title="City Guide" />
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Tourist Spots" onPress={navigateToTouristSpots} />
        </View>
        <View style={styles.button
