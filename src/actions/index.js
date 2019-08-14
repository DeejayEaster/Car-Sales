// export const REMOVE_ITEM = "REMOVE_ITEM";
// export const BUY = "BUY";

export const removeFeature = item => {
  //   console.log(item);
  return {
    type: "REMOVE_FEATURE",
    payload: item
  };
};

export const buyItem = item => {
  // console.log(item);
  return {
    type: "BUY",
    payload: item
  };
};
