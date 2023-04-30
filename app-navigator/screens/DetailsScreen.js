import React from 'react';
import { View, Text, Image } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Image
        source={{
          uri: 'https://picsum.photos/200/300',
        }}
        style={{ width: 200, height: 300 }}
      />
    </View>
  );
}
