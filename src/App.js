import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { connect } from "react-redux";
import { buyItem, removeFeature } from "./auctions/index";

const App = ({ buyItem, removeFeature, store, car, additionalPrice }) => {
  const deleteFeature = item => {
    removeFeature(item);
  };
  const buyIt = item => {
    buyItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  };
};

export default connect(
  mapStateToProps,
  { buyItem, removeFeature }
)(App);
