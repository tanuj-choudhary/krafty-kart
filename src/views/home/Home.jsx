// Third party imports
import React from 'react';

// Project imports
import Hero from '../hero';
import NewArrivals from '../../components/newArrivals';
import ProductGallery from '../../components/productGallery/ProductGallery';
import MostRatedItems from '../../components/mostRatedItems';

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
