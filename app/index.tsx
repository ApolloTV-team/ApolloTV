import Hero from '@/features/hero';
import React from 'react';
import { View } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Hero
        title="Openheimer"
        image="https://www.themoviedb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg"
        ageRating="15+"
        genres={['Action', 'Drama', 'Thriller']}
        runtime={120}
        rating={7.5}
      />
    </View>
  );
};

export default HomeScreen;
