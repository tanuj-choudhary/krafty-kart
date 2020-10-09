import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getMostRatedItems } from './actionCreator';
import MostRatedItemsView from './MostRatedItemsView';

function MostRatedItemsContainer({ getMostRatedItems, products }) {
  useEffect(() => {
    getMostRatedItems();
  }, []);

  return (
    <>
      <MostRatedItemsView products={products} />
    </>
  );
}

const mapStateToProps = (state) => {
  return { products: Object.values(state.mostRatedProducts) };
};

const mapDispatchToProps = { getMostRatedItems };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MostRatedItemsContainer);
