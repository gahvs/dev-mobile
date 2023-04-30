const hotelData = [
    {
      id: '1',
      name: 'Hotel A',
      rating: 4.5,
      image: require('../assets/hotel1.jpg'),
      location: {
        latitude: -23.5632532,
        longitude: -46.6547919,
        address: 'Rua do Hotel, 123',
      },
      description:
        'Hotel A é um hotel com quartos confortáveis e serviços de qualidade.',
    },
    {
      id: '2',
      name: 'Hotel B',
      rating: 4.7,
      image: require('../assets/hotel2.jpg'),
      location: {
        latitude: -23.5611349,
        longitude: -46.6561333,
        address: 'Rua do Hotel, 456',
      },
      description:
        'Hotel B é um hotel com quartos confortáveis e serviços de qualidade.',
    },
    {
      id: '3',
      name: 'Hotel C',
      rating: 4.3,
      image: require('../assets/hotel3.jpg'),
      location: {
        latitude: -23.5613683,
        longitude: -46.6577026,
        address: 'Rua do Hotel, 789',
      },
      description:
        'Hotel C é um hotel com quartos confortáveis e serviços de qualidade.',
    },
  ];
  
  export default hotelData;
  