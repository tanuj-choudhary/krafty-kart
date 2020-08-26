import React from 'react';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import NewArrivals from '../newArrivals/NewArrivals';
import ProductGallery from '../productGallery/ProductGallery';
import MostRatedItems from '../mostRatedItems/MostRatedItems';
import Footer from '../footer/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <NewArrivals />
      <ProductGallery />
      <MostRatedItems />
      <Footer />
    </div>
  );
}

export default Home;
