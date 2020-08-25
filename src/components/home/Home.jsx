import React from 'react';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import NewArrivals from '../newArrivals/NewArrivals';
import ProductGallery from '../productGallery/ProductGallery';

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <NewArrivals />
      <ProductGallery />
    </div>
  );
}

export default Home;
