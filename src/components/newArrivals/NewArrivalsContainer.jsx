import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import NewArrivalsView from './NewArrivalsView';
import { getNewProducts } from './actionCreators';

function NewArrivalsContainer({ getNewProducts, newProducts }) {
  useEffect(() => {
    getNewProducts();
  }, []);

  return <NewArrivalsView products={newProducts} />;
}

const mapStateToProps = (state) => {
  return { newProducts: Object.values(state.newProducts) };
};

const mapDispatchToProps = { getNewProducts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewArrivalsContainer);
