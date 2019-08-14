export const removeFeature = item => {
  return {
    type: "REMOVE_FEATURE",
    payload: item
  };
};

export const buyItem = item => {
  // dipsatch an action here to add an item
  return {
    type: "BUY",
    payload: item
  };
};
