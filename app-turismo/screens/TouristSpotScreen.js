import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { touristSpots } from '../data/touristSpots';

const TouristSpotScreen = () => {
  return (
    <View style={styles.screen}>
      <Header title="Tourist Spots" />
      <FlatList
        data={touristSpots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            image={item.image}
            description={item.description}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default TouristSpotScreen;
