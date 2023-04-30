import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const TextInputComponent = ({ placeholder }) => {
  const [text, setText] = useState('');

  const handleChangeText = (value) => {
    setText(value);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={handleChangeText}
      value={text}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default TextInputComponent;
