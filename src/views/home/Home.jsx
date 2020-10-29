// Third party imports
import React from 'react';

// Project imports
import Hero from '../hero';
import ProductGallery from "../productGallery";
import NewArrivals from '../../components/newArrivals';
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
