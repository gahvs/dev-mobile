import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.image} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    alignItems: 'center',
    height: '40%',
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Card;
