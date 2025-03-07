import React from 'react';
import Hero from '../components/Hero';
import SustainabilityStats from '../components/SustainabilityStats';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
  return (
    <>
      <Hero />
      <SustainabilityStats />
      <FeaturedProducts />
    </>
  );
};

export default Home;