import React from 'react';

import Hero from '../hero/Hero';
import NewArrivals from '../newArrivals';
import ProductGallery from '../productGallery/ProductGallery';
import MostRatedItems from '../mostRatedItems';

function Home() {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <ProductGallery />
      <MostRatedItems />
    </div>
  );
}

export default Home;
