import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ ...styles.button, ...props.style }}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Button;
