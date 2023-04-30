import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import TouristSpotScreen from './screens/TouristSpotScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import HotelScreen from './screens/HotelScreen';
import EventScreen from './screens/EventScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TouristSpot" component={TouristSpotScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Hotel" component={HotelScreen} />
        <Stack.Screen name="Event" component={EventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
