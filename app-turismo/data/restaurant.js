const restaurantData = [
    {
      id: '1',
      name: 'Restaurante do João',
      type: 'Brasileiro',
      rating: 4.5,
      image: require('../assets/restaurant1.jpg'),
      location: {
        latitude: -23.5632532,
        longitude: -46.6547919,
        address: 'Rua da Comida, 123',
      },
      description:
        'Restaurante do João é um restaurante brasileiro com pratos deliciosos.',
    },
    {
      id: '2',
      name: 'Restaurante da Maria',
      type: 'Italiano',
      rating: 4.7,
      image: require('../assets/restaurant2.jpg'),
      location: {
        latitude: -23.5611349,
        longitude: -46.6561333,
        address: 'Rua da Comida, 456',
      },
      description:
        'Restaurante da Maria é um restaurante italiano com pratos deliciosos.',
    },
    {
      id: '3',
      name: 'Restaurante do José',
      type: 'Japonês',
      rating: 4.3,
      image: require('../assets/restaurant3.jpg'),
      location: {
        latitude: -23.5613683,
        longitude: -46.6577026,
        address: 'Rua da Comida, 789',
      },
      description:
        'Restaurante do José é um restaurante japonês com pratos deliciosos.',
    },
  ];
  
  export default restaurantData;
  