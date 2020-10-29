// Third party imports
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Project imports
import NewArrivalsView from './NewArrivalsView';
import { getNewProducts } from './actionCreators';

function NewArrivalsContainer({ getProducts, newProducts }) {
  useEffect(() => {
    getProducts();
  }, []);

  return <NewArrivalsView products={newProducts} />;
}

const mapStateToProps = (state) => {
  return { newProducts: Object.values(state.newProducts) };
};

const mapDispatchToProps = { getProducts:getNewProducts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewArrivalsContainer);
