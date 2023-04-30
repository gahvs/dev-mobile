import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

const HomeScreen = ({ navigation }) => {
  const handleNavigate = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <ButtonComponent title="Ir para a tela de Detalhes" onPress={handleNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
