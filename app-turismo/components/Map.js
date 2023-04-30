import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = (props) => {
  const { location } = props;

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={location.title}
          />
        </MapView>
      ) : (
        <Text style={styles.message}>Localização não encontrada.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default Map;
